import React, { useState } from "react";
import styles from "./Login.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Input from "../Input";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShow(false);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValues.email !== "" && formValues.password !== "") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label="Email"
        id="email"
        type="email"
        value={formValues.email}
        onChange={handleInput}
        testId="login-pass"
      />
      <Input
        label="Password"
        id="password"
        type="password"
        value={formValues.password}
        onChange={handleInput}
        testId="password-pass"
      />
      <PrimaryButton type="submit" label="Login" />
      {show && <h3>Login successful</h3>}
    </form>
  );
};

export default Login;
