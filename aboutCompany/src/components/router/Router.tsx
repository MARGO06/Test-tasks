import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "../aboutPage/AboutUs";
import { SignUp } from "../signUp/SignUp";
import { Collection } from "../collection/Collection";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { SignIn } from "../signIn/SignIn";
import { Footer } from "../footer/Footer";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Test-tasks/" element={<Main />} />
        <Route path="/Test-tasks/signIn" element={<SignIn />} />
        <Route path="/Test-tasks/signUp" element={<SignUp />} />
        <Route path="/Test-tasks/collection" element={<Collection />} />
        <Route path="/Test-tasks/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
