import React, { useState } from "react";
import styles from "./Login.module.css";
import PrimaryButton from "./PrimaryButton";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [activeEmail, setActiveEmail] = useState(false);
  const [activePassword, setActivePass] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
        <label
          htmlFor="email"
          className={`${styles.label} ${activeEmail && styles.active}`}
        >
          Email:{" "}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formValues.email}
          onChange={handleInput}
          className={styles.input}
          onFocus={() => setActiveEmail(true)}
          onBlur={() =>
            formValues.email === "" ? setActiveEmail(false) : null
          }
        />
      </div>
      <div className={styles.inputContainer}>
        <label
          htmlFor="password"
          className={`${styles.label} ${activePassword && styles.active}`}
        >
          Password:{" "}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={formValues.password}
          onChange={handleInput}
          className={styles.input}
          onFocus={() => setActivePass(true)}
          onBlur={() =>
            formValues.password === "" ? setActivePass(false) : null
          }
        />
      </div>
      <PrimaryButton type="submit" label="Login" />
    </form>
  );
};

export default Login;
