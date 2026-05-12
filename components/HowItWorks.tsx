import styles from "./HowItWorks.module.css";

const steps = [
  {
    numeral: "1",
    image: "/hf-nobots-01.jpg",
    title: "You sign up. We check.",
    body: "Liveness selfie. Phone verification. Two minutes. Confirms you're a moving, breathing person. Welcome.",
  },
  {
    numeral: "2",
    image: "/hf-nobots-02.jpg",
    title: "We keep checking. Quietly.",
    body: "Behavioural monitoring runs in the background. Inhuman patterns get flagged. You never see it. It just works.",
  },
  {
    numeral: "3",
    image: "/hf-nobots-03.jpg",
    title: "Challenges keep you human.",
    body: "Periodically, we'll ask you something a bot can never answer. Show us your view right now. Describe your commute in four words. Find something older than you. Complete a challenge, earn a Humanity Token.",
  },
  {
    numeral: "4",
    image: "/hf-nobots-04.jpg",
    title: "The community vouches.",
    body: "Real members vouch for new ones. Your Human Score grows. The top tier? Verified Human. The most coveted badge on the network.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" aria-labelledby="how-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="how-heading">Here's how we keep the bots out.</h2>
          <p className={styles.sub}>Spoiler: it's more fun than a CAPTCHA.</p>
        </div>

        <ul className={styles.grid} aria-label="Verification steps">
          {steps.map(({ numeral, image, title, body }) => (
            <li key={numeral} className={`card ${styles.step}`}>
              <div className={styles.content}>
                <span className={styles.numeral} aria-hidden="true">{numeral}</span>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepBody}>{body}</p>
              </div>
              <div className={styles.imageWrap} aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt="" className={styles.image} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
