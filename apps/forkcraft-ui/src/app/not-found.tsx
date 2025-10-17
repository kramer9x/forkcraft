import { Glasspanel } from "@/components/Glasspanel";
import { Header } from "./components/Header";
import styles from "./not-found.module.css";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.disclaimers}>
          <Glasspanel theme="dark" className={styles.disclaimer}>
            <div className={styles.title404}>
              4
              <Image
                src="/forkarrow-circle.svg"
                alt="Fork"
                width={40}
                height={40}
                className={styles.forkIcon}
              />
              4
            </div>
            Resource not found
          </Glasspanel>
        </div>
      </main>
    </div>
  );
}
