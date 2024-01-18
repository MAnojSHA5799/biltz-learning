import Link from "next/link"


export default function WhyChooseUs() {
    return (
        <>
            <section className="chooseus-section p_relative bg-color-2">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-13.png)' }}></div>
                <div className="bg-layer" style={{ backgroundImage: 'url(/assets/images/whyus.jpg)' }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                        <div className="content_block_two">
                        <div className="content-box p_relative">
                            <div className="sec-title light mb_45">
                            <span className="sub-title">At Blitz Learning Technologies</span>
                            <h2>We Provide Tailored</h2>
                              
                            <h2 style={{ color: 'red' }}>& Individualized Learning Experiences</h2>
                            <p>Our core service is to offer tailored and individualized learning experiences. Our approach involves creating customized learning content that is specifically designed to help learners achieve their performance objectives.Leveraging our expertise in custom content development services, we provide a comprehensive solution that enhances business performance.By utilizing modern technology and instructional design principles, we ensure that our learners are engaged with unique and personalized learning experiences.</p>
                            </div>
                            <div className="inner-box">
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>Quick Response</h3>
                                <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>Experience Consultant</h3>
                                <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>Flexible Payment</h3>
                                <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="outer-box">
                    <h2>Looking for the Best Business <br />Consulting?</h2>
                    <Link href="/" className="theme-btn-one">Let’s Contact</Link>
                </div>
            </section>           
        </>
    )
}
