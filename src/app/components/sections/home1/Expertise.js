"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import "../../../main.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  return (
    <>
      <section className="expertise-sections bg-color-1"></section>

      <section className="clients-section p_relative mb-0 pb-2 pt-3">
        <div className="auto-container">
          <Slider
            infinite={true}
            speed={500}
            slidesToShow={slidesToShow}
            slidesToScroll={1}
          >
            <div className="inner-box">
              <figure className="clients-log">
                <Link href="/">
                  <img
                    src="/assets/web-logo/logo1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
                <Link href="/">
                  <img
                    src="/assets/web-logo/logo2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
                <Link href="/">
                  <img
                    src="/assets/web-logo/logo3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
                <Link href="/">
                  <img
                    src="/assets/web-logo/logo4.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
                <Link href="/">
                  <img
                    src="/assets/web-logo/logo5.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
                <Link href="/">
                  <img
                    src="/assets/web-logo/logo-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
                <Link href="/">
                  <img
                    src="/assets/web-logo/logo-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
                <Link href="/">
                  <img
                    src="/assets/web-logo/logo-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </figure>
            </div>
            <div className="inner-box">
              <figure className="clients-log">
                <Link href="/">
                  <img
                    src="/assets/web-logo/logo-4.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </figure>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
