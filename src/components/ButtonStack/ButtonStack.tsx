import React from "react";
import styles from "./ButtonStack.module.css";

interface Props {
  primaryName: string;
  secondaryName: string;
  tertiaryName: string;

  primaryAction: () => void;
  secondaryAction: () => void;
  tertiaryAction: () => void;
}

const ButtonStack = ({
  primaryName = "Primary Action",
  secondaryName = "Secondary Action",
  tertiaryName = "Tertiary Action",
  primaryAction,
  secondaryAction,
  tertiaryAction,
}: Props) => {

    
  return (
    <div className={styles.btnsContainer}>
      <button 
      className={`${styles.btn} ${styles.primary}`} 
      onClick={primaryAction}
      >
        {primaryName}
      </button>
      <button className={`${styles.btn} ${styles.secondary}`} onClick={secondaryAction}>
        {secondaryName}
      </button>
      <button className={`${styles.btn} ${styles.tertiary}`} onClick={tertiaryAction}>
        {tertiaryName}
      </button>
    </div>
  );
};

export default ButtonStack;
