"use client";

import { Button } from "@/components/controls/Button";
import { TextInput } from "@/components/controls/TextInput";
import { Glasspanel } from "@/components/Glasspanel";
import { useAuthentication } from "@/hooks/useAuthentication";
import { useEffect, useState } from "react";
import styles from "./SignInForm.module.css";

export const SignInForm = () => {
  const [mode, setMode] = useState<"sign-in" | "sign-up" | "forgot-password">(
    "sign-in"
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const authentication = useAuthentication();

  useEffect(() => {
    setError(null);
  }, [mode]);

  const handleSignIn = async () => {
    if (mode === "sign-in") {
      await authentication.login(email, password);
    } else {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      await authentication.signUp(email, password);
    }
  };

  const passwordVisible = ["sign-in", "sign-up"].includes(mode);
  const confirmPasswordVisible = mode === "sign-up";

  return (
    <Glasspanel className={styles.authContainer}>
      <TextInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        status={error ? "error" : "default"}
      />
      {passwordVisible && (
        <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          status={error ? "error" : "default"}
        />
      )}
      {confirmPasswordVisible && (
        <TextInput
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          status={error ? "error" : "default"}
        />
      )}
      {error && <div className={styles.errorMessage}>{error}</div>}
      <div className={styles.delimiter} />
      <Button onClick={handleSignIn}>
        {mode === "sign-in" ? "Sign In" : "Sign Up"}
      </Button>
      <div className={styles.delimiter} />
      {mode === "sign-in" ? (
        <>
          <div>
            Don&apos;t have an account?
            <Button kind="link" onClick={() => setMode("sign-up")}>
              Register
            </Button>
          </div>
          <div>
            Forgot password?
            <Button kind="link" onClick={() => setMode("forgot-password")}>
              Reset password
            </Button>
          </div>
        </>
      ) : (
        <div>
          Already have an account?
          <Button kind="link" onClick={() => setMode("sign-in")}>
            Login
          </Button>
        </div>
      )}
    </Glasspanel>
  );
};
