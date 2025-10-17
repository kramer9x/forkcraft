import styles from "./AuthBlock.module.css";

export const AuthBlock = () => {
  return (
    <div className={styles.container}>
      <a href="/sign-in" className={styles.button}>
        <span className={styles.buttonText}>Sign In</span>
      </a>
    </div>
  );
};
