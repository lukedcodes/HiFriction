import type { SVGProps } from "react";
import styles from "./Hero.module.css";

type Post = {
  name: string;
  handle: string;
  community: string;
  time: string;
  body: string;
  comments: number;
  likes: number;
  avatarTone: string;
};

const posts: Post[] = [
  {
    name: "Dan",
    handle: "dan_builds",
    community: "hi/diy",
    time: "1hr",
    body: "finally fixed the squeaky floorboard that's been haunting me for two years. stood on it this morning. almost cried. what a time to be alive",
    comments: 82,
    likes: 244,
    avatarTone: "#C9A27A",
  },
  {
    name: "Maya",
    handle: "maya_writes",
    community: "hi/baking",
    time: "2hr",
    body: "third loaf this month. the crumb is improving but i'm running out of people to give bread to. thinking of leaving one on a stranger's doorstep",
    comments: 41,
    likes: 187,
    avatarTone: "#8FB4A0",
  },
  {
    name: "Priya",
    handle: "priyak",
    community: "hi/cooking",
    time: "3hr",
    body: "made a curry from scratch for the first time without following a recipe. it was genuinely better than my mum's. i will be taking this secret to my grave",
    comments: 64,
    likes: 301,
    avatarTone: "#E5B97A",
  },
  {
    name: "Theo",
    handle: "theo_r",
    community: "hi/running",
    time: "3hr",
    body: "ran 5k this morning without stopping for the first time ever. then immediately sat down on the pavement outside tesco. worth it",
    comments: 95,
    likes: 401,
    avatarTone: "#7AA8C9",
  },
  {
    name: "Aisha",
    handle: "aisha_m",
    community: "hi/books",
    time: "4hr",
    body: "finished a book in one sitting for the first time in years. sat in silence afterwards just staring at the wall. the book did something to me",
    comments: 53,
    likes: 289,
    avatarTone: "#C97A9A",
  },
  {
    name: "Sam",
    handle: "samr",
    community: "hi/brainfarts",
    time: "5hr",
    body: "spent ten minutes trying to remember the word 'gazebo'. brain offered: that wooden hat thing. in the garden. you know the one",
    comments: 67,
    likes: 312,
    avatarTone: "#A593C2",
  },
  {
    name: "Joe",
    handle: "joep",
    community: "hi/cycling",
    time: "5hr",
    body: "got overtaken by a man on a dutch bike wearing a full suit and carrying a briefcase. he didn't even look at me. humbling",
    comments: 113,
    likes: 478,
    avatarTone: "#7AB87A",
  },
  {
    name: "Lena",
    handle: "lena_codes",
    community: "hi/programming",
    time: "6hr",
    body: "spent four hours debugging. the issue was a missing comma. i am going to go outside and touch grass now",
    comments: 204,
    likes: 892,
    avatarTone: "#9AB8D4",
  },
  {
    name: "Marcus",
    handle: "marcus_g",
    community: "hi/gardening",
    time: "7hr",
    body: "the tomatoes i planted in april are finally doing something. three of them. tiny. i am unreasonably proud of three tomatoes",
    comments: 48,
    likes: 267,
    avatarTone: "#A8C47A",
  },
  {
    name: "Fatima",
    handle: "fatima_f",
    community: "hi/fitness",
    time: "8hr",
    body: "did my first pull up today. one. a single pull up. screamed. my flatmate came in from the other room to check i was alive",
    comments: 87,
    likes: 534,
    avatarTone: "#D4A0B0",
  },
  {
    name: "Rory",
    handle: "rorym",
    community: "hi/movies",
    time: "9hr",
    body: "rewatched a film i loved at 19. it has not aged well. i have not aged well either. we are the same",
    comments: 76,
    likes: 445,
    avatarTone: "#B4927A",
  },
  {
    name: "Yuki",
    handle: "yukis",
    community: "hi/plants",
    time: "10hr",
    body: "my pothos has a new leaf coming in. i have been checking it every morning like it's a newborn. which it basically is",
    comments: 39,
    likes: 198,
    avatarTone: "#8FC4A8",
  },
  {
    name: "Cal",
    handle: "cal_w",
    community: "hi/coffee",
    time: "11hr",
    body: "tried to make a latte art heart this morning. it looked like a lung. still drank it. still delicious",
    comments: 61,
    likes: 322,
    avatarTone: "#C4A07A",
  },
  {
    name: "Nadia",
    handle: "nadiar",
    community: "hi/travel",
    time: "12hr",
    body: "missed my train by forty seconds. watched it pull away. sat on a bench and had the best croissant of my life. sometimes the universe knows",
    comments: 92,
    likes: 503,
    avatarTone: "#C47A8F",
  },
  {
    name: "Ben",
    handle: "ben_t",
    community: "hi/music",
    time: "14hr",
    body: "heard a song in a coffee shop and shazamed it immediately. it was a song i already have. i've had it for six years",
    comments: 118,
    likes: 614,
    avatarTone: "#8A7AB8",
  },
  {
    name: "Cleo",
    handle: "cleo_d",
    community: "hi/dogs",
    time: "16hr",
    body: "a golden retriever stopped walking and just sat down outside pret and refused to move for four minutes. the owner was mortified. we all clapped when he finally got up",
    comments: 143,
    likes: 789,
    avatarTone: "#D4B87A",
  },
  {
    name: "Tom",
    handle: "tom_h",
    community: "hi/gaming",
    time: "18hr",
    body: "finally beat the boss i've been stuck on for three weeks. did a little victory lap around my flat. my cat watched me with zero expression",
    comments: 97,
    likes: 412,
    avatarTone: "#7A9AB8",
  },
  {
    name: "Amara",
    handle: "amara_k",
    community: "hi/neighbours",
    time: "20hr",
    body: "my neighbour knocked to ask if i wanted half a lemon drizzle cake. yes amara. yes i did",
    comments: 28,
    likes: 156,
    avatarTone: "#C8A4C8",
  },
  {
    name: "Jess",
    handle: "jess_w",
    community: "hi/walks",
    time: "22hr",
    body: "took the long way home because the short way had a man playing the accordion. nothing against him. just wasn't in the mood",
    comments: 53,
    likes: 219,
    avatarTone: "#A4B8C8",
  },
  {
    name: "Oli",
    handle: "oli_m",
    community: "hi/pubgarden",
    time: "1d",
    body: "watched a wasp pick up a chip outside the pub. it carried it about three feet then gave up. i felt genuinely seen by a wasp today",
    comments: 105,
    likes: 467,
    avatarTone: "#7AA8C9",
  },
];

