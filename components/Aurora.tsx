import styles from "./Aurora.module.css";

export default function Aurora() {
  return (
    <>
      <div className={styles.gradient} aria-hidden="true" />
      <div className={styles.shimmer} aria-hidden="true" />
    </>
  );
}
