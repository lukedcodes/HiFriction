import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  filename: string;
  title: string;
  preview: string;
  datePublished: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map<Post>((filename) => {
    const full = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(full, "utf8");
    const { data, content } = matter(raw);

    const slug = filename.replace(/\.md$/, "").replace(/^\d+[-_]/, "");

    return {
      slug,
      filename,
      title: String(data.title ?? extractTitle(content) ?? slug),
      preview: String(data.preview ?? extractPreview(content)),
      datePublished: toIsoDate(data.datePublished) || fs.statSync(full).mtime.toISOString().slice(0, 10),
    };
  });

  return posts.sort((a, b) => {
    if (b.datePublished !== a.datePublished) return b.datePublished.localeCompare(a.datePublished);
    return b.filename.localeCompare(a.filename);
  });
}

export function postBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

function extractTitle(body: string): string | null {
  const match = body.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function extractPreview(body: string): string {
  const para = body
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .find((p) => p && !p.startsWith("#"));
  if (!para) return "";
  return para.length > 220 ? para.slice(0, 217) + "..." : para;
}

function toIsoDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string") return value;
  return "";
}
