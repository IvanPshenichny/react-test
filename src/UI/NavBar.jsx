import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./CssModules/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.bar}>
      <div> </div>
      <NavLink
        to="/UserManagment/"
        className={({ isActive }) => (isActive ? styles.active : styles.item)}
      >
        UserManagment
      </NavLink>

      <div> </div>
      <div> </div>
      <NavLink
        to="/Users/"
        className={({ isActive }) => (isActive ? styles.active : styles.item)}
      >
        Users
      </NavLink>
      <div> </div>
      <div> </div>

      <NavLink
        to="/ToDoList/"
        className={({ isActive }) => (isActive ? styles.active : styles.item)}
      >
        ToDoList
      </NavLink>

      <div> </div>
      <div> </div>
      <NavLink
        to="/Calculator/"
        className={({ isActive }) => (isActive ? styles.active : styles.item)}
      >
        Calculator
      </NavLink>
    </div>
  );
};
export { NavBar };
