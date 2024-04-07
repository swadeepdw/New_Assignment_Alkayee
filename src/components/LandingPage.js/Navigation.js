import React, { useState } from "react";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div>
      <div className="fixed top-0 z-10 w-full">
        <div
          className="max-w-screen-xl text-white py-5 flex flex-wrap items-center justify-around mx-auto"
          style={{ cursor: "pointer" }}
        >
          <div className="flex items-center space-x-16 rtl:space-x-reverse pl-5">
            <p>PROJECTS</p>
            <p>EXPERTISE</p>
            <p>ABOUT US</p>
            <p>PEOPLE</p>
            <img src="Images/Logo.svg" className="h-16" alt="Freeler" />
          </div>
          <div className="flex items-center justify-between gap-10">
            <p>CAREERS</p>
            <p>AU</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
