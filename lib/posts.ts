export type Post = {
  slug: string;
  title: string;
  preview: string;
  description: string;
  datePublished: string;
};

export const posts: Post[] = [
  {
    slug: "why-we-built-hifriction",
    title: "Why we built a social network that's actually hard to join",
    preview:
      "Friction has a bad name on the internet. We think a little of it is the only honest way to keep a social network human.",
    description:
      "Why we deliberately add friction to keep a social network human — the design philosophy behind Hi Friction.",
    datePublished: "2026-05-04",
  },
  {
    slug: "the-bot-problem",
    title: "The bot problem is worse than you think",
    preview:
      "Most of what you read online wasn't written by anyone. Here's why that matters more than the platforms want to admit.",
    description:
      "Most online conversation is no longer written by humans. Why the big platforms can't fix it, and what we're doing instead.",
    datePublished: "2026-04-22",
  },
  {
    slug: "humanity-tokens",
    title: "What is a Humanity Token, and how do you earn one?",
    preview:
      "A short explainer on the small unit of trust that makes the rest of the network work.",
    description:
      "An explainer on Humanity Tokens — the continuous, human-only signal that gates posting on Hi Friction.",
    datePublished: "2026-04-09",
  },
];

export function postBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
