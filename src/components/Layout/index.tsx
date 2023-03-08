import React from "react";
import Header from "../Header/index";
import SideBar from "../SideBar";
import styles from './Layout.module.css'


interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <SideBar/>
        <div className={styles.content}>
        {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
