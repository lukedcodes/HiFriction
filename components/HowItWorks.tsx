import styles from "./HowItWorks.module.css";

const layers = [
  {
    num: "01",
    title: "Signup Check",
    body: "Liveness selfie + pulse check. Two minutes. Confirms you're a moving, breathing person.",
    icon: SignupIcon,
  },
  {
    num: "02",
    title: "Passive Monitoring",
    body: "Behavioural analysis runs in the background. Flags inhuman patterns. You never see it.",
    icon: MonitorIcon,
  },
  {
    num: "03",
    title: "Human Challenges",
    body: "Unexpected prompts. Open-ended, creative, impossible to fake. Earn Humanity Tokens.",
    icon: ChallengeIcon,
  },
  {
    num: "04",
    title: "Community Vouching",
    body: "Real members vouch for new ones. A visible chain of trust. Your score matters.",
    icon: VouchIcon,
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="how-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="how-heading" className={styles.heading}>How Hi Friction Works</h2>
          <p className={styles.sub}>4 Layers, No bots.</p>
        </div>

        <ul className={styles.grid}>
          {layers.map(({ num, title, body, icon: Icon }) => (
            <li key={num} className={styles.layer}>
              <Icon />
              <p className={styles.layerLabel}>Layer {num}</p>
              <h3 className={styles.layerTitle}>{title}</h3>
              <p className={styles.layerBody}>{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SignupIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="13" cy="11" r="5" />
      <path d="M4 28v-1.5A6.5 6.5 0 0 1 10.5 20h5" />
      <path d="m20 24 3 3 6-6" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 16s4.5-9 13-9 13 9 13 9-4.5 9-13 9S3 16 3 16Z" />
      <circle cx="16" cy="16" r="4" />
    </svg>
  );
}

function ChallengeIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M28 19a3 3 0 0 1-3 3H11l-6 6V8a3 3 0 0 1 3-3h17a3 3 0 0 1 3 3v11Z" />
      <path d="M13 13a3 3 0 1 1 3.5 3v1.5" />
      <line x1="16.5" y1="20" x2="16.5" y2="20.01" />
    </svg>
  );
}

function VouchIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="4.5" />
      <path d="M3 27v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2" />
      <circle cx="22" cy="11" r="3.5" />
      <path d="M29 25v-1.5a4.5 4.5 0 0 0-3.5-4.4" />
    </svg>
  );
}
