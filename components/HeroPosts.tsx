import type { SVGProps } from "react";
import { posts, type Post } from "./heroPostsData";
import styles from "./Hero.module.css";

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
          <span className={styles.postName}>@{post.handle}</span>
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
