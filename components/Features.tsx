import styles from "./Features.module.css";

const cards = [
  {
    title: "Verify Humanity",
    main: "We check you're human before you post. Not once — continuously.",
    trust: "Nothing creepy. Nothing kept.",
    icon: <IconVerify />,
  },
  {
    title: "Post With Intention",
    main: "A little friction goes a long way. Less spam. Less fake. More things worth reading.",
    trust: "Verified Humans only. Obviously.",
    icon: <IconPen />,
  },
  {
    title: "Better Conversations",
    main: "This is what social media feels like when the people on it are all actually people.",
    trust: "No Bots. Just real people. That's it.",
    icon: <IconPeople />,
  },
];

export default function Features() {
  return (
    <section id="features" className="section" aria-labelledby="features-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="features-heading">How Hi Friction Works</h2>
        </div>

        <ul className={styles.grid} aria-label="How Hi Friction works">
          {cards.map(({ title, main, trust, icon }) => (
            <li key={title} className={`card ${styles.card}`}>
              <div className={styles.icon} aria-hidden="true">{icon}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardMain}>{main}</p>
              <p className={styles.cardTrust}>{trust}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IconVerify() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="11" r="6" stroke="var(--accent)" strokeWidth="1.75" />
      <path d="M8 28c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="var(--accent)" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="24" cy="24" r="5" fill="rgba(3,105,81,0.1)" stroke="var(--accent)" strokeWidth="1.5" />
      <path d="M21.5 24l2 2 3-3" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPen() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 4l6 6-16 16H6v-6L22 4z" stroke="var(--accent)" strokeWidth="1.75" strokeLinejoin="round" fill="rgba(3,105,81,0.08)" />
      <path d="M19 7l6 6" stroke="var(--hf-emerald-300)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="8" r="4" stroke="var(--accent)" strokeWidth="1.75" />
      <circle cx="6" cy="22" r="4" stroke="var(--accent)" strokeWidth="1.75" />
      <circle cx="26" cy="22" r="4" stroke="var(--accent)" strokeWidth="1.75" />
      <path d="M16 12L6 18M16 12L26 18M6 22h20" stroke="var(--hf-emerald-300)" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}
