import React from "react";
import style from "../servicesList/CollectionSections.module.scss";
import clothing from "../../assets/clothing.png";
import shoes from "../../assets/shoes.png";
import { CatalogTitle } from "../catalog/Catalog";
import { Subtitle } from "../subtitle/Subtitle";
import { LinkInfo } from "../link/LinkInformation";

export const ServicesInfo: React.FC = () => {
  return (
    <section className={style.collections}>
      <Subtitle title="Collections" />
      <div className={style.wrapperSection}>
        <div className={style.informationSection}>
          <p className={style.catalogTitles}>SPRING/SUMMER 2024</p>
          <LinkInfo to="/catalog" />
        </div>
        <div className={style.catalogs}>
          <CatalogTitle src={clothing} alt="photo_model" title="Clothing" />
          <CatalogTitle src={shoes} alt="photo_shoes" title="Shoes" />
        </div>
      </div>
    </section>
  );
};
