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
        <Route path="/" element={<Main />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
