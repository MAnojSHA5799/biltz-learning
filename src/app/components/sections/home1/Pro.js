import Link from "next/link"


export default function Pro() {
    return (
        <>
        
            <section className="feature-section bg-color-1 pt-5 pb-3 centred">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                </div>
                <div className="auto-container">
                    
                    <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images/Onboarding.jpg" alt="" /></figure>
                            <div className="lower-content">
                            {/* <div className="icon-box"><i className="icon-7"></i></div> */}
                            <h3><Link href="/">Onboarding</Link></h3>
                            <p>We revamp your onboarding program to create an impressive experience for new joiners.</p>
                            <br />
                                <br />
                                <br />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images/Sales.jpg" alt="" /></figure>
                            <div className="lower-content">
                            {/* <div className="icon-box"><i className="icon-7"></i></div> */}
                            <h3><Link href="/">Sales</Link></h3>
                            <p>Our sales training caters to informed customers and adapts to changing products, customers, and competition.</p>
                            <br />
                                <br />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images/Operations.jpg" alt="" /></figure>
                            <div className="lower-content">
                            {/* <div className="icon-box"><i className="icon-8"></i></div> */}
                            <h3><Link href="/">Operations</Link></h3>
                            <p>Our engaging training programs educate employees on operational best practices.</p>
                            <br />
                                <br />
                                <br />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images/SupportFunctions.jpg" alt="" /></figure>
                            <div className="lower-content">
                            {/* <div className="icon-box"><i className="icon-9"></i></div> */}
                            <h3><Link href="/">Support Functions</Link></h3>
                            <p>We design customer service training to meet four universal needs: consistency, responsiveness, personalization, and convenience.</p>
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
