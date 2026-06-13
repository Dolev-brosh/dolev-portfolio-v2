import { useEffect, useRef, useState } from "react";
import styles from "./InteractiveAvatar.module.css";

const FACTS = [
  "Hi, I'm Dolev.",
  "I craft end-to-end UX/UI experiences.",
  "Previously designed at Wix and Monday.com.",
  "Currently work at Paragon",
  "I also code in React & TypeScript.",
  "When I'm not designing, I'm probably doing calisthenics.",
];

interface InteractiveAvatarProps {
  bubblePosition?: "top-center" | "bottom-left";
}

export default function InteractiveAvatar({
  bubblePosition = "top-center",
}: InteractiveAvatarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [factIndex, setFactIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setFactIndex((prev) => (prev + 1) % FACTS.length);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [isOpen]);

  const positionClass =
    bubblePosition === "bottom-left" ? styles.bottomLeft : styles.topCenter;

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Learn a fun fact about Dolev"
      aria-expanded={isOpen}
    >
      {isOpen && (
        <div
          className={`${styles.bubble} ${positionClass}`}
          role="status"
          aria-live="polite"
        >
          {FACTS[factIndex]}
        </div>
      )}
      <img
        src="./lib/DolevFace.png"
        alt="Dolev Brosh"
        className={styles.face}
      />
    </div>
  );
}