export default function HeroPosts() {
  return (
    <div className={styles.posts} aria-hidden="true">
      <div className={styles.postsTrack}>
        {posts.map((p, i) => (
          <PostCard key={i} post={p} />
        ))}
        {posts.map((p, i) => (
          <PostCard key={`dup-${i}`} post={p} />
        ))}
      </div>
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className={styles.post}>
      <span className={`pill-accent ${styles.postBadge}`}>Original Human</span>

      <header className={styles.postHeader}>
        <span className={styles.postAvatar} style={{ background: post.avatarTone }} />
        <div className={styles.postIdent}>
          <span className={styles.postNameRow}>
            <span className={styles.postName}>{post.name}</span>
            <span className={styles.postHandle}>@{post.handle}</span>
          </span>
          <span className={styles.postMeta}>
            {post.community} · {post.time}
          </span>
        </div>
      </header>

      <p className={styles.postBody}>{post.body}</p>

      <footer className={styles.postActions}>
        <span className={styles.postAction}>
          <CommentIcon className={styles.postActionIcon} />
          {post.comments}
        </span>
        <span className={styles.postAction}>
          <HeartIcon className={styles.postActionIcon} />
          {post.likes}
        </span>
        <span className={styles.postAction}>
          <ShareIcon className={styles.postActionIcon} />
        </span>
      </footer>
    </article>
  );
}

function CommentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z" />
    </svg>
  );
}

function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
    </svg>
  );
}

function ShareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="6" cy="12" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <path d="M8 11l8-4M8 13l8 4" />
    </svg>
  );
}
