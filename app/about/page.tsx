import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us — Hi Friction",
  description: "Why we're building a social network with humans at its centre.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container-md">
        <header className={styles.header}>
          <h1>About Us</h1>
          <p className="lede">
            We're a small team building a social network the internet seems to
            have forgotten how to make — one where the people on it are, in fact,
            people.
          </p>
        </header>

        <div className={styles.body}>
          <p>
            Hi Friction started with a frustration that won't be new to you: the
            sense that more and more of what you read online wasn't written by
            anyone. That the feeds are louder, faster, and somehow emptier than
            they used to be.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/HiFriction-Icon-C.png"
            alt=""
            className={styles.inlineImage}
          />

          <h2>What we believe</h2>
          <p>
            Social media was better when humans were posting. We don't think
            that's nostalgia — we think it's a design problem worth solving. The
            answer isn't more moderation, more AI, or more engagement metrics.
            It's a small amount of honest friction in the right places.
          </p>

          <p>
            Every user is verified human. Not once, at sign-up, but continuously —
            in ways that are visible to you and respectful of your time.
          </p>

          <h2>Who we are</h2>
          <p>
            We're engineers, designers, and writers who got tired of complaining
            about the state of the internet and decided to try to make a smaller,
            quieter one instead. We're based across the UK and Europe, and we're
            still small enough that everyone working on the product talks to
            people using it.
          </p>

          <h2>Where to find us</h2>
          <p>
            The fastest way to reach us is{" "}
            <a href="mailto:hello@hifriction.com">hello@hifriction.com</a>. For
            advertising and partnerships, see{" "}
            <a href="/work-with-us">Work With Us</a>. If you'd like to help build
            this, <a href="/join-the-team">Join the Team</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
