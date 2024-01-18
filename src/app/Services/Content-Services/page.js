import Layout from "../../components/layout/Layout";
import TestimonialSlider5 from "../../components/slider/TestimonialSlider5";
import TestimonialSlider1 from "../../components/slider/TestimonialSlider1";
import Link from "next/link";
export default function Services() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="Content Services"
      >
        <div>
          <section className="service-details p_relative">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="service-sidebar mr_40">
                    <div className="sidebar-widget category-widget">
                      <h3>All Services</h3>
                      <ul className="category-list clearfix">
                        <li>
                          <Link
                            href=" /Services/Content-Services"
                            className="current"
                          >
                            Content Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/Services/Custom-eLearning">
                          Custom E-Learning
                          </Link>
                        </li>
                        <li>
                          <Link href="/Services/learning-consulting">
                            Learning Consulting
                          </Link>
                        </li>
                        <li>
                          <Link href="/Services/video-production">
                            Video Production
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="sidebar-widget contact-widget centred">
                      <div className="widget-content">
                        <div
                          className="bg-layer"
                          style={{
                            backgroundImage:
                              "url(/assets/images/service/service-7.jpg)",
                          }}
                        >
                          <img
                            src="/assets/images/our-works/Scenario-Integrity.jpg"
                            alt=""
                          />
                        </div>
                        <h3>
                          Do You Need <br />
                          Any <span>Help?</span>
                        </h3>
                        <div className="icon-box">
                          <i className="icon-29"></i>
                        </div>
                        <div className="inner-box">
                          <p>
                            <Link href="mailto:contactus@biltzlearning.in">
                            contactus@biltzlearning.in
                            </Link>
                          </p>
                          <h3>
                            <Link href="tel:911204316127">
                            +91-1204316127
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="service-details-content">
                    <div className="content-one mb_90">
                      {/* <figure className="image-box">
                                <img src="/assets/images/services/Custome-Learning.jpg" alt="" />
                              </figure> */}
                      <div className="text">
                        <h2>Tailored Learning Modules with Content Services</h2>
                        <p>
                          Our content team tailors content to match every
                          requirement by using rich media; Our localization
                          services for eLearning projects can help you translate
                          and localize your content including text translation
                          and audio recording.
                        </p>
                        {/* <p>
                                  Fringilla mauris magna sit elementum elit. Facilisi lacus, pharetra
                                  quam eu urna amet aenean. Nunc mattis vitae tellus bibendum a eu,
                                  nunc. Consequat commodo ac cursus in donec orci tempus. Massa sed sit
                                  faucibus neque habitant consequat.
                                </p> */}
                      </div>
                    </div>
                    <div className="content-two mb_90">
                      {/* <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                  <div className="text-box">
                                    <h3>Overview</h3>
                                    <p>
                                    We develop engaging, innovative, and cost-effective digital learning products to help clients increase their efficiency.
                                    </p>
                                    <ul className="list-style-one clearfix">
                                      <li>Holiday Trash & Recycling</li>
                                      <li>Things To Do In Govarnex</li>
                                      <li>Rent a Picnic Shelter</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                  <figure className="image-box">
                                    <img src="/assets/images/service/service-9.jpg" alt="" />
                                  </figure>
                                </div>
                              </div> */}
                    </div>
                    <div className="content-three mb_85">
                      {/* <div className="text mb_100">
                                <h3>Our Solutions</h3>
                                <p>
                                  Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                                  venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                                  amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                                  at egestas amet feugiat laoreet sed potenti integer.
                                </p>
                              </div> */}
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="icon-8"></i>
                            </div>
                            <h3>Authoring & Enrichment</h3>
                            <p>
                              We provide high-quality writing and editorial
                              services, marketing content management with the
                              help of our content specialists– in any language.
                            </p>
                            <br />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="icon-8"></i>
                            </div>
                            <h3>Reginoal Connect</h3>
                            <p>
                              Developing content only in English neglects a
                              considerable segment of your potential audience.
                              There is no substitute for connecting with
                              employees, partners, and customers in their native
                              tongues and regional dialects
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column mt-5">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="icon-8"></i>
                            </div>
                            <h3>Review and Summary</h3>
                            <p>
                              You give us content and we will summarize it, for
                              any industry.Our empaneled SMEs include
                              researchers, academicians, software engineers, and
                              PhDs in many academic disciplines.They review any
                              kind of document and extract the relevant
                              information, summarize it, and deliver those
                              summaries in print, electronic, and mobile
                              formats.
                              <br />
                            </p>
                           
                          </div>
                        </div>

                        

                        <div className="col-lg-6 col-md-6 col-sm-12 single-column mt-5">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="icon-13"></i>
                            </div>
                            <h3>Research and Report</h3>
                            <p>
                              Our subject matter experts (SMEs) locate key
                              information and assemble quality data from
                              in-depth research on credible information sources
                              (web pages, databases). We then synthesize that
                              data into easy-to-comprehend reports, white
                              papers, and databases with clear insights and
                              knowledge to help you make informed business
                              decisions.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text mt_50">
                        <p>
                        Blitz Learning develops mobile training content across all platforms (iOS, Android, Windows) with interactive functionalities..
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <section className="expertise-section p_relative bg-color-1"> */}
              <div className="pattern-layer">
                <div
                  className="pattern-1"
                  style={{
                    backgroundImage: "url(assets/images/shape/shape-2.png)",
                  }}
                ></div>
                <div
                  className="pattern-2"
                  style={{
                    backgroundImage: "url(assets/images/shape/shape-3.png)",
                  }}
                ></div>
              </div>
              <div className="auto-container">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content_block_three">
                      <div className="content-box p_relative mr_30">
                        <div className="sec-title mb_30">
                          <span className="sub-title">Why Work With Us?</span>
                          <h2>Trusted by some of the biggest brands…</h2>
                          <p>
                            BlitzLearning is a leading e-learning platform that
                            goal to provide the highest quality eLearning
                            content for an immersive experience.
                          </p>
                        </div>
                        {/* <div className="progress-inner">
                            <div className="progress-box mb_30">
                                <p>Financial Advice</p>
                                <div className="bar">
                                <div className="bar-inner count-bar" style={{ width: '85%' }} ><div className="count-text">85%</div></div>
                                </div>
                            </div>
                            <div className="progress-box mb_30">
                                <p>Business Consulting</p>
                                <div className="bar">
                                <div className="bar-inner count-bar" style={{ width: '90%' }} ><div className="count-text">90%</div></div>
                                </div>
                            </div>
                            <div className="progress-box">
                                <p>Investment Strategy</p>
                                <div className="bar">
                                <div className="bar-inner count-bar" style={{ width: '70%' }} ><div className="count-text">70%</div></div>
                                </div>
                            </div>
                            </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content_block_four">
                      <div className="content-box p_relative ml_30 mt_20 centred">
                        <h3>
                          Request for Our Free <br />
                          Consultation
                        </h3>
                        <div className="form-inner">
                          <form
                            action="index.html"
                            method="post"
                            className="default-form"
                          >
                            <div className="row clearfix">
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Your name"
                                  required
                                />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="Email address"
                                  required
                                />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <input
                                  type="text"
                                  name="phone"
                                  placeholder="Phone number"
                                  required
                                />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <div className="select-box">
                                  <select className="selectpicker">
                                    <option value={1}>Custom eLearning</option>
                                    <option value={1}>Content Services</option>
                                    <option value={1}>
                                      Learning Consulting
                                    </option>
                                    <option value={1}>Video Production</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                <button type="submit" className="theme-btn-one">
                                  Send Request
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </section> */}
            </div>

            {/* <section className="clients-section p_relative bg-color-2 mt-0">
                    <div className="auto-container">
                      <div className="inner-box">
                        <figure className="clients-logo">
                          <Link href="/about-us">
                            <img
                              src="/assets/images/clients/client_3.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <figure className="clients-logo">
                          <Link href="/about-us">
                            <img
                              src="/assets/images/clients/client-2.png"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <figure className="clients-logo">
                          <Link href="/about-us">
                            <img
                              src="/assets/images/clients/client-4.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <figure className="clients-logo">
                          <Link href="/about-us">
                            <img
                              src="/assets/images/clients/client-1.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <figure className="clients-logo">
                          <Link href="/about-us">
                            <img
                              src="/assets/images/clients/client-3.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </div>
                    </div>
                  </section> */}
          </section>

          {/* working-process-section end */}
        </div>
      </Layout>
    </>
  );
}
