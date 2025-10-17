import { Header } from "../components/Header";
import { SignInForm } from "./components/SignInForm";
import styles from "./page.module.css";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <SignInForm />
      </main>
    </div>
  );
}
