import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hi/ Communities — Hi Friction",
  description: "Browse Hi/ communities — small corners of Hi Friction for the things you care about.",
  alternates: { canonical: "/hi/" },
};

type Community = {
  slug: string;
  description: string;
};

const communities: Community[] = [
  { slug: "formula1", description: "Race weekends, tyre strategy, and the slow death of the V10." },
  { slug: "gardening", description: "Soil, seeds, and the long game. Photos welcome, no AI plants." },
  { slug: "filmmakers", description: "Independent film talk from script doctoring to colour grading." },
  { slug: "cycling", description: "Commuters, tourers, and people who count their grams." },
  { slug: "books", description: "What you're reading, and what it's doing to you." },
  { slug: "homecooks", description: "Tonight's dinner, tomorrow's leftovers. Recipes that actually work." },
  { slug: "indiehackers", description: "Solo founders shipping small, useful things." },
  { slug: "running", description: "Couch-to-5k to ultramarathoners. Everyone counts." },
];

export default function HiPage() {
  return (
    <section className="section">
      <div className="container-md">
        <header className="page-header">
          <h1>Hi/ Communities</h1>
          <p className="lede">
            Every <code className={styles.code}>/hi/</code> is a smaller corner
            of Hi Friction, built around something specific you care about.
            Formula 1. Gardening. Filmmaking. Real people, talking about real
            things. These are some examples of communities we're building first. Come help
            shape them.
          </p>
        </header>

        <ul className={styles.grid}>
          {communities.map(({ slug, description }) => (
            <li key={slug} className={`card ${styles.communityCard}`}>
              <p className={styles.slug}>/hi/{slug}</p>
              <p className={styles.description}>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
