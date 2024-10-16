import React from "react";
import { Link } from "react-router-dom";
import style from "../catalog/Catalog.module.scss";

export const CatalogTitle: React.FC<{
  src: string;
  alt: string;
  title: string;
}> = ({ src, alt, title }) => {
  return (
    <div className={style.catalog}>
      <img src={src} alt={alt} className={style.photoCatalog} />
      <Link to="#" className={style.linkCatalog}>
        {title}
      </Link>
    </div>
  );
};
