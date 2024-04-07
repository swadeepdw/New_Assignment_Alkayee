"use client";
import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
 
const OnboardingScreen = () => {
  const router = useRouter();
  const carouselRef = useRef(null);
 
  
 
  const handleGetStarted = () => {
    carouselRef.current.increment();
  };
 
  const handleNext = () => {
    carouselRef.current.increment();
  };
 
  const handleAgree = () => {
    // router.push("layoutfile/components/home/login");
    router.push("login");
    // window.location.href = "/layoutfile/components/home/login";
  };
 
  const handleCancel = () => {
    console.log("Cancel button clicked");
    window.location.href = "/";
  };
 
  return (
    <div className="onboardingScreen">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={false}
        swipeable={true}
        emulateTouch={true}
        autoPlay={false}
        interval={5000}
        showArrows={true}
        ref={carouselRef}
      >
        <div className="card mt-14 h-2/3">
          <div className="text-center h-full flex items-center justify-center flex-col">
            <Image
              src="/Images/Group 12.svg"
              alt=""
              width={100}
              height={100}
              priority={true}
              className="w-1/3 h-auto"
            />
            <br />
            <div className="w-1/3">
              <p className="text-2xl font-quicksand mt-4">
                Welcome to Tedilla
              </p>
              <small className="font-quicksand p-5">
                Explore our intuitive platform designed to streamline project
                organization, collaboration, and success.
              </small>
            </div>
          </div>
          <div className="flex justify-end p-5 my-4 mx-16">
           
            <button
              onClick={handleGetStarted}
              className="bg-blue-600 text-white py-4 px-14 rounded-full"
            >
              Get started
            </button>
          </div>
        </div>
 
        <div className="card mt-10 h-2/3">
          <div className="text-center flex items-center justify-center flex-col">
            <Image
              src="/Images/young people discussing the project.svg"
              alt=""
              width={100}
              height={100}
              priority={true}
              className="w-1/3 h-auto"
            />
            <br />
            <div className="w-1/3">
              <p className="text-2xl  font-quicksand mt-4">
                Step-by-Step Instructions
              </p>
              <small className="font-quicksand p-5">
                Discover the secrets of successful project management through
                our guided tour. Learn how to create projects, assign tasks, and
                track progress effortlessly
              </small>
            </div>
          </div>
          <div className="flex justify-end p-5 mx-16">
            
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white py-4 px-20 rounded-full"
            >
              Next
            </button>
          </div>
        </div>
 
        <div className="card mt-10 h-2/3">
          <div className="text-center flex items-center justify-center flex-col">
            <Image
              src="/Images/colleagues discussing team project3.svg"
              alt=""
              width={100}
              height={100}
              priority={true}
              className="w-1/3 h-auto"
            />
            <br />
            <div className="w-1/3">
              <p className="text-2xl font-quicksand mt-4">Terms of Service</p>
              <small className="font-quicksand p-5">
                By agreeing to our terms of service, you&apos;re joining a
                community committed to excellence in project management
                supported by Smartgig Technologies.
              </small>
            </div>
          </div>
          <div className="flex justify-between p-5 mx-16">
            <button
              onClick={handleAgree}
              //   onClick={() => router.push('layoutfile/components/home/login')}
              className="bg-blue-600 text-white py-4 px-20 rounded-full"
            >
              Agree
            </button>
            <button
              onClick={handleCancel}
              className="bg-white text-blue-600 border-2 border-blue-600 py-4 px-20 rounded-full"
            >
              Cancel
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
 
export default OnboardingScreen;