import { useState } from "react";
import ZoomableImage from "../ZoomableImage/ZoomableImage";
import styles from "./FlowCarousel.module.css";

export interface Flow {
  id: number | string;
  title: string;
  subtitle: string;
  imageSrc: string;
}

interface FlowCarouselProps {
  flows: Flow[];
}

export default function FlowCarousel({ flows }: FlowCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = flows[activeIndex];

  return (
    <div className={styles.carousel}>
      <div className={styles.imageArea}>
        {flows.map((flow, i) => (
          <ZoomableImage
            key={flow.id}
            src={flow.imageSrc}
            alt={flow.title}
            className={`${styles.slide} ${i === activeIndex ? styles.active : ""}`}
          />
        ))}
      </div>

      <div className={styles.controller}>
        <div className={styles.info}>
          <span className={styles.flowTitle}>{active.title}</span>
          <span className={styles.flowSubtitle}>{active.subtitle}</span>
        </div>

        <div className={styles.indicators} role="tablist">
          {flows.map((flow, i) => (
            <button
              key={flow.id}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`View ${flow.title}`}
              className={`${styles.indicator} ${i === activeIndex ? styles.indicatorActive : ""}`}
              onClick={() => setActiveIndex(i)}
            >
              <span className={styles.indicatorBar} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
