import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Team — Hi Friction",
  description: "Open roles and how to get in touch about working on Hi Friction.",
  alternates: { canonical: "/join-the-team/" },
};

export default function JoinTheTeamPage() {
  return (
    <section className="section">
      <div className="container-md">
        <header className="page-header">
          <h1>Join the Team</h1>
          <p className="lede">
            We're early. The team is small and we're building something we
            actually want to exist. If that sounds like your kind of problem,
            we'd like to hear from you.
          </p>
        </header>

        <div className="prose">
          <p>
            We're not hiring for specific roles right now. What we're looking
            for is people who get what we're trying to do and have skills that
            could help us do it. Builders, designers, writers, community
            people. If you've read the site and thought "I could help with
            that"... that's the right instinct. Send us something.
          </p>

          <h2>Get in touch</h2>
          <p>
            Email{" "}
            <a href="mailto:careers@hifriction.com">careers@hifriction.com</a>{" "}
            with a short note about you and, if you have one, a link to
            something you've made. CVs are fine but they're not the point.
          </p>
        </div>
      </div>
    </section>
  );
}
