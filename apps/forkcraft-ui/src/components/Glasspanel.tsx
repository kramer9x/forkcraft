"use client";

import classNames from "classnames";
import styles from "./Glasspanel.module.css";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  theme?: "light" | "dark" | "error";
  className?: string;
  effectClassName?: string;
  tintClassName?: string;
  children?: React.ReactNode;
};

export const Glasspanel = (props: Props) => {
  const {
    theme = "light",
    className,
    effectClassName,
    tintClassName,
    children,
    ...rest
  } = props;

  const glassTintClassName = classNames(
    styles.glassTint,
    {
      [styles.glassTintLight]: theme === "light",
      [styles.glassTintDark]: theme === "dark",
      [styles.glassTintError]: theme === "error",
    },
    tintClassName
  );

  return (
    <div className={classNames(styles.glassWrapper, className)} {...rest}>
      <div className={classNames(styles.glassEffect, effectClassName)}></div>
      <div className={glassTintClassName}></div>
      <div className={styles.glassShine}></div>
      {children}
    </div>
  );
};
