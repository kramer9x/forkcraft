import classNames from "classnames";
import styles from "./TextInput.module.css";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  status?: "default" | "error";
};

export const TextInput = (props: Props) => {
  const { className, status = "default", ...rest } = props;

  return (
    <input
      className={classNames(styles.input, className, styles[status])}
      {...rest}
    />
  );
};
