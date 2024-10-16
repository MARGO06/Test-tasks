import React from "react";
import style from "../companyDescription/aboutSection.module.scss";
import faceImage from "../../assets/girl_face.png";
import podium from "../../assets/Podium.png";
import { Subtitle } from "../subtitle/Subtitle";
import { LinkInfo } from "../link/LinkInformation";

export const CompanyDescription: React.FC = () => {
  return (
    <section className={style.companyDescription}>
      <Subtitle title="ABOUT US" />
      <div className={style.wrapperSection}>
        <div className={style.informationSection}>
          <p className={style.information}>
            Founded this company DAISY was back in 1988. Its founder was Alex
            Davis. The brand was born in the Italy city of Florence. The main
            focus is the production and development of fashion trends in
            clothing and accessories for women.
          </p>
          <p className={style.information}>
            The first specialty store that offered DAISY clothing was a boutique
            in Florencia. It was opened the same year the firm opened. After a
            year there was a shop in Rome.
          </p>
          <p className={style.information}>
            The company was actively developing and soon entered the
            international market.
          </p>
          <LinkInfo to="/aboutUs" />
        </div>
        <div className={style.photos}>
          <img src={faceImage} alt="photo_model" className={style.photoGirl} />
          <img src={podium} alt="photo_podium" className={style.photoPodium} />
        </div>
      </div>
    </section>
  );
};
