import React from "react";
import { Link } from "react-router-dom";
import style from "../header/Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.headerWrapper}>
        <nav className={style.navigation}>
          <div className={style.leftSection}>
            <Link to="/Test-tasks/about" className={style.navigationSection}>
              ABOUT US
            </Link>
            <Link
              to="/Test-tasks/collection"
              className={style.navigationSection}
            >
              COLLECTION
            </Link>
          </div>
          <div className={style.centreSections}>
            <Link to="/Test-tasks/" className={style.navigationLogo}>
              DAISY
            </Link>
          </div>
          <div className={style.rightSection}>
            <Link to="/Test-tasks/signIn" className={style.navigationSection}>
              SIGN IN
            </Link>
            <Link to="/Test-tasks/signUp" className={style.navigationSection}>
              SIGN UP
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
