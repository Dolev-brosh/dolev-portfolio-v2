import FooterNav from "../components/FooterNav/FooterNav";
import ImageComparisonSlider from "../components/ImageComparisonSlider/ImageComparisonSlider";
import StickyHeader from "../components/StickyHeader/StickyHeader";
import ZoomableImage from "../components/ZoomableImage/ZoomableImage";
import styles from "./ProjectThree.module.css";

/**
 * Image paths — copy from Dolev - Portfolio/lib/ into:
 *   Dolev-Portfolio-2.0/public/images/project-three/
 */
const IMG = {
  newWorkspace:  "/lib/new-workspace.png",
  oldStage:      "/lib/old-stage.png",
  headerProb:    "/lib/header-prob.png",
  logoMenu:      "/lib/newworkspace-logo-menu.png",
  workspaceCap:  "/lib/workspace-cap.png",
  sidebar:       "/lib/side-bar.png",
  inspector:     "/lib/inspector.png",
  editMode:      "/lib/editMode.png",
  uiParts:       "/lib/ui-parts.png",
};

const META = [
  { label: "Company", value: "Wix (Wix Studio)" },
  { label: "Year",    value: "2023" },
  { label: "My Role", value: "Design, Research" },
];

export default function ProjectThree() {
  return (
    <>
      <StickyHeader />
      <div className={styles.grid}>
      {/* ---- content row ---- */}
      <div className={styles.spacerMainL} aria-hidden="true" />

      <main className={styles.content}>

        {/* Project header */}
        <section className={styles.projectHeader} aria-label="Project overview">
          <div className={styles.textWrapper}>
            <h1 className={styles.mainHeader}>From EditorX to Wix Studio</h1>
            <p className={styles.subHeader}>System redesign for efficiency</p>
          </div>
          <div className={styles.details}>
            {META.map(({ label, value }) => (
              <div key={label} className={styles.dataTile}>
                <span className={styles.dataTileHeader}>{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Two-column: The Goal + My Role */}
        <div className={styles.projectDescription}>
          <div className={styles.descriptionSection}>
            <p className={styles.descriptionTitle}>The Goal</p>
            <p className={styles.descriptionText}>
              With Editor X evolving into the Wix Studio platform and targeting
              less professional users, the system required a facelift to deliver
              a smoother and more accessible experience.
            </p>
          </div>
          <div className={styles.descriptionSection}>
            <p className={styles.descriptionTitle}>My Role</p>
            <p className={styles.descriptionText}>
              I led the facelift design process, starting with research to
              uncover user needs and pain points, moving through concept
              development and detailed design work, and concluding with a
              structured handoff to development to ensure accurate
              implementation.
            </p>
          </div>
        </div>

        {/* Before / After comparison slider */}
        <div className={styles.imageFrame}>
          <ImageComparisonSlider
            beforeSrc={IMG.oldStage}
            afterSrc={IMG.newWorkspace}
            beforeAlt="Old Editor X workspace"
            afterAlt="New Wix Studio workspace"
          />
          <p className={styles.imgCaption}>
            Use the slider to compare the platforms UI.
          </p>
        </div>

        {/* Toolbar Height — image left, text right */}
        <div className={styles.imageFrameWithDesc}>
          <ZoomableImage
            className={`${styles.sideImg} ${styles.noShadow}`}
            src={IMG.headerProb}
            alt="Toolbar taking up too much screen real estate"
          />
          <div className={styles.sideText}>
            <p className={styles.descriptionTitle}>Toolbar Height</p>
            <p className={styles.descriptionText}>
              The toolbar occupies too much screen real estate, disrupting the
              workflow and drawing attention away from the system's core
              element — the canvas.
            </p>
          </div>
        </div>

        {/* Logo menu */}
        <div className={styles.imageFrame}>
          <ZoomableImage
            className={`${styles.projectImg} ${styles.noShadow}`}
            src={IMG.logoMenu}
            alt="Top bar actions combined under the logo menu"
          />
          <p className={styles.imgCaption}>
            The first step was to combine the top bar actions under a single
            hidden menu (under the logo), as they are rarely used actions.
          </p>
        </div>

        {/* Premium CTA */}
        <div className={styles.imageFrame}>
          <ZoomableImage
            className={styles.projectImg}
            src={IMG.workspaceCap}
            alt="Key capabilities as visible CTAs with highlighted premium CTA"
          />
          <p className={styles.imgCaption}>
            Ensured all key capabilities remained as visible CTAs, while
            highlighting the premium CTA to boost conversions.
          </p>
        </div>

        {/* Dedicated sidebar */}
        <div className={styles.imageFrame}>
          <ZoomableImage
            className={styles.projectImg}
            src={IMG.sidebar}
            alt="Creation and design tools moved to a dedicated sidebar"
          />
          <p className={styles.imgCaption}>
            Moved creation and design tools from the top bar to a dedicated
            sidebar, freeing up vertical space and creating a more intuitive
            workflow.
          </p>
        </div>

        {/* Inspector access */}
        <div className={styles.imageFrame}>
          <ZoomableImage
            className={styles.projectImg}
            src={IMG.inspector}
            alt="Quick access to the Inspector panel"
          />
          <p className={styles.imgCaption}>
            Improved canvas usability by providing quick access to the
            Inspector, the core design and animation tool.
          </p>
        </div>

        {/* Enhanced view mode */}
        <div className={styles.imageFrame}>
          <ZoomableImage
            className={styles.projectImg}
            src={IMG.editMode}
            alt="Enhanced view mode for greater canvas clarity"
          />
          <p className={styles.imgCaption}>
            Enhanced view mode for greater canvas clarity and precision, giving
            users a realistic preview of the final outcome.
          </p>
        </div>

        {/* UI parts summary — no bottom border */}
        <div className={`${styles.imageFrame} ${styles.noBorder}`}>
          <ZoomableImage
            className={`${styles.projectImg} ${styles.noShadow}`}
            src={IMG.uiParts}
            alt="UI parts used in this project"
          />
          <p className={styles.imgCaption}>
            Some of the UI parts that were used in this project.
          </p>
        </div>

        <FooterNav
          nextLabel="ALL PROJECTS"
          nextTitle="Back to Home"
          nextLink="/"
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
