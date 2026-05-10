import styles from "./Footer.module.css";

const blogPosts = [
  {
    href: "/blog/why-we-built-hifriction",
    label: "Why we built a social network that's actually hard to join",
  },
  {
    href: "/blog/the-bot-problem",
    label: "The bot problem is worse than you think",
  },
  {
    href: "/blog/humanity-tokens",
    label: "What is a Humanity Token, and how do you earn one?",
  },
];

const socials = [
  { href: "https://x.com/hifriction", label: "X (Twitter)" },
  { href: "https://instagram.com/hifriction", label: "Instagram" },
  { href: "https://reddit.com/r/hifriction", label: "Reddit" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          {/* Plain img preserves aspect ratio without Next.js Image overriding width:auto */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/HiFriction-Logo-Light.png" alt="Hi Friction" height={36} style={{ width: "auto" }} />
          <p className={styles.tagline}>Humans only. We checked.</p>
          <p className={styles.about}>
            The internet was built by people. Somewhere along the way, that got forgotten. We're doing something about it.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.col}>
            <p className={styles.colHeading}>Reading</p>
            <ul className={styles.linkList}>
              {blogPosts.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={styles.link}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colHeading}>Socials</p>
            <ul className={`${styles.linkList} ${styles.socialList}`}>
              {socials.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="mailto:info@hifriction.com" className={styles.email}>
              info@hifriction.com
            </a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© {new Date().getFullYear()} Hi Friction. All rights reserved.</p>
      </div>
    </footer>
  );
}
