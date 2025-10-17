import { Glasspanel } from "@/components/Glasspanel";
import ForkOutline from "@/assets/forkarrow-circle.svg?react";
import classNames from "classnames";
import Link from "next/link";
import { AuthBlock } from "./AuthBlock";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={classNames(styles.header)}>
      <Glasspanel
        className={styles.container}
        effectClassName={styles.glassEffect}
        tintClassName={styles.glassTint}
      >
        <div className={styles.titleContainer}>
          <Link href="/" className={styles.link}>
            <span className={classNames(styles.title)}>F</span>
            <span className={classNames(styles.title)}>
              <ForkOutline className={styles.forkIcon} />
            </span>
            <span className={classNames(styles.title)}>rkcraft</span>
          </Link>
        </div>
        <AuthBlock />
      </Glasspanel>
    </div>
  );
};
