import React from "react";
import { Link } from "react-router-dom";
import style from "../link/LinkInformation.module.scss";

export const LinkInfo: React.FC<{ to: string }> = ({ to }) => {
  return (
    <Link to={to} className={style.collectionLink}>
      <span className={style.text}>SEE MORE</span>
      <span className={style.line}></span>
    </Link>
  );
};
