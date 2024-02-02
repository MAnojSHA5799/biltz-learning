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
            <section className="service-section p_relative centred bg-color-1 sec-pad" style={{ padding: '50px' }}>
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-12.png)' }}></div>
                <div className="auto-container">
                    <div className="sec-title mb_70">
                    <span className="sub-title">Key Advantages</span>
                    <h2>Generating New Ideas. Solving Big Problems</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="static-content">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-4.png)' }}></div>
                                <div className="icon-box"><i className="icon-7"></i></div>
                                <h3><Link href="/">Measurable Cost Advantage</Link></h3>
                                {/* <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p> */}
                                </div>
                                <div className="overlay-content">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-5.png)' }}></div>
                                {/* <h3><Link href="/strategy-planning">Strategy & Planning</Link></h3> */}
                                <p>We provide a proven cost advantage of up to 30% over our competitors in India and around 50% over standard rates in the US and Europe.</p>
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
                                <h3><Link href="/program-manager">Proven Growth Record</Link></h3>
                                <br />
                                <br />
                                {/* <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p> */}
                                </div>
                                <div className="overlay-content">
                                {/* <h3><Link href="/program-manager">Program Manager</Link></h3> */}
                                <p>We have been growing at over 150% in the past 9 years of our incorporation. The growth is attributed to 95% repeat business.</p>
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
                                <h3><Link href="/tax-management">Unparalleled value addition</Link></h3>
                                {/* <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p> */}
                                </div>
                                <div className="overlay-content">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-7.png)' }}></div>
                                {/* <h3><Link href="/tax-management">Tax Management</Link></h3> */}
                                <p>We provide extended support for up to 3 months for any course that we create. This includes minor changes and updates without any charge for up to three sprints. We provide the source file along with the SCORM published file, which is included in the project price agreed upon.
</p>
                                <div className="btn-box">
                                    {/* <Link href="/tax-management" className="theme-btn-one">Read More</Link> */}
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    {/* Repeat the above service-block structure for other services */}
                    </div>
                    <div className="more-btn mt_20">
                    <Link href="/about-us" className="theme-btn-one">More Services</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
