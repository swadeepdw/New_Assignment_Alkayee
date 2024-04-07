import React from "react";
import TopCarousel from "./TopCarousel";
import ThreeSection from "./ThreeSection";
import ThirdSectionFlexImg from "./ThirdSectionFlexImg";
import FourthSectionBridge from "./FourthSectionBridge";
import FifthSectionImages from "./FifthSectionImages";
import SixthSectionCarousel from "./SixthSectionCarousel";

export default function HomePage() {
  return (
    <div  style={{position:"relative"}}>
      <TopCarousel />
      <ThreeSection />
      <ThirdSectionFlexImg/>
      <FourthSectionBridge/>
      <FifthSectionImages/>
    </div>
  );
}
