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
import Funfacts from "../components/sections/home1/Funfacts";
import WhyChooseUs from "../components/sections/home1/WhyChooseUs";
import WhychooseusTwo from "../components/sections/home1/WhychooseusTwo";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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

  async function handleSubmit(event) {
    event.preventDefault();

    // // Validate phone number
    // const phoneInput = document.querySelector('input[name="phone"]');
    // console.log(phoneInput)
    // const phoneNumber = phoneInput.value.replace(/\D/g, ""); // Remove non-numeric characters
    // console.log(phoneNumber.length)
    // if (phoneNumber.length !== 10) {
    //   alert("Please enter a 10-digit phone number.");
    //   return;
    // }

    const formData = new FormData(event.target);
    formData.append("access_key", "269beb43-f721-44ff-bc00-116870a97860");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

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

      if (result.success) {
        console.log(result);
        alert("Data Successfully Submitted");
        document.getElementById("contact-form").reset();
        // Handle success, e.g., show a success message
      } else {
        // Handle failure, e.g., show an error message
        console.error("Form submission failed:", result.message);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  return (
    <>
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
                        <span className="span1">
                          Are you looking for a top e-Learning service provider?
                        </span>
                      </p>
                    </h1>
                    <h2 class="an-ever-growing-resource">
                      Blitz Learning is a top learning consulting and training
                      development firm specializing in industries facing
                      learning and development challenges and disruption.
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
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      className="input-text"
                      placeholder="Your Email"
                      required
                    />
                    <PhoneInput
                      country={"in"}
                      value={formData.phone}
                      onChange={(phone) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          phone: phone,
                        }))
                      }
                      inputStyle={{ width: "100%" }}
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: false,
                      }}
                    />
                    <input
                      type="text"
                      name="subject"
                      className="input-text1"
                      placeholder="Subject"
                      required
                    />
                    <input
                      name="message"
                      type="text"
                      className="input-text1"
                      placeholder="Type Message"
                      required
                    />
                    <div className="submit-button">
                      <button type="submit" className="button" value="Submit">
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
      <br />
      <br />
      <Funfacts />
      {/* <Pro /> */}
    </>
  );
}
