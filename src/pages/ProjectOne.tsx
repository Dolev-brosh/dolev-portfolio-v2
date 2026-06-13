import FooterNav from "../components/FooterNav/FooterNav";
import StickyHeader from "../components/StickyHeader/StickyHeader";
import ZoomableImage from "../components/ZoomableImage/ZoomableImage";
import styles from "../styles/ProjectPage.module.css";

/**
 * Image paths — copy the originals from:
 *   Dolev - Portfolio/lib/
 * into:
 *   Dolev-Portfolio-2.0/public/images/project-one/
 * Vite serves everything in /public at the root URL.
 */
const IMG = {
  workspace: "/lib/editorX-workspace.png",
  navigation: "/lib/navigation.png",
  metadata:   "/lib/metadata.png",
  form:       "/lib/form.png",
  dolevPaint: "/lib/dolevpaint.png",
};

export default function ProjectOne() {
  return (
    <>
      <StickyHeader />
      <div className={styles.grid}>
      {/* ---- content row ---- */}
      <div className={styles.spacerMainL} aria-hidden="true" />

      <main className={styles.content}>

        {/* Project Header: title + metadata */}
        <section className={styles.projectHeader} aria-label="Project overview">
          <div className={styles.textWrapper}>
            <h1 className={styles.mainHeader}>From Chaos to Order</h1>
            <p className={styles.subHeader}>Building a Design System in Editor X</p>
          </div>
          <div className={styles.details}>
            {[
              { label: "Company", value: "Wix (Editor X)" },
              { label: "Year",    value: "2021" },
              { label: "My Role", value: "Design, Research" },
            ].map(({ label, value }) => (
              <div key={label} className={styles.dataTile}>
                <span className={styles.dataTileHeader}>{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Two-column: The Problem + My Role */}
        <div className={styles.projectDescription}>
          <div className={styles.descriptionSection}>
            <p className={styles.descriptionTitle}>The Problem</p>
            <p className={styles.descriptionText}>
              Editor X, a professional website-building platform within Wix, was
              rapidly developed as a startup initiative. Without a design
              infrastructure and while relying on Sketch, the team faced
              inconsistencies, inefficient collaboration with developers,
              duplicated work, and limited scalability.
            </p>
          </div>
          <div className={styles.descriptionSection}>
            <p className={styles.descriptionTitle}>My Role</p>
            <p className={styles.descriptionText}>
              My role included leading the transition from Sketch to Figma,
              building and maintaining the Editor X design system, and managing
              the component library. I also facilitated communication between
              designers and developers, as well as between the Editor X team and
              other teams across Wix.
            </p>
          </div>
        </div>

        {/* Full-width workspace image */}
        <div className={styles.imageFrame}>
          <ZoomableImage
            className={`${styles.projectImg} ${styles.noShadow}`}
            src={IMG.workspace}
            alt="Editor X design system workspace overview"
          />
          <p className={styles.imgCaption}>
            The design system parts I've built include 65 components, 49
            composites, and 35 panels and system pages.
          </p>
        </div>

        {/* Large quote */}
        <div className={styles.singleDescriptionFrame}>
          <p className={styles.singleDescriptionText}>
            To address the company problems, I leveraged Figma's capabilities
            and designed a structured component library with the following key
            improvements
          </p>
        </div>

        {/* Image left, text right: Intuitive Navigation */}
        <div className={styles.imageFrameWithDesc}>
          <ZoomableImage
            className={`${styles.sideImg} ${styles.noShadow}`}
            src={IMG.navigation}
            alt="Component library navigation structure in Figma"
          />
          <div className={styles.sideText}>
            <p className={styles.descriptionTitle}>Intuitive Navigation</p>
            <p className={styles.descriptionText}>
              I structured the library to allow designers and developers to find
              relevant components quickly. A dedicated index page was added to
              simplify searching.
            </p>
          </div>
        </div>

        {/* Text left, image right: Component Metadata
            .textLeft pushes the sideText to order:-1 on desktop,
            but on mobile both reset to DOM order (text first). */}
        <div className={`${styles.imageFrameWithDesc} ${styles.textLeft}`}>
          <div className={styles.sideText}>
            <p className={styles.descriptionTitle}>Component Metadata</p>
            <div className={styles.descriptionText}>
              Each component was organized with structured wrappers containing:
              <ul>
                <li>Distinction between local, library and not developed components</li>
                <li>Component name and guidelines</li>
                <li>Links to specifications and Storybook</li>
                <li>A direct link to the index for easy reference</li>
                <li>Change log to track modifications over time</li>
              </ul>
            </div>
          </div>
          <ZoomableImage
            className={`${styles.sideImg} ${styles.noShadow}`}
            src={IMG.metadata}
            alt="Component metadata structure in Figma"
          />
        </div>

        {/* Large quote 2 */}
        <div className={styles.singleDescriptionFrame}>
          <p className={styles.singleDescriptionText}>
            Standardized Guidelines — To ensure consistency, I established
            design principles covering component structure, variant management,
            naming conventions, and seamless documentation.
          </p>
        </div>

        {/* Responsive Figma embed */}
        <div className={styles.iframeFrame}>
          <iframe
            width="100%"
            height="650"
            src="https://embed.figma.com/design/8DCrxeJYuGV9kEhkcOArD8/BaseUI-X-Library?node-id=543-0&embed-host=share"
            allowFullScreen
            title="BaseUI X Library — Figma Design System"
          />
          <p className={styles.imgCaption}>
            Explore the library file to learn more about the project.
          </p>
        </div>

        {/* Image left (form, narrower), text right: Implementation */}
        <div className={styles.imageFrameWithDesc}>
          <ZoomableImage
            className={`${styles.sideImg} ${styles.center} ${styles.noShadow} ${styles.formImg}`}
            src={IMG.form}
            alt="Component request form"
          />
          <div className={styles.sideText}>
            <p className={styles.descriptionTitle}>Implementation & Adoption</p>
            <div className={styles.descriptionText}>
              Once the library was completed, I led training sessions for
              designers and developers, introducing a streamlined request
              process for the following:
              <ul>
                <li>Reporting bugs</li>
                <li>Requesting new components</li>
                <li>Proposing improvements</li>
              </ul>
            </div>
            <p className={styles.descriptionText}>
              I also embedded a living guidelines document within the library to
              support both new and existing team members.
            </p>
          </div>
        </div>

        {/* Text left (70%), illustration right (30%): Impact — no bottom border */}
        <div
          className={`${styles.imageFrameWithDesc} ${styles.textLeft} ${styles.noBorder}`}
        >
          <div className={`${styles.sideText} ${styles.center} ${styles.wideText}`}>
            <p className={styles.descriptionTitle}>Impact</p>
            <p className={styles.descriptionText}>
              The implementation of the design system brought significant
              improvements to the workflow of both designers and developers. By
              creating a structured and well-documented library, the team was
              able to work more efficiently, reduce redundant efforts, and
              improve overall collaboration. The following are the key areas of
              impact
            </p>
          </div>
          <ZoomableImage
            className={`${styles.sideImg} ${styles.noShadow} ${styles.illustrationImg} ${styles.narrowImg}`}
            src={IMG.dolevPaint}
            alt="Dolev Paint illustration"
          />
        </div>

        <FooterNav
          nextLabel="NEXT PROJECT"
          nextTitle="From Waiting to Engagement"
          nextLink="/projects/from-waiting-to-engagement"
        />

      </main>

      <div className={styles.spacerMainR} aria-hidden="true" />

      {/* ---- bottom border row ---- */}
      <div className={styles.spacerBotL}    aria-hidden="true" />
      <div className={styles.spacerBottom}  aria-hidden="true" />
      <div className={styles.spacerBotR}    aria-hidden="true" />
    </div>
    </>
  );
}
