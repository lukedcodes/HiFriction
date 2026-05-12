// Archived — superseded by the 3-up cards + single-column scroll layout.
// Kept here in case we want to roll back the 50/50 split + token pills.
import type { ComponentType, HTMLAttributes, SVGProps } from "react";
import styles from "./Challenges.legacy.module.css";

type ChallengeType = "written" | "video" | "puzzle" | "pulse";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const TYPE_META: Record<ChallengeType, { label: string; Icon: IconComponent }> = {
  written: { label: "Written", Icon: WrittenIcon },
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

type Challenge = { type: ChallengeType; prompt: string; tokens: number };

const challenges: Challenge[] = [
  { type: "video", prompt: "Show us your view right now.", tokens: 3 },
  { type: "puzzle", prompt: "Which of these was written by a human?", tokens: 2 },
  { type: "pulse", prompt: "Hold your finger over the camera. Let's find your pulse.", tokens: 5 },
  { type: "video", prompt: "Find something older than you.", tokens: 3 },
  { type: "puzzle", prompt: "Spot the difference between these two photos.", tokens: 2 },
  { type: "video", prompt: "Show us the sky wherever you are.", tokens: 3 },
  { type: "pulse", prompt: "Cover the lens. Hold still. Breathe.", tokens: 5 },
  { type: "video", prompt: "Find something that makes you happy.", tokens: 3 },
  { type: "puzzle", prompt: "Arrange these events in human order.", tokens: 2 },
  { type: "video", prompt: "Find something blue in your surroundings.", tokens: 3 },
  { type: "video", prompt: "Show us something you walk past every day.", tokens: 3 },
  { type: "video", prompt: "Find something that needs fixing.", tokens: 3 },
  { type: "video", prompt: "Show us what's in your fridge right now.", tokens: 3 },
  { type: "video", prompt: "Find the most worn-out thing near you.", tokens: 3 },
  { type: "video", prompt: "Show us something you made with your hands.", tokens: 3 },
  { type: "puzzle", prompt: "Which of these photos was taken by a human?", tokens: 2 },
  { type: "puzzle", prompt: "Pick the caption a real person wrote.", tokens: 2 },
  { type: "pulse", prompt: "One finger. One lens. Let's see if you're alive.", tokens: 5 },
  { type: "video", prompt: "Find something that belongs to someone else.", tokens: 3 },
];

export default function Challenges() {
  return (
    <section className="section" aria-labelledby="challenges-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="challenges-heading">Every challenge proves something a bot can't fake</h2>
          <p className={styles.sub}>Spoiler: one of these checks your pulse.</p>
        </div>

        <div className={styles.split}>
          <ul className={styles.types}>
            {typeCards.map(({ type, desc, tokens }) => {
              const { Icon, label } = TYPE_META[type];
              const tokenText = `×${tokens} Humanity ${tokens === 1 ? "Token" : "Tokens"}`;
              return (
                <li key={type} className={styles.typeRow}>
                  <Icon className={styles.typeIcon} aria-hidden="true" />
                  <div className={styles.typeBody}>
                    <div className={styles.typeHead}>
                      <h3 className={styles.typeName}>{label}</h3>
                      <span className={`${styles.tokenPill} ${styles[`bg-${type}`]}`}>{tokenText}</span>
                    </div>
                    <p className={styles.typeDesc}>{desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className={styles.feed} aria-label="Example challenges">
            <FeedColumn challenges={challenges.filter((_, i) => i % 2 === 0)} variant="a" />
            <FeedColumn challenges={challenges.filter((_, i) => i % 2 === 1)} variant="b" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeedColumn({
  challenges,
  variant,
}: {
  challenges: Challenge[];
  variant: "a" | "b";
}) {
  const columnClass = variant === "a" ? styles.columnA : styles.columnB;
  return (
    <div className={`${styles.column} ${columnClass}`}>
      <div className={styles.columnTrack}>
        {challenges.map((c, i) => (
          <ExampleCard key={i} challenge={c} />
        ))}
        {challenges.map((c, i) => (
          <ExampleCard key={`dup-${i}`} challenge={c} aria-hidden="true" />
        ))}
      </div>
    </div>
  );
}

function ExampleCard({
  challenge,
  ...props
}: { challenge: Challenge } & HTMLAttributes<HTMLElement>) {
  const { Icon, label } = TYPE_META[challenge.type];
  const tokenText = `×${challenge.tokens} Humanity ${challenge.tokens === 1 ? "Token" : "Tokens"}`;
  return (
    <article className={styles.exampleCard} {...props}>
      <p className={`${styles.examplePill} ${styles[`bg-${challenge.type}`]}`}>
        <Icon className={styles.examplePillIcon} aria-hidden="true" />
        {label}
      </p>
      <p className={styles.examplePrompt}>&ldquo;{challenge.prompt}&rdquo;</p>
      <p className={`${styles.exampleReward} ${styles[`bg-${challenge.type}`]}`}>{tokenText}</p>
    </article>
  );
}

function WrittenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4l6 6L10 28H4v-6L22 4z" />
      <path d="M18 7l6 6" />
    </svg>
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
