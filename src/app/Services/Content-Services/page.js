"use client";
import Layout from "../../components/layout/Layout";
import TestimonialSlider5 from "../../components/slider/TestimonialSlider5";
import TestimonialSlider1 from "../../components/slider/TestimonialSlider1";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "../../main.css";
import "../../cards.css";
export default function Services() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedOption: "Content Services", // Default value for the select box
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
  async function handleSubmit1(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "15cf9264-6c64-493d-9d22-5c01c43df043");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        alert("Data is submitted is sucessfully")
        document.getElementById("contact-form").reset();
       
    }
}
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="Content Services"
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
                            href=" /Services/Content-Services"
                            className="current"
                          >
                            Content Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/Services/Custom-eLearning">
                            Custom e-Learning
                          </Link>
                        </li>
                        <li>
                          <Link href="/Services/learning-consulting">
                            Learning Consulting
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
                        <h2>Tailored learning modules with content services</h2>
                        <p>
                          Our content team tailors content to match every
                          requirement by using rich media. Our localization
                          services for e-Learning projects can help you
                          translate and localize your content, including text
                          translation and audio recording.
                        </p>
                      </div>
                    </div>
                    <div class="container">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="card card-flip custom-card-height">
                            <div class="card-front custom-card-image" style={{ backgroundImage: 'url(/assets/services/Research-and-report.jpg)' }}>
                              <div class="card-body">
                              <img
                                    class="icon-05"
                                    src="/assets/images/new-icon/Research and report (1).png"
                                  />
                                <h3 class="card-title text-white text-center"> Research and Report</h3>
                               
                              </div>
                            </div>
                            <div class="card-back bg-dark">
                              <div class="card-body">
                                <p>
                                Our subject matter experts (SMEs) locate key
                                  information and assemble quality data from
                                  in-depth research on credible information
                                  sources (web pages, databases). We then
                                  synthesize that data into easy to comprehend
                                  reports, white papers, and databases with
                                  clear insights and knowledge to help you make
                                  informed business decisions.
                                </p>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card card-flip custom-card-height">
                            <div class="card-front custom-card-image" style={{ backgroundImage: 'url(/assets/services/Regional-connect.jpg)' }}>
                              <div class="card-body">
                              <img
                                className="icon-05"
                                src="/assets/images/new-icon/Regional connect (1).png"
                              ></img>
                                <h3 class="card-title text-white text-center"> Regional Connect</h3>
                               
                              </div>
                            </div>
                            <div class="card-back bg-dark">
                              <div class="card-body">
                                <p >
                                We assist companies in diversifying their content by incorporating local languages, as local languages add different segments and audiences to broaden their reach and increase communication with employees, partners, and customers across the globe. 
                                </p>
                          
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card card-flip custom-card-height">
                            <div class="card-front custom-card-image" style={{ backgroundImage: 'url(/assets/services/Review-and-summary.jpg)' }}>
                              <div class="card-body">
                              <img
                                className="icon-05"
                                src="/assets/images/new-icon/Review and summary (2).png"
                              ></img>
                                <h3 class="card-title text-white text-center">Review and Summary</h3>
                              </div>
                            </div>
                            <div class="card-back bg-dark">
                              <div class="card-body text-primary">
                                <p >
                                You give us content and we will summarize it, for
                              any industry. Our empaneled SMEs include
                              researchers, academicians, software engineers, and
                              PhDs in many academic disciplines. They review any
                              kind of document and extract the relevant
                              information, summarize it, and deliver those
                              summaries in print, electronic, and mobile
                              formats.
                                </p>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card card-flip custom-card-height">
                            <div class="card-front custom-card-image" style={{ backgroundImage: 'url(/assets/services/Authoring-and-enrichment.jpg)' }}>
                              <div class="card-body">
                              <img
                                className="icon-05"
                                src="/assets/images/icon/Authorization and enrichment (2).png"
                              ></img>
                                <h3 class="card-title text-white text-center">Authoring and Enrichment</h3>
                                
                              </div>
                            </div>
                            <div class="card-back bg-dark">
                              <div class="card-body">
                                <p >
                                We provide high quality writing and editorial
                              services, marketing content management with the
                              help of our content specialists– in any language,
                              for any industry.
                                </p>
                            
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card card-flip custom-card-height">
                            <div class="card-front custom-card-image" style={{ backgroundImage: 'url(/assets/services/Native-translator.jpg)' }}>
                              <div class="card-body">
                              <img
                                className="icon-05"
                                src="/assets/images/new-icon/Native Translators.png"
                              ></img>
                                <h3 class="card-title text-white text-center">Native Translators</h3>
                               
                              </div>
                            </div>
                            <div class="card-back bg-dark">
                              <div class="card-body">
                          
                                <p>
                                Our localization services for e-Learning projects
                              can help you translate and localize your content
                              including text translation and audio recording. We
                              have a panel of native translators in all major
                              languages of the world.
                                </p>
                              
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card card-flip custom-card-height">
                            <div class="card-front custom-card-image" style={{ backgroundImage: 'url(/assets/services/multiple-formats.jpg)' }}>
                              <div class="card-body">
                              <img
                                className="icon-05"
                                src="/assets/images/new-icon/Multimedia .png"
                              ></img>
                                <h3 class="card-title text-white text-center">Multiple Formats</h3>
                              </div>
                            </div>
                            <div class="card-back bg-dark">
                              <div class="card-body">
                             
                                <p >
                                We translate or re-engineer content in multiple
                              formats as per your needs. These include video,
                              audio, flash, PDF, PPTs, MS Word among others.
                                </p>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text mt_10">
                        <p>
                          Blitz Learning develops mobile training content across
                          all platforms (iOS, Android, and Windows) with
                          interactive functionalities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <section className="expertise-section p_relative bg-color-1"> */}

              <div className="auto-container ">
                <div className="row clearfix mt_90">
                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content_block_three">
                      <div className="content-box p_relative">
                        <div className="sec-title mb_30">
                        <img
                                className="services-images"
                                src="/assets/services-footer/conntent-serviecs.jpg"
                              ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content_block_four">
                      <div className="content-box p_relative centred">
                        <h3>
                          Request for our free <br />
                          consultation
                        </h3>
                        <div className="form-inner">
                          <form
                          //  action="index.php" 
                          //  method="post"
                           className="default-form"
                           id="contact-form"
                           onSubmit={handleSubmit1}
                          >
                            <div className="row clearfix">
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Your name"
                                  // value={formData.name}
                                  // onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="Email address"
                                  // value={formData.email}
                                  // onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <input
                                  type="text"
                                  name="phone"
                                  placeholder="Phone number"
                                  // value={formData.phone}
                                  // onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <div className="select-box">
                                  <select
                                    className="selectpicker"
                                    name="selectedOption"
                                    // value={formData.selectedOption}
                                    // onChange={handleInputChange}
                                  >
                                    <option value="Content Services">
                                      Content Services
                                    </option>
                                    <option value="Custom eLearning">
                                      {" "}
                                      Custom e-Learning
                                    </option>
                                    <option value="Learning Consulting">
                                      Learning Consulting
                                    </option>
                                    <option value="Video Production">
                                      Video Production
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                <button
                                  type="submit" className="theme-btn-one" value="Submit"
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
