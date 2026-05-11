import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import { posts, postBySlug } from "@/lib/posts";
import styles from "./page.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Hi Friction`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.datePublished,
      url: `/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <section className="section">
      <div className="container-md">
        <a href="/blog" className={styles.back}>← Back to blog</a>
        <ArticleJsonLd post={post} />
        <article className={styles.prose}>
          <Content />
        </article>
      </div>
    </section>
  );
}
