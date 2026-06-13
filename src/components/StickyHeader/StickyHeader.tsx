import { Link } from "react-router-dom";
import styles from "./StickyHeader.module.css";

interface StickyHeaderProps {
  isHome?: boolean;
}

export default function StickyHeader({ isHome = false }: StickyHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.gutter} aria-hidden="true" />
        <div className={styles.center}>
          {!isHome && (
            <Link to="/" className={styles.homeLink} aria-label="Back to home">
              <span className={styles.backLabel}>← Back to Home</span>
            </Link>
          )}
        </div>
        <div className={styles.gutter} aria-hidden="true" />
      </div>
    </header>
  );
}
