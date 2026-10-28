"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ClientsSection.module.css";

const clients = [
  { name: "Rahm Sensor Development, Inc.", status: "Active", statusType: "active" },
  { name: "Navilli", status: "Active", statusType: "active" },
  { name: "KMCH", status: "Discussions underway", statusType: "discussions" },
] as const;

export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setHasEntered(true);
      observer.disconnect();
    }, { threshold: 0.16 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section}${hasEntered ? ` ${styles.isInView}` : ""}`}
      id="our-work"
      aria-labelledby="clients-title"
    >
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>OUR CLIENTS</p>
          <h2 id="clients-title">Trusted relationships. Connected solutions.</h2>
        </div>
        <ul className={styles.list} aria-label="SupplyChainz clients">
          {clients.map((client) => (
            <li className={styles.card} key={client.name}>
              <h3 className={styles.clientName}>{client.name}</h3>
              <p className={`${styles.status} ${client.statusType === "active" ? styles.active : styles.discussion}`}>
                <span className={styles.statusDot} aria-hidden="true" />
                {client.status}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
