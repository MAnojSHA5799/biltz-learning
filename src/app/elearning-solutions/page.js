"use client";
import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../config.js";
import "../contact.css";
import Features from "../components/sections/home1/Features";
import Services from "../components/sections/home1/Services";
import Pro from "../components/sections/home1/Pro";

import WhyChooseUs from "../components/sections/home1/WhyChooseUs";

import WhychooseusTwo from "../components/sections/home1/WhychooseusTwo";

export default function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   console.log("Form Data:", formData);
  //   try {
  //     const response = await axios.post(
  //       "https://biltz-backend.vercel.app/addDetails",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         withCredentials: false,
  //       }
  //     );
  //     console.log("Server Response:", response.data);

  //     setFormData({
  //       username: "",
  //       email: "",
  //       phone: "",
  //       subject: "",
  //       message: "",
  //     });
  //     setIsSubmitting(false);
  //     router.refresh("/contact");
  //   } catch (error) {
  //     console.error("Error posting data:", error);
  //   }
  // };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     const formData = new FormData(event.target);
  //     formData.append("access_key", "52e44b56-38d8-47bf-9a35-90ed4ed7a791");

  //     const object = Object.fromEntries(formData);
  //     const json = JSON.stringify(object);
  //     console.log("111", json);

  //     try {
  //       const response = await fetch("https://api.web3forms.com/submit", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //         body: json,
  //       });

  //       const result = await response.json();

  //       // Handle the response
  //       if (result.success) {
  //         console.log(result);

  //         // Reset form data
  //         setFormData({
  //           username: "",
  //           email: "",
  //           phone: "",
  //           subject: "",
  //           message: "",
  //         });
  //         setIsSubmitting(false);

  //         // Optional: You can use router.reload() to refresh the page
  //         router.refresh("/contact");

  //         // You can add logic here based on the response from the server
  //       } else {
  //         console.error("Error posting data:", result);
  //       }
  //     } catch (error) {
  //       console.error("Error posting data:", error);
  //     }
  //   };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Append additional form data as needed
    formData.append("access_key", "269beb43-f721-44ff-bc00-116870a97860");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    console.log(json);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();

    if (result.success) {
      console.log(result);
      document.getElementById("contact-form").reset();
      // Handle success, e.g., show a success message
    } else {
      // Handle failure, e.g., show an error message
      console.error("Form submission failed:", result.message);
    }
  }

  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Get In Touch">
        <div class="desktop">
          <main class="main-cont">
            <div class="frame-a">
              <a href="#" class="logo">
                <div class="frame-b">
                  <h1 class="waveform">Blitz Learning</h1>
                  <div class="rectangle"></div>
                </div>
              </a>
            </div>
            <section class="sign-up-callout">
              <div class="start-trial-frame">
                <div class="resource-frame">
                  <div class="social-media-buttons-frame">
                    <div class="header-text">
                      <h1 class="the-1-source-container">
                        <p class="the-1">
                          {/* <span>The </span> */}
                          <span className="span1">Message</span>
                        </p>
                        {/* <p class="source-for">source for</p>
                        <p class="audio">audio</p>
                        <p class="creators">creators</p> */}
                      </h1>
                      <h2 class="an-ever-growing-resource">
                        Feel free to visit our development office or just pick
                        up the phone to chat with a client engagement team
                        representative.
                      </h2>
                    </div>
                  </div>
                  <div class="form-frame">
                    <form
                      id="contact-form"
                      onSubmit={handleSubmit}
                      className="sign-up-form"
                    >
                      <input
                        type="text"
                        name="name"
                        className="input-text"
                        placeholder="Full Name"
                      />
                      <input
                        type="email"
                        name="email"
                        className="input-text"
                        placeholder="Your Email"
                      />
                      <input
                        type="number"
                        name="phone"
                        className="input-text1"
                        placeholder="Phone Number"
                      />
                      <input
                        type="text"
                        name="subject"
                        className="input-text1"
                        placeholder="Subject"
                      />
                      <input
                        name="message"
                        type="text"
                        className="input-text1"
                        placeholder="Type Message"
                      ></input>
                      <div className="submit-button">
                        <button type="submit" className="button">
                          <div className="create-account">Submit</div>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        <Features />
        <Services />
        <WhyChooseUs />
        <Pro />
      </Layout>
    </>
  );
}
