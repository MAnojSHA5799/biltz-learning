'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Layout from "../../components/layout/Layout";
import Link from "next/link";
// import '../../main.css'
export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData)

    try {
      // Make the Axios POST request http://localhost:2410/blogComments
      const response = await axios.post(
        'https://biltz-backend.vercel.app/blogComments', // Adjust the endpoint as needed
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false,
        }
      );

      // Handle the response as needed
      console.log('Server Response:', response.data);

      // Reset form data (if needed)
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setIsSubmitting(false);
      router.refresh();
      // Optionally, you can handle success or show a message to the user
    } catch (error) {
      // Handle errors
      console.error('Error posting data:', error);
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
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog">
        {/* sidebar-page-container */}
        <section className="sidebar-page-container pt_150 pb_150">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 col-sm-12 sidebar-side">
                <div className="blog-details-content">
                  <div className="news-block-one">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="blog-images">
                          <img className="blog-img01" src="/assets/images/Blog/powerup-corporate-training.jpg" alt="/" />
                        </figure>
                        <h2>
                          10<span>Aug</span>
                        </h2>
                      </div>
                      <div className="lower-content">
                        <ul className="post-info clearfix">
                          <li>
                            <i className="icon-21"></i>
                            <Link href="blog-detailsl">Admin</Link>
                          </li>
                          <li>
                            <i className="icon-22"></i>
                            <Link href="blog-detailsl">0 Comnt</Link>
                          </li>
                        </ul>
                        <h2>
                        Powering up corporate training: the gamified learning advantage
                        </h2>
                        <h4 className="blog-heading">Introduction</h4>
                        <p>
                        In the fast-paced world of corporate training, engagement and effectiveness are the keys to unlocking employee potential and organizational success. As businesses continually seek innovative ways to enhance learning experiences, one strategy that's gaining significant traction is gamified learning. Let's explore how gamified learning is transforming corporate training into an exciting and effective endeavor.
                        </p>
                      
                      
                        <h4 className="blog-heading">Gamified Learning: Beyond Entertainment</h4>
                        <p>
                        At its core, gamified learning involves integrating game-like elements into the learning process. But don't be mistaken – it's not just about playing games. It's about leveraging game mechanics, such as challenges, rewards, competition, and progression, to create an engaging and immersive learning environment. By tapping into our natural desire for achievement and recognition, gamified learning captures attention and drives active participation.
                        </p>
                        <h4 className="blog-heading">Enhanced Engagement and Motivation</h4>
                        <p>
                        Traditional training methods often struggle to hold learners' attention, leading to lackluster results. Gamified learning addresses this challenge head-on. When employees encounter a training module that mimics the mechanics of a game – with points, levels, badges, and leaderboards – they become more motivated to participate and excel. The competitive element, coupled with the promise of rewards, fosters a sense of achievement that propels learners to keep pushing their boundaries.
                        </p>
                        <h4 className="blog-heading">Immediate Feedback and Progression</h4>
                        <p>
                        In a gamified learning environment, feedback is instantaneous and constructive. Learners receive real-time information about their performance, allowing them to gauge their understanding and identify areas for improvement. This immediate feedback loop contributes to a faster learning curve and a deeper grasp of the subject matter.
                        </p>
                        <h4 className="blog-heading">Retention and Recall</h4>
                        <p>
                        Gamified learning capitalizes on the psychological principle of spaced repetition. By revisiting content through different game stages or challenges, learners reinforce their knowledge over time, leading to improved long-term retention and recall. This is a significant advantage for corporate training, as employees can apply their acquired knowledge effectively in their day-to-day tasks.
                        </p>
                        <h4 className="blog-heading">Collaborative Learning</h4>
                        <p>
                        Gamified learning often encourages collaboration and healthy competition among employees. Through team-based challenges, employees can share insights, discuss strategies, and learn from each other's experiences. This fosters a sense of camaraderie and teamwork that extends beyond the training module into the workplace.
                        </p>
                        <h4 className="blog-heading">Risk-Free Environment</h4>
                        <p>
                        Mistakes are a natural part of the learning process, but they can sometimes be intimidating in a professional setting. Gamified learning provides a risk-free environment where employees can experiment, make decisions, and learn from failures without real-world consequences. This bolsters confidence and encourages a growth mindset.
                        </p>
                        <h4 className="blog-heading">Customized Learning Paths</h4>
                        <p>
                        Gamified learning platforms can adapt to individual learners' progress and preferences, tailoring the experience to each employee's needs. This personalization ensures that training remains relevant and effective for diverse skill levels and learning styles.
                        </p>
                        <h4 className="blog-heading">Data-Driven Insights</h4>
                        <p>
                        Gamified learning systems generate valuable data on learner behavior, progress, and engagement. Corporations can analyze this data to gain insights into training effectiveness, identify areas for improvement, and refine their learning strategies.
                        </p>
                        <h4 className="blog-heading">Embracing the Game-Changer</h4>
                        <p>
                        As corporate training evolves to meet the demands of a dynamic workforce, gamified learning has emerged as a game-changer itself. By combining entertainment, competition, and learning, this approach ignites a new level of engagement and motivation among employees. In an era where disengagement is a real concern, gamified learning injects excitement, challenges, and rewards into the learning journey, ensuring that corporate training becomes a transformative experience that propels both individuals and organizations toward greater success.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="author-box">
                    <figure className="author-thumb">
                      <img src="/assets/images/blog-author/neha.jpg" alt="" />
                    </figure>
                    <h3>Neha Tyagi</h3>
                    <span className="designation">About author</span>
                    <p>
                    As a Digital Tech professional with significant experience, Neha Tyagi has mastered the art of teamwork. Throughout her career, she maintains a commitment to continuous learning. Currently, Neha is delving into innovative technologies aimed at transforming businesses.
                    </p>
                  </div>
                  <div className="comment-form-area">
                    <h3>Leave a comments</h3>
                    <div className="form-inner">
                    <form
      // action="blog-details"
      // method="post"
      id="contact-form"
      className="default-form"
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
            placeholder="Your email"
            // value={formData.email}
            // onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            name="message"
            placeholder="Type message"
            // value={formData.message}
            // onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <div className="message-btn">
            <button type="submit" className="theme-btn-one"  
            // disabled={isSubmitting}
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="blog-sidebar ml_40">
                  {/* <div className="sidebar-widget search-widget">
                    <div className="search-form">
                      <form action="blog-2l" method="post">
                        <div className="form-group">
                          <input
                            type="search"
                            name="search-field"
                            placeholder="Search..."
                            required
                          />
                          <button type="submit">
                            <i className="icon-4"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div> */}
                  {/* <div className="sidebar-widget category-widget">
                    <div className="widget-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="category-list clearfix">
                        <li>
                          <Link href="/blog">Business</Link>
                        </li>
                        <li>
                          <Link href="/blog">Consulting</Link>
                        </li>
                        <li>
                          <Link href="/blog">Financial Plan</Link>
                        </li>
                        <li>
                          <Link href="/blog">Innovative</Link>
                        </li>
                        <li>
                          <Link href="/blog">Nursing</Link>
                        </li>
                        <li>
                          <Link href="/blog">Management</Link>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  <div className="sidebar-widget post-widget">
                    <div className="widget-title">
                      <h3>Recent article</h3>
                    </div>
                    <div className="post-inner">
                      <div className="post">
                        <figure className="post-thumb">
                          <Link href="/blog">
                            <img src="/assets/images/Blog/blogimage.jpg" alt="" />
                          </Link>
                        </figure>
                        <h5>
                          <Link href="/blog">
                          Where is e-Learning headed in 2024 and beyond?
                          </Link>
                        </h5>
                        <span className="post-date">Apr 17, 2023</span>
                      </div>
                      <div className="post">
                        <figure className="post-thumb">
                          <Link href="/blog">
                            <img src="/assets/images/Blog/blogimage2.jpg" alt="" />
                          </Link>
                        </figure>
                        <h5>
                          <Link href="/blog">
                          Efficient e-Learning Development: Accelerating Your Path to Success
                          </Link>
                        </h5>
                        <span className="post-date">Aug 30, 2023</span>
                      </div>
                      <div className="post">
                        <figure className="post-thumb">
                          <Link href="/blog">
                            <img src="/assets/images/Blog/blogimage3.jpg" alt="" />
                          </Link>
                        </figure>
                        <h5>
                          <Link href="/blog">
                          Unlock your potential through e-learning for Logistics and Supply Chain Management
                          </Link>
                        </h5>
                        <span className="post-date">Oct 04, 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="sidebar-widget tags-widget">
                    <div className="widget-title">
                      <h3>Popular Tags</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="tags-list clearfix">
                        <li>
                          <Link href="/blog">Agency</Link>
                        </li>
                        <li>
                          <Link href="/blog">Business</Link>
                        </li>
                        <li>
                          <Link href="/blog">Consult</Link>
                        </li>
                        <li>
                          <Link href="/blog">Corporate</Link>
                        </li>
                        <li>
                          <Link href="/blog">Marketing</Link>
                        </li>
                        <li>
                          <Link href="/blog">Industry</Link>
                        </li>
                        <li>
                          <Link href="/blog">Idea</Link>
                        </li>
                        <li>
                          <Link href="/blog">Data</Link>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* sidebar-page-container end */}
      </Layout>
    </>
  );
}
