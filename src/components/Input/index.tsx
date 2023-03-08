import React, { useState } from "react";
import styles from "./Input.module.css";

interface IInput {
    label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  testId: string;
}

const Input = ({ label, id, type, value, onChange, testId }: IInput) => {
  const [activeInput, setActiveInput] = useState(false);

  return (
    <div className={styles.inputContainer}>
      <label
        htmlFor={id}
        className={`${styles.label} ${activeInput && styles.active}`}
      >
        {label}
      </label>
      <input
        required
        id={id}
        type={type}
        name={id}
        className={styles.input}
        value={value}
        onChange={onChange}
        onFocus={() => setActiveInput(true)}
        onBlur={() => (value === "" ? setActiveInput(false) : null)}
        data-testid={testId}
      />
    </div>
  );
};

export default Input;
