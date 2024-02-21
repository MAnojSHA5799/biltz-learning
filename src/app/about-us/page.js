"use client";
import VideoPopup from "../components/elements/VideoPopup";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import TestimonialSlider0 from "../components/slider/TestimonialSlider0";
import AwardSlider1 from "../components/slider/AwardSlider1";
import Link from "next/link";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import "../main.css";
export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });
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
  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="About Us">
        {/* about-section */}
        <section className="about-sections p_relative pb-0 mt-5">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                <div className="image_block_one">
                  <div className="image-box p_relative pr_50 mr_30">
                    <video
                      className="image"
                      loop
                      muted
                      autoPlay
                      playsInline
                      preload="false"
                    >
                      <source
                        src="/assets/animations/Animation-1.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box p_relative ml_30">
                    <div className="sec-title mb-1">
                      <span className="sub-title">
                        About Blitz Learning Technologies
                      </span>
                      <h2>Dedicated and professional consulting services</h2>
                    </div>
                    <div className="text mb_35">
                      <p>
                        Blitz Learning Technologies, established in 2016,
                        exemplifies dedication and professionalism, delivering
                        premier e-Learning services worldwide. Our innovative
                        approach and research-driven solutions cater to diverse
                        organizational needs, offering unparalleled quality and
                        effectiveness with expertise in highly customized client
                        delivery and localization in over 35+ languages.
                      </p>
                    </div>
                    <div className="inner-box mb_35">
                      <div className="single-item">
                        <div className="icon-box">
                          <i className="icon-11"></i>
                        </div>
                        <h3>Solution focused</h3>
                        <p>
                          We prioritize crafting meaningful and engaging
                          learning experiences that captivate individuals at
                          every stage of their learning journey.
                        </p>
                      </div>
                      <div className="single-item">
                        <div className="icon-box">
                          <i className="icon-11"></i>
                        </div>
                        <h3>99.99% Success</h3>
                        <p>
                          Consistent ability to deliver the fastest, most
                          accurate, and most engaging learning experience.
                        </p>
                      </div>
                    </div>
                    {/* <figure className="signature"><img src="assets/images/icons/signature-1.png" alt="" /></figure> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-section end */}
        <section className="service-style-two p_relative bg-color-1 pt-5">
                    <div className="auto-container">
                        <div className="sec-title centred mb_50">
                            <span className="sub-title">We are catalysts of knowledge retention, and our DNA is made of four elements
</span>
                            {/* <h2>Consistent ability to deliver rapid, accurate and most immersive learning experience</h2> */}
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-6 col-sm-12 service-block">
                            <video
                      className="Dna-animations"
                      loop
                      muted
                      autoPlay
                      playsInline
                      preload="false"
                     
                    >
                      <source
                        src="/assets/animations/Dna_new.mp4"
                        type="video/mp4"
                      />
                    </video>
                            </div> 
                        </div>
                    </div>
                </section>
        {/* service-style-two */}
        <section className="service-style-two p_relative bg-color-1 pt-1">
          <div className="auto-container">
            <div className="sec-title centred mb_50">
              <span className="sub-title">What we deliver
</span>
              <h2>
                Consistent ability to deliver rapid, accurate and most immersive
                learning experience
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-two wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="/assets/images/whatDo/Measurable-performance.jpg"
                        alt=""
                      />
                    </figure>
                    <div className="lower-content">
                      <div className="inner">
                        <div className="icon-box">
                        <img
                                className="icon-04"
                                src="/assets/images/new-icon/measurable performance.png"
                              ></img>
                        </div>
                        <h3>
                          <Link href="/strategy-planning">
                            Measurable performance
                          </Link>
                        </h3>
                        <p>
                          Putting people at the center of transformation to
                          improve employee, partner, and customer performance
                          with easy to assess learning content.
                        </p>
                        {/* <div className="btn-box">
                                                    <Link href="/strategy-planning" className="theme-btn-one">Read More</Link>
                                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-two wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="/assets/images/whatDo/Intuitive-learning.jpg"
                        alt=""
                      />
                    </figure>
                    <div className="lower-content">
                      <div className="inner">
                        <div className="icon-box">
                        <img
                                className="icon-04"
                                src="/assets/images/new-icon/intuitive learning .png"
                              ></img>
                        </div>
                        <h3>
                          <Link href="/program-manager">
                            Intuitive learning
                          </Link>
                        </h3>
                        <p>
                          Designing meaningful & engaging learning experiences
                          that attract and engage employees across every stage
                          in the learning journey.
                        </p>
                        <br />
                        {/* <div className="btn-box">
                                                    <Link href="/program-manager" className="theme-btn-one">Read More</Link>
                                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-two wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="/assets/images/whatDo/Operational-efficency.jpg"
                        alt=""
                      />
                    </figure>
                    <div className="lower-content">
                      <div className="inner">
                        <div className="icon-box">
                        <img
                                className="icon-04"
                                src="/assets/images/new-icon/Operational efficiency .png"
                              ></img>
                        </div>
                        <h3>
                          <Link href="/tax-management">
                            Operational efficency
                          </Link>
                        </h3>
                        <p>
                          Our global workforce, technology platforms, and
                          governance models enable organizations to achieve
                          improved speed and agility at a reduced cost.
                        </p>
                        <br />

                        {/* <div className="btn-box">
                                                    <Link href="/tax-management" className="theme-btn-one">Read More</Link>
                                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/service/service-4.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/investment-policy">Investment Policy</Link></h3>
                                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                                <div className="btn-box">
                                                    <Link href="/investment-policy" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
              {/* <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/service/service-5.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/financial-advices">Financial Advices</Link></h3>
                                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                                <div className="btn-box">
                                                    <Link href="/financial-advices" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
              {/* <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/service/service-6.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/insurance-strategy">Insurance Strategy</Link></h3>
                                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                                <div className="btn-box">
                                                    <Link href="/insurance-strategy" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
        </section>

        <section className="team-section sec-pad pt-5">
          <div className="auto-container">
            <div className="sec-title mb_50 centred">
              <span className="sub-title">Team members</span>
             
            </div>
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img
                          src="/assets/images/Team-member/rajeev_sir_330x370.jpg"
                          alt=""
                        />
                      </figure>
                      {/* <ul className="social-links clearfix">
                        <li>
                          <Link href="/about-us">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about-us">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about-us">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                      </ul> */}
                    </div>
                    <div className="lower-content">
                      <h3>
                        <Link href="/team-details">Rajeev Suman</Link>
                      </h3>
                      <span className="designation">
                        Co-founder and VP of Global Delivery
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img
                          src="/assets/images/Team-member/abhishek_sir_330x370.jpg"
                          alt=""
                        />
                      </figure>
                      {/* <ul className="social-links clearfix">
                        <li>
                          <Link href="/about-us">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about-us">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about-us">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                      </ul> */}
                    </div>
                    <div className="lower-content">
                      <h3>
                        <Link href="/team-details">Abhishek Kumar</Link>
                      </h3>
                      <span className="designation">
                        Co-Founder and VP of Sales
                      </span>
                    </div>
                    <br />

                  </div>
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-3.jpg" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/about-us"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/team-details">Bessie Cooper</Link></h3>
                                            <span className="designation">Advisor</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
              {/* <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-4.jpg" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/about-us"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/team-details">Devon Lane</Link></h3>
                                            <span className="designation">Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
          
        </section>
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
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="vfhzo499OeA"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}
