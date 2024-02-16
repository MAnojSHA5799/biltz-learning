'use client'
import VideoPopup from "../components/elements/VideoPopup"
import CounterUp from "../components/elements/CounterUp"
import Layout from "../components/layout/Layout"
import TestimonialSlider0 from '../components/slider/TestimonialSlider0'
import AwardSlider1 from '../components/slider/AwardSlider1'
import Link from "next/link"
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react'

import '../main.css'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    const [slidesToShow, setSlidesToShow] = useState(4);
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })
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
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
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
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Why Us">
               
                {/* service-style-two */}
                

                <section className="service-style-two p_relative bg-color-1 pt-5">
                    <div className="auto-container">
                        <div className="sec-title centred mb_50">
                            <span className="sub-title">Why choose us?</span>
                            <h2>We're the architects of enduring learning experiences through innovative strategies, personalized content, and interactive engagement
</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="/assets/images/whatDo/Measurable-performance.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"> <img
                                className="icon-04"
                                src="/assets/images/new-icon/measurable performance.png"
                              ></img></div>
                                                <h3><Link href="/strategy-planning">Measurable performance</Link></h3>
                                                <p>Putting people at the center of transformation to improve employee, partner, and customer performance with easy to assess learning content.</p>
                                                {/* <div className="btn-box">
                                                    <Link href="/strategy-planning" className="theme-btn-one">Read More</Link>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="/assets/images/whatDo/Intuitive-learning.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><img
                                className="icon-04"
                                src="/assets/images/new-icon/intuitive learning .png"
                              ></img></div>
                                                <h3><Link href="/program-manager">Intuitive learning</Link></h3>
                                                <p>Designing meaningful & engaging learning experiences that attract and engage employees across every stage in the learning journey.</p>
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
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="/assets/images/whatDo/Operational-efficency.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><img
                                className="icon-04"
                                src="/assets/images/new-icon/Operational efficiency .png"
                              ></img></div>
                                                <h3><Link href="/tax-management">Operational efficency</Link></h3>
                                                <p>Our global workforce, technology platforms, and governance models enable organizations to achieve improved speed and agility at a reduced cost.</p>
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
                {/* service-style-two end */}


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
                {/* clients-section end */}



                {/* team-section */}
                <section className="team-section sec-pad pt-5">
                    <div className="auto-container">
                        <div className="sec-title mb_50 centred">
                            <span className="sub-title">Team members</span>
                            <h2>Meet our gurus from the team
                        {/* <br /> */}
                        </h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                        <figure className="image"><img src="/assets/images/Team-member/rajeev_sir_330x370.jpg" alt="" /></figure>
                                            {/* <ul className="social-links clearfix">
                                                <li><Link href="/about-us"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-instagram"></i></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/team-details">Rajeev Suman</Link></h3>
                                            <span className="designation">Co-founder and VP of Global Delivery</span>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                        <figure className="image"><img src="/assets/images/Team-member/abhishek_sir_330x370.jpg" alt="" /></figure>
                                            {/* <ul className="social-links clearfix">
                                                <li><Link href="/about-us"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-instagram"></i></Link></li>
                                            </ul> */}
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/team-details">Abhishek Kumar</Link></h3>
                                            <span className="designation">Co-Founder and VP of Sales</span>
                                           
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
                    <section className="testimonial-style-two p_relative  pt-5 mt-1">
                    <div className="auto-container">
                        <div className="sec-title centred">
                            <span className="sub-title">Testimonials</span>
                            <h2>What they’re saying about us?</h2>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                {/*Theme Carousel*/}
                                <TestimonialSlider0 />                        
                            </div>
                        </div>
                    </div>
                </section>
                </section>
                {/* team-section end */}


                {/* chooseus-style-two */}
                {/* <section className="chooseus-style-two sec-pad">
                    <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/chooseus-bg-2.jpg)' }}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-xl-6 col-lg-12 offset-xl-6 content-column">
                                <div className="content_block_six">
                                    <div className="content-box p_relative ml_30">
                                        <div className="sec-title mb_50">
                                            <span className="sub-title">Why Choose BizTech</span>
                                            <h2>Reason For Choosing Our Consultancy</h2>
                                        </div>
                                        <ul className="accordion-box">
                                            
                                            <li className="accordion block">
                                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                    <div className="icon-box"></div>
                                                    <h3>Quick Response</h3>
                                                </div>
                                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                            <li className="accordion block">
                                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-box"></div><h3>Experience Consultant</h3></div>
                                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                            <li className="accordion block">
                                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-box"></div><h3>Flexible Payment</h3></div>
                                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* chooseus-style-two end */}


                {/* testimonial-style-two */}
               
                {/* testimonial-style-two end */}


                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
            </Layout>
        </>
    )
}


