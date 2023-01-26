import React from "react";
import styles from "./CssModules/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <img src = 'https://ia801801.us.archive.org/16/items/smeshariki-kikoriki-logos-posters/Смешарики%20-%20Logo%20%28Russian%2C%20black%20and%20white%29.png'/>
      </div>
    </div>
  );
};
export { Header };
