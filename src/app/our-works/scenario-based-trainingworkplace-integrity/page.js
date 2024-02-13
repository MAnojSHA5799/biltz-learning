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
                    <img src="/assets/images/our-works/our-work-6.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box ml_30">
                    <h2>Scenario-Based Training
Workplace Integrity


</h2>
                    {/* <span className="designation">Advisor</span> */}
                    <p>
                    A Middle East-based leading retailer
                    </p>
                    <ul className="info-list clearfix">
                      <li>
                        <span>Industry: </span>Retail
                      </li>
                      <li>
                        <span>Target: </span>UAE
                      </li>
                      <li>
                        <span>Language: </span>
                        English, Arabic
                      </li>
                      <li>
                        <span>Target Learners: </span>
                        Sales
                      </li>
                      <li>
                        <span>Authoring Tool: </span>
                        Articulate storyline
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
              <h3 className="mb-1">Client requirements</h3>
              <ul>
                <li className="our-work-li">
                The client wanted to create a sales call training snippet with an elevated level of interactivity which enables the learner to get hold of the best way to engage with the customers.
                </li>
                <li className="our-work-li">The client wanted to make the course accessible via mobiles and tablets so that their on-ground sales people can access it.</li>
               
              </ul>
              <br />
              <h3 className="mb-1">Challenges</h3>
              <ul>
                <li className="our-work-li">
                The course had to be created so that it appeals to different sales personals having unique backgrounds, divergent learning needs/preferences.
                </li>
                <li className="our-work-li">
                The course content had to be succinct and effective for quick digestion and effectively apply it to their workplace.
                </li>
                <li className="our-work-li">
                The learners needed the course to run smoothly on their handheld devices both locally and from the network, even under low bandwidth.
                </li>
              </ul>
              <br />
              <h3 className="mb-1">Outcome achieved</h3>
              <ul>
                <li className="our-work-li">
                The mobile based content saw increased attraction and learners accessed the courses frequently to learn and apply to the work floor.
                </li>
                <li className="our-work-li">
                The reference PDFs attached in the course could be downloaded that helped them learn as per need as well as to further train new hires.
                </li>
                <li className="our-work-li">The courses helped them to learn more and engage with the customers in a better way.</li>
              </ul>

              <div className="blog-details-content mt-1">
                <div className="news-block-one">
                  <div className="inner-box">
                    <div className="lower-content">
                      {/* <blockquote>
                        <div className="icon-box">
                          <i className="icon-47"></i>
                        </div>
                        <p>
                        We saw the sample work that Blitz Learning did for a global retail player and decided to give them a small project to start with. We were delighted with the first deliverables. They have a team of highly committed professionals who believe in delivering over and above expectations. They are very transparent in their pricing. We have worked with Blitz Learning on multiple e-Learning projects, and each time their deliverable surpasses our expectation! The team at Blitz is our preferred partner for our e-Learning solution requirements.” – Director, Learning & Development
                        </p>
                        <h4>Neha Tyagi</h4>
                      </blockquote> */}

                      <blockquote>
                        <div className="icon-box">
                          <h3 className="text-center">Blitz solution</h3>
                        </div>
                        <ul>
                          <li className="our-work-li">
                          Blitz Learning created an immersive and interactive mentor-driven sales learning module with several exercises for the learner.
                          </li>
                          <li className="our-work-li">
                          The course was fully mobile enabled, and the learner can take it from anywhere on the move.
                          </li>
                          <li className="our-work-li">
                          In addition to text-based content, Blitz Learning used mentor driven audio visuals in the course to make it more engaging.
                          </li>
                        </ul>
                        {/* <h4>Neha Tyagi</h4> */}
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="comment-form-area">
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
                    </div> */}
          </div>
        </section>
      </Layout>
    </>
  );
}
