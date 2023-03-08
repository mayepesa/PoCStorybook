import React, { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  const [showOptionList, setShowOptionList] = useState(false);
  const [defaultSelectText, setDefaultSelectText] = useState("Select Label");


  const optionsList = [
    { id: 1, name: "Option #1" },
    { id: 2, name: "Option #2" },
    { id: 3, name: "Option #3" },
    { id: 4, name: "Option #4" },
    { id: 5, name: "Option #5" },
    { id: 6, name: "Option #6" },
  ];

  const handleListDisplay = () => {
    setShowOptionList(true);
  };

  const handleOptionClick = (e: any) => {
    setDefaultSelectText(e.target.getAttribute("data-name"));
    setShowOptionList(false);
  };

  return (
    /*     <div className={styles.dropdown}>
      <label className={`${styles.label} ${styles.active}`} htmlFor="select">Explore</label>
      <select className={styles.select}  id="select" onChange={handleSelect}>
        <option value="option#1" >Option #1</option>
        <option value="option#2">Option #2</option>
        <option value="option#3">Option #3</option>
        <option value="option#4">Option #4</option>
        <option value="option#5">Option #5</option>
        <option value="option#6">Option #6</option>
      </select>
    </div> */
    <div className={styles.container}>
      <div
        className={styles.selectedtext}
        onClick={handleListDisplay}
      >
        {defaultSelectText}
      </div>
      {showOptionList && (
        <ul className={styles.selectOptions}>
          {optionsList.map((option, index) => {
            return (
              <li
                className={styles.customSelectOption}
                data-name={option.name}
                key={index}
                onClick={handleOptionClick}
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
