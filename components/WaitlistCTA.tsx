import WaitlistForm from "./WaitlistForm";
import styles from "./WaitlistCTA.module.css";

export default function WaitlistCTA() {
  return (
    <section id="waitlist" className="section" aria-labelledby="cta-heading">
      <div className={`container-md ${styles.layout}`}>
        <div className={styles.badge} aria-label="Original Human badge">
          <span className={styles.badgeIcon} aria-hidden="true">✓</span>
          <span className={styles.badgeLabel}>Original Human</span>
        </div>

        <h2 id="cta-heading" className={styles.heading}>
          Reserve your username now!
        </h2>

        <p className={styles.body}>
          Your profile carries the Original Human badge permanently. You were here before the bots tried.
          <br />
          This is the only time we'll offer this.
        </p>

        <div className={styles.formWrap}>
          <WaitlistForm />
        </div>

        <p className={styles.reassurance}>
          We won't sell your email, spam your inbox, or send you a
          bot-generated newsletter. That would be embarrassing for us.
        </p>
      </div>
    </section>
  );
}
