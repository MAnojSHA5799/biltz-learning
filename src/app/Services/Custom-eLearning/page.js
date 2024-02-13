'use client'
import { useRouter } from "next/navigation";
import Layout from "../../components/layout/Layout"
import Link from "next/link"
import axios from "axios";
// import { useState } from 'react'
import React, { useState } from 'react';

export default function Services() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedOption: 'Custom eLearning', // Default value for the select box
  });
  const [successAlert, setSuccessAlert] = useState(false);
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

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    // Step 5: Handle the form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
    setIsSubmitting(true);

      console.log("Form Data:", formData);
      
      try {
        // Make the Axios POST request
        const response = await axios.post(
          "https://biltz-backend.vercel.app/consultationQuery",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: false,
          }
        );
  
        // Handle the response
        console.log("Server Response:", response.data);
  
        
          // Show success alert
          alert("Success! Data submitted successfully.");
  
          // Reset form data
          setFormData({
            name: '',
            email: '',
            phone: '',
          });
          setIsSubmitting(false);
  
          // Optional: You can use router.reload() to refresh the page
          router.refresh();
          
  
          // Optionally, you can reset the success alert after a certain delay
       
      } catch (error) {
        // Handle errors
        console.error("Error posting data:", error);
      }
    };

    const handleReload = () => {
      router.reload('/');
    };
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Custom e-Learning">
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
                                  <Link href="/Services/Custom-eLearning" className="current">
                                    Custom e-Learning
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/Services/Content-Services">Content Services</Link>
                                </li>
                                <li>
                                  <Link href="/Services/learning-consulting">Learning Consulting</Link>
                                </li>
                                <li>
                                  <Link href="/Services/video-production">Video Production</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="sidebar-widget contact-widget centred">
                              <div className="widget-content">
                                <div
                                  className="bg-layer"
                                  style={{ backgroundImage: 'url(/assets/images/service/service-7.jpg)' }}
                                >
                                  <img src="/assets/images/our-works/Scenario-Integrity.jpg" alt="" />
                                </div>
                                <h3>
                                  Do you need <br />any <span>help?</span>
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
                                <h2>Tailored learning modules with e-Learning technology</h2>
                                <p>
                                Crafted to meet speciﬁc learning objectives, our custom e-Learning content with advanced e-Learning technology ensures engagement and knowledge retention.
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
                                    <h3>Simulations & Gamification</h3>
                                    <p>We create simulations to provide real life 
understanding of difficult scenarios and help create 
interactive modules based on practical examples from 
routine situations.
<br />
We create gamified training content and create game 
concepts, design gameplay, implement games, and 
update and improve gameplay.</p>

                                  </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                  <div className="single-item">
                                    <div className="icon-box">
                                      <i className="icon-13"></i>
                                    </div>
                                    <h3>Micro Learning</h3>
                                    <p>Blitz Learning provides learning in small and 
manageable nuggets in a focused and precise way via 
its micro-learning offerings. These nuggets contain 
short-term learning activities, lesson plans, projects, 
and assignments.</p>
<br />

                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column mt-5">
                                  <div className="single-item">
                                    <div className="icon-box">
                                      <i className="icon-8"></i>
                                    </div>
                                    <h3>Mobile Learning</h3>
                                    <p>Blitz Learning develops mobile training content across all platforms (iOS, Android, 
Windows) with interactive functionalities.</p>

                                  </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 single-column mt-5">
                                  <div className="single-item">
                                    <div className="icon-box">
                                      <i className="icon-8"></i>
                                    </div>
                                    <h3>VR/AR Based Training</h3>
                                    <p>With a dedicated VR/AR team, Blitz Learning uses best 
in class 3D and special effects tools to design cross-platform VR solutions that simulate real-life scenarios 
for enhanced learner engagement.
</p>
                                  </div>
                                </div>
                              </div>
                              <div className="text mt_50">
                                <p>
                                Blitz Learning is a leading e-Learning platform that develops engaging, innovative, and cost-effective digital learning products to help clients increase their efficiency.
                                </p>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                      {/* <section className="expertise-section p_relative bg-color-1"> */}
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
                    <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                </div>
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_three">
                        <div className="content-box p_relative mr_30">
                            <div className="sec-title mb_30">
                            <span className="sub-title">Why work with us?</span>
                            <h2>Trusted by some of the biggest brands…</h2>
                            <p>Blitz Learning is a leading e-Learning platform that provides the highest quality.<br /> e-Learning content for an immersive experience.</p>
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
                            <h3>Request for our free <br />consultation</h3>
                            <div className="form-inner">
                            <form action="index.html" method="post" className="default-form" onSubmit={handleSubmit}>
                            <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <div className="select-box">
            <select
              className="selectpicker"
              name="selectedOption"
              value={formData.selectedOption}
              onChange={handleInputChange}
            >
              <option value="Custom eLearning">Custom e-Learning</option>
              <option value="Content Services">Content Services</option>
              <option value="Learning Consulting">Learning Consulting</option>
              <option value="Video Production">Video Production</option>
            </select>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
          <button type="submit" className="theme-btn-one" disabled={isSubmitting}>
            Send request
          </button>

          {/* <button onClick={handleReload}>Reload</button> */}
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
    )
}