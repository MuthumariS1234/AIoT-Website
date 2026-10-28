"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

type Capability = {
  id: string;
  title: string;
  description: string;
  layers: string[];
  icon: "chip" | "connectivity" | "application" | "cloud";
};

const capabilities: Capability[] = [
  {
    id: "01",
    title: "Embedded & Firmware",
    description:
      "Building the device-level software that enables hardware and sensors to operate reliably.",
    layers: ["Sensors / Devices", "Firmware & Embedded"],
    icon: "chip",
  },
  {
    id: "02",
    title: "Connectivity & Middleware",
    description:
      "Connecting devices and systems to enable communication, integration and data exchange.",
    layers: ["Connectivity", "Middleware & APIs"],
    icon: "connectivity",
  },
  {
    id: "03",
    title: "Software & Applications",
    description:
      "Developing applications that turn connected-device data into useful functionality.",
    layers: ["Applications & Analytics"],
    icon: "application",
  },
  {
    id: "04",
    title: "Cloud, Data & Digital Experience",
    description:
      "Building cloud platforms, data services and digital interfaces for connected systems.",
    layers: ["Cloud & Data", "Web / Digital Experience"],
    icon: "cloud",
  },
];

const capabilityBackgroundImages: Record<Capability["icon"], string> = {
  chip: "/images/capability-embedded-firmware.png",
  connectivity: "/images/capability-connectivity-middleware.png",
  application: "/images/capability-software-applications.png",
  cloud: "/images/capability-cloud-data-experience.png",
};

function CapabilityBackground({ icon }: { icon: Capability["icon"] }) {
  return (
    <span className={`capability-background-animation capability-background-animation--${icon}`} aria-hidden="true">
      <span
        className="capability-reference-image"
        style={{
          backgroundImage: `url("${capabilityBackgroundImages[icon]}")`,
          backgroundPosition: icon === "chip" ? "center 28%" : "center",
          backgroundSize: icon === "chip" ? "auto 175%" : "cover",
        }}
      />
      <span className="capability-image-overlay" />
    </span>
  );
}

