import WaitlistForm from "./WaitlistForm";
import Counter from "./Counter";
import styles from "./WaitlistCTA.module.css";

export default function WaitlistCTA() {
  return (
    <section id="waitlist" className="section" aria-labelledby="cta-heading">
      <div className={`container ${styles.layout}`}>
        <div className={`card ${styles.formCard}`}>
          <WaitlistForm />
          <Counter />
          <p className={styles.reassurance}>
            We won't sell your email, spam your inbox, or send you a
            bot-generated newsletter. That would be embarrassing for us.
          </p>
        </div>

        <div className={styles.copyCol}>
          <div className={styles.badge} aria-label="Original Human badge">
            <span className={styles.badgeIcon} aria-hidden="true">✓</span>
            <span className={styles.badgeLabel}>Original Human</span>
          </div>

          <h2 id="cta-heading" className={styles.heading}>
            The first wave gets something no one else will.
          </h2>

          <p className={styles.body}>
            Get in early and your username is yours from day one — no one else
            can take it.
          </p>
          <p className={styles.body}>
            Founding members carry the Original Human badge permanently. It
            marks you as someone who was here before the bots even tried.
            That's not a perk. That's history.
          </p>
        </div>
      </div>
    </section>
  );
}
