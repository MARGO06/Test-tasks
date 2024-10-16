import React from "react";
import style from "../contactInfo/Contacts.module.scss";

export const ContactInfo: React.FC = () => {
  return (
    <section className={style.contactsUs}>
      <div className={style.sectionWrapper}>
        <div className={style.form}>
          <p className={style.question}>How can we help you?</p>
          <form className={style.sendForm}>
            <label htmlFor="name" className={style.labelForm}>
              Name
            </label>
            <input type="text" id="name" />
            <label htmlFor="email" className={style.labelForm}>
              Email
            </label>
            <input type="text" id="email" />
            <label htmlFor="accept" className={style.labelForm}>
              <input
                type="checkbox"
                className={style.inputCheckbox}
                id="accept"
              />
              <span className={style.accept}>
                I Accept the Terms and Conditions
              </span>
            </label>
            <button type="submit" className={style.buttonSubmit}>
              SUBMIT
            </button>
          </form>
        </div>
        <div className={style.contactInfo}>
          <h2>CONTACT US</h2>
          <div className={style.information}>
            <p className={style.phone}>+37577777777</p>
            <p className={style.address}>
              2855 Garibaldi St. Florence, VA 20220
            </p>
            <p className={style.email}>fashion@daisy.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
