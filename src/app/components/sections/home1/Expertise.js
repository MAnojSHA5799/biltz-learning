'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../main.css";

export default function Feature() {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    // Adjust slidesToShow based on screen width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(2); // For mobile view, show 1 slide at a time
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2); // For tablet view, show 2 slides at a time
      } else {
        setSlidesToShow(4); // For desktop view, show 4 slides at a time
      }
    };

    // Initial call to set initial slidesToShow based on screen width
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
  };

  return (
    <>
      <section className="expertise-sections bg-color-1"></section>

      <section className="clients-section p_relative mb-0 pb-2 pt-3">
        <div className="auto-container">
          <Slider {...sliderSettings}>
            {/* Your slider items go here */}
            {/* Example item: */}
           
            <div className="inner-box">
              <figure className="clients-log">
               
                  <img
                    src="/assets/web-logo/logo1.jpg"
                    alt=""
                    className="img-fluid"
                  />
               
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
               
                  <img
                    src="/assets/web-logo/logo8.jpg"
                    alt=""
                    className="img-fluid"
                  />
               
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
              
                  <img
                    src="/assets/web-logo/logo3.jpg"
                    alt=""
                    className="img-fluid"
                  />
               
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
              
                  <img
                    src="/assets/web-logo/logo6.jpg"
                    alt=""
                    className="img-fluid"
                  />
               
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
              
                  <img
                    src="/assets/web-logo/logo4.jpg"
                    alt=""
                    className="img-fluid"
                  />
               
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
              
                  <img
                    src="/assets/web-logo/logo5.jpg"
                    alt=""
                    className="img-fluid"
                  />
                
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
               
                  <img
                    src="/assets/web-logo/logo-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
               
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
                
                  <img
                    src="/assets/web-logo/logo-8.jpg"
                    alt=""
                    className="img-fluid"
                  />
                
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
               
                  <img
                    src="/assets/web-logo/logo-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
               
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
               
                  <img
                    src="/assets/web-logo/logo-4.jpg"
                    alt=""
                    className="img-fluid"
                  />
                
              </figure>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}





