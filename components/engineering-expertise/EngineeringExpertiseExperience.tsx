"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const layers = [
  {
    id: "sensors-devices",
    number: "01",
    name: "Sensors & Devices",
    description: "Connected hardware and sensor interfaces.",
    capabilityDescription: "Connect physical sensors and devices to capture real-world signals for the platform.",
    focus: ["Sensor interfaces", "Device signals", "Hardware integration"],
    color: "#079cae",
  },
  {
    id: "firmware-embedded",
    number: "02",
    name: "Firmware & Embedded",
    description: "Device-level software and control.",
    capabilityDescription: "Build device-level software around microcontroller firmware, embedded behavior, and board interfaces.",
    focus: ["Microcontroller firmware", "Embedded software", "Board interfaces"],
    color: "#1689d5",
  },
  {
    id: "connectivity",
    number: "03",
    name: "Connectivity",
    description: "Device communication and data transmission.",
    capabilityDescription: "Connect gateways and devices through wireless communication and network protocols.",
    focus: ["Gateways and protocols", "Wireless communication", "Connected nodes"],
    color: "#079cae",
  },
  {
    id: "middleware-apis",
    number: "04",
    name: "Middleware & APIs",
    description: "Integration and data exchange.",
    capabilityDescription: "Integrate systems through API contracts, message routing, and data exchange.",
    focus: ["API contracts", "Message routing", "System integration"],
    color: "#1689d5",
  },
  {
    id: "cloud-data",
    number: "05",
    name: "Cloud & Data",
    description: "Data processing, storage and cloud services.",
    capabilityDescription: "Support connected platforms with cloud services, data pipelines, and storage systems.",
    focus: ["Cloud services", "Data pipelines", "Storage systems"],
    color: "#079cae",
  },
  {
    id: "applications-analytics",
    number: "06",
    name: "Applications & Analytics",
    description: "Business logic, insights and intelligence.",
    capabilityDescription: "Turn platform data into operational dashboards, analytics workflows, and business logic.",
    focus: ["Operational dashboards", "Analytics workflows", "Business logic"],
    color: "#1689d5",
  },
  {
    id: "web-digital-experience",
    number: "07",
    name: "Web & Digital Experience",
    description: "User interfaces and digital platforms.",
    capabilityDescription: "Deliver web applications, mobile interfaces, and digital workflows for users.",
    focus: ["Web applications", "Mobile interfaces", "Digital workflows"],
    color: "#079cae",
  },
];

type LayerId = (typeof layers)[number]["id"];

