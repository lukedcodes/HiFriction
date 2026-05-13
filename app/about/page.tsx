import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Hi Friction",
  description: "Why we're building a social network with humans at its centre.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container-md">
        <header className="page-header">
          <h1>About Us</h1>
          <p className="lede">
            Hi Friction started with a frustration that won't be new to you.
            The sense that more and more of what you read online wasn't written
            by anyone. That the feeds are louder, faster, and somehow emptier
            than they used to be.
          </p>
        </header>

        <div className="prose">
          <p>
            We got tired of complaining about it and decided to do something
            instead.
          </p>

          <h2>The twist</h2>
          <p>
            Hi Friction was founded by a UX designer. Someone who spent years
            being taught the same rule everyone in the industry knows: remove
            friction. Make it fast, seamless, invisible. The best experience is
            the one the user barely notices.
          </p>

          <p>This is us breaking that rule on purpose.</p>

          <p>
            Because every platform that optimised purely for ease ended up
            flooded with bots, fake accounts, and content nobody actually
            wrote. They removed every barrier and everything got in. A small
            amount of honest friction in the right places turns out to be
            worth more than a frictionless experience that lets anything
            through.
          </p>

          <h2>What we believe</h2>
          <p>
            Social media was better when humans were posting. That's not
            nostalgia. It's a design problem worth solving.
          </p>

          <p>
            The answer isn't more moderation, more AI, or more engagement
            metrics. It's verification that doesn't stop at signup. It's a
            network where every voice is guaranteed to belong to a real
            person. It's friction that means something.
          </p>

          <h2>Our mission</h2>
          <p>
            A world where the internet feels human again. Where you can
            scroll, connect, and have a conversation without wondering if
            there's a real person on the other side. Where the noise is gone
            and what's left is genuinely worth your time.
          </p>

          <h2>Who we are</h2>
          <p>
            Hi Friction is currently two people. A UX Designer and a Developer who built
            a social app together once already and see the state of the internet ever since.
          </p>

          <p>
            We know how these products get built. We know the decisions that
            get made in the name of growth and engagement and scale. We're
            making different ones.
          </p>

          <h2>Say hello</h2>
          <p>
            The fastest way to reach us is{" "}
            <a href="mailto:hello@hifriction.com">hello@hifriction.com</a>. <br />
            For advertising and partnerships, see{" "}
            <a href="/work-with-us">Work With Us</a>. <br />
            If you'd like to help
            build this, <a href="/join-the-team">Join the Team</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
