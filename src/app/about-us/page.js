'use client'
import VideoPopup from "../components/elements/VideoPopup"
import CounterUp from "../components/elements/CounterUp"
import Layout from "../components/layout/Layout"
import TestimonialSlider0 from '../components/slider/TestimonialSlider0'
import AwardSlider1 from '../components/slider/AwardSlider1'
import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
import '../main.css'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

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
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="About Us">
                {/* about-section */}
                <section className="about-sections p_relative pb-0 mt-5">
                    <div className="auto-container">
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                            <div className="image_block_one">
                            <div className="image-box p_relative pr_50 mr_30">
                            {/* <figure className="image image-1"><img src="/assets/images/about us 550x550.jpg" alt="" /></figure> */}
                            {/* <figure className="image image-2"><img src="/assets/images/about_us_350x250.jpg" alt="" /></figure> */}
                                {/* <div className="video-inner">
                                    <div className="video-btn">
                                        <VideoPopup />
                                    </div>
                                </div> */}
                                 <video
                    className="image image-1"
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    src="/assets/animations/Animation-1.mp4/"
                    // style={{ width: '400px', height: '40%',}}
                style={{
                    width: '120%', // Default width for mobile
                    height: 'auto', // Default height for mobile
                    '@media (min-width: 768px)': { // Adjustments for desktop screens
                      width: '50%', // Set width for desktop
                      height: 'auto', // Adjust height accordingly
                    },
                  }}
                  />

                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                            <div className="content_block_one">
                            <div className="content-box p_relative ml_30">
                                <div className="sec-title mb-1">
                                <span className="sub-title">About  Blitz Learning Technologies</span>
                                <h2>We are the Ultimate Learning Partner for your Training Needs</h2>
                                </div>
                                <div className="text mb_35">
                                <p>Founded in 2016, Blitz Learning Technologies was established with a goal to provide the highest quality eLearning content for an immersive experience.</p>
                                <br />
                                <p>The founders of Blitz Learning Technologies identified the gaps in client delivery and decided to create a mechanism of extremely customized client delivery.</p>
                                </div>
                                <div className="inner-box mb_35">
                                <div className="single-item">
                                    <div className="icon-box"><i className="icon-11"></i></div>
                                    <h3>Measurable Performance</h3>
                                    <p>Putting people at the center of transformation to improve employee.</p>
                                </div>
                                <div className="single-item">
                                    <div className="icon-box"><i className="icon-11"></i></div>
                                    <h3>Intuitive Learning</h3>
                                    <p>Designing meaningful & engaging learning experiences that attract and engage employees across every stage in the learning journey.</p>
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


                {/* service-style-two */}
                <section className="service-style-two p_relative bg-color-1 pt-5">
                    <div className="auto-container">
                        <div className="sec-title centred mb_50">
                            <span className="sub-title">What We Do</span>
                            <h2>Consistent ability to deliver rapid, accurate and most immersive learning experience</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="/assets/images/whatDo/Measurable-performance.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
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
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/program-manager">Intuitive learning</Link></h3>
                                                <p>Designing meaningful & engaging learning experiences that attract and engage employees across every stage in the learning journey.</p>
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
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/tax-management">Operational efficency</Link></h3>
                                                <p>Our global workforce, technology platforms, and governance models enable organizations to achieve improved speed and agility, at a reduced cost.</p>
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
                <section className="clients-section p_relative bg-color-2">
                    <div className="auto-container">
                        <div className="inner-box">
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/client-1.jpg" alt="" /></Link></figure>
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/client-2.png" alt="" /></Link></figure>
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/client-3.jpg" alt="" /></Link></figure>
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/client-4.jpg" alt="" /></Link></figure>
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/client_3.jpg" alt="" /></Link></figure>
                        </div>
                    </div>
                </section>
                {/* clients-section end */}



                {/* team-section */}
                <section className="team-section sec-pad pt-5">
                    <div className="auto-container">
                        <div className="sec-title mb_50 centred">
                            <span className="sub-title">Team Member</span>
                            <h2>Meet our Gurus from Team
                        {/* <br /> */}
                        </h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/about-us"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
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
                                            <figure className="image"><img src="assets/images/team/team-2.jpg" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/about-us"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/team-details">Abhishek Kumar</Link></h3>
                                            <span className="designation">Co-Founder and VP of Sales</span>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
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
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
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
                            </div>
                        </div>
                    </div>
                    <section className="testimonial-style-two p_relative  pt-5 mt-1">
                    <div className="auto-container">
                        <div className="sec-title centred">
                            <span className="sub-title">Testimonials</span>
                            <h2>What They’re Say About Us?</h2>
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


