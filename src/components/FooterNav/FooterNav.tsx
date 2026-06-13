import { Link } from "react-router-dom";
import styles from "./FooterNav.module.css";

interface FooterNavProps {
  nextLabel: string;
  nextTitle: string;
  nextLink: string;
}

export default function FooterNav({ nextLabel, nextTitle, nextLink }: FooterNavProps) {
  return (
    <div className={styles.footer}>
      {/* Empty structural cell — maintains grid-line continuity */}
      <div className={styles.emptyCell} aria-hidden="true" />

      {/* Navigation cell — entire cell is the link */}
      <Link to={nextLink} className={styles.nextCell}>
        <span className={styles.cellLabel}>{nextLabel}</span>
        <span className={styles.cellTitle}>{nextTitle} →</span>
      </Link>

      {/* Back to top — entire cell is the button */}
      <button
        type="button"
        className={styles.backToTopCell}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll back to top"
      >
        <span className={styles.topArrow} aria-hidden="true">↑</span>
        <span className={styles.topLabel}>Back to Top</span>
      </button>
    </div>
  );
}