function EmbeddedEngineeringIllustration() {
  return (
    <svg
      className="embedded-illustration"
      viewBox="0 0 640 500"
      role="img"
      aria-labelledby="embedded-illustration-title embedded-illustration-description"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="embedded-illustration-title">Embedded controller connected to sensors</title>
      <desc id="embedded-illustration-description">
        A microcontroller board connected by circuit traces to temperature, motion, and signal sensor modules.
      </desc>
      <defs>
        <linearGradient id="board-fill" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#fbfeff" />
          <stop offset="1" stopColor="#e2f1f5" />
        </linearGradient>
        <linearGradient id="chip-fill" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#dff2f5" />
          <stop offset="1" stopColor="#c5e4eb" />
        </linearGradient>
      </defs>

      <path d="M320 250H174c-21 0-38-17-38-38v-37c0-20-16-36-36-36H59" />
      <path d="M320 250H167c-18 0-33 15-33 33v70c0 21-17 38-38 38H58" />
      <path d="M320 250h150c21 0 38-17 38-38v-39c0-19 15-34 34-34h39" />
      <path d="M320 250h154c20 0 36 16 36 36v64c0 19 15 34 34 34h35" />
      <path d="M320 205V113c0-20 16-36 36-36h46" />
      <path d="M320 295v90c0 19 15 34 34 34h35" />

      <g fill="#f8fcfd" stroke="#9fc4d1" strokeWidth="2">
        <rect x="27" y="109" width="103" height="76" rx="12" />
        <rect x="24" y="359" width="105" height="76" rx="12" />
        <rect x="495" y="103" width="111" height="76" rx="12" />
        <rect x="500" y="346" width="108" height="76" rx="12" />
        <rect x="369" y="38" width="105" height="72" rx="12" />
        <rect x="369" y="390" width="105" height="72" rx="12" />
      </g>

      <g fill="none" stroke="#679daf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
        <path d="M51 145h24m13 0h17M51 159h54" />
        <path d="M49 392h28m13 0h19M49 406h60" />
        <path d="M521 140h24m13 0h24M521 154h62" />
        <path d="M526 382h22m13 0h25M526 396h60" />
        <path d="M390 65h19m13 0h32M390 79h64" />
        <path d="M390 418h20m14 0h30M390 432h64" />
      </g>

      <rect x="230" y="159" width="180" height="182" rx="26" fill="url(#board-fill)" stroke="#82b1c1" strokeWidth="3" />
      <rect x="266" y="194" width="108" height="112" rx="17" fill="url(#chip-fill)" stroke="#4c91a5" strokeWidth="3" />
      <rect className="embedded-chip-highlight" x="289" y="218" width="62" height="64" rx="10" fill="#e9f8fa" stroke="#5d9eb0" strokeWidth="2" />
      <path d="M306 250h28m-14-14v28" stroke="#31869c" strokeLinecap="round" strokeWidth="3" />

      <g stroke="#6b9eaf" strokeLinecap="round" strokeWidth="4">
        <path d="M251 177v-15m22 15v-15m22 15v-15m22 15v-15m22 15v-15m22 15v-15m22 15v-15" />
        <path d="M251 339v15m22-15v15m22-15v15m22-15v15m22-15v15m22-15v15m22-15v15" />
        <path d="M230 201h-15m15 24h-15m15 24h-15m15 24h-15m15 24h-15m15 24h-15" />
        <path d="M410 201h15m-15 24h15m-15 24h15m-15 24h15m-15 24h15m-15 24h15" />
      </g>

      <g fill="#398fa5" stroke="#f7fbfc" strokeWidth="4">
        <circle cx="59" cy="145" r="7" />
        <circle cx="58" cy="395" r="7" />
        <circle cx="573" cy="142" r="7" />
        <circle cx="578" cy="385" r="7" />
        <circle cx="429" cy="74" r="7" />
        <circle cx="429" cy="427" r="7" />
      </g>
      <g className="embedded-signal-nodes" fill="#70b2c3">
        <circle cx="177" cy="250" r="5" />
        <circle cx="469" cy="250" r="5" />
        <circle cx="320" cy="113" r="5" />
        <circle cx="320" cy="385" r="5" />
      </g>

      <g className="embedded-motion-dots" fill="#2b91a8">
        <circle className="embedded-motion" r="5">
          <animateMotion dur="7.5s" repeatCount="indefinite" path="M59 145H100c20 0 36 16 36 36v37c0 21 17 38 38 38h72" />
          <animate attributeName="opacity" values="0.25;0.9;0.75;0.25" keyTimes="0;0.24;0.76;1" dur="7.5s" repeatCount="indefinite" />
        </circle>
        <circle className="embedded-motion" r="5">
          <animateMotion dur="8.5s" begin="-2s" repeatCount="indefinite" path="M320 250h150c21 0 38-17 38-38v-39c0-19 15-34 34-34h39" />
          <animate attributeName="opacity" values="0.2;0.85;0.7;0.2" keyTimes="0;0.22;0.78;1" dur="8.5s" begin="-2s" repeatCount="indefinite" />
        </circle>
        <circle className="embedded-motion" r="4">
          <animateMotion dur="9s" begin="-4s" repeatCount="indefinite" path="M320 295v90c0 19 15 34 34 34h35" />
          <animate attributeName="opacity" values="0.2;0.8;0.65;0.2" keyTimes="0;0.25;0.75;1" dur="9s" begin="-4s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function ConnectivityIllustration() {
  return (
    <>
      <Image
        className="connectivity-illustration-image"
        src="/Reference/connectivity-middleware-gateway.png"
        alt="A central network gateway communicating with several connected IoT devices"
        width={1776}
        height={1024}
        sizes="(min-width: 901px) 42vw, (min-width: 621px) 70vw, 100vw"
      />
      <svg className="connectivity-signal-layer" viewBox="0 0 1774 887" aria-hidden="true">
        <circle className="connectivity-signal-dot" r="6">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            path="M400 210 C485 204 548 216 577 249 C606 282 612 313 646 338 C666 353 683 360 703 370"
          />
          <animate attributeName="opacity" values="0.2;0.72;0.48;0.2" keyTimes="0;0.3;0.75;1" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle className="connectivity-signal-dot" r="6">
          <animateMotion
            dur="11s"
            begin="-2.8s"
            repeatCount="indefinite"
            path="M1325 194 C1264 194 1215 206 1195 234 C1172 267 1167 309 1132 337 C1114 351 1093 358 1072 365"
          />
          <animate attributeName="opacity" values="0.18;0.7;0.46;0.18" keyTimes="0;0.28;0.76;1" dur="11s" begin="-2.8s" repeatCount="indefinite" />
        </circle>
        <circle className="connectivity-signal-dot" r="5">
          <animateMotion
            dur="12s"
            begin="-5.4s"
            repeatCount="indefinite"
            path="M399 592 C449 578 485 555 505 523 C523 496 543 478 575 461 C603 446 626 439 650 435"
          />
          <animate attributeName="opacity" values="0.16;0.62;0.42;0.16" keyTimes="0;0.3;0.76;1" dur="12s" begin="-5.4s" repeatCount="indefinite" />
        </circle>
        <circle className="connectivity-signal-dot" r="5">
          <animateMotion
            dur="13s"
            begin="-8.1s"
            repeatCount="indefinite"
            path="M1372 623 C1314 609 1274 586 1254 555 C1235 524 1233 490 1205 465 C1174 437 1135 425 1082 423"
          />
          <animate attributeName="opacity" values="0.16;0.64;0.44;0.16" keyTimes="0;0.28;0.75;1" dur="13s" begin="-8.1s" repeatCount="indefinite" />
        </circle>
        <g className="connectivity-signal-nodes" fill="none" stroke="#51c4c8" strokeWidth="3">
          <circle cx="515" cy="210" r="9">
            <animate attributeName="opacity" values="0.12;0.36;0.12" dur="5.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="1233" cy="205" r="9">
            <animate attributeName="opacity" values="0.12;0.34;0.12" dur="6.4s" begin="-2.1s" repeatCount="indefinite" />
          </circle>
        </g>
        <g className="connectivity-gateway-indicators" fill="#42b7c3">
          <circle cx="765" cy="449" r="3">
            <animate attributeName="opacity" values="0.2;0.68;0.35;0.2" dur="5.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="813" cy="452" r="3">
            <animate attributeName="opacity" values="0.2;0.62;0.3;0.2" dur="6.6s" begin="-2.7s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </>
  );
}

function SoftwareApplicationsIllustration() {
  return (
    <Image
      className="software-applications-illustration"
      src="/Reference/software-applications-dashboard.png"
      alt="Application dashboards organizing data from connected devices and systems"
      width={1774}
      height={887}
      sizes="(min-width: 901px) 42vw, (min-width: 621px) 70vw, 100vw"
    />
  );
}

function CloudDataIllustration() {
  return (
    <>
      <Image
        className="connectivity-illustration-image"
        src="/Reference/cloud-data-digital-experience.png"
        alt="Cloud platform and database connecting connected-device data to digital dashboards"
        width={1672}
        height={941}
        sizes="(min-width: 901px) 42vw, (min-width: 621px) 70vw, 100vw"
      />
      <svg className="connectivity-signal-layer" viewBox="0 0 1672 941" aria-hidden="true">
        <circle className="connectivity-signal-dot" r="7">
          <animateMotion
            dur="11s"
            repeatCount="indefinite"
            path="M348 239 C405 241 443 292 471 327 C496 358 526 367 565 369"
          />
          <animate attributeName="opacity" values="0.12;0.68;0.42;0.12" keyTimes="0;0.3;0.75;1" dur="11s" repeatCount="indefinite" />
        </circle>
        <circle className="connectivity-signal-dot" r="6">
          <animateMotion
            dur="13s"
            begin="-3.5s"
            repeatCount="indefinite"
            path="M219 421 C323 421 389 369 460 365 C504 363 534 380 570 398"
          />
          <animate attributeName="opacity" values="0.12;0.62;0.4;0.12" keyTimes="0;0.28;0.76;1" dur="13s" begin="-3.5s" repeatCount="indefinite" />
        </circle>
        <circle className="connectivity-signal-dot" r="6">
          <animateMotion
            dur="14s"
            begin="-6s"
            repeatCount="indefinite"
            path="M331 733 C402 713 449 669 504 624 C548 589 591 571 644 557"
          />
          <animate attributeName="opacity" values="0.1;0.6;0.38;0.1" keyTimes="0;0.28;0.75;1" dur="14s" begin="-6s" repeatCount="indefinite" />
        </circle>
        <circle className="connectivity-signal-dot" r="6">
          <animateMotion
            dur="12s"
            begin="-2s"
            repeatCount="indefinite"
            path="M1000 353 C1066 352 1108 351 1157 351"
          />
          <animate attributeName="opacity" values="0.12;0.65;0.42;0.12" keyTimes="0;0.3;0.74;1" dur="12s" begin="-2s" repeatCount="indefinite" />
        </circle>
        <circle className="connectivity-signal-dot" r="6">
          <animateMotion
            dur="13s"
            begin="-7s"
            repeatCount="indefinite"
            path="M920 601 C946 646 985 669 1027 672 C1065 674 1095 658 1123 639 C1180 633 1235 649 1294 672"
          />
          <animate attributeName="opacity" values="0.1;0.62;0.4;0.1" keyTimes="0;0.28;0.75;1" dur="13s" begin="-7s" repeatCount="indefinite" />
        </circle>
        <g className="connectivity-signal-nodes" fill="none" stroke="#43b9c2" strokeWidth="3">
          <circle cx="471" cy="327" r="9">
            <animate attributeName="opacity" values="0.1;0.32;0.1" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="1157" cy="351" r="9">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="6.8s" begin="-2.4s" repeatCount="indefinite" />
          </circle>
        </g>
        <circle className="connectivity-gateway-indicator" cx="1374" cy="212" r="5" fill="#26aeb6">
          <animate attributeName="opacity" values="0.35;0.9;0.5;0.35" dur="5.8s" begin="-1.6s" repeatCount="indefinite" />
        </circle>
      </svg>
    </>
  );
}

type ExpandableCapabilityPanelProps = {
  eyebrow: string;
  heading: string;
  description: string;
  labels: string[];
  detailsHeading: string;
  detailsId: string;
  detailsHeadingId: string;
  details: { title: string; description: string }[];
  expanded: boolean;
  onToggle: () => void;
  illustration: ReactNode;
  embeddedStyleAliases?: boolean;
};

function ExpandableCapabilityPanel({
  eyebrow,
  heading,
  description,
  labels,
  detailsHeading,
  detailsId,
  detailsHeadingId,
  details,
  expanded,
  onToggle,
  illustration,
  embeddedStyleAliases = false,
}: ExpandableCapabilityPanelProps) {
  const embeddedClassAliases: Record<string, string> = {
    "capability-expanded-content": "capability-embedded-content",
    "capability-expanded-copy": "capability-embedded-copy",
    "capability-expanded-description": "capability-embedded-description",
    "capability-expanded-labels": "capability-embedded-labels",
    "capability-expanded-details": "capability-embedded-expanded",
    "capability-expanded-details-inner": "capability-embedded-expanded-inner",
    "capability-detail-illustration": "capability-embedded-illustration",
  };
  const embeddedClass = (className: string) =>
    embeddedStyleAliases ? `${className} ${embeddedClassAliases[className]}` : className;

  return (
    <div className={embeddedClass("capability-expanded-content")}>
      <div className={embeddedClass("capability-expanded-copy")}>
        <p className="capability-detail-label">{eyebrow}</p>
        <h3>{heading}</h3>
        <p className={embeddedClass("capability-expanded-description")}>{description}</p>
        <ul className={embeddedClass("capability-expanded-labels")} aria-label={`${eyebrow} capability areas`}>
          {labels.map((label) => <li key={label}>{label}</li>)}
        </ul>
        <button
          className="capability-explore-button"
          type="button"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={onToggle}
        >
          {expanded ? "Hide details" : "Show details"}
          <span aria-hidden="true">{expanded ? "↑" : "→"}</span>
        </button>

        <div
          className={`${embeddedClass("capability-expanded-details")}${expanded ? " is-expanded" : ""}`}
          id={detailsId}
          aria-hidden={!expanded}
          inert={!expanded}
          aria-labelledby={detailsHeadingId}
        >
          <div className={embeddedClass("capability-expanded-details-inner")}>
            <h4 id={detailsHeadingId}>{detailsHeading}</h4>
            <ul>
              {details.map(({ title, description: detailDescription }) => (
                <li key={title}>
                  <h5>{title}</h5>
                  <p>{detailDescription}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <figure className={embeddedClass("capability-detail-illustration")}>{illustration}</figure>
    </div>
  );
}

const embeddedCapabilityDetails = [
  {
    title: "Firmware development",
    description: "Develop device-level firmware for reliable operation and system communication.",
  },
  {
    title: "Sensor and device integration",
    description: "Bring sensors and device components together as a coherent embedded system.",
  },
  {
    title: "Hardware–software integration",
    description: "Connect physical interfaces with the software behavior of the device.",
  },
  {
    title: "Device validation and debugging",
    description: "Validate device behavior and investigate issues through structured debugging.",
  },
];

const connectivityCapabilityDetails = [
  {
    title: "Device connectivity",
    description: "Connect compatible devices through appropriate communication methods.",
  },
  {
    title: "Protocol integration",
    description: "Enable communication between devices and systems using supported protocols.",
  },
  {
    title: "Middleware and data exchange",
    description: "Route and transform device messages between connected components.",
  },
  {
    title: "API and system integration",
    description: "Connect device data with software services through appropriate interfaces.",
  },
];

const softwareCapabilityDetails = [
  {
    title: "Application development",
    description: "Develop application interfaces and workflows that make connected-system functionality accessible to users.",
  },
  {
    title: "Data visualization and interfaces",
    description: "Present device information and operational data through clear, useful application interfaces.",
  },
  {
    title: "Application and system integration",
    description: "Connect application workflows with relevant device data and supporting services.",
  },
  {
    title: "Operational functionality",
    description: "Organize application features around practical monitoring, information access, and user workflows.",
  },
];

const cloudCapabilityDetails = [
  {
    title: "Cloud platform integration",
    description: "Connect compatible services and platform components to support connected-system workflows.",
  },
  {
    title: "Data management",
    description: "Organize and make device-generated information available to relevant applications and services.",
  },
  {
    title: "Analytics and data access",
    description: "Help applications present and use operational information effectively.",
  },
  {
    title: "Web and digital experiences",
    description: "Build interfaces that make connected-system information accessible to users.",
  },
];

export default function CapabilitiesSection() {
  const [selectedId, setSelectedId] = useState(capabilities[0].id);
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  const selectedCapability = capabilities.find(({ id }) => id === selectedId) ?? capabilities[0];
  const isEmbeddedSelected = selectedCapability.icon === "chip";
  const isConnectivitySelected = selectedCapability.icon === "connectivity";
  const isSoftwareSelected = selectedCapability.icon === "application";
  const isCloudSelected = selectedCapability.icon === "cloud";

  return (
    <section className="capabilities-section" id="capabilities" aria-labelledby="capabilities-title">
      <div className="capabilities-container">
        <div className="capabilities-intro">
          <p className="capabilities-eyebrow">WHAT WE ENGINEER</p>
          <h2 id="capabilities-title">From connected devices to intelligent digital experiences.</h2>
          <p className="capabilities-description">
            Explore the four engineering capabilities that bring AIoT systems together — from embedded hardware and connectivity to applications, cloud platforms, and data-driven experiences.
          </p>
        </div>

        <div className="capability-selector" role="group" aria-label="Select an engineering capability">
          {capabilities.map((capability) => {
            const isSelected = capability.id === selectedId;

            return (
              <button
                key={capability.id}
                type="button"
                className={`capability-selector-button${isSelected ? " is-selected" : ""}`}
                aria-label={`Select ${capability.title}`}
                aria-pressed={isSelected}
                aria-controls="capability-details"
                aria-expanded={isSelected && (isEmbeddedSelected || isConnectivitySelected || isSoftwareSelected || isCloudSelected) && detailsExpanded}
                onClick={() => {
                  setSelectedId(capability.id);
                  setDetailsExpanded(false);
                }}
              >
                <CapabilityBackground icon={capability.icon} />
              </button>
            );
          })}
        </div>

        <div className="capability-details" id="capability-details" aria-live="polite" aria-atomic="true">
          {isEmbeddedSelected ? (
            <ExpandableCapabilityPanel
              key={selectedCapability.id}
              eyebrow="EMBEDDED & FIRMWARE"
              heading="Intelligence at the device level."
              description="Firmware and sensor integration that connect physical devices with intelligent digital systems."
              labels={["Firmware Development", "Sensor Integration", "Device Interfaces"]}
              detailsHeading="Embedded engineering, in detail"
              detailsId="embedded-capability-details"
              detailsHeadingId="embedded-details-heading"
              details={embeddedCapabilityDetails}
              expanded={detailsExpanded}
              onToggle={() => setDetailsExpanded((isExpanded) => !isExpanded)}
              illustration={<EmbeddedEngineeringIllustration />}
              embeddedStyleAliases
            />
          ) : isConnectivitySelected ? (
            <ExpandableCapabilityPanel
              key={selectedCapability.id}
              eyebrow="CONNECTIVITY & MIDDLEWARE"
              heading="Connecting devices. Enabling data flow."
              description="Connect devices, communication protocols, and software services for seamless data exchange across connected systems."
              labels={["Device Connectivity", "Protocol Integration", "APIs & Middleware"]}
              detailsHeading="Connectivity engineering, in detail"
              detailsId="connectivity-capability-details"
              detailsHeadingId="connectivity-details-heading"
              details={connectivityCapabilityDetails}
              expanded={detailsExpanded}
              onToggle={() => setDetailsExpanded((isExpanded) => !isExpanded)}
              illustration={<ConnectivityIllustration />}
            />
          ) : isSoftwareSelected ? (
            <ExpandableCapabilityPanel
              key={selectedCapability.id}
              eyebrow="SOFTWARE & APPLICATIONS"
              heading="Turning connected data into useful applications."
              description="Developing applications that turn connected-device data into useful functionality."
              labels={["Application Development", "Data-Driven Interfaces", "System Integration"]}
              detailsHeading="Software engineering, in detail"
              detailsId="software-capability-details"
              detailsHeadingId="software-details-heading"
              details={softwareCapabilityDetails}
              expanded={detailsExpanded}
              onToggle={() => setDetailsExpanded((isExpanded) => !isExpanded)}
              illustration={<SoftwareApplicationsIllustration />}
            />
          ) : isCloudSelected ? (
            <ExpandableCapabilityPanel
              key={selectedCapability.id}
              eyebrow="CLOUD, DATA & DIGITAL EXPERIENCE"
              heading="From connected data to digital experiences."
              description="Cloud platforms, data services, and digital interfaces that make connected-system information accessible and useful."
              labels={["Cloud Platforms", "Data Services", "Web Experiences"]}
              detailsHeading="Cloud, data & digital experience, in detail"
              detailsId="cloud-capability-details"
              detailsHeadingId="cloud-details-heading"
              details={cloudCapabilityDetails}
              expanded={detailsExpanded}
              onToggle={() => setDetailsExpanded((isExpanded) => !isExpanded)}
              illustration={<CloudDataIllustration />}
            />
          ) : (
            <div className="capability-detail-content" key={selectedCapability.id}>
              <div>
                <p className="capability-detail-label">CAPABILITY</p>
                <h3>{selectedCapability.title}</h3>
              </div>
              <div className="capability-detail-copy">
                <p>{selectedCapability.description}</p>
                <ul aria-label="Technology layers">
                  {selectedCapability.layers.map((layer) => (
                    <li key={layer}>{layer}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
