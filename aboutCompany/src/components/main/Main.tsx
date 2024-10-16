import React from "react";
import { FollowUs } from "../follow/FollowUs";
import { CompanyDescription } from "../companyDescription/aboutSection";
import { ServicesInfo } from "../servicesList/CollectionSection";
import { ContactInfo } from "../contactInfo/Contacts";

export const Main: React.FC = () => {
  return (
    <main>
      <FollowUs />
      <CompanyDescription />
      <ServicesInfo />
      <ContactInfo />
    </main>
  );
};
