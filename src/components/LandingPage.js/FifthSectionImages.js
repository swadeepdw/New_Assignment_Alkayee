import React from "react";
import SixthSectionCarousel from "./SixthSectionCarousel";
import Footer from "./Footer";
import SeventhSection from "./SeventhSection";

export default function FifthSectionImages() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div className="flex items-start justify-center w-full">
          <div>
            <img src="/Images/Rectangle 20.svg" alt="" />
          </div>
          <div>
            <img src="/Images/Rectangle 21.svg" alt="" />
          </div>
          <div>
            <img src="/Images/Rectangle 22.svg" alt="" />
          </div>
        </div>

        <div
          className="flex justify-center items-end gap-2"
          style={{ position: "absolute", top: 200, zIndex: -1 }}
        >
          {/* <div> */}
          <img className="h-auto" src="/Images/Rectangle 23.svg" alt="" />
          {/* </div> */}
          <div>
            <div className="pr-80 pl-20 py-20 text-left">
              <div className="py-10">
                <span className="text-5xl font-oswald">We celebrate </span>{" "}
                <span className="text-5xl font-oswald text-orange-500">
                  success
                </span>
              </div>
              <p>
                At CaSE we understand that every achievement, big or small, is a
                result of the hard work and dedication of our team members. We
                take pride in celebrating these moments because they underscore
                the commitment and effort put into each project.
              </p>
              <p>
                Some of our favourite events on the calendar include our coveted
                Melbourne Cup event and our always amazing Christmas Party.
                In-between, our team celebrate together during team cycling
                events, regular team dinners and social morning teas to
                celebrate milestones and special days. Taking the time to
                celebrate wins is our way of showing gratitude and ensuring
                everyone knows their efforts make a difference.
              </p>
            </div>
            <div>
              <img src="/Images/Rectangle 27.svg" alt="" />
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center p-20 w-full"
          style={{ position: "absolute", top: 1200 }}
        >
          <div className="text-left py-10" style={{ width: "50%" }}>
            <div className="py-10">
              <span className="text-5xl font-oswald">Employee </span>{" "}
              <span className="text-5xl font-oswald text-orange-500">
                Appreciation Program
              </span>
            </div>
            <p>
              Our Employee Appreciation Program is tailored to honor the ongoing
              commitment and efforts of our long-serving team members. Our 5
              Year Club and 10 Year Club are special milestones within this
              program, celebrating employees who have dedicated half a decade or
              a full decade to our company mission. Each year, members of these
              clubs are invited to annual events held at select, memorable
              locations, reflecting our gratitude and recognition of their
              unwavering dedication. It's our way of saying thank you and
              ensuring that every significant chapter in our collective journey
              is celebrated with the grandeur it deserves
            </p>
          </div>
          <img src="/Images/Rectangle 29.svg" alt="" style={{ width: "50%" }} />
        </div>
        <div
          className="flex justify-center items-center"
          style={{ position: "absolute", top: 1700 }}
        >
          <div>
            <img src="/Images/Rectangle 30.svg" alt="" />
          </div>
          <div>
            <img src="/Images/Rectangle 31.svg" alt="" />
          </div>
        </div>
        <div style={{ position: "absolute", top: 2200 }}>
          <SixthSectionCarousel />
        </div>
        <div style={{ position: "absolute", top: 2800 ,width:"100%"}}>
          <SeventhSection />
        </div>
        <div style={{ position: "absolute", top: 3900,width:"100%" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
