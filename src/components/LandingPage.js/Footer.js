import React from "react";

export default function Footer() {
  return (
    <div>
      <div
        style={{ backgroundColor: "black" }}
        className="flex justify-center items-center p-5 text-white w-full"
      >
        <div
          className="flex justify-center items-center"
          style={{ width: "25%" }}
        >
          <div className="p-10">
            <img className="mb-5" src="/Images/Group 1484.svg" alt="" />
            <img src="/Images/Group 390.svg" alt="" />
          </div>
          <div className="h-28 border-l border-gray-500"></div>
        </div>
        <div
          className="flex justify-center items-center"
          style={{ width: "25%" }}
        >
          <div className="p-10">
            <p>Expertise</p>
            <p>Design</p>
            <p>Specialist Expertise</p>
            <p>Commercial Advice</p>
            <p>Traffic & Transport</p>
          </div>
          <div className="h-28 border-l border-gray-500"></div>
        </div>
        <div
          className="flex justify-center items-center"
          style={{ width: "25%" }}
        >
          <div className="p-10">
            <p>Sectors</p>
            <p>Road</p>
            <p>Tunner</p>
            <p>Bridge</p>
            <p>Others +</p>
          </div>
          <div className="h-28 border-l border-gray-500"></div>
        </div>
        <div
          className="flex justify-center items-center"
          style={{ width: "25%" }}
        >
          <div className="p-10">
            <p>Our Business</p>
            <p>Work With Us</p>
            <p>Projects</p>
            <p>News</p>
            <p>Our Capabilities</p>
          </div>
          <div className="h-28 border-l border-gray-500"></div>
        </div>
      </div>
      <div className="w-full border-b border-gray-500"></div>
      <div
        className="flex justify-around items-center py-8 text-white"
        style={{ backgroundColor: "black" }}
      >
        <div style={{ fontWeight: "500" }}>
          @ 2021 Case International. All right reserved.
        </div>
        <div
          className="flex justify-between items-center"
          style={{ fontWeight: "500" }}
        >
          <div>Terms of Service</div>
          <div className="ml-4">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}
