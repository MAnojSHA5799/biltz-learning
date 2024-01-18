import Link from "next/link"


export default function About() {
    return (
        <>
            <section className="about-style-three p_relative">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_one">
                                <div className="content-box p_relative mr_40">
                                    <div className="sec-title mb_25">
                                        <span className="sub-title">About BizTech</span>
                                        <h2>Dedicated And <br />Professional Consulting Services</h2>
                                    </div>
                                    <div className="text mb_35">
                                        <p>Tempus nec vitae orci sodales metus velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor fusce.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio est. Sit semper et velit fusce.</p>
                                    </div>
                                    <div className="inner-box">
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Solution Focused</h3>
                                            <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>99.99% Success</h3>
                                            <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_three">
                                <div className="image-box p_relative ml_40 pl_60">
                                    <figure className="image"><img src="assets/images/resource/about-4.jpg" alt="" /></figure>
                                    <div className="image-text">
                                        <h3>SINCE 1990</h3>
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
