"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      if (preference.matches) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    };

    syncPlayback();
    preference.addEventListener("change", syncPlayback);
    return () => preference.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/BG_Animation.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-eyebrow hero-reveal hero-reveal-eyebrow">
          CONNECTED SYSTEMS. ENGINEERED FOR IMPACT.
        </p>
        <h1 id="hero-title" className="hero-reveal hero-reveal-title">
          <span className="hero-title-line">Building the Intelligence</span>{" "}
          <span className="hero-title-line">
            Behind <span className="hero-title-accent">Connected Systems.</span>
          </span>
        </h1>
        <p className="hero-description">
          <span className="hero-reveal hero-reveal-description">
            We engineer connected technologies across embedded systems, device connectivity, software applications, and cloud platforms.
          </span>
        </p>
        <div className="hero-actions hero-reveal hero-reveal-actions">
          <a className="button button-primary" href="#capabilities">
            Explore Our Capabilities{" "}
            <span className="button-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
      <span className="hero-index" aria-hidden="true">
        AIoT · 01
      </span>
    </section>
  );
}
