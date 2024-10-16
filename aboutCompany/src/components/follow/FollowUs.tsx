import React from "react";
import { Link } from "react-router-dom";
import style from "../follow/FollowUs.module.scss";

export const FollowUs: React.FC = () => {
  return (
    <section className={style.follow}>
      <div className={style.sectionWrapper}>
        <div className={style.overline}></div>
        <h1>FOLLOW US</h1>
        <div className={style.underline}></div>
        <Link to="/Test-tasks/collection" className={style.collectionLink}>
          <span className={style.text}>SEE MORE</span>
          <span className={style.line}></span>
        </Link>
      </div>
    </section>
  );
};
