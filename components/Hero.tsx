import Nav from "./Nav";
import ScrollButton from "./ScrollButton";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <Nav />

      <div className={styles.content}>
        <div className={styles.textCol}>
          <h1 className={`fade-up ${styles.h1}`}>
            Social media was better when{" "}
            <span className={styles.accent}>humans</span> were posting.
          </h1>

          <p className={`fade-up fade-up-delay-1 ${styles.sub}`}>
            We built a social network that deliberately adds friction. Enough to
            stop bots. Not enough to stop you. Every user is verified human —
            not just at signup, but continuously.
          </p>

          <div className={`fade-up fade-up-delay-2 ${styles.ctaRow}`}>
            <div className={styles.buttonRow}>
              <ScrollButton targetId="waitlist" className={styles.ctaButton}>
                Join the waitlist
              </ScrollButton>
              <ScrollButton targetId="features" className={styles.learnMoreButton}>
                Learn more
              </ScrollButton>
            </div>
            <p className={styles.badge}>
              Founding members get the Original Human badge.
            </p>
          </div>
        </div>

        <div className={`fade-up fade-up-delay-2 ${styles.visualCol}`} aria-hidden="true">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className={styles.phone}>
      <div className={styles.phoneNotch} />
      <div className={styles.phoneScreen}>
        <div className={styles.mockPost}>
          <div className={styles.mockAvatar} />
          <div className={styles.mockLines}>
            <div className={styles.mockLine} style={{ width: "70%" }} />
            <div className={styles.mockLine} style={{ width: "90%" }} />
            <div className={styles.mockLine} style={{ width: "55%" }} />
          </div>
        </div>
        <div className={styles.mockBadge}>
          <span className={styles.mockBadgeCheck}>✓</span>
          <span>Original Human</span>
        </div>
        <div className={styles.mockPost}>
          <div className={styles.mockAvatar} />
          <div className={styles.mockLines}>
            <div className={styles.mockLine} style={{ width: "85%" }} />
            <div className={styles.mockLine} style={{ width: "60%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
