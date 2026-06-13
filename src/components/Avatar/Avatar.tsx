import { useState } from "react";
import AvatarFace from "./AvatarFace";
import styles from "./Avatar.module.css";

interface AvatarProps {
  facts: string[];
  /** "compact" renders a small face with the bubble to its side (mobile header) */
  variant?: "default" | "compact";
}

/**
 * Interactive avatar easter egg: each click reveals the next fact
 * in a comic-style speech bubble, looping back to the start.
 */
export default function Avatar({ facts, variant = "default" }: AvatarProps) {
  const [factIndex, setFactIndex] = useState<number | null>(null);

  const handleClick = () => {
    setFactIndex((prev) => (prev === null ? 0 : (prev + 1) % facts.length));
  };

  const wrapperClass =
    variant === "compact"
      ? `${styles.wrapper} ${styles.compact}`
      : styles.wrapper;

  return (
    <div className={wrapperClass}>
      {factIndex !== null && (
        // key re-mounts the bubble so the pop animation replays per click
        <p key={factIndex} className={styles.bubble} role="status">
          {facts[factIndex]}
        </p>
      )}
      <button
        type="button"
        className={styles.face}
        onClick={handleClick}
        aria-label="Reveal a fact about Dolev"
      >
        <AvatarFace />
      </button>
    </div>
  );
}
