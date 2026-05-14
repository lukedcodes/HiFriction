import { menuItems } from "@/lib/menu";
import { getAllPosts } from "@/lib/posts";
import styles from "./Footer.module.css";

const socials = [
  { href: "https://x.com/hifriction", label: "X", icon: XIcon },
  { href: "https://instagram.com/hifriction", label: "Instagram", icon: InstagramIcon },
  { href: "https://reddit.com/r/hifriction", label: "Reddit", icon: RedditIcon },
];

export default function Footer() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/HiFriction-Logo-Light.png" alt="Hi Friction" width={164} height={36} />
          <p className={styles.tagline}>Humans only. We checked.</p>
          <p className={styles.about}>
            The internet was built by people. Somewhere along the way, that got forgotten. We're doing something about it.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.col}>
            <p className={styles.colHeading}>Site</p>
            <ul className={styles.linkList}>
              {menuItems.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={styles.link}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colHeading}>Reading</p>
            <ul className={styles.linkList}>
              {recentPosts.map(({ slug, title }) => (
                <li key={slug}>
                  <a href={`/blog/${slug}/`} className={styles.link}>{title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colHeading}>Find us</p>
            <ul className={styles.socialList}>
              {socials.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
            <a href="mailto:hello@hifriction.com" className={styles.email}>
              hello@hifriction.com
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© {new Date().getFullYear()} Hi Friction. All rights reserved.</p>
      </div>
    </footer>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M22 12.14a2.06 2.06 0 0 0-3.5-1.43c-1.37-1-3.27-1.62-5.37-1.7l.91-4.27 2.97.63a1.5 1.5 0 1 0 .15-.9l-3.32-.7a.46.46 0 0 0-.54.34l-1.02 4.8c-2.13.06-4.06.7-5.45 1.7A2.06 2.06 0 1 0 4.56 14a4.2 4.2 0 0 0-.06.64c0 3.27 3.8 5.93 8.5 5.93s8.5-2.66 8.5-5.93c0-.22-.02-.43-.06-.64.93-.32 1.56-1.2 1.56-2.21M7 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m8.34 4.4c-1 1-2.6 1.1-3.34 1.1-.74 0-2.34-.1-3.34-1.1a.36.36 0 1 1 .52-.5c.63.63 1.97.85 2.82.85.85 0 2.2-.22 2.82-.85a.36.36 0 1 1 .52.5M15 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </svg>
  );
}
