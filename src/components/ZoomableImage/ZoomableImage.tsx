import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ZoomableImage.module.css";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const pinchDist = (a: Touch, b: Touch) =>
  Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);

export default function ZoomableImage({
  src,
  alt,
  className,
  onClick: _onClick,
  ...rest
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isGesturing, setIsGesturing] = useState(false);
  const [tr, setTr] = useState({ scale: 1, x: 0, y: 0 });

  // Ref mirrors tr so touch handlers always see the latest values
  // without stale closures from the [isOpen] effect.
  const trRef = useRef(tr);

  // Gesture bookkeeping — all mutable, no re-renders needed mid-gesture
  const g = useRef({
    startDist: 0,
    startScale: 1,
    startOffset: { x: 0, y: 0 },
    startMid: { x: 0, y: 0 },
    startSingle: { x: 0, y: 0 },
  });

  const triggerRef = useRef<HTMLImageElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lightboxImgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  function applyTr(scale: number, x: number, y: number) {
    const next = { scale: clamp(scale, MIN_SCALE, MAX_SCALE), x, y };
    trRef.current = next;
    setTr(next);
  }

  function open() {
    setIsOpen(true);
    applyTr(1, 0, 0);
  }

  function close() {
    setIsOpen(false);
    applyTr(1, 0, 0);
    setTimeout(() => triggerRef.current?.focus(), 50);
  }

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  // Body scroll lock + initial focus
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Non-passive touch listeners — must be imperative to call preventDefault
  useEffect(() => {
    if (!isOpen) return;
    const el = lightboxImgRef.current;
    if (!el) return;

    function onTouchStart(e: TouchEvent) {
      setIsGesturing(true);
      const cur = trRef.current;
      if (e.touches.length === 2) {
        g.current = {
          startDist: pinchDist(e.touches[0], e.touches[1]),
          startScale: cur.scale,
          startOffset: { x: cur.x, y: cur.y },
          startMid: {
            x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
            y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
          },
          startSingle: g.current.startSingle,
        };
      } else if (e.touches.length === 1) {
        g.current.startSingle = {
          x: e.touches[0].clientX - cur.x,
          y: e.touches[0].clientY - cur.y,
        };
      }
    }

    function onTouchMove(e: TouchEvent) {
      e.preventDefault(); // block page scroll / native zoom while gesturing
      if (e.touches.length === 2) {
        const d = pinchDist(e.touches[0], e.touches[1]);
        const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const my = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        applyTr(
          g.current.startScale * (d / g.current.startDist),
          g.current.startOffset.x + mx - g.current.startMid.x,
          g.current.startOffset.y + my - g.current.startMid.y,
        );
      } else if (e.touches.length === 1 && trRef.current.scale > 1) {
        applyTr(
          trRef.current.scale,
          e.touches[0].clientX - g.current.startSingle.x,
          e.touches[0].clientY - g.current.startSingle.y,
        );
      }
    }

    function onTouchEnd(e: TouchEvent) {
      // Smooth 2→1 finger transition: reset single-finger anchor so
      // panning continues from wherever the remaining finger is.
      if (e.touches.length === 1) {
        const cur = trRef.current;
        g.current.startSingle = {
          x: e.touches[0].clientX - cur.x,
          y: e.touches[0].clientY - cur.y,
        };
      }
      if (e.touches.length === 0) {
        setIsGesturing(false);
        if (trRef.current.scale < MIN_SCALE) applyTr(1, 0, 0);
      }
    }

    function onTouchCancel() {
      setIsGesturing(false);
      applyTr(1, 0, 0);
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchCancel);
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchCancel);
    };
  }, [isOpen]);

  // Desktop: click the lightbox image to toggle 2× zoom
  function handleLightboxImgClick(e: React.MouseEvent) {
    e.stopPropagation();
    tr.scale > 1 ? applyTr(1, 0, 0) : applyTr(2, 0, 0);
  }

  return (
    <>
      <img
        {...rest}
        ref={triggerRef}
        src={src}
        alt={alt}
        className={[styles.trigger, className].filter(Boolean).join(" ")}
        onClick={open}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
          }
        }}
        tabIndex={0}
        role="button"
        aria-haspopup="dialog"
      />

      {isOpen &&
        createPortal(
          <div
            ref={overlayRef}
            className={styles.overlay}
            onClick={(e) => { if (e.target === overlayRef.current) close(); }}
            role="dialog"
            aria-modal="true"
            aria-label={`Full-screen view: ${alt}`}
          >
            <button
              ref={closeBtnRef}
              className={styles.closeBtn}
              onClick={close}
              aria-label="Close preview"
            >
              ✕
            </button>

            <img
              ref={lightboxImgRef}
              src={src}
              alt={alt}
              className={`${styles.lightboxImg}${tr.scale > 1 ? ` ${styles.zoomed}` : ""}`}
              style={{
                transform: `translate(${tr.x}px, ${tr.y}px) scale(${tr.scale})`,
                transition: isGesturing ? "none" : "transform 0.2s ease",
              }}
              onClick={handleLightboxImgClick}
              draggable={false}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
