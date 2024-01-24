import Link from "next/link"


export default function Features() {
    return (
        <>
        
            <section className="feature-section  pd-5 mt-5 mb-5 centred">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title mb_50">
                    
                    <h2>Elevating Learning Experiences with e-Learning Development 
                        {/* <br />Blitz Learning Technologies. */}
                        </h2>
                        <span className="sub-title">Unleashing the Power of Customization</span>
                    </div>
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images/Custome-learning.jpg" alt="" /></figure>
                            <div className="lower-content">
                            <div className="icon-box"><i className="icon-7"></i></div>
                            <h3><Link href="/Services/Custom-eLearning">Custom e-Learning</Link></h3>
                            <p>Crafted to meet speciﬁc learning objectives, our custom e-learning content with advanced e-Learning technology ensures
engagement and knowledge retention.</p>
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
                            <h3><Link href="/Services/Content-Services">Content Services</Link></h3>
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
                            <h3><Link href="/Services/learning-consulting">Learning Consulting</Link></h3>
                            <p>Our learning consulting services focus on aligning education strategies with business goals, creating a seamless bridge between learning and organizational success, leveraging cutting-edge training technology.</p>
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
