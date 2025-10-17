"use client";

import { useEffect, useState } from "react";

import styles from "./Question.module.css";
import classNames from "classnames";

export const Question = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [status, setStatus] = useState<"idle" | "running" | "finished">("idle");

  const resetPosition = () => {
    const halfContainer = window.innerWidth / 2;
    const randomX = Math.random() * window.innerWidth - halfContainer;
    const randomY = Math.random() * window.innerWidth - halfContainer;
    setPosition({ x: randomX, y: randomY });
  };

  const start = () => {
    setStatus("running");
  };

  useEffect(() => {
    resetPosition();
    start();
  }, []);

  useEffect(() => {
    if (status === "running") {
      setTimeout(() => {
        setStatus("finished");
      }, 5000);
    }

    if (status === "finished") {
      resetPosition();
      setTimeout(() => {
        start();
      }, 2000);
    }
  }, [status]);

  return (
    <div
      className={classNames(styles.container, {
        [styles.running]: status === "running",
        [styles.finished]: status === "finished",
      })}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <p className={styles.question}>Что приготовить на ужин?</p>
    </div>
  );
};
