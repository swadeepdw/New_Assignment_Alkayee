import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import TopCarousel from "../LandingPage.js/TopCarousel";
import Layout from "../LandingPage.js/Layout";
import ThreeSection from "../LandingPage.js/ThreeSection";
import HomePage from "../LandingPage.js/HomePage";

export default function RouteFile() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout key="home" />}>
            <Route path="" element={<HomePage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
