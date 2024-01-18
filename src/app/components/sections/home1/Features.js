import Link from "next/link"


export default function Features() {
    return (
        <>
        
            <section className="feature-section bg-color-1 sec-pad centred">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title mb_50">
                    <span className="sub-title">Customized Learning</span>
                    <h2>Customize your content & needs with us at <br />Blitz Learning Technologies.</h2>
                    </div>
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images/Custome-learning.jpg" alt="" /></figure>
                            <div className="lower-content">
                            <div className="icon-box"><i className="icon-7"></i></div>
                            <h3><Link href="/">Custom e-learning</Link></h3>
                            <p>We develop engaging, innovative, and cost-effective digital learning products to help clients increase their efficiency. Our custom-designed courses include simulations, AR and VR courses, mobile learning, gamification, simulation, micro-learning, and ILT and virtual training.</p>
                            <br />
                            <br />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images/ContentServices.jpg" alt="" /></figure>
                            <div className="lower-content">
                            <div className="icon-box"><i className="icon-8"></i></div>
                            <h3><Link href="/">Content Services</Link></h3>
                            <p>We create and localize content for your e-learning to advance skills, improve performance, and get results. Our content team tailors content to match every requirement by using rich media; Our localization services for e-learning projects can help you translate and localize your content including text translation and audio recording.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images/LearningConsulting.jpg" alt="" /></figure>
                            <div className="lower-content">
                            <div className="icon-box"><i className="icon-9"></i></div>
                            <h3><Link href="/">Learning Consulting</Link></h3>
                            <p>We specialize in analyzing your current learning gaps and designing effective roadmaps to address those gaps to drive measurable results. With our expertise in designing learner-centric solutions, we offer learning consulting to L&D departments in order to optimize actionable touch points of their L&D strategy.</p>
                            <br />
                         
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/feature-3.jpg" alt="" /></figure>
                            <div className="lower-content">
                            <div className="icon-box"><i className="icon-9"></i></div>
                            <h3><Link href="/">Video Production</Link></h3>
                            <p>We specialize in analyzing your current learning gaps and designing effective roadmaps to address those gaps to drive measurable results. With our expertise in designing learner-centric solutions, we offer learning consulting to L&D departments in order to optimize actionable touch points of their L&D strategy.</p>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
