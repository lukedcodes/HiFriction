import styles from "./Problem.module.css";

const stats = [
  {
    figure: "47%",
    description: "of internet traffic is non-human, according to Imperva's Bad Bot Report.",
  },
  {
    figure: "5 billion",
    description:
      "fake accounts removed by Meta in a single year — their own disclosure.",
  },
  {
    figure: "~$1.3bn",
    description:
      "lost annually to influencer marketing fraud from fake followers and bot engagement.",
  },
];

export default function Problem() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="problem-heading">
      <div className="container">
        <h2 id="problem-heading" className={styles.heading}>
          Social media wasn't supposed to be this.
        </h2>

        <div className={styles.body}>
          <p>
            Somewhere between optimising for growth and removing every barrier, the
            humans left. Or got drowned out. Right now, an estimated 47% of internet
            traffic is non-human. Bots write posts. Bots leave comments. Bots follow
            you back. The platforms know. They just don't care enough to fix it.
          </p>
          <p className={styles.callout}>We do.</p>
        </div>

        <ul className={styles.stats} aria-label="Key statistics">
          {stats.map(({ figure, description }) => (
            <li key={figure} className={styles.stat}>
              <span className={styles.figure}>{figure}</span>
              <span className={styles.description}>{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
