import React from "react";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import '../../main.css'
export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Works">
        <section className="team-details p_relative">
          <div className="auto-container">
            <div className="team-details-content mb_90">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box mr_30">
                    <img src="/assets/images/team/team-9.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box ml_30">
                    <h2>Online Portal|Sales Academy Training</h2>
                    {/* <span className="designation">Advisor</span> */}
                    <p>
                      A leading provider of consultative services on technology
                      trends, software licensing and procurement.
                    </p>
                    <ul className="info-list clearfix">
                      <li>
                        <span>Industry: </span>IT and Consulting
                      </li>
                      <li>
                        <span>Target: </span>India,APAC
                      </li>
                      <li>
                        <span>Language: </span>
                        English
                      </li>
                      <li>
                        <span>Target Learners: </span>
                        All employees
                      </li>
                      <li>
                        <span>Authoring Tool: </span>
                        Articulate Storyline
                      </li>
                    </ul>
                    {/* <ul className="social-links clearfix">
                            <li>
                                <Link href="/team-details">
                                <i className="fab fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="/team-details">
                                <i className="fab fa-twitter"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="/team-details">
                                <i className="fab fa-instagram"></i>
                                </Link>
                            </li>
                            </ul> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="biography-box mb_80">
              {/* <h3>Darlene Robertson Biography</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
                        turpis blandit blandit mauris aliquam condimentum quam suspendisse.
                        Sit bibendum adipiscing enim lacus quis. A nec accumsan aliquam
                        magnis orci. Dui amet scelerisque lectus commodo iaculis semper. Arcu
                        eget vestibulum amet faucibus eugi augue Odio viverra odio tempor
                        porttitor orci, gravida orci consequat. Aliquet aliquet nibh sit
                        massa. Molestie proin facilisis ac vulputate sed quam et, arcu mattis.
                        In egestas rutrum pharetra sit dictum augue.
                    </p>
                    <p>
                        Imperdiet consectetur gravida vel rutrum. Tempus, mattis sit massa
                        lacus morbi. Feugiat aliquam aenean sagittis nunc neque sit. Nec lorem
                        tincidunt arcu nunc ac accumsan risus felis in. Mi ornare convallis
                        tincidunt maecenas dui auctor cursus platea velit. Augue eget turpis
                        facilisi dui vel at faucibus diam. Semper non vitae elit mattis eu
                        sodales. Sapien pellentesque sagittis enim.
                    </p> */}
                    
              <h3 className="mb-1">Client Requirements</h3>
              <ul >
                <li className="our-work-li"  >
                  The client needed to create a SCORM compliant interactive and
                  assessment-based learning module which can enable its
                  procurement services to act as an enabler to provide best
                  procurement services.
                </li>
                <li className="our-work-li">The client also wanted an LMS to host such courses.</li>
              </ul>
              <br />
              <h3 className="mb-1">Challenges</h3>
              <ul>
                <li  className="our-work-li">
                  The client had a lot of content but no training module and no
                  tool to provide hosted trackable training.
                </li>
                <li className="our-work-li">
                  The client apart from the course creation, needed an LMS to
                  host the courses on it.
                </li>
                <li className="our-work-li">
                  The courses had to be assigned as per the job roles and the
                  users should be able to access only those courses that were
                  assigned to his/her specific role.
                </li>
              </ul>
              <br />

              <h3 className="mb-1">Outcome Achieved</h3>
              <ul>
                <li className="our-work-li">
                  The courses were rolled to over 80,000 employees and the
                  engagement of the employees was very well communicated by the
                  client. In the first week of roll out over 45,000 employees
                  completed the course.
                </li>
                <li className="our-work-li">
                  The engaging content attracted learners to the e-Learning
                  Portal at least 4-5 times a month to learn from the courses as
                  per their needs.
                </li>
                <li className="our-work-li">
                  Relevant courses were added on the portal and the courses were
                  assigned as per the role of the learner in the organization.
                  This type of customized access aligned to the individual
                  needs.
                </li>
                <li className="our-work-li">
                  The learners were able to make better use of the knowledge and
                  were able to apply it to well to their work.
                </li>
              </ul>

              <div className="blog-details-content mt-1">
                <div className="news-block-one">
                  <div className="inner-box">
                    <div className="lower-content">
                      <blockquote>
                        <div className="icon-box">
                          <i className="icon-47"></i>
                        </div>
                        <p>
                          We saw the sample work that Blitz Learning did for a
                          global retail player and decided to give them a small
                          project to start with. We were delighted with the
                          first deliverables. They have a team of highly
                          committed professionals who believe in delivering over
                          and above expectations. They are very transparent in
                          their pricing. We have worked with Blitz Learning on
                          multiple e-Learning projects, and each time their
                          deliverable surpasses our expectation! The team at
                          Blitz is our preferred partner for our e-Learning
                          solution requirements.” – Director, Learning &
                          Development
                        </p>
                        {/* <h4>Neha Tyagi</h4> */}
                      </blockquote>

                      <blockquote>
                        <div className="icon-box">
                          <h3 className="text-center">Blitz Solution</h3>
                        </div>
                        <ul>
                          <li className="our-work-li">
                            In order to develop a new training initiative and an
                            LMS, Blitz Learning partnered with an IT and LMS
                            vendor to create an e-Learning Portal and LMS to
                            support the new training initiative. The vendor
                            customized its LMS to create a learning portal that
                            delivers access-based training across the vast
                            spread of the client’s organization.
                          </li>
                          <li className="our-work-li">
                            Blitz Learning created a fully interactive course
                            and an e Learning portal and integrated it with our
                            partner’s LMS. The LMS had Admin and User login
                            panels and the learner needed to log in and take the
                            course progress of which was automatically reflected
                            in the LMS and a certificate of completion was
                            generated.
                          </li>
                          <li className="our-work-li">
                            Certificates were issued for chosen courses thus
                            providing a sense of accomplishment for the
                            learners.
                          </li>
                        </ul>
                        {/* <h4>Neha Tyagi</h4> */}
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-form-area">
                    <h3>Leave A Comments</h3>
                    <div className="form-inner">
                      <form
                        action="blog-detailsl"
                        method="post"
                        className="default-form"
                      >
                        <div className="row clearfix">
                          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input
                              type="email"
                              name="email"
                              placeholder="Your email"
                              required
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <textarea
                              name="message"
                              placeholder="Type message"
                            ></textarea>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <div className="message-btn">
                              <button type="submit" className="theme-btn-one">
                                Post Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    </div>
          </div>
        </section>



            {/* <section className="team-details mb_0">
            <div className="auto-container">
                    <div className="lower-content">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-6 col-sm-12 education-column">
                        <div className="education-inner mr_70 ml_20">
                            <div className="text mb_10">
                            <h3>Experience</h3>
                            </div>
                            <div className="inner-box">
                            <div className="single-item">
                                <p>The client needed to create a SCORM compliant interactive and assessment-based learning module which can enable its procurement services to act as an enabler to provide best procurement services.</p>
                            </div>
                            <div className="single-item">
                                <p>The client needed to create a SCORM compliant interactive and assessment-based learning module which can enable its procurement services to act as an enabler to provide best procurement services.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section> */}
      </Layout>
    </>
  );
}
