import InteractiveAvatar from "../components/InteractiveAvatar/InteractiveAvatar";
import ProjectCard, { Project } from "../components/ProjectCard/ProjectCard";
import StickyHeader from "../components/StickyHeader/StickyHeader";
import styles from "./Home.module.css";

const PROJECTS: Project[] = [
  {
    title: "From Chaos to Order",
    description: "Building a Design System in Editor X",
    background: "var(--color-project-lime)",
    color: "var(--color-text)",
    href: "/projects/from-chaos-to-order",
  },
  {
    title: "From Waiting to Engagement",
    description: "Improving the Loading Experience",
    background: "var(--color-project-green)",
    color: "var(--color-surface)",
    href: "/projects/from-waiting-to-engagement",
  },
  {
    title: "From EditorX to Wix Studio",
    description: "System redesign for efficiency",
    background: "var(--color-project-forest)",
    color: "var(--color-surface)",
    href: "/projects/from-editorx-to-wix-studio",
  },
];

/**
 * Number of empty grid cells on desktop (4 cols x 6 rows minus the 9 cells
 * covered by content). They auto-place into the unnamed "." areas, painting
 * the white cells that make the grid lines run to the screen edges.
 */
const SPACER_COUNT = 12;

export default function Home() {
  return (
    <>
      <StickyHeader isHome />
      <main className={styles.grid}>
      {/* Central cell: header + about share it on desktop */}
      <section className={styles.intro}>
        <header>
          {/* Avatar + name sit side-by-side; avatar is mobile-only */}
          <div className={styles.heroLockup}>
            <h1 className={styles.heroName}>Dolev Brosh</h1>
            <div className={styles.mobileAvatar}>
              <InteractiveAvatar />
            </div>
          </div>
          <p className={styles.heroSubtitle}>A Product Designer Journey</p>
        </header>
        <p className={styles.aboutText}>
          I'm a product designer based in Tel Aviv, Israel with experience in
          delivering end-to-end UX/UI design for software products. Constantly
          looking to learn new things everyday.
        </p>
      </section>

      {/* Right column: email above LinkedIn */}
      <a
        className={`${styles.contact} ${styles.email}`}
        href="mailto:dolevbrosh@gmail.com"
        aria-label="Send me an email"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="1" />
          <path d="m2 4 10 8L22 4" />
          <path d="m2 20 7.5-7M22 20l-7.5-7" />
        </svg>
      </a>

      <a
        className={`${styles.contact} ${styles.linkedin}`}
        href="https://www.linkedin.com/in/dolevbrosh"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.06h4.56V23H.22V8.06zm7.31 0h4.37v2.04h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v8.27h-4.55v-7.33c0-1.75-.03-4-2.44-4-2.44 0-2.81 1.9-2.81 3.87V23H7.53V8.06z" />
        </svg>
      </a>

      {/* Large avatar (desktop) */}
      <section className={styles.avatarArea} aria-label="Dolev Brosh">
        <InteractiveAvatar />
      </section>

      {/* Projects */}
      <section className={styles.projects} aria-label="Projects">
        <h2 className={styles.projectsLabel}>Check out my projects:</h2>
        <div className={styles.projectsRow}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Empty cells completing the infinite grid (desktop only) */}
      {Array.from({ length: SPACER_COUNT }, (_, i) => (
        <div key={i} className={styles.spacer} aria-hidden="true" />
      ))}
    </main>
    </>
  );
}
