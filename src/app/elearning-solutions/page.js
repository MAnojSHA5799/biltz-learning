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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "52e44b56-38d8-47bf-9a35-90ed4ed7a791");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    console.log("111", json);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      // Handle the response
      if (result.success) {
        console.log(result);

        // Reset form data
        setFormData({
          username: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setIsSubmitting(false);

        // Optional: You can use router.reload() to refresh the page
        router.refresh("/contact");

        // You can add logic here based on the response from the server
      } else {
        console.error("Error posting data:", result);
      }
    } catch (error) {
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
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      alert("Data is submitted is sucessfully");
      document.getElementById("contact-form").reset();
      router.refresh("/contact");
    }
  }

  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Get In Touch">
        <div></div>
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
                          <span>The </span>
                          <span class="span1">#1</span>
                        </p>
                        <p class="source-for">source for</p>
                        <p class="audio">audio</p>
                        <p class="creators">creators</p>
                      </h1>
                      <h2 class="an-ever-growing-resource">
                        An ever-growing resource for music content creators,
                        sourced by talented producers from all over the world
                      </h2>
                    </div>
                  </div>
                  <div class="form-frame">
                    <form class="sign-up-form">
                      <input
                        class="input-text"
                        placeholder="Full Name"
                        type="text"
                      />
                      <input
                        class="input-text"
                        placeholder="Your Email"
                        type="text"
                      />

                      <input
                        class="input-text1"
                        placeholder="Phone Number"
                        type="number"
                      />
                      <input
                        class="input-text1"
                        placeholder="Subject"
                        type="text"
                      />
                      <input
                        class="input-text1"
                        placeholder="Type Message"
                        type="text"
                      />
                      <div className="submit-button">
                        <button class="button">
                          <div class="create-account">Submt</div>
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
