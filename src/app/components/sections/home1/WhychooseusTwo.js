'use client'
import VideoPopup from "../../elements/VideoPopup"
import CounterUp from "../../elements/CounterUp"
import Layout from "../../layout/Layout"
import TestimonialSlider0 from '../../slider/TestimonialSlider0'
// import AwardSlider1 from '../../AwardSlider1'
import Link from "next/link"
import { useState } from 'react'
// import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
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
        
                {/* service-style-two */}
                <section className="service-style-two bg-color-1 pt-5">
                    <div className="auto-container">
                        <div className="sec-title centred mb_50">
                            <span className="sub-title">What We Do</span>
                            <h2>Provide the Best Consulting in This Industry</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="/assets/images/whatDo/Measurable-performance.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-13"></i></div>
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
                          
                            
                            
                        </div>
                    </div>
                </section>
                {/* service-style-two end */}


                {/* clients-section */}
                <section className="clients-section p_relative">
                    <div className="auto-container">
                        <div className="inner-box">
                            <figure className="clients-log"><Link href="/about-us"><img src="assets/images/clients/client-1.jpg" alt="" /></Link></figure>
                            <figure className="clients-log"><Link href="/about-us"><img src="assets/images/clients/client-2.png" alt="" /></Link></figure>
                            <figure className="clients-log"><Link href="/about-us"><img src="assets/images/clients/client-3.jpg" alt="" /></Link></figure>
                            <figure className="clients-log"><Link href="/about-us"><img src="assets/images/clients/client-4.jpg" alt="" /></Link></figure>
                            <figure className="clients-log"><Link href="/about-us"><img src="assets/images/clients/client_3.jpg" alt="" /></Link></figure>
                        </div>
                    </div>
                </section>
                {/* clients-section end */}


                


                {/* chooseus-style-two */}
                <section className="chooseus-style-two sec-pad">
                    <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(/assets/images/ChoosingOurConsultancy.jpg)' }}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-xl-6 col-lg-12 offset-xl-6 content-column">
                                <div className="content_block_six">
                                    <div className="content-box p_relative ml_30">
                                        <div className="sec-title mb_50">
                                            <span className="sub-title">Why Choose  Blitz Learning Technologies</span>
                                            <h2>Reason For Choosing Our Consultancy</h2>
                                        </div>
                                        <ul className="accordion-box">
                                            {/*Accordion Block*/}
                                            <li className="accordion block">
                                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                    <div className="icon-box"></div>
                                                    <h3>Revolutionizing Innovations for Lasting Impact</h3>
                                                </div>
                                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Maximizing Customer Satisfaction and Dedication Fueled by Integrity and Passion.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Accordion Block*/}
                                            <li className="accordion block">
                                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-box"></div><h3> A Journey into Self-Development</h3></div>
                                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Transformative Training, Mentorship Programs, Interactive Sessions, and Community Meetups.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Accordion Block*/}
                                            <li className="accordion block">
                                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-box"></div><h3>Balancing Work and Life</h3></div>
                                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text"> A Comprehensive Approach to Fostering Healthy Lifestyle Choices.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <li className="accordion block">
                                                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}><div className="icon-box"></div><h3>Flexible Payment2</h3></div>
                                                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* chooseus-style-two end */}


                {/* testimonial-style-two */}
                <section className="testimonial-style-two p_relative pt-5 mb-0">
                    <div className="auto-container">
                        <div className="sec-title mb-0 centred">
                            <span className="sub-title">Testimonials</span>
                            <h2>What They’re Say About Us?</h2>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <TestimonialSlider0 />                        
                            </div>
                        </div>
                    </div>
                </section>
                {/* testimonial-style-two end */}


                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
           
        </>
    )
}


