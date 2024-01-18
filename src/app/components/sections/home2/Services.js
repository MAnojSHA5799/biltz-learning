'use client'
import Link from "next/link"
import { useState } from "react"


export default function Services() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            
            <section className="service-style-two p_relative bg-color-1">
                <div className="auto-container">
                    <div className="sec-title centred mb_50">
                        <span className="sub-title">What We Do</span>
                        <h2>Provide the Best Consulting <br />in This Industry</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/service/service-1.jpg" alt="" /></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-7"></i></div>
                                            <h3><Link href="/strategy-planning">Strategy & Planning</Link></h3>
                                            <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                            <div className="btn-box">
                                                <Link href="/strategy-planning" className="theme-btn-one">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/service/service-2.jpg" alt="" /></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-12"></i></div>
                                            <h3><Link href="/program-manager">Program Manager</Link></h3>
                                            <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                            <div className="btn-box">
                                                <Link href="/program-manager" className="theme-btn-one">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/service/service-3.jpg" alt="" /></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-8"></i></div>
                                            <h3><Link href="/tax-management">Tax Management</Link></h3>
                                            <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                            <div className="btn-box">
                                                <Link href="/tax-management" className="theme-btn-one">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/service/service-4.jpg" alt="" /></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-13"></i></div>
                                            <h3><Link href="/investment-policy">Investment Policy</Link></h3>
                                            <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                            <div className="btn-box">
                                                <Link href="/investment-policy" className="theme-btn-one">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/service/service-5.jpg" alt="" /></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-14"></i></div>
                                            <h3><Link href="/financial-advices">Financial Advices</Link></h3>
                                            <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                            <div className="btn-box">
                                                <Link href="/financial-advices" className="theme-btn-one">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/service/service-6.jpg" alt="" /></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-15"></i></div>
                                            <h3><Link href="/insurance-strategy">Insurance Strategy</Link></h3>
                                            <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                            <div className="btn-box">
                                                <Link href="/insurance-strategy" className="theme-btn-one">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
