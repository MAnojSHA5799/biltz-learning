import React from "react";
import Layout from "../../components/layout/Layout";
import '../../main.css'
import Link from "next/link";

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
                    <h2>Content Development |Workplace Safety

</h2>
                    {/* <span className="designation">Advisor</span> */}
                    {/* <p>
                    A Middle East-based leading retailer
                    </p> */}
                    <ul className="info-list clearfix">
                      <li>
                        <span>Industry: </span>Manufacturing
                      </li>
                      <li>
                        <span>Target: </span>Global
                      </li>
                      <li>
                        <span>Language: </span>
                        English, German, Dutch, Portuguese, Spanish, Czech, Romanian, Hindi, Japanese, Chinese
                      </li>
                      <li>
                        <span>Target Learners: </span>
                        Operations, Workers, Supervisors
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
              <h3>Client Requirements</h3>
              <ul>
                <li className="our-work-li">
                Employees needed to learn about previous incidents on the manufacturing floor and adopt safety measures to minimize workplace accidents and hazardous incidents. The client had very raw content in the form of examples of incidents and some safety tips.
                </li>
                <li className="our-work-li">Blitz Learning did additional research from reliable sources to gather information on similar workplace incidents and developed the content for the course in addition to developing the course itself.</li>
                <li className="our-work-li">The challenge was to skillfully filter the most relevant information for the client from heaps of examples available.</li>

              </ul>

              <br />
              <h3>Challenges</h3>
              <ul>
                <li className="our-work-li">
                Blitz Learning created in-depth courses on multiple aspects of workplace hazards such as slips, trips, and falls, faulty equipment as well as ergonomic hazards such as repetition, lifting, awkward postures etc.
                </li>
                <li className="our-work-li">
                The client had very basic content. So, Blitz Learning’s content development team did in-depth research to develop content related to the learning objective and added to the client shared content.
                </li>
                <li className="our-work-li">
                The development team had to filter the most relevant content from multiple sources as per the focus and objective of the client and convert it into usable content as per the taste of the target learners.
                </li>
              </ul>
              <br />
              <h3 className="mb-1">Outcome Achieved</h3>
              <ul>
                <li className="our-work-li">
                Due to the efforts of our content development team, the client now had a comprehensive training module on workplace safety.
                </li>
                <li className="our-work-li">
                The course was well received across geographies and helped the client minimizing hazardous incidents on the work floor.
                </li>
                <li className="our-work-li">Owing to the positive receipt of the course by various English-speaking geographies, the client came back to Blitz Learning to localize the same course in additional 9 languages – German, Dutch, Portuguese, Spanish, Czech, Romanian, Hindi, Japanese, Chinese.</li>
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
                          <h3 className="text-center">Blitz Solution</h3>
                        </div>
                        <ul>
                          <li className="our-work-li">
                          Blitz Learning created in-depth courses on multiple aspects of workplace hazards such as slips, trips, and falls, faulty equipment as well as ergonomic hazards such as repetition, lifting, awkward postures etc.
                          </li>
                          <li className="our-work-li">
                          The client had very basic content. So, Blitz Learning’s content development team did in-depth research to develop content related to the learning objective and added to the client shared content.
                          </li>
                          <li className="our-work-li">
                          The development team had to filter the most relevant content from multiple sources as per the focus and objective of the client and convert it into usable content as per the taste of the target learners.
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
      </Layout>
    </>
  );
}
