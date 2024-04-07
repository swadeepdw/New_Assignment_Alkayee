import React from "react";

export default function ThirdSectionFlexImg() {
  return (
    <div className="flex justify-center items-center text-left w-full">
      <div style={{ width: "50%" }} className="p-10">
        <div className="px-10 py-10">
          <span className="text-5xl font-oswald">We</span>{" "}
          <span className="text-5xl font-oswald text-orange-500">
            stay connected
          </span>
        </div>
        <div className="flex justify-center items-start gap-7 px-10">
          <img src="/Images/Group 2.svg" alt="" />
          <div>
            <span className="text-lg font-semibold">
              Quarterly Business Updates
            </span>
            {/* <div className="flex items-center justify-between">
              <img src="/Images/Line 3.svg" alt="" style={{ width: "175px" }} />
              <img src="/Images/Line 4.svg" alt="" style={{ height: "75px" }} />
            </div> */}

            <p className="py-5 pr-5">
              We strive to stay connected as a team through communication and
              collaboration. This materialises every quarter through our
              Quarterly Business Update events. These gatherings are immersive
              sessions where every team member, regardless of rank or tenure,
              comes together to contribute to our overarching business strategy,
              and stay connected. They are opportunities to learn from our
              seasoned leaders and to also share personal insights and
              achievements that can steer our collective future. In an
              ever-evolving engineering landscape, staying connected isn’t just
              a benefit—it’s essential.
            </p>
          </div>
        </div>
        <div className="flex justify-left items-center gap-7 py-5 px-10">
          <img src="/Images/Group 1.svg" alt="" />
          <p className="text-lg font-semibold">Industry Events & Networking</p>
        </div>
        <div className="flex justify-left items-center gap-7 py-5 px-10">
          <img src="/Images/Vector.svg" alt="" />
          <p className="text-lg font-semibold">Associations Memberships</p>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <img src="/images/Rectangle 39.svg" alt="" />
      </div>
    </div>
  );
}
