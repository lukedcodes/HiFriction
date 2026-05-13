import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import { getAllPosts, postBySlug } from "@/lib/posts";
import styles from "./page.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Hi Friction`,
    description: post.preview,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.preview,
      type: "article",
      publishedTime: post.datePublished,
      url: `/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.preview,
    },
  };
}

export default async function PostPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const base = post.filename.replace(/\.md$/, "");
  const { default: Content } = await import(`@/content/blog/${base}.md`);

  return (
    <section className="section">
      <div className="container-md">
        <a href="/blog" className={styles.back}>← Back to blog</a>
        <ArticleJsonLd post={post} />
        <article className="prose">
          <Content />
        </article>
      </div>
    </section>
  );
}
