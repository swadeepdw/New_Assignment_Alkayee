import React from "react";

export default function ThreeSection() {
  return (
    <div className="-mt-24 w-full text-white flex items-center justify-center gap-x-0.5">
      <div className="bg-bgThreeCard px-5 py-3 w-full">
        <h5>01</h5>
        <div className="flex items-center justify-center gap-10">
          <p>We stay connected</p>
          <img src="/Images/Frame 1171276413.svg" alt="" />
        </div>
      </div>
      <div className="bg-bgThreeCard px-5 py-3 w-full">
        <h5>02</h5>
        <div className="flex items-center justify-center gap-10">
          <p>We believe in diversity & inclusion</p>
          <img src="/Images/Frame 1171276413.svg" alt="" />
        </div>
      </div>
      <div className="bg-bgThreeCard px-5 py-3 w-full">
        <h5>03</h5>
        <div className="flex items-center justify-center gap-10">
          <p>We celebrate success</p>
          <img src="/Images/Frame 1171276413.svg" alt="" />
        </div>
      </div>{" "}
    </div>
  );
}
