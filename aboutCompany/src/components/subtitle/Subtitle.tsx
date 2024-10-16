import React from "react";
import style from "../subtitle/Subtitle.module.scss";

export const Subtitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={style.subtitle}>
      <span className={style.leftLine}></span>
      <h2>{title}</h2>
      <span className={style.rightLine}></span>
    </div>
  );
};
