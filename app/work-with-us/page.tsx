import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work With Us — Hi Friction",
  description: "Advertising and partnerships on Hi Friction — reach a verified, human audience.",
  alternates: { canonical: "/work-with-us" },
};

export default function WorkWithUsPage() {
  return (
    <section className="section">
      <div className="container-md">
        <header className={styles.header}>
          <h1>Work With Us</h1>
          <p className="lede">
            Hi Friction is a small audience of verified humans who chose to be
            here. If you make something worth their time, we'd like to talk.
          </p>
        </header>

        <div className={styles.body}>
          <h2>What advertising looks like here</h2>
          <p>
            We don't sell attention by the kilo. The feed isn't an auction. Ads
            on Hi Friction are limited, clearly labelled, and shown to people who
            actually opted in to seeing them. No retargeting, no behavioural
            profiles, no tracking beyond what's needed to count impressions.
          </p>

          <p>
            Because every user is verified human, you're paying for real people
            and real reach — not bots inflating impressions in a dashboard.
          </p>

          <h2>What we offer</h2>
          <ul className={styles.list}>
            <li>
              <strong>Community sponsorships.</strong> Sponsor a single{" "}
              <code>/hi/</code> community for a quarter — your brand alongside
              the people who care most about your category.
            </li>
            <li>
              <strong>Newsletter placements.</strong> A single, well-made spot in
              our weekly community digest.
            </li>
            <li>
              <strong>Product partnerships.</strong> Limited integrations and
              campaigns we build together. Selective.
            </li>
          </ul>

          <h2>Get in touch</h2>
          <p>
            Email{" "}
            <a href="mailto:business@hifriction.com">business@hifriction.com</a>{" "}
            with a couple of lines about what you're working on and what you'd
            like to do. A real person reads every one.
          </p>
        </div>
      </div>
    </section>
  );
}
