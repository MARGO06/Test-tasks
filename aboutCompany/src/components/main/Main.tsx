import React from "react";
import { FollowUs } from "../follow/FollowUs";
import { AboutSection } from "../aboutSection/aboutSection";
import { CollectionSection } from "../collectionsSection/CollectionSection";
import { ContactUs } from "../contacts/Contacts";

export const Main: React.FC = () => {
  return (
    <main>
      <FollowUs />
      <AboutSection />
      <CollectionSection />
      <ContactUs />
    </main>
  );
};
