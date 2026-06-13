import FlowCarousel, { Flow } from "../components/FlowCarousel/FlowCarousel";
import FooterNav from "../components/FooterNav/FooterNav";
import StickyHeader from "../components/StickyHeader/StickyHeader";
import ZoomableImage from "../components/ZoomableImage/ZoomableImage";
import styles from "./ProjectTwo.module.css";

const projectImages = {
  theoryGraph:   "/lib/theory-graph.png",
  resultsGraph:  "/lib/results-graph.png",
  finalSolution: "/lib/final-solution-screenshot.png",
  flow1:         "/lib/flow1-preview.gif",
  flow2:         "/lib/flow2-preview.gif",
  flow3:         "/lib/flow3-preview.gif",
};

const FLOWS: Flow[] = [
  {
    id: 1,
    title: "Flow 1",
    subtitle: "Shimmer + Progress bar + textual feedback. Satisfaction: 6.0 | Perceived time: 6.5 sec",
    imageSrc: projectImages.flow1,
  },
  {
    id: 2,
    title: "Flow 2",
    subtitle: "Progress bar + textual feedback + active progress bar. Satisfaction: 5.2 | Perceived time: 9.1 sec",
    imageSrc: projectImages.flow2,
  },
  {
    id: 3,
    title: "Flow 3",
    subtitle: "Progress bar + textual feedback + Cash progress bar. Satisfaction: 5.5 | Perceived time: 8.9 sec",
    imageSrc: projectImages.flow3,
  },
];

const conclusionFlows: Flow[] = [
  {
    id: "flow1-final",
    title: "Flow 1",
    subtitle: "Default experience",
    imageSrc: projectImages.flow1,
  },
  {
    id: "flow3-final",
    title: "Flow 3",
    subtitle: "Optional (Cash view)",
    imageSrc: projectImages.flow3,
  },
];

const META = [
  { label: "Company", value: "monday.com" },
  { label: "Year",    value: "2022" },
  { label: "My Role", value: "Design, Research" },
];

export default function ProjectTwo() {
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
            <h1 className={styles.mainHeader}>Loading Experience</h1>
            <p className={styles.subHeader}>monday.com</p>
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

        {/* Two-column: The Problem + The Goal */}
        <div className={styles.projectDescription}>
          <div className={styles.descriptionSection}>
            <p className={styles.descriptionTitle}>The Problem</p>
            <p className={styles.descriptionText}>
              When a dashboard takes a long time to load, the user has no idea
              what's happening. It's a really bad experience that ~9% of
              Reporting MAPP experienced in the last month. Dashboard load time
              is one of the top reasons for users submitting downtime (DOW)
              tickets. It's especially common for Enterprise users, who are more
              likely to use large dashboards.
            </p>
          </div>
          <div className={styles.descriptionSection}>
            <p className={styles.descriptionTitle}>The Goal</p>
            <p className={styles.descriptionText}>
              This research aims to understand the way we (humans) perceive time
              in the psychological aspect and the HCI (human-computer
              interaction) aspect, so we will be able to provide the best
              loading experience for our users.
            </p>
          </div>
        </div>

        {/* Section A */}
        <div className={styles.singleDescriptionFrame}>
          <p className={styles.singleDescriptionText}>
            We learned that the perception of time isn't technical and that we
            can control the perception of time of our users and make the waiting
            time in the system seem either faster or slower based on our needs
            and intentions.
          </p>
        </div>

        {/* Section B: Perception of time – HCI — text left, image right */}
        <div className={`${styles.imageFrameWithDesc} ${styles.textLeft}`}>
          <div className={styles.sideText}>
            <p className={styles.descriptionTitle}>Perception of time – HCI</p>
            <div className={styles.descriptionText}>
              Guidelines derived from the research:
              <ul>
                <li>
                  Detailed feedback leads to a higher estimation of waiting time
                  but is conversely also associated to a higher satisfaction.
                </li>
                <li>
                  A slow-down progress bar is significantly the most appreciated
                  by users in comparison with speed up and constant progress
                  bars.
                </li>
                <li>
                  We can manipulate perceived duration with visual animation.
                </li>
              </ul>
            </div>
          </div>
          <ZoomableImage
            src={projectImages.theoryGraph}
            alt="HCI research theory graph on waiting perception"
            className={`${styles.sideImg} ${styles.center}`}
          />
        </div>

        {/* Section C: Single description before carousel */}
        <div className={`${styles.singleDescriptionFrame}`}>
          <p className={styles.singleDescriptionText}>
            To understand what is the best solution, we created a test with a
            simple task. 32 'first-time users' were asked to explore the
            'competitors dashboard'. Each group got a different loading
            experience, and after the dashboard loaded they were asked to
            estimate the waiting time and rate their satisfaction.
          </p>
        </div>

        {/* Section D: Flow Carousel */}
        <div className={`${styles.imageFrameWithDesc} ${styles.carousel}`}>
          <FlowCarousel flows={FLOWS} />
        </div>

        {/* Section E: Statistical Difference — text left, image right */}
        <div className={`${styles.imageFrameWithDesc} ${styles.textLeft}`}>
          <div className={styles.sideText}>
            <p className={styles.descriptionTitle}>Statistical Difference</p>
            <p className={styles.descriptionText}>
              In order to gain confidence that the chosen flow will improve the
              current behavior, we created a second version so we could see a
              statistical difference. 60 'first-time users' were tested. The
              satisfaction gap was 1.7, and the perception of time difference
              was 3.8 seconds.
            </p>
          </div>
          <ZoomableImage
            src={projectImages.resultsGraph}
            alt="User testing results graph showing perceived wait times"
            className={styles.sideImg}
          />
        </div>

        {/* Section F: Conclusion — carousel left, text right */}
        <div className={`${styles.imageFrameWithDesc} ${styles.carousel}`}>
          <FlowCarousel flows={conclusionFlows} />
          <div className={`${styles.sideText} ${styles.top}`}>
            <p className={styles.descriptionTitle}>Conclusion</p>
            <p className={styles.descriptionText}>
              The best solution will be flow 1 which provides both visual
              (progress bar) and textual (the banner) indications. To optimize
              the satisfaction rate for our users, we should display flow 1 as
              the default experience and also provide the option to switch to
              flow 3 (cash view) so users who would like something to focus on
              while waiting will have a solution which will keep them in the
              system.
            </p>
          </div>
        </div>

        {/* Google Slides embed */}
        <div className={`${styles.imageFrame} ${styles.iframeSection} ${styles.noBorder}`}>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vTRGte0_1SF_ryx1lPTYZLgjpNPJMDytG6r1TOFP5T6IBV7iN6Wdunno911EjHBWCUMU2D2IZzlHH2-/pubembed?start=false&loop=false&delayms=3000"
            width="100%"
            height="600"
            title="Loading Experience — Full Case Study"
            allowFullScreen
            loading="lazy"
          />

          <p className={styles.imgCaption}>
            Explore the full case study or view it in{" "}
            <a
              href="https://docs.google.com/presentation/d/1btHvXSc8iMJXsqvXPzyB79IEoIvLvS9TFSQjQf8tKgw/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Google Slides
            </a>
          </p>
        </div>

        <FooterNav
          nextLabel="NEXT PROJECT"
          nextTitle="From EditorX to Wix Studio"
          nextLink="/projects/from-editorx-to-wix-studio"
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
