import React from "react";
import styles from "./PrimaryButton.module.css";

interface Props {
  label: string;
  backgroundColor?: string;
  // size: "sm" | "md" | "lg";
  handleClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

const PrimaryButton = ({
  label,
  backgroundColor = "#3356D7",
  // size = "md",
  handleClick,
  type= "button"
}: Props) => {
  // let scale = 1;
  
  // if (size === "sm") scale = 0.75;
  // if (size === "lg") scale = 1.5;

  return (
    <button
      onClick={handleClick}
      className={styles.btn}
      style={{
        backgroundColor,
        border: "none",
        // padding: `${scale * 0.5}rem ${scale * 1}rem`,
      }}
      type={type}

    >
      {label}
    </button>
  );
};

export default PrimaryButton;
