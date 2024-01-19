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
                    <h2>Revamp And Localization |Company Policy</h2>
                    {/* <span className="designation">Advisor</span> */}
                    <p>
                    A leading UAE based conglomerate with business in multiple retail segments
                    </p>
                    <ul className="info-list clearfix">
                      <li>
                        <span>Industry: </span>Retail
                      </li>
                      <li>
                        <span>Target: </span>UAE,Middle East
                      </li>
                      <li>
                        <span>Language: </span>
                        English, Arabic
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
              <ul>
                <li className="our-work-li">
                The client needed to impart various ethics and compliance training to its shop floor employees.
                </li>
                <li className="our-work-li">They had a set of courses that needed to be revamped in a more engaging way, and update content.</li>
                <li className="our-work-li">The courses also needed to be localized in Arabic.</li>
              </ul>
              <br />
              <h3 className="mb-1">Challenges</h3>
              <ul>
                <li className="our-work-li">
                The course was already developed, so the challenge was to retain the theme and show creativity on top of the existing framework.
                </li>
                <li className="our-work-li">
                Blitz Learning challenged its designers to make the course more attractive using the existing course elements so that the originality of the course remains intact.
                </li>
                <li className="our-work-li">
                Addition of new content lead to recreation of certain course elements and adjust the whole flow of the course.
                </li>
              </ul>
              <br />
              <h3 className="mb-1">Outcome Achieved</h3>
              <ul>
                <li className="our-work-li">
                The course was very well received and was rolled off to over 80,000 employees across all its retail units.
                </li>
                <li className="our-work-li">
                The client was very happy with the development and the way the course succeeded to engage the employees
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
                        We saw the sample work that Blitz Learning did for a global retail player and decided to give them a small project to start with. We were delighted with the first deliverables. They have a team of highly committed professionals who believe in delivering over and above expectations. They are very transparent in their pricing. We have worked with Blitz Learning on multiple e-Learning projects, and each time their deliverable surpasses our expectation! The team at Blitz is our preferred partner for our e-Learning solution requirements.” – Director, Learning & Development
                        </p>
                        {/* <h4>Neha Tyagi</h4> */}
                      </blockquote>

                      <blockquote>
                        <div className="icon-box">
                          <h3 className="text-center">Blitz Solution</h3>
                        </div>
                        <ul>
                          <li className="our-work-li">
                          The client had a set of 4 courses that was already created by another vendor. Blitz Learning took the courses and revamped it in a way that it retained the originality but became much more exuberant.
                          </li>
                          <li className="our-work-li">
                          The development team worked with the new content to adjust it in the given framework yet make the design attractive and more engaging.
                          </li>
                          <li className="our-work-li">
                          The localization team worked with seasoned Arabic voice over artists to localize the course keeping the cultural and local dynamics of the target learners in mind.
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
