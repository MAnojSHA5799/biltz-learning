'use client'
import Layout from "../components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Career">
                <div>
                    
                    <section className="career-section p_relative">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                    <div className="content-box mr_110">
                                    <div className="sec-title mb_50">
                                        <span className="sub-title">Get Opportunities</span>
                                        <h2>Build Your Career with <br />BiltzLearning</h2>
                                        <p className="mt_40">We welcome your expertise to help our team to transform learning and development function of our clients.</p>
                                    </div>
                                        <ul className="accordion-box">
                                            {/*Accordion Block*/}
                                            <li className="accordion block">
                                                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                    <div className="icon-box"></div>
                                                    <h3 className="mb-1">Instructional designer</h3>
                                                    
                                                </div>
                                                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>

                                                    <div className="inner-box">

                                                        <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.</p>
                                                        <ul>
                                                        <li><span style={{ fontWeight: 'bold', color:'black' }}>Job Category:</span> Trainer</li>
                                                        <li><span style={{ fontWeight: 'bold', color:'black' }}>Job Type:</span>  Full Time</li>
                                                        <li><span style={{ fontWeight: 'bold', color:'black' }}>Job Location:</span>  Noida</li>
                                                    </ul>
                                                        <h4 className="mb-1">Job requirements:</h4>
                                                        <p>Are you a skilled Instructional Designer looking for a full-time engagement with exciting new projects to work on? We are seeking a talented individual with at least 5 years of experience under your belt, you will bring a wealth of knowledge and expertise to the role.</p>
                                                        <h4 className="mb-1">Responsibilities:</h4>
                                                        <ul style={{ listStyleType: "disc", padding: "5px" }}>
                                                        <li style={{ listStyleType: "disc" }}>Identify requirements and develop and design content.</li>
                                                        <li style={{ listStyleType: "disc" }}>Mentor other professionals and ensure the accuracy of the content to enable client employees in their performance and learning needs within the constraints of the stated project requirements.</li>
                                                        <li style={{ listStyleType: "disc" }}>Lead project teams and deliver accordingly to set milestones</li>
                                                        <li style={{ listStyleType: "disc" }}>Mentor and train junior writers.</li>
                                                        <li style={{ listStyleType: "disc" }}>Leads RFPs and contributes to business effectively</li>

                                                        </ul>
                                                        <ul className="list-style-one clearfix">
                                                            <li>Holiday Trash & Recycling</li>
                                                            <li>Things To Do In Govarnex</li>
                                                            <li>Rent a Picnic Shelter</li>
                                                        </ul>
                                                        <h4>Skills & Experience</h4>
                                                        <ul style={{ listStyleType: "disc", padding: "5px" }}>
                                                        <li style={{ listStyleType: "disc" }}>5-7 years of experience in Instructional design.</li>
                                                        <li style={{ listStyleType: "disc" }}>Content writing – script writing, storyboarding.</li>
                                                        <li style={{ listStyleType: "disc" }}>Should be well versed with tools like Adobe Captivate. Storyline, Articulate, After Effects, etc.</li>
                                                        <li style={{ listStyleType: "disc" }}>Strong analytical skills.</li>
                                                        <li style={{ listStyleType: "disc" }}>Communicate effectively in visual, oral, and written form.</li>

                                                        </ul>
                                                        <ul className="list-style-one clearfix">
                                                            <li>Holiday Trash & Recycling</li>
                                                            <li>Things To Do In Govarnex</li>
                                                        </ul>
                                                        <div className="btn-box">
                                                            <Link href="/career" className="theme-btn-one">Apply Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Accordion Block*/}
                                            <li className="accordion block">
                                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                    <div className="icon-box"></div>
                                                    <h3>HR Manager</h3>
                                                </div>
                                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="inner-box">
                                                    <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.</p>
                                                    <h4>Duties and Responsibilities:</h4>
                                                    <p>Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p>
                                                    <ul className="list-style-one clearfix">
                                                        <li>Holiday Trash & Recycling</li>
                                                        <li>Things To Do In Govarnex</li>
                                                        <li>Rent a Picnic Shelter</li>
                                                    </ul>
                                                    <h4>Qualifications:</h4>
                                                    <p>Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p>
                                                    <ul className="list-style-one clearfix">
                                                        <li>Holiday Trash & Recycling</li>
                                                        <li>Things To Do In Govarnex</li>
                                                    </ul>
                                                    <div className="btn-box">
                                                        <Link href="/career" className="theme-btn-one">Apply Now</Link>
                                                    </div>
                                                </div>
                                                </div>
                                            </li>
                                            {/*Accordion Block*/}
                                            <li className="accordion block">
                                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                    <div className="icon-box"></div>
                                                    <h3>Account Manager</h3>
                                                </div>
                                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="inner-box">
                                                <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.</p>
                                                <h4>Duties and Responsibilities:</h4>
                                                <p>Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p>
                                                <ul className="list-style-one clearfix">
                                                    <li>Holiday Trash & Recycling</li>
                                                    <li>Things To Do In Govarnex</li>
                                                    <li>Rent a Picnic Shelter</li>
                                                </ul>
                                                <h4>Qualifications:</h4>
                                                <p>Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p>
                                                <ul className="list-style-one clearfix">
                                                    <li>Holiday Trash & Recycling</li>
                                                    <li>Things To Do In Govarnex</li>
                                                </ul>
                                                <div className="btn-box">
                                                    <Link href="/career" className="theme-btn-one">Apply Now</Link>
                                                </div>
                                            </div>
                                                </div>
                                            </li>
                                            {/*Accordion Block*/}
                                            <li className="accordion block">
                                                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                    <div className="icon-box"></div>
                                                    <h3>Financial Advisor</h3>
                                                </div>
                                                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                <div className="inner-box">
                                                <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.</p>
                                                <h4>Duties and Responsibilities:</h4>
                                                <p>Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p>
                                                <ul className="list-style-one clearfix">
                                                    <li>Holiday Trash & Recycling</li>
                                                    <li>Things To Do In Govarnex</li>
                                                    <li>Rent a Picnic Shelter</li>
                                                </ul>
                                                <h4>Qualifications:</h4>
                                                <p>Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p>
                                                <ul className="list-style-one clearfix">
                                                    <li>Holiday Trash & Recycling</li>
                                                    <li>Things To Do In Govarnex</li>
                                                </ul>
                                                <div className="btn-box">
                                                    <Link href="/career" className="theme-btn-one">Apply Now</Link>
                                                </div>
                                            </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                    <div className="career-sidebar ml_40">
                                        <h3>Quick Contact</h3>
                                        <div className="form-inner">
                                            <form action="career.html" method="post">
                                                <div className="form-group">
                                                <input type="text" name="name" placeholder="Name" required />
                                                </div>
                                                <div className="form-group">
                                                <input type="email" name="email" placeholder="Email" required />
                                                </div>
                                                <div className="form-group">
                                                <input type="text" name="phone" placeholder="Phone" required />
                                                </div>
                                                <div className="form-group">
                                                <input type="text" name="subject" placeholder="Subject" required />
                                                </div>
                                                <div className="form-group">
                                                <textarea name="message" placeholder="Message"></textarea>
                                                </div>
                                                <div className="form-group message-btn">
                                                <button type="submit" className="theme-btn-one">
                                                    Submit Now
                                                </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}