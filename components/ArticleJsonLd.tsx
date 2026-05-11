import type { Post } from "@/lib/posts";

const SITE_URL = "https://hifriction.com";

export default function ArticleJsonLd({ post }: { post: Post }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.preview,
    url: `${SITE_URL}/blog/${post.slug}/`,
    datePublished: post.datePublished,
    image: `${SITE_URL}/og-image.jpg`,
    publisher: {
      "@type": "Organization",
      name: "Hi Friction",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/HiFriction-Logo-Light.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}/`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
