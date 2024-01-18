'use client'
import Link from "next/link"
import { useState } from "react"


export default function Pricing() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="service-section p_relative centred bg-color-1 sec-pad" style={{ padding: '20px' }}>
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-12.png)' }}></div>
                <div className="auto-container">
                    <div className="sec-title mb_70">
                    <span className="sub-title">Key Advantages</span>
                    <h2>Provide the Key Advantages <br />in This Industry</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="static-content">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-4.png)' }}></div>
                                <div className="icon-box"><i className="icon-7"></i></div>
                                <h3><Link href="/strategy-planning">Reduced E-Learning Development costs</Link></h3>
                                {/* <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p> */}
                                </div>
                                <div className="overlay-content">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-5.png)' }}></div>
                                {/* <h3><Link href="/strategy-planning">Strategy & Planning</Link></h3> */}
                                <p>Not every business requirement needs creating content from scratch, and we follow this approach very thoroughly. Our e-learning modernization techniques make learning content relevant and up-to-date, which in return, helps save a lot of costs.</p>
                                {/* <div className="btn-box">
                                    <Link href="/strategy-planning" className="theme-btn-one">Read More</Link>
                                </div> */}
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="static-content">
                                <div className="icon-box"><i className="icon-7"></i></div>
                                <h3><Link href="/program-manager">Focus On Business Needs</Link></h3>
                                <br />
                                <br />
                                {/* <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p> */}
                                </div>
                                <div className="overlay-content">
                                {/* <h3><Link href="/program-manager">Program Manager</Link></h3> */}
                                <p>Whether the requirement is for a new product or enabling the sales team about new features, our custom learning content delivery meticulously matches what best fits the business needs.</p>
                                {/* <div className="btn-box">
                                    <Link href="/program-manager" className="theme-btn-one">Read More</Link>
                                </div> */}
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-2">
                            <div className="service-block-one wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="static-content">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-6.png)' }}></div>
                                <div className="icon-box"><i className="icon-7"></i></div>
                                <h3><Link href="/tax-management">Balancing Organizational And Employess Needs</Link></h3>
                                {/* <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p> */}
                                </div>
                                <div className="overlay-content">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-7.png)' }}></div>
                                {/* <h3><Link href="/tax-management">Tax Management</Link></h3> */}
                                <p>Our e-learning development teams have put in place a strategic framework to strengthen L&D initiatives with customized content solutions, which has a positive impact on both the career paths of employees and the company’s overall objectives.</p>
                                <div className="btn-box">
                                    {/* <Link href="/tax-management" className="theme-btn-one">Read More</Link> */}
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    {/* Repeat the above service-block structure for other services */}
                    </div>
                    <div className="more-btn mt_60">
                    <Link href="/services2" className="theme-btn-one">More Services</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
