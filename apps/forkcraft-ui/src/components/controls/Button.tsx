import styles from "./Button.module.css";
import classNames from "classnames";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: "primary" | "secondary" | "link";
};

export const Button = (props: Props) => {
  const { className, kind = "primary", ...rest } = props;

  return (
    <button
      className={classNames(
        styles.button,
        {
          [styles.primary]: kind === "primary",
          [styles.secondary]: kind === "secondary",
          [styles.link]: kind === "link",
        },
        className
      )}
      {...rest}
    />
  );
};
