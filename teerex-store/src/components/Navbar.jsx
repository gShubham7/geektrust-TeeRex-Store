import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div>
        <h2>TeeRex Store</h2>
      </div>
      <div className={styles.links}>
        <NavLink to={"/"}>
          <h2>Products</h2>
        </NavLink>
        <NavLink to={"/cart"}>
          <h2>Cart</h2>
        </NavLink>
      </div>
    </div>
  );
};
