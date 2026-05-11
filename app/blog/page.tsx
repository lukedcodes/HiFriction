import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog — Hi Friction",
  description: "Notes from the team on building a social network with humans in mind.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Hi Friction",
    description: "Notes from the team on building a social network with humans in mind.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <section className="section">
      <div className="container-md">
        <header className={styles.header}>
          <h1>Blog</h1>
          <p className="lede">
            Notes from the team — on bots, on people, on the small design choices
            that make a social network feel like one again.
          </p>
        </header>

        <ul className={styles.list}>
          {posts.map(({ slug, title, preview }) => (
            <li key={slug} className={styles.item}>
              <a href={`/blog/${slug}`} className={styles.link}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.preview}>{preview}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
