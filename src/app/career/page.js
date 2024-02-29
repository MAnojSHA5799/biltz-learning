"use client";
import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? e.target.files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsSubmitting(true);
    console.log("Form Data:", formData);

    // try {
    //   // Make the Axios POST request http://localhost:2410/addDetails
    //   // https://biltz-backend.vercel.app
    //   const response = await axios.post(
    //     "https://biltz-backend.vercel.app/addDetails",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       withCredentials: false,
    //     }
    //   );
    //   // Handle the response
    //   console.log("Server Response:", response.data);

    //   // Reset form data
    //   setFormData({
    //     username: "",
    //     email: "",
    //     phone: "",
    //     subject: "",
    //     message: "",
    //   });
    //   setIsSubmitting(false);
    //   // Optional: You can use router.reload() to refresh the page
    //   router.refresh("/career");
    //   // You can add logic here based on the response from the server
    // } catch (error) {
    //   // Handle errors
    //   console.error("Error posting data:", error);
    // }
  };
  async function handleSubmit1(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "608eed31-27ef-4c3a-909a-9aaf76a7596f");

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
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Career">
        <div>
          <section className="career-section p_relative">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="content-box mr_110">
                    <div className="sec-title mb_50">
                      <span className="sub-title">Get opportunities</span>
                      <h2>Build your career with Biltz Learning</h2>
                      <p className="mt_10">
                        We welcome your expertise to help our team to transform
                        learning and development function of our clients.
                      </p>
                    </div>
                    <ul className="accordion-box">
                      {/*Accordion Block*/}
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 4 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(4)}
                        >
                          <div className="icon-box"></div>
                          <h3 className="mb-1">Instructional designer</h3>
                        </div>
                        <div
                          className={
                            isActive.key == 4
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="inner-box">
                            {/* <p>
                              Sodales posuere facilisi metus elementum ipsum
                              egestas amet amet mattis commodo Nunc tempor amet
                              massa.
                            </p> */}
                            <ul>
                              <li>
                                <span
                                  style={{ fontWeight: "bold", color: "black" }}
                                >
                                  Job Category:
                                </span>{" "}
                                Trainer
                              </li>
                              <li>
                                <span
                                  style={{ fontWeight: "bold", color: "black" }}
                                >
                                  Job Type:
                                </span>{" "}
                                Full Time
                              </li>
                              <li>
                                <span
                                  style={{ fontWeight: "bold", color: "black" }}
                                >
                                  Job Location:
                                </span>{" "}
                                Noida
                              </li>
                            </ul>
                            <h4 className="mb-1">Job requirements:</h4>
                            <p>
                              Are you a skilled Instructional Designer looking
                              for a full-time engagement with exciting new
                              projects to work on? We are seeking a talented
                              individual with at least 5 years of experience
                              under your belt, you will bring a wealth of
                              knowledge and expertise to the role.
                            </p>
                            <h4 className="mb-1">Responsibilities:</h4>
                            <ul
                              style={{ listStyleType: "disc", padding: "5px" }}
                            >
                              <li style={{ listStyleType: "disc" }}>
                                Identify requirements and develop and design
                                content.
                              </li>
                              <li style={{ listStyleType: "disc" }}>
                                Mentor other professionals and ensure the
                                accuracy of the content to enable client
                                employees in their performance and learning
                                needs within the constraints of the stated
                                project requirements.
                              </li>
                              <li style={{ listStyleType: "disc" }}>
                                Lead project teams and deliver accordingly to
                                set milestones
                              </li>
                              <li style={{ listStyleType: "disc" }}>
                                Mentor and train junior writers.
                              </li>
                              <li style={{ listStyleType: "disc" }}>
                                Leads RFPs and contributes to business
                                effectively
                              </li>
                            </ul>
                            {/* <ul className="list-style-one clearfix">
                              <li>Holiday Trash & Recycling</li>
                              <li>Things To Do In Govarnex</li>
                              <li>Rent a Picnic Shelter</li>
                            </ul> */}
                            <h4>Skills and experience</h4>
                            <ul
                              style={{ listStyleType: "disc", padding: "5px" }}
                            >
                              <li style={{ listStyleType: "disc" }}>
                                5-7 years of experience in Instructional design.
                              </li>
                              <li style={{ listStyleType: "disc" }}>
                                Content writing – script writing, storyboarding.
                              </li>
                              <li style={{ listStyleType: "disc" }}>
                                Should be well versed with tools like Adobe
                                Captivate. Storyline, Articulate, After Effects,
                                etc.
                              </li>
                              <li style={{ listStyleType: "disc" }}>
                                Strong analytical skills.
                              </li>
                              <li style={{ listStyleType: "disc" }}>
                                Communicate effectively in visual, oral, and
                                written form.
                              </li>
                            </ul>
                            {/* <ul className="list-style-one clearfix">
                              <li>Holiday Trash & Recycling</li>
                              <li>Things To Do In Govarnex</li>
                            </ul> */}
                            <div className="btn-box">
                              <a
                                href="mailto:roshni.sarin@blitzlearning.in"
                                className="theme-btn-one"
                              >
                                Apply Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*Accordion Block*/}

                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 2 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(2)}
                        >
                          <div className="icon-box"></div>
                          <h3>e-Learning developer</h3>
                        </div>
                        <div
                          className={
                            isActive.key == 2
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="inner-box">
                            <ul>
                              <li>
                                <span
                                  style={{ fontWeight: "bold", color: "black" }}
                                >
                                  Job Category:
                                </span>{" "}
                                Software Development
                              </li>
                              <li>
                                <span
                                  style={{ fontWeight: "bold", color: "black" }}
                                >
                                  Job Type:
                                </span>{" "}
                                Full Time
                              </li>
                              <li>
                                <span
                                  style={{ fontWeight: "bold", color: "black" }}
                                >
                                  Job Location:
                                </span>{" "}
                                Noida
                              </li>
                              <li>
                                <span
                                  style={{ fontWeight: "bold", color: "black" }}
                                >
                                  Experience:
                                </span>{" "}
                                2-3 Years
                              </li>
                            </ul>
                            <p>
                              Bachelor's degree in Instructional Design,
                              Educational Technology, Multimedia Design,
                              Computer Science, or a related field.
                            </p>
                            <h4>Duties and Responsibilities:</h4>
                            <p>
                              Understanding of instructional design principles
                              and adult learning theory. Ability to analyze
                              learning needs and design effective and engaging
                              e-learning content.
                            </p>

                            <div className="btn-box">
                              <a
                                href="mailto:roshni.sarin@blitzlearning.in"
                                className="theme-btn-one"
                              >
                                Apply Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 5 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(5)}
                        >
                          <div className="icon-box"></div>

                          <h3>IT executive</h3>
                        </div>
                        <div
                          className={
                            isActive.key == 5
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="inner-box">
                            <ul>
                              <li>
                                <span
                                  style={{ fontWeight: "bold", color: "black" }}
                                >
                                  Job Category:
                                </span>{" "}
                                Software Development
                              </li>
                              <li>
                                <span
                                  style={{ fontWeight: "bold", color: "black" }}
                                >
                                  Job Type:
                                </span>{" "}
                                Full Time
                              </li>
                              <li>
                                <span
                                  style={{ fontWeight: "bold", color: "black" }}
                                >
                                  Job Location:
                                </span>{" "}
                                Noida
                              </li>
                              <li>
                                <span
                                  style={{ fontWeight: "bold", color: "black" }}
                                >
                                  Experience:
                                </span>{" "}
                                0-6 Months
                              </li>
                            </ul>
                            <p>
                              IT (information technology) executives manage the
                              information technology needs and systems of their
                              employers, including implementing database and
                              network designs, installing and upgrading
                              software, ensuring systems security and
                              troubleshooting computer issues throughout their
                              organizations.
                            </p>
                            <h4>Duties and responsibilities:</h4>
                            <p>
                              Candidate with 6 months of relevant experience,
                              having a good command on C#, ASP.NET, .NET
                              Framework 2.0 &3.5, Ajax. SQL server, JAVA Script.
                              Must be able to train and coach.
                            </p>

                            <div className="btn-box">
                              <a
                                href="mailto:roshni.sarin@blitzlearning.in"
                                className="theme-btn-one"
                              >
                                Apply Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="career-sidebar ml_40">
                    <h3>Quick contact</h3>
                    <div className="form-inner">
                      <form
                        // action="career.html"
                        // method="post"
                        id="contact-form"
                        onSubmit={handleSubmit1}
                      >
                        <div className="form-group">
                          <input
                            type="text"
                            name="username"
                            // value={formData.username}
                            placeholder="Your name"
                            required
                            // pattern="[A-Za-z]+"
                            // onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            // value={formData.email}
                            placeholder="Your email"
                            required
                            // onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone"
                            // value={formData.phone}
                            required
                            placeholder="Phone"
                            // onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            // value={formData.subject}
                            required
                            placeholder="Subject"
                            // onChange={handleChange}
                          />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <label htmlFor="resume">Resume</label>
                          <input
                            type="file"
                            id="resume"
                            name="resume"
                            accept=".pdf, .doc, .docx"
                            // onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Type message"
                            // value={formData.message}
                            required
                            // onChange={handleChange}
                          ></textarea>
                        </div>
                        <div className="form-group message-btn">
                          <button
                            type="submit"
                            className="theme-btn-one"
                            // disabled={isSubmitting}
                          >
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
  );
}
