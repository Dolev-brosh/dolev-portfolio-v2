import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export interface Project {
  title: string;
  description: string;
  background: string;
  color: string;
  href: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={project.href}
      className={styles.card}
      style={{ backgroundColor: project.background, color: project.color }}
      aria-label={`View project: ${project.title}`}
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <svg
            className={styles.arrow}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </header>
        <p className={styles.description}>{project.description}</p>
      </div>
    </Link>
  );
}
