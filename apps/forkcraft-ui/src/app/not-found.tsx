import { Glasspanel } from "@/components/Glasspanel";
import { Header } from "./components/Header";
import styles from "./not-found.module.css";
import Image from "next/image";
import ForkOutline from "@/assets/forkarrow-circle.svg?react";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.disclaimers}>
          <Glasspanel theme="dark" className={styles.disclaimer}>
            <div className={styles.title404}>
              4<ForkOutline className={styles.forkIcon} />4
            </div>
            Resource not found
          </Glasspanel>
        </div>
      </main>
    </div>
  );
}
