import { useState, useRef, useEffect } from "react";
import ZoomableImage from "../ZoomableImage/ZoomableImage";
import styles from "./ImageComparisonSlider.module.css";

interface ImageComparisonSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  /** Starting position as a percentage (0–100). Defaults to 50. */
  initialPosition?: number;
}

export default function ImageComparisonSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  initialPosition = 50,
}: ImageComparisonSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function toPercent(clientX: number): number {
    const el = containerRef.current;
    if (!el) return position;
    const { left, width } = el.getBoundingClientRect();
    return Math.max(0, Math.min(((clientX - left) / width) * 100, 100));
  }

  // Drag starts on the handle only — images receive clicks freely
  function handleMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    dragging.current = true;
    setPosition(toPercent(e.clientX));
  }

  function handleTouchStart(e: React.TouchEvent) {
    dragging.current = true;
    setPosition(toPercent(e.touches[0].clientX));
  }

  // Keyboard control on the handle (1% per keystroke, 10% with shift)
  function handleKeyDown(e: React.KeyboardEvent) {
    const step = e.shiftKey ? 10 : 1;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, Math.round(p) - step));
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, Math.round(p) + step));
    }
  }

  // Window-level listeners track the drag even when the cursor leaves the container
  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (dragging.current) setPosition(toPercent(e.clientX));
    }
    function onMouseUp() {
      dragging.current = false;
    }
    function onTouchMove(e: TouchEvent) {
      if (!dragging.current) return;
      e.preventDefault();
      setPosition(toPercent(e.touches[0].clientX));
    }
    function onTouchEnd() {
      dragging.current = false;
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Bottom image — always full size (After / Wix Studio) */}
      <ZoomableImage
        src={afterSrc}
        alt={afterAlt}
        className={styles.sliderImage}
        draggable={false}
      />

      {/* Top image — same size, clipped from the right (Before / Editor X).
          clip-path prevents pointer events in the invisible area, so clicking
          the right side naturally reaches the After image underneath. */}
      <ZoomableImage
        src={beforeSrc}
        alt={beforeAlt}
        className={styles.sliderImage}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Handle — the only drag initiator; images beneath are click-through */}
      <div
        className={styles.handle}
        style={{ left: `${position}%` }}
        role="slider"
        tabIndex={0}
        aria-label="Image comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onKeyDown={handleKeyDown}
      >
        <span className={styles.dragLabel} aria-hidden="true">
          Drag
        </span>
      </div>
    </div>
  );
}
