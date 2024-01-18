import React from 'react';
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Team Details">
            <section className="team-details p_relative">
                <div className="auto-container">
                    <div className="team-details-content mb_90">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <figure className="image-box mr_30">
                            <img src="assets/images/team/team-9.jpg" alt="" />
                        </figure>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box ml_30">
                            <h2>Darlene Robertson</h2>
                            <span className="designation">Advisor</span>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                            sagittis dolor aliquet quam feugiat nisi a ultrices feugiat.
                            Viverra facilisi turpis eget tempor. Mattis risus amet euismod
                            eleifend. Proin ut eget sagittis mi quis viverra.
                            </p>
                            <ul className="info-list clearfix">
                            <li>
                                <span>Expertise: </span>Strategy, Leadership
                            </li>
                            <li>
                                <span>Experience: </span>20 Years
                            </li>
                            <li>
                                <span>Email: </span>
                                <Link href="mailto:example@gmail.com">example@gmail.com</Link>
                            </li>
                            <li>
                                <span>Phone: </span>
                                <Link href="tel:913336660021">(+91) 333 666 0021</Link>
                            </li>
                            </ul>
                            <ul className="social-links clearfix">
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
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="biography-box mb_80">
                    <h3>Darlene Robertson Biography</h3>
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
                    </p>
                    </div>
                    <div className="lower-content">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 skills-column">
                        <div className="skills-box mr_20">
                            <h3>Volunteer Skills</h3>
                            <p>
                            Consectetur adipiscing elit. Semper sagittis dolor aliquet quam
                            feugiat ultrices feugiat Viverra facilisi turpis.
                            </p>
                            <div className="progress-inner">
                            <div className="progress-box mb_30">
                                <p>Financial Advice</p>
                                <div className="bar">
                                <div className="bar-inner count-bar" style={{ width: '75%' }}>
                                </div>
                                <div className="count-text">75%</div>
                                </div>
                            </div>
                            <div className="progress-box mb_30">
                                <p>Business Consulting</p>
                                <div className="bar">
                                <div className="bar-inner count-bar" style={{ width: '90%' }}>
                                </div>
                                <div className="count-text">90%</div>
                                </div>
                            </div>
                            <div className="progress-box">
                                <p>Investment Strategy</p>
                                <div className="bar">
                                <div className="bar-inner count-bar" style={{ width: '80%' }}>
                                </div>
                                <div className="count-text">80%</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 education-column">
                        <div className="education-inner mr_70 ml_20">
                            <div className="text mb_30">
                            <h3>Education</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
                            </p>
                            </div>
                            <div className="inner-box">
                            <div className="single-item">
                                <h4>University of Iowa</h4>
                                <p>
                                <span>Master's degree - Macroeconomics</span>2012 - 2013
                                </p>
                            </div>
                            <div className="single-item">
                                <h4>University of Chicago</h4>
                                <p>
                                <span>Honours - Macroeconomics</span>2008 - 2011
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 education-column">
                        <div className="education-inner mr_70 ml_20">
                            <div className="text mb_30">
                            <h3>Experience</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
                            </p>
                            </div>
                            <div className="inner-box">
                            <div className="single-item">
                                <h4>Jr. Graphic Designer</h4>
                                <p>
                                <span>Arpin Van Lines</span>Jun 2017-Sep 2019
                                </p>
                            </div>
                            <div className="single-item">
                                <h4>Sr. UI/UX Designer</h4>
                                <p>
                                <span>Berkery MandASoft</span>Jun 2019-Present
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    )
}

