import { Header } from "./components/Header";
import styles from "./page.module.css";

export default function Home() {
  console.log("render home");

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.disclaimers}></div>
      </main>
    </div>
  );
}
