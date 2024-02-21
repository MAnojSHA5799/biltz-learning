import Link from "next/link"


export default function WhyChooseUs() {
    return (
        <>
            <section className="chooseus-section p_relative bg-color-2">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-13.png)' }}></div>
                <div className="bg-layer" style={{ backgroundImage: 'url(/assets/images/why-us-2.jpg)' }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                        <div className="content_block_two">
                        <div className="content-box p_relative">
                            <div className="sec-title light mb_45">
                            <span className="sub-title">Crafting learning excellence with e-Learning technology</span>
                            <h2>We provide tailored</h2>
                              
                            <h2>& individualized learning experiences</h2>
                            <p>At Blitz Learning Technologies, we are dedicated to crafting learning
excellence through innovation and expertise in e-Learning technology. Our commitment to delivering tailored solutions is underlined by three key principles.
<br />
<strong>Customization:</strong> We tailor learning experiences to individual needs using advanced e-Learning development.
<br />
<strong>Technology integration:</strong> Modern e-Learning technology enriches our educational approach.
<br />
<strong>Performance focus:</strong> Our goal is to enhance business performance through effective learning with cutting-edge e-Learning technology.</p>
                            </div>
                            <div className="inner-box">
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>Measurable cost advantage</h3>
                                <p>We provide a proven cost advantage of up to 30% over our competitors in India and around 50% over standard rates in the US and Europe.</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>Global delivery</h3>
                                <p>We have the capability to deliver projects across 4 continents in over 35 languages and growing. Our teams work as an extension to our clients.</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>High credibility</h3>
                                <p>In a very short span of time, we managed to onboard multiple fortune companies with a repeat business of over 95% from our first- and second-year clients.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="outer-box">
                    <h2>Looking for the best business <br />consulting?</h2>
                    <Link href="/" className="theme-btn-one">Connect us</Link>
                </div>
            </section>           
        </>
    )
}
