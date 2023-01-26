import React from "react";
import styles from "./CssModules/Content.module.css";
import { UserManagment } from "./UserManagment";

const Content = () => {
  return (
    <div className={styles.content}>
      <UserManagment />
    </div>
  );
};
export { Content };
