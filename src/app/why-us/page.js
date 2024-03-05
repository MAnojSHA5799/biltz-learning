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
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../main.css";
import "../cards.css";
export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });
  const swiperOptions = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 30,
  };
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
    autoplay: true,
    // autoplaySpeed: 1000,
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
  const swiperOptions1 = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    // Pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        // spaceBetween: 30,
      },
      575: {
        slidesPerView: 1,
        // spaceBetween: 30,
      },
      767: {
        slidesPerView: 2,
        // spaceBetween: 30,
      },
      991: {
        slidesPerView: 2,
        // spaceBetween: 30,
      },
      1199: {
        slidesPerView: 1,
        // spaceBetween: 30,
      },
      1350: {
        slidesPerView: 1,
        // spaceBetween: 30,
      },
    },
  };
  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Why Us">
       

        <section
          className="service-section p_relative centred bg-color-1 sec-pad"
          style={{ padding: "50px" }}
        >
          <div className="auto-container">
            <div className="sec-title mb_30">
              <span className="sub-title">Why choose us?</span>
              <h2>
                We're the architects of enduring learning experiences through
                innovative strategies, personalized content, and interactive
                engagement
              </h2>
            </div>
            </div>
          <div className="auto-container">
            <Swiper {...swiperOptions1} className="theme_carousel owl-theme">
              <SwiperSlide className="slide ">
                <div class="boxesContainer">
                  <div class="cardBox">
                    <div class="card">
                      <div class="front custom-card-image" style={{ backgroundImage: 'url(/assets/why-us/business-understanding.jpg)' }}>
                      <img
                                className="icon-02"
                                src="/assets/why-us/crisp-business-understanding.png"
                              ></img>
                           
                        <h3 className="text-white" >Crisp business understanding</h3>
                      </div>
                      <div class="back bg-dark ">
                       
                        <p className="text-white"> We understand the criticality of service quality
                              for outsourced business requirements. We provide
                              actionable and result-oriented training courses
                              for your business processes with the highest
                              quality.</p>
                      
                      </div>
                    </div>
                  </div>

                  <div class="cardBox">
                    <div class="card">
                      <div class="front custom-card-image" style={{ backgroundImage: 'url(/assets/why-us/measurable-cost-advantage.jpg)' }}>
                     
                              <img
                                className="icon-02"
                                src="/assets/why-us/measurable cost advantage (2).png"
                              ></img>
                        <h3 className="text-white"> Measurable cost advantage</h3>
                      </div>
                      <div class="back bg-dark">
                      
                        <p className="text-white">We provide a proven cost advantage of up to 30%
                              over our competitors in India and around 50% over
                              standard rates in the US and Europe.</p>
                      
                      </div>
                    </div>
                  </div>

                  <div class="cardBox">
                    <div class="card">
                      <div class="front custom-card-image" style={{ backgroundImage: 'url(/assets/why-us/heigh-Quality.jpg)' }}>
                              <img
                                className="icon-02"
                                src="/assets/why-us/heigh reliability.png"
                              ></img>
                        <h3 className="text-white">High quality</h3>
                      </div>
                      <div class="back bg-dark">
                        <p className="text-white"> With a rigor to ensure the highest quality, we
                              employ the best skills in the market with a deep
                              understanding of organizational L&D initiatives
                              and psychology. Our SMEs, developers, and
                              designers are highly skilled with experience of
                              multiple years in the industry.</p>
                      </div>
                    </div>
                  </div>

                </div>
               </SwiperSlide>

              <SwiperSlide className="slide">
              <div class="boxesContainer">
                  <div class="cardBox">
                    <div class="card">
                      <div class="front custom-card-image" style={{ backgroundImage: 'url(/assets/why-us/global-delivery.jpg)' }}>
                      <img
                                className="icon-02"
                                src="/assets/why-us/global delivery (1).png"
                              ></img>
                           
                        <h3 className="text-white">Global delivery</h3>
                      </div>
                      <div class="back bg-dark ">
                       
                        <p className="text-white">  We can deliver projects across 4 continents in
                              over 35 languages and growing. Our teams work as
                              an extension of our clients.</p>
                      </div>
                    </div>
                  </div>

                  <div class="cardBox">
                    <div class="card">
                      <div class="front custom-card-image" style={{ backgroundImage: 'url(/assets/why-us/growth-record.jpg)' }}>
                     
                      <img
                                className="icon-02"
                                src="/assets/why-us/Proven growth record2.png"
                              ></img>
                        <h3 className="text-white">Proven growth record</h3>
                      </div>
                      <div class="back bg-dark">
                      
                        <p className="text-white">We have been growing at over 150% in the past 9
                              years of our incorporation. The growth is
                              attributed to 95% repeat business.We have grown by
                              over 150% in the past nine years of our
                              incorporation. The growth is attributed to 95%
                              repeat business.</p>
                      
                      </div>
                    </div>
                  </div>

                  <div class="cardBox">
                    <div class="card">
                      <div class="front custom-card-image" style={{ backgroundImage: 'url(/assets/why-us/crediblity.jpg)' }}>
                      <img
                                className="icon-02"
                                src="/assets/why-us/high credibility.png"
                              ></img>
                        <h3 className="text-white">High credibility</h3>
                      </div>
                      <div class="back bg-dark">
                        <p className="text-white">In a very short span of time, we managed to
                              onboard multiple fortune companies with a repeat
                              business of over 95% from our first- and
                              second-year clients.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide className="slide ">
              <div class="boxesContainer">
                  <div class="cardBox">
                    <div class="card">
                      <div class="front custom-card-image" style={{ backgroundImage: 'url(/assets/why-us/value-addition.jpg)' }}>
                      <img
                                className="icon-02"
                                src="/assets/why-us/value-edtision.png"
                              ></img>
                           
                        <h3 className="text-white">Unparalleled value addition</h3>
                      </div>
                      <div class="back bg-dark ">
                       
                        <p className="text-white">We offer 3 months of extended support for our
                              courses, covering minor updates for up to 3
                              sprints at no extra cost. Source files and SCORM
                              published files are included in the agreed project
                              price.</p>
                      </div>
                    </div>
                  </div>
                  <div class="cardBox">
                    <div class="card">
                      <div class="front custom-card-image" style={{ backgroundImage: 'url(/assets/why-us/business-understanding.jpg)' }}>
                      <img
                                className="icon-02"
                                src="/assets/why-us/crisp-business-understanding.png"
                              ></img>
                           
                        <h3 className="text-white">Crisp business understanding</h3>
                      </div>
                      <div class="back bg-dark ">
                       
                        <p className="text-white"> We understand the criticality of service quality
                              for outsourced business requirements. We provide
                              actionable and result-oriented training courses
                              for your business processes with the highest
                              quality.</p>
                      
                      </div>
                    </div>
                  </div>

                  <div class="cardBox">
                    <div class="card">
                      <div class="front custom-card-image" style={{ backgroundImage: 'url(/assets/why-us/measurable-cost-advantage.jpg)' }}>
                     
                              <img
                                className="icon-02"
                                src="/assets/images/icon/proven growth record.png"
                              ></img>
                        <h3 className="text-white"> Measurable cost advantage</h3>
                      </div>
                      <div class="back bg-dark">
                      
                        <p className="text-white">We provide a proven cost advantage of up to 30%
                              over our competitors in India and around 50% over
                              standard rates in the US and Europe.</p>
                      
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
        </section>

        {/* service-style-two end */}
        <section className="about-sections p_relative pb-0 mt-5">
          <div className="auto-container">
            <div className="sec-title centred mb_50">
              <span className="sub-title">
                Our Approach: 5C framework combining ADDIE and AGILE
              </span>
              <h2>
                We understand the L&D imperatives you are trying to drive
                through e-Learning. Accordingly, we customize our development
                framework to align with your learning and development goals.
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                <div className="image_block_one">
                  <div className="image-box p_relative pr_50 mr_30">
                    <video
                      className="whyus-animations"
                      loop
                      muted
                      autoPlay
                      playsInline
                      preload="false"
                    >
                      <source
                        src="\assets\animations\whyus.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box p_relative ml_30">
                    <p className="content-1 mb-3">
                      <span class="bold-text">Capture :</span> The initial plan
                      outlines your needs, desired outcomes for web-based
                      training, potential barriers to knowledge impartment, and
                      available resources for a well-structured solution.
                    </p>

                    <p className="content-1 mb-3">
                      <span class="bold-text">Conceptualize :</span> The next
                      step involves transforming information into a vision for
                      an engaging learning experience, testing ideas, mapping
                      content, and creating a prototype to ensure a successful
                      learning experience.
                    </p>

                    <p className="content-1 mb-3">
                      <span class="bold-text">Create :</span> We build your
                      project on an authoring platform, breaking it into agile
                      sub-processes, ensuring clear roles and responsibilities,
                      and testing the concept with content before collaborating
                      effectively.
                    </p>
                    <p className="content-1 mb-3">
                      <span class="bold-text">Cultivate :</span> This is the
                      crucial stage where we identify where the content could be
                      tweaked to improve engagement. We track wider audience
                      trends to improve your digital learning strategy thus
                      aligning your L&D vision with the overall business KPIs.
                    </p>
                    <p className="content-1 mb-3">
                      <span class="bold-text">Commercialize :</span> We
                      developed a product aligned with your vision, improving
                      digital learning ROI by increasing global reach without
                      physical trainers. The interactivity and easy-to-use
                      platform saves time and investment in the training.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="testimonial-style-two p_relative  pt-0 mt-1">
            <div className="auto-container">
              <div className="sec-title centred">
                <span className="sub-title">Testimonials</span>
                <h2>What our client says</h2>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <TestimonialSlider0 />
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* clients-section */}

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
              {/* <div className="inner-box">
                <figure className="clients-log">
                  <img
                    src="/assets/web-logo/logo6.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
              </div> */}
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
