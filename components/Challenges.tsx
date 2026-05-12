import type { ComponentType, HTMLAttributes, SVGProps } from "react";
import styles from "./Challenges.module.css";

type ChallengeType = "video" | "puzzle" | "pulse";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const TYPE_META: Record<ChallengeType, { label: string; Icon: IconComponent }> = {
  video: { label: "Video", Icon: VideoIcon },
  puzzle: { label: "Puzzle", Icon: PuzzleIcon },
  pulse: { label: "Pulse", Icon: PulseIcon },
};

const typeCards: { type: ChallengeType; desc: string; tokens: number }[] = [
  {
    type: "video",
    desc: "Point your camera at the world. Show us your sky, your view, something real.",
    tokens: 3,
  },
  {
    type: "puzzle",
    desc: "Tasks that need human context — reading a room, spotting what only a person would notice.",
    tokens: 2,
  },
  {
    type: "pulse",
    desc: "Hold your finger over the camera. We detect your heartbeat. Bots don't have one.",
    tokens: 5,
  },
];

type Challenge = { type: ChallengeType; prompt: string };

const challenges: Challenge[] = [
  { type: "puzzle", prompt: "Draw a cat. Doesn't have to be good." },
  { type: "video", prompt: "Find something older than you." },
  { type: "pulse", prompt: "Cover the lens. Hold still. Breathe." },
  { type: "puzzle", prompt: "Spot the difference between these two photos." },
  { type: "video", prompt: "Show us the sky wherever you are right now." },
  { type: "puzzle", prompt: "Which of these was written by a human?" },
  { type: "video", prompt: "Give us a smile. Go on." },
  { type: "pulse", prompt: "Hold your finger over the camera. Let's find your pulse." },
  { type: "puzzle", prompt: "Tap the real photo. One of these is AI." },
  { type: "video", prompt: "Open your fridge. Show us what's in there." },
  { type: "puzzle", prompt: "Finish the doodle. Any way you like." },
  { type: "video", prompt: "Show us your shoes." },
  { type: "puzzle", prompt: "Arrange these into the order a human would." },
  { type: "video", prompt: "Find your favourite snack and show us." },
  { type: "pulse", prompt: "One finger. One lens. Prove you're alive." },
  { type: "puzzle", prompt: "Match the emoji to the emotion." },
  { type: "video", prompt: "Show us the view from where you're sitting." },
  { type: "puzzle", prompt: "Circle the odd one out." },
  { type: "video", prompt: "Find something that makes you happy and show us." },
  { type: "puzzle", prompt: "Drag the pieces into the right order." },
];

export default function Challenges() {
  return (
    <section className="section" aria-labelledby="challenges-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="challenges-heading">Every challenge proves something a bot can't fake</h2>
          <p className={styles.sub}>Spoiler: one of these checks your pulse.</p>
        </div>

        <ul className={styles.types}>
          {typeCards.map(({ type, desc, tokens }) => {
            const { Icon, label } = TYPE_META[type];
            const tokenText = `×${tokens} Humanity ${tokens === 1 ? "Token" : "Tokens"}`;
            return (
              <li key={type} className={`${styles.typeCard} ${styles[`accent-${type}`]}`}>
                <Icon className={styles.typeIcon} aria-hidden="true" />
                <h3 className={styles.typeName}>{label}</h3>
                <p className={styles.typeDesc}>{desc}</p>
                <span className={`${styles.tokenPill} ${styles[`bg-${type}`]}`}>{tokenText}</span>
              </li>
            );
          })}
        </ul>

        <div className={styles.feed} aria-label="Example challenges">
          <div className={styles.feedTrack}>
            {challenges.map((c, i) => (
              <ExampleRow key={i} challenge={c} />
            ))}
            {challenges.map((c, i) => (
              <ExampleRow key={`dup-${i}`} challenge={c} aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExampleRow({
  challenge,
  ...props
}: { challenge: Challenge } & HTMLAttributes<HTMLElement>) {
  const { Icon, label } = TYPE_META[challenge.type];
  return (
    <article className={styles.exampleRow} {...props}>
      <p className={`${styles.examplePill} ${styles[`bg-${challenge.type}`]}`}>
        <Icon className={styles.examplePillIcon} aria-hidden="true" />
        {label}
      </p>
      <p className={styles.examplePrompt}>&ldquo;{challenge.prompt}&rdquo;</p>
    </article>
  );
}

function VideoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="9" width="18" height="14" rx="2" />
      <path d="M21 13l8-4v14l-8-4z" />
    </svg>
  );
}

function PuzzleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 4a7 7 0 0 1 4.5 12.3c-.9.7-1.5 1.7-1.5 2.7v1H13v-1c0-1-.6-2-1.5-2.7A7 7 0 0 1 16 4z" />
      <path d="M13 24h6" />
      <path d="M14 28h4" />
    </svg>
  );
}

function PulseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 27S4 19 4 11a5.5 5.5 0 0 1 11-1.5h0a5.5 5.5 0 0 1 11 1.5c0 4-3 7.5-6 10.5" />
      <path d="M4 16h6l2-3 3 7 3-7 2 3h6" />
    </svg>
  );
}
