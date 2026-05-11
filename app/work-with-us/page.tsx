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
            Hi Friction is a small network of verified humans who chose to be
            here. If you make something worth their attention, read on.
          </p>
        </header>

        <div className={styles.body}>
          <h2>What advertising looks like here</h2>
          <p>
            No auctions. No retargeting. No behavioural profiles built from
            stalking people across the internet.
          </p>

          <p>
            Ads on Hi Friction are limited, clearly labelled, and placed where
            they actually make sense. Next to the communities most likely to
            care about what you do. You're not buying reach measured in bots
            and inflated dashboards. You're buying real people. We checked.
          </p>

          <h2>What we offer</h2>
          <ul className={styles.list}>
            <li>
              <strong>Community sponsorships.</strong> Pick a{" "}
              <code>/hi/</code> community and sponsor it for a quarter. Your
              brand alongside the people who already care about your category.
              Simple placement, no noise.
            </li>
            <li>
              <strong>Newsletter placements.</strong> One spot in our weekly
              digest. Well-made, not buried.
            </li>
            <li>
              <strong>Product partnerships.</strong> Campaigns we build
              together, properly. We're selective. That's the point.
            </li>
          </ul>

          <h2>Get in touch</h2>
          <p>
            Email{" "}
            <a href="mailto:business@hifriction.com">business@hifriction.com</a>{" "}
            with a line or two about what you make and what you're after. A
            real person reads every one.
          </p>
        </div>
      </div>
    </section>
  );
}
