"use client";
import ServiceTabs1 from "../../components/elements/ServiceTabs1";
import Layout from "../../components/layout/Layout";
import AuditSlider1 from "../../components/slider/AuditSlider1";
import ServiceSlider1 from "../../components/slider/ServiceSlider1";
import Link from "next/link";
import axios from "axios";
import '../../main.css'
import '../../cards.css'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export default function Services() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedOption: "Learning Consulting", // Default value for the select box
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
        breadcrumbTitle="Learning Consulting"
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
                            href="/Services/learning-consulting"
                            className="current"
                          >
                            Learning Consulting
                          </Link>
                        </li>
                        <li>
                          <Link href="/Services/Content-Services">
                            Content Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/Services/Custom-eLearning">
                            Custom e-Learning
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
                          Do you need <br />
                          any <span>help?</span>
                        </h3>
                        <div className="icon-box">
                          <i className="icon-29"></i>
                        </div>
                        <div className="inner-box">
                          <p>
                            <a href="mailto:contactus@biltzlearning.in">
                              contactus@biltzlearning.in
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
                    <div className="content-one mb_90">
                     
                      <div className="text">
                        <h2>
                          Strategic learning partnership with training
                          technology
                        </h2>
                        <p>
                          Our learning consulting services focus on aligning
                          education strategies with business goals, creating a
                          seamless bridge between learning and organizational
                          success, and leveraging cutting-edge training
                          technology.
                        </p>
                       
                      </div>
                    </div>
                    <div class="container">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="card card-flip custom-card-height">
                            <div class="card-front custom-card-image" style={{ backgroundImage: 'url(/assets/services/Training-need-analysis-410x280.jpg)' }}>
                              <div class="card-body">
                              <img
                                className="icon-03"
                                src="/assets/images/new-icon/Training need analysis.png"
                              ></img>
                                <h3 class="card-title text-white">Training Needs Analysis</h3>
                               
                              </div>
                            </div>
                            <div class="card-back bg-dark">
                              <div class="card-body">
                                <p >
                                We specialize in analyzing an organization’s
                              current learning function, employee skill gaps,
                              strategic goals, and designing effective learning
                              roadmaps that address the gaps and help drive
                              measurable business results.
                                </p>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card card-flip custom-card-height">
                            <div class="card-front custom-card-image" style={{ backgroundImage: 'url(/assets/services/design-process-analysis-410x280.jpg)' }}>
                              <div class="card-body">
                              <img
                                className="icon-03"
                                src="/assets/images/new-icon/design process analysis.png"
                              ></img>
                                <h3 class="card-title text-white">Design Process Analysis</h3>
                               
                              </div>
                            </div>
                            <div class="card-back bg-dark">
                              <div class="card-body">
                                <p >
                                Our consultants study your present L&D design and
                              suggest actionable improvements based on internal
                              data.
                                </p>
                          
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card card-flip custom-card-height">
                            <div class="card-front custom-card-image" style={{ backgroundImage: 'url(/assets/services/learning-effectiveness-strategy-410x280.jpg)' }}>
                              <div class="card-body">
                              <img
                                className="icon-03"
                                src="/assets/images/new-icon/learning effectiveness strategy.png"
                              ></img>
                                <h3 class="card-title text-white">Learning Effectiveness Strategy</h3>
                              </div>
                            </div>
                            <div class="card-back bg-dark">
                              <div class="card-body text-primary">
                                <p >
                                With our expertise in designing learner-centric
                              solutions, we understand how to cultivate an
                              effective, engaging and result-driven learning
                              environment using tested and trusted frameworks
                              designed by industry veterans.
                                </p>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card card-flip custom-card-height">
                            <div class="card-front custom-card-image" style={{ backgroundImage: 'url(/assets/services/Learning-execution-strategy-410x280.jpg)' }}>
                              <div class="card-body">
                              <img
                                className="icon-03"
                                src="/assets/images/new-icon/learning execution strategy.png"
                              ></img>
                                <h3 class="card-title text-white">Learning Execution Strategy</h3>
                                
                              </div>
                            </div>
                            <div class="card-back bg-dark">
                              <div class="card-body">
                                <p >
                                Blitz Learning’s domain-specific learning
                              consultants conduct workshops in close
                              collaboration with SMEs to identify the existing
                              gaps, analyze existing infrastructure and thereby
                              draft the right training.
                                </p>
                            
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        
                      </div>
                      <div className="text mt_10">
                        <p>
                        With our expertise in designing learner-centric
                          solutions, we offer learning consulting to L&D
                          departments to optimize actionable touch points of
                          their L&D strategy.
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
                      <div className="content-box p_relative mr_30">
                        <div className="sec-title mb_30">
                          <span className="sub-title">Why work with us?</span>
                          <h2>Trusted by some of the biggest brands…</h2>
                          <p>
                          Blitz Learning is a leading e-learning firm with the goal of providing the highest quality e-learning content for an immersive experience.
                          </p>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content_block_four">
                      <div className="content-box p_relative ml_30  centred">
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

                                    <option value="Video Production">
                                      Video Production
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
