import React, { useContext } from "react";
import styles from "./SideBar.module.css";
import { AppContext } from "../../App";

const SideBar = () => {
  const appContext = useContext(AppContext);
  const { navList, setSelected } = appContext;

  return (
    <div className={styles.container}>
      {navList?.map((item, index) => ( 
        <div
        key={index}
          className={styles.item}
          onClick={() => {
            setSelected && setSelected(item);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
