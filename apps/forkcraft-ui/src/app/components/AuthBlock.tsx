"use client";

import { useRouter } from "next/navigation";
import styles from "./AuthBlock.module.css";
import { Button } from "@/components/controls/Button";

export const AuthBlock = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  return (
    <div className={styles.container}>
      <Button kind="link" onClick={handleSignIn} className={styles.button}>
        Sign In
      </Button>
    </div>
  );
};
