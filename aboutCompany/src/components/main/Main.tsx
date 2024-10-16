import React from "react";
import { FollowUs } from "../follow/FollowUs";
import { AboutSection } from "../aboutSection/aboutSection";
import { CollectionSection } from "../collectionsSection/CollectionSection";

export const Main: React.FC = () => {
  return (
    <>
      <FollowUs />
      <AboutSection />
      <CollectionSection />
    </>
  );
};
