export type Challenge = {
  prompt: string;
  /** Path to an .mp4/.webm — autoplays muted/looped when present. */
  video?: string;
  /** Backup image. Used as the video poster, or as the backdrop when no video is set. */
  image?: string;
  /** CSS gradient fallback when neither video nor image is set. */
  backdrop?: string;
};

export const challenges: Challenge[] = [
  {
    prompt: "Show us the sky wherever you are.",
    video: "/hero/sky.mp4",
    image: "/hero/sky.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #6BAEE0 0%, #9CC8E8 55%, #B8D4E8 100%)",
  },
  {
    prompt: "Show us something you want to hug.",
    video: "/hero/dog.mp4",
    image: "/hero/dog.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #8B7355 0%, #B8A080 60%, #D4C4A8 100%)",
  },
  {
    prompt: "Where are you right now? Show us.",
    video: "/hero/people.mp4",
    image: "/hero/people.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #3D3D3D 0%, #6B6B6B 60%, #A0A0A0 100%)",
  },
  {
    prompt: "Find water. Any water. Show us.",
    video: "/hero/sea.mp4",
    image: "/hero/sea.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #1A4A6B 0%, #2E7DA8 55%, #5BA3C9 100%)",
  },
  {
    prompt: "Show us your cutest thing.",
    video: "/hero/cat.mp4",
    image: "/hero/cat.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #C4A882 0%, #D9C4A8 60%, #EDE0CC 100%)",
  },
  {
    prompt: "Show us where you're headed.",
    video: "/hero/walking3.mp4",
    image: "/hero/walking3.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #3A3530 0%, #6B5F52 60%, #9E8E7E 100%)",
  },
  {
    prompt: "Show us your city. Right now.",
    video: "/hero/london.mp4",
    image: "/hero/london.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #2C3E50 0%, #4A5568 60%, #718096 100%)",
  },
  {
    prompt: "Show us something alive near you.",
    video: "/hero/plant.mp4",
    image: "/hero/plant.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #2D5016 0%, #4A7C2F 60%, #74A84A 100%)",
  },
  {
    prompt: "Show us where you're heading.",
    video: "/hero/sky2.mp4",
    image: "/hero/sky2.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #6BAEE0 0%, #9CC8E8 55%, #B8D4E8 100%)",
  },
  {
    prompt: "Show us something cute.",
    video: "/hero/dog2.mp4",
    image: "/hero/dog2.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #8B7355 0%, #B8A080 60%, #D4C4A8 100%)",
  },
  {
    prompt: "What's the view from your window right now?",
    video: "/hero/window.mp4",
    image: "/hero/window.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #B8C9D4 0%, #D4E2EA 60%, #EAF0F5 100%)",
  },
  {
    prompt: "Show us what you're up to.",
    video: "/hero/car.mp4",
    image: "/hero/car.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #1C1C1E 0%, #3A3A3C 60%, #636366 100%)",
  },
  {
    prompt: "Show us the street outside right now.",
    video: "/hero/street.mp4",
    image: "/hero/street.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #2A2A2A 0%, #555555 60%, #888888 100%)",
  },
  {
    prompt: "Show us your pet, we love pets.",
    video: "/hero/dog3.mp4",
    image: "/hero/dog3.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #8B7355 0%, #B8A080 60%, #D4C4A8 100%)",
  },
  {
    prompt: "Show us what you're up to right now.",
    video: "/hero/walking2.mp4",
    image: "/hero/walking2.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #3A3530 0%, #6B5F52 60%, #9E8E7E 100%)",
  },
  {
    prompt: "Show us the sky wherever you are.",
    video: "/hero/sky3.mp4",
    image: "/hero/sky3.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #6BAEE0 0%, #9CC8E8 55%, #B8D4E8 100%)",
  },
  {
    prompt: "Find something older than you.",
    video: "/hero/telephone.mp4",
    image: "/hero/telephone.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #6F5A3D 0%, #A88A60 60%, #C9B188 100%)",
  },
  {
    prompt: "Show us what you're up to.",
    video: "/hero/park.mp4",
    image: "/hero/park.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #2D6A4F 0%, #52B788 60%, #95D5B2 100%)",
  },
  {
    prompt: "Show us something you love.",
    video: "/hero/dog4.mp4",
    image: "/hero/dog4.jpg",
    backdrop:
      "radial-gradient(120% 80% at 50% 110%, #1a1a1f 0%, transparent 55%), linear-gradient(180deg, #8B7355 0%, #B8A080 60%, #D4C4A8 100%)",
  },
];
