import Link from "next/link"
import '../../../main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHandSparkles, faHome } from '@fortawesome/free-solid-svg-icons';
export default function Features() {
    return (
        <>
        
            {/* <section className="feature-section  pd-5 mt-5 mb-5 centred">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title mb_50">
                    <span className="sub-title pt-3">We are catalysts for knowledge retention</span>
                    </div>
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images/section-1/Training Whitespaces Unearthed.jpg" alt="" /></figure>
                            <div className="lower-content">
                            
                            <div className="icon-box">
                                <img className="icon-02" src="/assets/images/New-Images/icon-1.png"></img>
                                </div>
                            <h3><Link href="/">Training whitespaces unearthed</Link></h3>
                            <p>We are a catalyst for training effectiveness. As L&D disruption scrambles the puzzle pieces across key industries, our agile approach and analytic craftsmanship help reassemble the way forward quickly and innovatively, so you can confidently keep moving.</p>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images/section-1/Stories that shift perspective.jpg" alt="" /></figure>
                            <div className="lower-content">
                            <div className="icon-box"><img className="icon-02" src="/assets/images/icon/Stories-that-shift-perspective.png"></img></div>
                            <h3><Link href="/">Stories that shift perspective</Link></h3>
                            <p>We don’t just deliver training. We tell stories that transform dry content into profound storytelling that drives learners.</p>
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
                            <figure className="image-box"><img src="/assets/images/section-1/Translating learning exercise into long-term knowledge.jpg" alt="" /></figure>
                            <div className="lower-content">
                            <div className="icon-box"><img className="icon-02" src="/assets/images/icon/Translating-learning-exercise-into-long-term-knowledge.png"></img></div>
                            <h3><Link href="/">Transforming learning exercises.</Link></h3>
                            <p>We are deeply embedded inside industries at the edge of transformation. During these critical periods, and all the ones in between, clients trust us to help them translate their learning exercises into long-term knowledge repositories.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                  
                    </div>
                </div>
            </section> */}

            <section className="feature-section  pd-5 mt-5 mb-5 centred">
          <div className="auto-container">
            <div className="sec-title centred mb_50">
              <span className="sub-title">We are catalysts for knowledge retention</span>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-two wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                       src="/assets/Image/home_page/Training-Whitespaces-Unearthed.jpg" alt=""
                      />
                    </figure>
                    <div className="lower-content">
                      <div className="inner">
                        <div className="icon-box">
                          <img
                            className="icon-04"
                            src="/assets/images/New-Images/icon-1.png"
                          ></img>
                        </div>
                        <h3 style={{ textAlign: "left" }}>
                          <Link href="">
                          Training whitespaces unearthed
                          </Link>
                        </h3>
                        <p style={{ textAlign: "left" }}>
                        We are a catalyst for training effectiveness. As L&D disruption scrambles the puzzle pieces across key industries, our agile approach and analytic craftsmanship help reassemble the way forward quickly and innovatively, so you can confidently keep moving.
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-two wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="/assets/Image/home_page/Stories-that-shift-perspective.jpg" alt=""
                      />
                    </figure>
                    <div className="lower-content">
                      <div className="inner">
                        <div className="icon-box">
                          <img
                            className="icon-04"
                            src="/assets/images/icon/Stories-that-shift-perspective.png"
                          ></img>
                        </div>
                        <h3 style={{ textAlign: "left" }}>
                          <Link href="">
                          Stories that shift perspective
                          </Link>
                        </h3>
                        <p style={{ textAlign: "left" }}>
                        We don’t just deliver training. We tell stories that transform dry content into profound storytelling that drives learners.
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-two wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="/assets/Image/home_page/Translating-learning-exercise-into-long-term-knowledge.jpg" alt="/"
                      />
                    </figure>
                    <div className="lower-content">
                      <div className="inner">
                        <div className="icon-box">
                          <img
                            className="icon-04"
                            src="/assets/images/icon/Translating-learning-exercise-into-long-term-knowledge.png"
                          ></img>
                        </div>
                        <h3 style={{ textAlign: "left" }}>
                          <Link href="">
                          Transforming learning exercises
                          </Link>
                        </h3>
                        <p style={{ textAlign: "left" }}>
                        We are deeply embedded inside industries at the edge of transformation. During these critical periods, and all the ones in between, clients trust us to help them translate their learning exercises into long-term knowledge repositories.
                        </p>
                        <br />

                        
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
