"use client";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import '../../main.css'
import '../../cards.css'
import { useRouter } from "next/navigation";
export default function Services() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedOption: "Video Production", // Default value for the select box
  });
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
        name: "",
        email: "",
        phone: "",
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
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="Video Production"
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
                            href="/Services/video-production"
                            className="current"
                          >
                            Video Production
                          </Link>
                        </li>
                        <li>
                          <Link href="/Services/Content-Services">
                            Content Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/Services/learning-consulting">
                            Learning Consulting
                          </Link>
                        </li>
                        <li>
                          <Link href="/Services/Custom-eLearning">
                            Custom e-Learning
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
                          Do you need <br />
                          any <span>help?</span>
                        </h3>
                        <div className="icon-box">
                          <i className="icon-29"></i>
                        </div>
                        <div className="inner-box">
                          <p>
                            <a href="mailto:contactus@blitzlearning.in">
                            contactus@blitzlearning.in
                            </a>
                          </p>
                          <h3>
                            <Link href="tel:911204316127">+91-1204316127</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="service-details-content">
                    <div className="content-one mb_40">
                     
                      <div className="text">
                        <h2>
                          Dynamic visual learning with e-Learning development
                        </h2>
                        <p>
                          Through expert video production and e-Learning
                          development, we transform concepts into dynamic visual
                          content, enhancing the overall learning experience.
                        </p>
                        
                      </div>
                    </div>
                    <div class="container">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="card card-flip custom-card-height">
                            <div class="card-front custom-card-image" style={{ backgroundImage: 'url(/assets/services/sales-and-promotional-video-410x280.jpg)' }}>
                              <div class="card-body">
                              <img
                                className="icon-05"
                                src="/assets/images/new-icon/sales and promotional videos.png"
                              ></img>
                                <h3 class="card-title text-white text-center">Sales and Promotional Videos</h3>
                               
                              </div>
                            </div>
                            <div class="card-back bg-dark">
                              <div class="card-body">
                                <p >
                                Close more sales and turn more leads into
                              customers with sales and promotional video
                              production. Sales rest on logic and emotion. With
                              the right balance of both useful information and
                              authentic feeling, through the right medium, make
                              sales conversations easier and more profitable.
                                </p>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card card-flip custom-card-height">
                            <div class="card-front custom-card-image" style={{ backgroundImage: 'url(/assets/services/training-videos-410x280.jpg)' }}>
                              <div class="card-body">
                              <img
                                className="icon-05"
                                src="/assets/images/new-icon/training video.png"
                              ></img>
                                <h3 class="card-title text-white text-center">Training Videos</h3>
                               
                              </div>
                            </div>
                            <div class="card-back bg-dark">
                              <div class="card-body">
                                <p >
                                Educate, inspire & drive real change with your
                              training videos. Training content doesn't have to
                              be dry. Our training video experiences combine the
                              important messages you need to deliver along with
                              a compelling experience or story. Your audience
                              learns more effectively when they're engaged, &
                              most importantly, they retain that information
                              longer.
                                </p>
                          
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card card-flip custom-card-height">
                            <div class="card-front custom-card-image" style={{ backgroundImage: 'url(/assets/services/online-videos-410x280.jpg)' }}>
                              <div class="card-body">
                              <img
                                className="icon-05"
                                src="/assets/images/new-icon/online-video .png"
                              ></img>
                                <h3 class="card-title text-white text-center">Online Videos</h3>
                              </div>
                            </div>
                            <div class="card-back bg-dark">
                              <div class="card-body text-primary">
                                <p >
                                Be it product demo, youtube channel, or
                              testimonial video, your online presence delivers
                              your message 24 hours a day 7 days a week to
                              viewers across the globe.
                                </p>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card card-flip custom-card-height">
                            <div class="card-front custom-card-image" style={{ backgroundImage: 'url(/assets/services/corporate-videos-410x280.jpg)' }}>
                              <div class="card-body">
                              <img
                                className="icon-05"
                                src="/assets/images/new-icon/corporate videos.png"
                              ></img>
                                <h3 class="card-title text-white text-center">Corporate Videos</h3>
                                
                              </div>
                            </div>
                            <div class="card-back bg-dark">
                              <div class="card-body">
                                <p >
                                Showcase your explainer videos, CSR initiatives,
                              onboarding process with a zing. Use videos to hit
                              the emotional touchpoints.
                                </p>
                            
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        
                      </div>
                      <div className="text mt_10">
                        <p>
                        We produce corporate videos and add campaigns for you
                          to enable mass distribution of your key messages via
                          video-sharing sites such as YouTube.
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
                <div className="row clearfix mt_90">
                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content_block_three">
                      <div className="content-box p_relative">
                        <div className="sec-title mb_30">
                        <img
                                className="services-images"
                                src="/assets/services-footer/vdo-producation-750x470.jpg"
                              ></img>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content_block_four">
                      <div className="content-box p_relative  centred">
                        <h3>
                          Request for our free <br />
                          consultation
                        </h3>
                        <div className="form-inner">
                          <form
                            action="index.html"
                            method="post"
                            className="default-form"
                            onSubmit={handleSubmit}
                          >
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
                                    <option value="Video Production">
                                      Video Production
                                    </option>
                                    <option value="Learning Consulting">
                                      Learning Consulting
                                    </option>
                                    <option value="Content Services">
                                      Content Services
                                    </option>
                                    <option value="Custom eLearning">
                                      {" "}
                                      Custom e-Learning
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                <button
                                  type="submit"
                                  className="theme-btn-one"
                                  disabled={isSubmitting}
                                >
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
