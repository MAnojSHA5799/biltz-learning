"use client";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import "../main.css";
export default function Services() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Services">
        <div>
          {/* service-style-two */}
          <section className="service-style-two p_relative">
            <div className="auto-container">
              <div className="sec-title centred mb_50">
                <span className="sub-title">
                  At Blitz Learning, we deliver exceptional, tailored services
                  with expertise and dedication, empowering businesses of all
                  sizes in today's competitive landscape.
                </span>
                {/* <h2>Provide the Best Consulting in This Industry</h2> */}
              </div>
              <div className="row clearfix">
                <div className="col-lg-12 col-md-6 col-sm-12 service-block">
                  <video
                    className="image-services"
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    // style={{ width: '300px', height: '200px' }}
                  >
                    <source
                      src="/assets/animations/Our-Services.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>

            {/* ASAS */}

            <div className="auto-container">
              <div className="sec-title centred mb_50">
                <span className="sub-title">What we do</span>
                <h2>Provide the best consulting in this industry</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-two wow fadeInUp animated"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <img
                          src="/assets/images/services/Custome-Learning.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="lower-content">
                        <div className="inner">
                          <div className="icon-box">
                            <img
                              className="icon-02"
                              src="/assets/images/icon/custom e-learning .png"
                            ></img>
                          </div>
                          <h3>
                            <Link href="/Services/Custom-eLearning">
                              Custom e-Learning
                            </Link>
                          </h3>
                          <p>
                            Crafted to meet speciﬁc learning objectives, our
                            custom e-Learning content with advanced e-Learning
                            technology ensures engagement and knowledge
                            retention.
                          </p>
                          <div className="btn-box">
                            <Link
                              href="/Services/Custom-eLearning"
                              className="theme-btn-one"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-two wow fadeInUp animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <img
                          src="/assets/images/services/ContentServices.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="lower-content">
                        <div className="inner">
                          <div className="icon-box">
                            <img
                              className="icon-02"
                              src="/assets/images/icon/content services .png"
                            ></img>
                          </div>
                          <h3>
                            <Link href="/Services/Content-Services">
                              Content services
                            </Link>
                          </h3>
                          <p>
                            Crafted to meet speciﬁc learning objectives, our
                            custom e-Learning content with advanced e-Learning
                            technology ensures engagement and knowledge
                            retention.
                          </p>
                          <div className="btn-box">
                            <Link
                              href="/Services/Content-Services"
                              className="theme-btn-one"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-two wow fadeInUp animated"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <img
                          src="/assets/images/services/VideoProduction.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="lower-content">
                        <div className="inner">
                          <div className="icon-box">
                            <img
                              className="icon-01"
                              src="/assets/images/new-icon/Vdo Production.png"
                            ></img>
                          </div>
                          <h3>
                            <Link href="/Services/video-production">
                              Video production
                            </Link>
                          </h3>
                          <p>
                            Through expert video production and e-Learning
                            development, we transform concepts into dynamic
                            visual content, enhancing the overall learning
                            experience.
                          </p>
                          <br />
                          <div className="btn-box">
                            <Link
                              href="/Services/video-production"
                              className="theme-btn-one"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-two wow fadeInUp animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <img
                          src="/assets/images/services/LearningConsulting.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="lower-content">
                        <div className="inner">
                          <div className="icon-box">
                            <img
                              className="icon-01"
                              src="/assets/images/New-Images/learning consulting.png"
                            ></img>
                          </div>
                          <h3>
                            <Link href="/Services/learning-consulting">
                              Learning consulting
                            </Link>
                          </h3>
                          <p>
                            Our learning consulting services focus on aligning
                            education strategies with business goals, creating a
                            seamless bridge between learning and organizational
                            success, leveraging cutting-edge training
                            technology.
                          </p>
                          <div className="btn-box">
                            <Link
                              href="/Services/learning-consulting"
                              className="theme-btn-one"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* service-style-two end */}

          {/* chooseus-style-two */}
          {/* <section className="chooseus-style-two sec-pad">
                        <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(/assets/images/services/Consultancy.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-xl-6 col-lg-12 offset-xl-6 content-column">
                                    <div className="content_block_six">
                                        <div className="content-box p_relative ml_30">
                                            <div className="sec-title mb_50">
                                                <span className="sub-title">Why Choose BizTech</span>
                                                <h2>Reason For Choosing Our Consultancy</h2>
                                            </div>
                                            <ul className="accordion-box">
                                                <li className="accordion block">
                                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                        <div className="icon-box"></div>
                                                        <h3>Quick Response</h3>
                                                    </div>
                                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion block">
                                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-box"></div><h3>Experience Consultant</h3></div>
                                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion block">
                                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-box"></div><h3>Flexible Payment</h3></div>
                                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
          {/* chooseus-style-two end */}

          {/* working-process-section */}
          {/* <section className="working-process-section alternat-2 sec-pad centred">
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-25.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-26.png)' }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="sec-title mb_100">
                                <span className="sub-title">Working Process</span>
                                <h2>3 Easy Steps to Get <br />Quick Help</h2>
                            </div>
                            <div className="inner-container">
                                <div className="working-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-24.png)' }}></div>
                                        <div className="count-text">
                                            <h3>01 <span>Step</span></h3>
                                        </div>
                                        <div className="text">
                                            <div className="inner">
                                                <h3>Fill In The Required Form</h3>
                                                <p>Amet minim mollit no duis deserunt ulamco.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="working-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-24.png)' }}></div>
                                        <div className="count-text">
                                            <h3>02 <span>Step</span></h3>
                                        </div>
                                        <div className="text">
                                            <div className="inner">
                                                <h3>Submit <br />Your Documents</h3>
                                                <p>Amet minim mollit no duis deserunt ulamco.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="working-block-one">
                                    <div className="inner-box">
                                        <div className="count-text">
                                            <h3>03 <span>Step</span></h3>
                                        </div>
                                        <div className="text">
                                            <div className="inner">
                                                <h3>Get Ready To <br />Receive your Visa</h3>
                                                <p>Amet minim mollit no duis deserunt ulamco.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
          {/* working-process-section end */}
        </div>
      </Layout>
    </>
  );
}