function LayerIllustration({ id, className }: { id: LayerId; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2.4,
  };

  return (
    <svg className={className} width="100" height="70" viewBox="0 0 100 70" aria-hidden="true" focusable="false">
      {id === "sensors-devices" && (
        <g {...common}>
          <rect x="16" y="28" width="18" height="25" rx="5" />
          <circle cx="25" cy="36" r="4" />
          <path d="M21 53v5m8-5v5M45 32h15v21H45zM49 27h7v5m-7 21v5m7-5v5M73 31h12v22H73z" />
          <circle cx="79" cy="39" r="2" />
        </g>
      )}
      {id === "firmware-embedded" && (
        <g {...common}>
          <rect x="31" y="17" width="38" height="36" rx="5" />
          <rect x="40" y="26" width="20" height="18" rx="3" />
          <path d="M38 12v5m8-5v5m8-5v5m8-5v5M38 53v5m8-5v5m8-5v5m8-5v5M26 25h5m-5 9h5m-5 9h5m38-18h6m-6 9h6m-6 9h6" />
          <path d="m46 35 4 4 7-8" />
        </g>
      )}
      {id === "connectivity" && (
        <g {...common}>
          <path d="M50 50V34m-8 16h16M50 34l-7-12m7 12 8-12" />
          <circle cx="50" cy="30" r="4" />
          <path d="M34 29a22 22 0 0 1 32 0M27 22a32 32 0 0 1 46 0" />
          <circle cx="25" cy="48" r="5" />
          <circle cx="75" cy="48" r="5" />
          <path d="M30 46h12m16 0h12" />
        </g>
      )}
      {id === "middleware-apis" && (
        <g {...common}>
          <rect x="37" y="22" width="27" height="29" rx="5" />
          <path d="M43 31h15M43 37h10M43 43h13M19 27h13v13H19zM68 34h13v13H68zM25 40v9h12m26 0h12v-2" />
          <circle cx="25.5" cy="33.5" r="1" fill="currentColor" />
          <circle cx="74.5" cy="40.5" r="1" fill="currentColor" />
        </g>
      )}
      {id === "cloud-data" && (
        <g {...common}>
          <path d="M31 39a12 12 0 0 1 12-12 15 15 0 0 1 28 4 10 10 0 0 1-1 20H35a10 10 0 0 1-4-12Z" />
          <ellipse cx="52" cy="42" rx="8" ry="3.5" />
          <path d="M44 42v11c0 2 4 4 8 4s8-2 8-4V42m-16 6c0 2 4 4 8 4s8-2 8-4" />
        </g>
      )}
      {id === "applications-analytics" && (
        <g {...common}>
          <rect x="19" y="16" width="62" height="42" rx="5" />
          <path d="M19 25h62M28 48V39h8v9m5 0V32h8v16m5 0V36h8v12m8 0V28h8v20" />
          <circle cx="25" cy="20.5" r="1" fill="currentColor" />
          <circle cx="30" cy="20.5" r="1" fill="currentColor" />
        </g>
      )}
      {id === "web-digital-experience" && (
        <g {...common}>
          <rect x="17" y="15" width="50" height="36" rx="4" />
          <path d="M35 58h14m-7-7v7M17 24h50m-42 7h14v12H25zM45 32h14m-14 6h10" />
          <rect x="70" y="27" width="13" height="29" rx="3" />
          <path d="M74 32h5m-5 18h5" />
        </g>
      )}
    </svg>
  );
}

