import React from "react";
import Layout from "../../components/layout/Layout";
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
                    <h3>WEB BASED TRAINING AND LOCALIZATION| PRODUCT TRAINING

</h3>
                    {/* <span className="designation">Advisor</span> */}
                    <p>
                    {/* A Middle East-based leading retailer */}
                    </p>
                    <ul className="info-list clearfix">
                      <li>
                        <span>Industry: </span>Logistics, Aviation
                      </li>
                      <li>
                        <span>Target: </span>Geography: Germany
                      </li>
                      <li>
                        <span>Language: </span>
                        English, German
                      </li>
                      <li>
                        <span>Target Learners: </span>
                        Sales Teams
                      </li>
                      <li>
                        <span>Authoring Tool: </span>
                        Adobe Captivate
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
              <li>
                <ul>
                The client needed to create web-based training to educate its sales teams about the latest line of freight containers.
                </ul>
                <ul>The course was intended to create awareness about the technical aspects of various containers and help sales teams pitch in the right containers as per their client’s requirements.</ul>
               
              </li>
              <br />
              <h3>Challenges</h3>
              <li>
                <ul>
                The content was very technical in nature and Blitz Learning had just the right SME to understand all their products and help the development team with production.
                </ul>
                <ul>
                The client had a lot of content and they needed us to utilize all important topics intelligently to be explained in the course without being boring.
                </ul>
                
              </li>
              <br />
              <h3>Outcome Achieved</h3>
              <li>
                <ul>
                The SME helped the client create a targeted content repository for the products.
                </ul>
                <ul>
                As the template got updated, the client has now more flexibility to use its in-house expert for internal course creation.
                </ul>
                <ul>The course helped the sales teams to learn about the whole product line and made them pitch in the products in a better way.</ul>
              </li>

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
                        <li>
                          <ul>
                          Blitz learning roped in its SME to have a series of discussion calls with the client’s technical team to understand all the products.
                          </ul>
                          <ul>
                          Initially the course was agreed to be created in the predefined template (which was created by Blitz Learning as a part of another project). However, with the variety and dynamics of the course objective and topics, Blitz did multiple changes in the template UI to adjust as per the new requirements.
                          </ul>
                          <ul>
                          Blitz Learning used multiple assessment types to get the user’s knowledge tested. The course had a series of animations and interactivities to keep the learners engaged.
                          </ul>
                          <ul>In the mid project, client’s corporate barding got changed and one of the product launches from the client got delayed till next year. Blitz keeping the agreed timeline unchanged, revamped the course UI mid-project as per the new branding and adjusted the content after removing the delayed product.</ul>
                          <ul>The localization in German was done after translating the English content and the course was delivered with highest quality.</ul>
                        </li>
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
