import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog — Hi Friction",
  description: "Notes from the team on building a social network with humans in mind.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Blog — Hi Friction",
    description: "Notes from the team on building a social network with humans in mind.",
    url: "/blog/",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="section">
      <div className="container-md">
        <header className="page-header">
          <h1>Blog</h1>
          <p className="lede">
            Notes on bots, people, and why the internet doesn't have to feel like this.
          </p>
        </header>

        <ul className={styles.list}>
          {posts.map(({ slug, title, preview }) => (
            <li key={slug} className={styles.item}>
              <a href={`/blog/${slug}/`} className={styles.link}>
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
