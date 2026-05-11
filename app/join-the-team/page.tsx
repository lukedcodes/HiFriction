import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Join the Team — Hi Friction",
  description: "Open roles and how to get in touch about working on Hi Friction.",
  alternates: { canonical: "/join-the-team" },
};

type Role = {
  title: string;
  team: string;
  summary: string;
};

const roles: Role[] = [
  {
    title: "Flutter Developer",
    team: "Mobile",
    summary:
      "Build and ship the Hi Friction mobile app — iOS and Android — alongside a small product team. Comfortable with Dart, Flutter, and the patience required to make something feel fast.",
  },
  {
    title: "Marketing Lead",
    team: "Growth",
    summary:
      "Own how we tell the Hi Friction story — to press, to communities, to the people who'd love this but haven't heard of it yet. Light on jargon, heavy on taste.",
  },
  {
    title: "Backend Engineer",
    team: "Platform",
    summary:
      "Help build the systems that keep the network human — from verification to trust signals to the boring-but-important pipes underneath.",
  },
  {
    title: "Community Manager",
    team: "Communities",
    summary:
      "Spend your days inside Hi/ communities — helping moderators, spotting patterns, and being the human face of the team to the humans who use it.",
  },
];

export default function JoinTheTeamPage() {
  return (
    <section className="section">
      <div className="container-md">
        <header className={styles.header}>
          <h1>Join the Team</h1>
          <p className="lede">
            We're a small team building something we actually want to use. If
            that sounds interesting, we'd love to hear from you — even if there
            isn't a role here that fits perfectly.
          </p>
        </header>

        <div className={styles.body}>
          <h2>How to get in touch</h2>
          <p>
            Email{" "}
            <a href="mailto:careers@hifriction.com">careers@hifriction.com</a>{" "}
            with a short note about you and, if you have one, a link to
            something you've made. CVs are fine, but they're not the point.
          </p>

          <h2>Roles we're looking to fill</h2>
          <ul className={styles.roles}>
            {roles.map((role) => (
              <li key={role.title} className={styles.role}>
                <p className={styles.team}>{role.team}</p>
                <h3 className={styles.title}>{role.title}</h3>
                <p className={styles.summary}>{role.summary}</p>
              </li>
            ))}
          </ul>

          <p className={styles.aside}>
            Don't see your role? Write anyway. We're small — we mostly hire
            people we wish we'd met sooner.
          </p>
        </div>
      </div>
    </section>
  );
}
