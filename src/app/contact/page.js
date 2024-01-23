"use client";
import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      // Make the Axios POST request http://localhost:2410/addDetails
      // https://biltz-backend.vercel.app
      const response = await axios.post(
        "https://biltz-backend.vercel.app/addDetails",
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
      alert("Success! Data submitted successfully.");

      // Reset form data
      setFormData({
        username: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
      });

      // Optional: You can use router.reload() to refresh the page
      router.refresh('/contact');
      // You can add logic here based on the response from the server
    } catch (error) {
      // Handle errors
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Get in touch">
        <div>
          {/* Feature Section */}
          <section className="feature-style-three p_relative centred">
            <div
              className="pattern-layer"
              style={{
                backgroundImage: "url(/assets/images/shape/shape-31.png)",
              }}
            ></div>
            <div className="auto-container">
              <div className="sec-title mb_100">
                <span className="sub-title">Contact Info</span>
                <h2>We’d Love To Help You</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                  <div
                    className="feature-block-three wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div
                        className="block-shape"
                        style={{
                          backgroundImage:
                            "url(/assets/images/shape/shape-32.png)",
                        }}
                      ></div>
                      <div className="icon-box">
                        <i className="icon-48"></i>
                      </div>
                      <h3>Our Location</h3>
                      <p>
                        610, Tower B, i-Thum IT Park, Block A, Industrial Area,
                        Sector 62, Noida
                        <br />
                        Uttar Pradesh 201301
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                  <div
                    className="feature-block-three wow fadeInUp animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-49"></i>
                      </div>
                      <h3>Email Address</h3>
                      <p>
                        <Link href="mailto:contactus@blitzlearning.in">
                          contactus@blitzlearning.in
                        </Link>
                        {/* <br /><Link href="mailto:support@example.com">support@example.com</Link> */}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                  <div
                    className="feature-block-three wow fadeInUp animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div
                        className="block-shape"
                        style={{
                          backgroundImage:
                            "url(assets/images/shape/shape-33.png)",
                        }}
                      ></div>
                      <div className="icon-box">
                        <i className="icon-50"></i>
                      </div>
                      <h3>Phone Number</h3>
                      <p>
                        {/* Emergency Cases <br /> */}
                        <Link href="tel:+91-120 431 6127">
                          +91-120 431 6127
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Feature Section End */}

          {/* Contact Form Section */}
          <section className="contact-style-two sec-pad">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box mr_70">
                    <div className="sec-title mb_35">
                      <span className="sub-title">Message</span>
                      <h2>Feel Free to Contact with us</h2>
                      <p className="mt_20">
                        Feel free to visit our development office or just pick
                        up the phone to chat with a client engagement team
                        representative.
                      </p>
                    </div>
                    <ul className="social-links clearfix">
                      <li>
                        <Link href="https://www.facebook.com/blitzlearning.in/">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2FBlitzLearrning%2F">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F13189833%2F">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.youtube.com/channel/UCCS6m2rYmcz1zysoDIPYcqA">
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                  <h3>Get In Touch</h3>
                  <br />
                  <div className="form-inner">
                    <form
                      method="post"
                      // action="sendemail.php"
                      id="contact-form"
                      className="default-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="username"
                            value={formData.username}
                            placeholder="Your Name"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Your email"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            required
                            placeholder="Phone"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            required
                            placeholder="Subject"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea
                            name="message"
                            placeholder="Type message"
                            value={formData.message}
                            required
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button
                            className="theme-btn theme-btn-one"
                            type="submit"
                            name="submit-form"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Contact Form Section End */}

          {/* Google Map Section */}
          <section className="map-section-two">
            {/*Map Outer*/}
            <div className="map-outer">
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0500745226364!2d77.36209477495662!3d28.62826128427571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5cd075167d7%3A0xb6b5efb89ae0ae2c!2sBlitz%20learning%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1704951204254!5m2!1sen!2sin"
                height={570}
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

          {/* <section className="contact-style-two ">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box mr_70 mt-50">
                    <div className="sec-title mb_35">
                      <span className="sub-title">Message</span>
                      <h2>Feel Free to Contact with us</h2>
                      <p className="mt_20">
                        Feel free to visit our development office or just pick
                        up the phone to chat with a client engagement team
                        representative.
                      </p>
                    </div>
                    <ul className="social-links clearfix">
                      <li>
                        <Link href="https://www.facebook.com/blitzlearning.in/">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2FBlitzLearrning%2F">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F13189833%2F">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.youtube.com/channel/UCCS6m2rYmcz1zysoDIPYcqA">
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                  <h3>Get In Touch</h3>
                  <br />
                  <figure className="image-box mr_30">
                    <img src="/assets/images/our-works/our-work-4.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </section> */}
          {/* Google Map Section End */}
        </div>
      </Layout>
    </>
  );
}
