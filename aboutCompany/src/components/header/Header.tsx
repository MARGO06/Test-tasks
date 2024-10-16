import React from "react";
import { Link } from "react-router-dom";
import style from "../header/Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.headerWrapper}>
        <nav className={style.navigation}>
          <div className={style.leftSection}>
            <Link to="/about" className={style.navigationSection}>
              ABOUT US
            </Link>
            <Link to="/collection" className={style.navigationSection}>
              COLLECTION
            </Link>
          </div>
          <div className={style.centreSections}>
            <Link to="/" className={style.navigationLogo}>
              DAISY
            </Link>
          </div>
          <div className={style.rightSection}>
            <Link to="/signIn" className={style.navigationSection}>
              SIGN IN
            </Link>
            <Link to="/signUp" className={style.navigationSection}>
              SIGN UP
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
