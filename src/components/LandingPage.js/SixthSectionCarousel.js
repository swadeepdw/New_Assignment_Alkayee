import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";

export default function SixthSectionCarousel() {
  const carouselRef = useRef(null);

  const handleGetStarted = () => {
    carouselRef.current.increment();
  };

  const handleNext = () => {
    carouselRef.current.increment();
  };

  const handleCancel = () => {
    carouselRef.current.decrement();
  };

  const handleFirst = () => {
    window.location.href = "/";
  };

  return (
    <div className="CarouselPage">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={false}
        swipeable={false}
        emulateTouch={false}
        autoPlay={false}
        interval={5000}
        showArrows={false}
        ref={carouselRef}
      >
        <div
          className="mt-14 h-2/3 flex items-center"
          style={{ backgroundColor: "#112C41" }}
        >
          <div className="flex items-center justify-center px-10">
            <div className=" text-white p-5">
              <img
                src="/Images/Rectangle 19.svg"
                alt=""
                width={100}
                height={100}
                priority={true}
              />
            </div>
            <div className="text-white flex text-left px-20">
              <div>
                <span>
                  <img
                    src="/Images/Group 7.svg"
                    className="mr-5"
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                  />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  sodales turpis et lacinia fermentum. Curabitur vestibulum at
                  arcu sed blandit. In consequat euismod purus nec imperdiet.
                </span>
                <br />
                <br />
                Title
                <br />
                Name
                <br />
                <br />
                <span>
                  <img
                    src="/Images/Group 8.svg"
                    alt=""
                    className="mr-5"
                    style={{ height: "25px", width: "25px" }}
                  />
                  Read my story
                </span>
              </div>
            </div>
            <div className="nextPrevBtn flex gap-5 justify-end my-4">
              <button onClick={handleCancel} className="text-orange-500">
                <img src="/Images/Frame 1171276414.svg" alt="" />
              </button>
              <button onClick={handleGetStarted} className="text-orange-500">
                <img src="/Images/Frame 1171276413.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div
          className="mt-14 h-2/3 flex items-center"
          style={{ backgroundColor: "#112C41" }}
        >
          <div className="flex items-center justify-center px-10">
            <div className=" text-white p-5">
              <img
                src="/Images/Rectangle 19.svg"
                alt=""
                width={100}
                height={100}
                priority={true}
              />
            </div>
            <div className="text-white flex text-left px-20">
              <div>
                <span>
                  <img
                    src="/Images/Group 7.svg"
                    className="mr-5"
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                  />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  sodales turpis et lacinia fermentum. Curabitur vestibulum at
                  arcu sed blandit. In consequat euismod purus nec imperdiet.
                </span>
                <br />
                <br />
                Title 2
                <br />
                Name 2
                <br />
                <br />
                <span>
                  <img
                    src="/Images/Group 8.svg"
                    alt=""
                    className="mr-5"
                    style={{ height: "25px", width: "25px" }}
                  />
                  Read my story 2
                </span>
              </div>
            </div>
            <div className="nextPrevBtn flex gap-5 justify-end my-4">
              <button onClick={handleCancel} className="text-orange-500">
                <img src="/Images/Frame 1171276414.svg" alt="" />
              </button>
              <button onClick={handleGetStarted} className="text-orange-500">
                <img src="/Images/Frame 1171276413.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="card mt-14 h-2/3">
          <div className="text-center h-full flex items-center justify-center flex-col">
            <img
              src="/Images/Group 12.svg"
              alt=""
              width={100}
              height={100}
              priority={true}
              className="w-1/3 h-auto"
            />
            <div className="w-1/3 textBox text-white p-5">
              <p>Home / Why work with us</p>
              <h2 className="text-4xl font-oswald my-2">HeadLine #3</h2>
              <p className="font-oswald">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="nextPrevBtn flex gap-5 justify-end my-4">
              <button onClick={handleCancel} className="text-orange-500">
                <img src="/Images/Frame 1171276414.svg" alt="" />
              </button>
              <button onClick={handleCancel} className="text-orange-500">
                <img src="/Images/Frame 1171276413.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