export default function EngineeringExpertiseExperience() {
  const [activeLayer, setActiveLayer] = useState<LayerId>("sensors-devices");
  const [expandedLayer, setExpandedLayer] = useState<LayerId | null>(null);
  const [canScrollCapabilitiesBack, setCanScrollCapabilitiesBack] = useState(false);
  const [canScrollCapabilitiesForward, setCanScrollCapabilitiesForward] = useState(true);
  const capabilityTrackRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const programmaticLayerRef = useRef<LayerId | null>(null);
  const scrollEndTimerRef = useRef<number | null>(null);

  const centerCapabilityCard = (id: LayerId, behavior: ScrollBehavior = "smooth") => {
    const track = capabilityTrackRef.current;
    const card = track?.querySelector<HTMLElement>(`[data-layer-id="${id}"]`);
    if (!track || !card) return;

    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const centeredLeft = track.scrollLeft + cardRect.left - trackRect.left - (track.clientWidth - cardRect.width) / 2;
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    track.scrollTo({ left: Math.min(maxScroll, Math.max(0, centeredLeft)), behavior });
  };

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncVideoPlayback = () => {
      const video = heroVideoRef.current;
      if (!video) return;
      if (motionPreference.matches) video.pause();
      else void video.play().catch(() => undefined);
    };

    syncVideoPlayback();
    motionPreference.addEventListener("change", syncVideoPlayback);
    return () => motionPreference.removeEventListener("change", syncVideoPlayback);
  }, []);

  useEffect(() => {
    const track = capabilityTrackRef.current;
    if (!track) return;

    const updateCapabilityPosition = (syncActiveLayer = true) => {
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
      const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-layer-id]"));
      const closestCard = cards.reduce<HTMLElement | null>((closest, card) => {
        if (!closest) return card;
        const cardRect = card.getBoundingClientRect();
        const closestRect = closest.getBoundingClientRect();
        return Math.abs(cardRect.left + cardRect.width / 2 - trackCenter) < Math.abs(closestRect.left + closestRect.width / 2 - trackCenter) ? card : closest;
      }, null);

      if (syncActiveLayer) {
        const layerId = closestCard?.dataset.layerId as LayerId | undefined;
        const requestedLayerId = programmaticLayerRef.current;
        if (requestedLayerId) {
          setActiveLayer((current) => current === requestedLayerId ? current : requestedLayerId);
        } else if (layerId) {
          setActiveLayer((current) => current === layerId ? current : layerId);
          setExpandedLayer((current) => current && current !== layerId ? null : current);
        }
      }
      setCanScrollCapabilitiesBack(track.scrollLeft > 1);
      setCanScrollCapabilitiesForward(track.scrollLeft < maxScroll - 1);
    };

    const finishScroll = () => {
      if (scrollEndTimerRef.current !== null) {
        window.clearTimeout(scrollEndTimerRef.current);
        scrollEndTimerRef.current = null;
      }
      programmaticLayerRef.current = null;
      updateCapabilityPosition();
    };

    const handleScroll = () => {
      updateCapabilityPosition();
      if (scrollEndTimerRef.current !== null) window.clearTimeout(scrollEndTimerRef.current);
      scrollEndTimerRef.current = window.setTimeout(finishScroll, 160);
    };
    const handleResize = () => updateCapabilityPosition();

    track.scrollTo({ left: 0, behavior: "instant" });
    updateCapabilityPosition(false);
    track.addEventListener("scroll", handleScroll, { passive: true });
    track.addEventListener("scrollend", finishScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      track.removeEventListener("scroll", handleScroll);
      track.removeEventListener("scrollend", finishScroll);
      window.removeEventListener("resize", handleResize);
      if (scrollEndTimerRef.current !== null) window.clearTimeout(scrollEndTimerRef.current);
    };
  }, []);

  const toggleLayerDetails = (id: LayerId) => {
    setActiveLayer(id);
    setExpandedLayer((current) => current === id ? null : id);
    programmaticLayerRef.current = id;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
    window.requestAnimationFrame(() => centerCapabilityCard(id, behavior));
  };

  const scrollToOverview = () => {
    document.getElementById("technology-stack-overview")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    });
  };

  const scrollToExplorer = () => {
    document.getElementById("technology-stack")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    });
  };

  const selectLayerFromOverview = (id: LayerId) => {
    setActiveLayer(id);
    setExpandedLayer(id);
    programmaticLayerRef.current = id;
    scrollToExplorer();
    window.requestAnimationFrame(() => centerCapabilityCard(
      id,
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    ));
  };

  const scrollCapabilities = (direction: -1 | 1) => {
    const track = capabilityTrackRef.current;
    if (!track) return;
    const firstCard = track.querySelector<HTMLElement>("[data-capability-card]");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = (firstCard?.getBoundingClientRect().width ?? track.clientWidth * 0.8) + gap;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * step, behavior: reduceMotion ? "instant" : "smooth" });
  };

  const activeLayerIndex = Math.max(0, layers.findIndex((layer) => layer.id === activeLayer));

  return (
    <main className="engineering-expertise-page">
      <section className="expertise-hero" id="engineering-expertise" aria-labelledby="expertise-title">
        <video
          ref={heroVideoRef}
          className="expertise-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/aiot-stack-animation-poster.png"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/videos/aiot_holographic_chip_network_3sec_h264.mp4" type="video/mp4" />
        </video>
        <div className="expertise-hero-overlay" aria-hidden="true" />
        <div className="expertise-hero-content">
          <p className="expertise-eyebrow">SUPPLYCHAINZ AIoT ENGINEERING</p>
          <h1 id="expertise-title">How We Build</h1>
          <h2>From connected devices to intelligent digital experiences.</h2>
          <p>We connect devices, embedded software, networks, cloud platforms and applications to build complete AIoT solutions.</p>
          <a className="expertise-hero-link" href="#technology-stack-overview" onClick={(event) => {
            event.preventDefault();
            scrollToOverview();
          }}>
            Explore How We Build <span aria-hidden="true">{"\u2193"}</span>
          </a>
        </div>
        <section
          className="engineering-layer-overview"
          id="technology-stack-overview"
          aria-label="Seven-layer architecture overview"
        >
          <div className="engineering-layer-overview-list" role="list" aria-label="AIoT layers from top layer 07 to bottom layer 01">
            {[...layers].reverse().map((layer) => (
              <div className="engineering-layer-overview-step" key={layer.id} role="listitem">
                <button
                  className={`engineering-layer-overview-item${activeLayer === layer.id ? " is-selected" : ""}`}
                  type="button"
                  data-layer-id={layer.id}
                  style={{ "--capability-accent": layer.color } as CSSProperties}
                  aria-label={`Layer ${layer.number}: ${layer.id === "web-digital-experience" ? "Web / Digital Experience" : layer.id === "sensors-devices" ? "Sensors / Devices" : layer.name}. ${layer.description}`}
                  onClick={() => selectLayerFromOverview(layer.id)}
                >
                  <span className="engineering-layer-overview-number">{layer.number}</span>
                  <span className="engineering-layer-overview-copy">
                    <span className="engineering-layer-overview-name">
                      {layer.id === "web-digital-experience" ? "Web / Digital Experience" : layer.id === "sensors-devices" ? "Sensors / Devices" : layer.name}
                    </span>
                    <span className="engineering-layer-overview-description">{layer.description}</span>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section
        className="engineering-capabilities-section"
        id="technology-stack"
        aria-label="Interactive seven-layer AIoT technology explorer"
      >
        <div className="engineering-capabilities-inner">
          <div className="engineering-capabilities-toolbar">
            <div
              className="engineering-capabilities-progress"
              role="progressbar"
              aria-label="Capability showcase progress"
              aria-valuemin={1}
              aria-valuemax={layers.length}
              aria-valuenow={activeLayerIndex + 1}
              aria-valuetext={`Capability ${activeLayerIndex + 1} of ${layers.length}`}
            >
              <span style={{ width: `${((activeLayerIndex + 1) / layers.length) * 100}%` }} />
            </div>
            <div className="engineering-capabilities-controls" aria-label="Capability track navigation">
              <button type="button" aria-label="Previous capabilities" disabled={!canScrollCapabilitiesBack} onClick={() => scrollCapabilities(-1)}>
                <span aria-hidden="true">{"\u2190"}</span>
              </button>
              <button type="button" aria-label="Next capabilities" disabled={!canScrollCapabilitiesForward} onClick={() => scrollCapabilities(1)}>
                <span aria-hidden="true">{"\u2192"}</span>
              </button>
            </div>
          </div>

          <div
            className="engineering-capabilities-track"
            ref={capabilityTrackRef}
            role="region"
            aria-label="Scrollable seven-layer AIoT technology explorer"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollCapabilities(-1);
              } else if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollCapabilities(1);
              }
            }}
          >
            {layers.map((layer, index) => {
              const previous = layers[index - 1];
              const next = layers[index + 1];
              const isExpanded = expandedLayer === layer.id;

              return (
                <article
                  className={`engineering-capability-card${activeLayer === layer.id ? " is-selected" : ""}${isExpanded ? " is-expanded" : ""}`}
                  key={layer.id}
                  data-capability-card
                  data-layer-id={layer.id}
                  style={{ "--capability-accent": layer.color } as CSSProperties}
                  aria-labelledby={`${layer.id}-explorer-title`}
                >
                  <div className="engineering-capability-number">{layer.number} <span>/ 07</span></div>
                  <div className="engineering-capability-visual">
                    <LayerIllustration id={layer.id} className="engineering-capability-illustration" />
                  </div>
                  <div className="engineering-capability-copy">
                    <h3 id={`${layer.id}-explorer-title`}>{layer.name}</h3>
                    <p>{layer.description}</p>
                  </div>
                  {isExpanded && (
                    <div className="engineering-capability-details" id={`${layer.id}-expanded-content`}>
                      <p className="engineering-capability-description">{layer.capabilityDescription}</p>
                      <p className="engineering-capability-context">
                        This layer connects to {next ? next.name.toLowerCase() : "the people and systems using the platform"} while building on {previous ? previous.name.toLowerCase() : "physical signals from connected assets"}.
                      </p>
                      <h4>Engineering focus</h4>
                      <ul className="engineering-capability-focus">
                        {layer.focus.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  )}
                  <button
                    className="engineering-capability-link"
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`${layer.id}-expanded-content`}
                    onClick={() => toggleLayerDetails(layer.id)}
                  >
                    {isExpanded ? "Show less" : "View details"}
                    <span aria-hidden="true">{isExpanded ? "\u2191" : "\u2193"}</span>
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
