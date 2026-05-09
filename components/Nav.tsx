import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Site header">
      <div className="container">
        <a href="/" aria-label="Hi Friction home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/HiFriction-Logo-Dark.png" alt="Hi Friction" height={36} style={{ width: "auto" }} />
        </a>
      </div>
    </nav>
  );
}
