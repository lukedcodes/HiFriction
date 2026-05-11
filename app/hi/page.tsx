import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hi/ Communities — Hi Friction",
  description: "Browse Hi/ communities — small corners of Hi Friction for the things you care about.",
  alternates: { canonical: "/hi" },
};

type Community = {
  slug: string;
  description: string;
  members: string;
};

const communities: Community[] = [
  { slug: "formula1", description: "Race weekends, tyre strategy, and the slow death of the V10.", members: "12.4k" },
  { slug: "gardening", description: "Soil, seeds, and the long game. Photos welcome, no AI plants.", members: "8.9k" },
  { slug: "filmmakers", description: "Independent film talk — from script doctoring to colour grading.", members: "6.1k" },
  { slug: "cycling", description: "Commuters, tourers, and people who count their grams.", members: "5.7k" },
  { slug: "books", description: "What you're reading, and what it's doing to you.", members: "11.2k" },
  { slug: "homecooks", description: "Tonight's dinner, tomorrow's leftovers. Recipes that actually work.", members: "9.3k" },
  { slug: "indiehackers", description: "Solo founders shipping small, useful things.", members: "4.8k" },
  { slug: "running", description: "Couch-to-5k to ultramarathoners. Everyone counts.", members: "7.0k" },
];

export default function HiPage() {
  return (
    <section className="section">
      <div className="container-md">
        <header className={styles.header}>
          <h1>Hi/ Communities</h1>
          <p className="lede">
            Every <code className={styles.code}>/hi/</code> is a smaller corner of Hi Friction —
            built around something specific you care about. Formula 1. Gardening. Filmmaking.
            Real people, talking about real things. Below are some of the most active right now.
          </p>
        </header>

        <ul className={styles.grid}>
          {communities.map(({ slug, description, members }) => (
            <li key={slug}>
              <a href={`/hi/${slug}`} className={styles.card}>
                <p className={styles.slug}>/hi/{slug}</p>
                <p className={styles.description}>{description}</p>
                <p className={styles.members}>{members} members</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
