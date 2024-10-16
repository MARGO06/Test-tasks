import React from "react";
import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/Facebook.png";
import twitter from "../../assets/twitter .png";
import style from "../footer/footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerWrapper}>
        <p className={style.nameCompany}>DAISY</p>
        <p className={style.year}>2024</p>
        <nav className={style.navigation}>
          <Link to="#" className={style.navigationSection}>
            <img src={instagram} alt="icon" />
          </Link>
          <Link to="#" className={style.navigationSection}>
            <img src={facebook} alt="icon" />
          </Link>
          <Link to="#" className={style.navigationSection}>
            <img src={twitter} alt="icon" />
          </Link>
        </nav>
      </div>
    </footer>
  );
};
