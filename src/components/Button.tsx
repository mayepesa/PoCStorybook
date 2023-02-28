import React from "react";
import styles from "./Button.module.css";

interface Props {
  label: string;
  backgroundColor: string;
  size: "sm" | "md" | "lg";
  handleClick: () => void;
}

const Button = ({
  label,
  backgroundColor = "red",
  size = "md",
  handleClick,
}: Props) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  return (
    <button
      onClick={handleClick}
      className={styles.btn}
      style={{
        backgroundColor,
        border: "none",
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
