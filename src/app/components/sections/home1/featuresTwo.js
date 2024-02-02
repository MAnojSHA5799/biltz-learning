import Link from "next/link"
import '../../../main.css'

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
                    <span className="sub-title pt-3">We are catalysts of knowledge retention
</span>
                    {/* <h2> 
                        Unleashing the Power of Customization
                        </h2> */}
                       
                    </div>
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images/Custome-learning.jpg" alt="" /></figure>
                            <div className="lower-content">
                            <div className="icon-box"><i className="icon-7"></i></div>
                            <h3><Link href="/">Training Whitespaces Unearthed</Link></h3>
                            <p>We are a catalyst for training effectiveness. As L&D disruption scrambles the puzzle pieces across key industries, our agile approach and analytic craftsmanship help reassemble the way forward quickly and innovatively, so you can confidently keep moving.</p>
                           
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
                            <h3><Link href="/">Stories That Shifts Perspective</Link></h3>
                            <p>We don’t just deliver training. We tell stories that transform dry content into profound storytelling that  drives learners.</p>
                            <br />
                            <br />
                            <br />
                            <br />
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
                            <h3><Link href="/">Translating Learning Exercise Into Long Term Knowledge</Link></h3>
                            <p>We are deeply embedded inside industries at the edge of transformation. During these critical periods, and all of the ones in between, clients trust us to help them translate their learning exercises into long term knowledge repository.</p>
                            
                         
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