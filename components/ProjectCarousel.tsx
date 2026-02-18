"use client";

import { useState, useEffect } from "react";
import { Project } from "@/lib/types";
import styles from "./ProjectCarousel.module.css";

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (projects.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  if (projects.length === 0) return null;

  const activeProject = projects[activeIndex];

  return (
    <div className={styles.carousel}>
      <div className={styles.browser}>
        {/* Browser chrome */}
        <div className={styles.chrome}>
          <div className={styles.dots}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.addressBar}>
            {activeProject.liveUrl
              ?.replace("https://", "")
              .replace("http://", "")}
          </div>
        </div>

        {/* Screenshot container */}
        <a
          href={activeProject.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewport}
        >
          {projects.map((project, i) => (
            <div
              key={project._id}
              className={`${styles.screenshot} ${i === activeIndex ? styles.active : ""}`}
            >
              {project.coverImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.coverImage} alt={project.title} />
              ) : (
                <div className={styles.placeholder}>
                  <span>{project.client}</span>
                </div>
              )}
            </div>
          ))}
        </a>
      </div>

      {/* Project info */}
      <div key={activeProject._id} className={styles.info}>
        <p className={styles.client}>{activeProject.client}</p>
        <p className={styles.excerpt}>{activeProject.excerpt}</p>
      </div>

      {/* Dots navigation */}
      <div className={styles.nav}>
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ""}`}
            aria-label={`View project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
