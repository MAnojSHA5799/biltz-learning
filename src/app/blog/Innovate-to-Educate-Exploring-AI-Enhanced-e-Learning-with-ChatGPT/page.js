'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import '../../main.css'
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
  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Details">
        {/* sidebar-page-container */}
        <section className="sidebar-page-container pt_150 pb_150">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 col-sm-12 sidebar-side">
                <div className="blog-details-content">
                  <div className="news-block-one">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img src="/assets/images/Blog/blog-3.jpg" alt="" />
                        </figure>
                        <h2>
                          27<span>Dec</span>
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
                        Innovate to Educate: Exploring AI-Enhanced e-Learning with ChatGPT
                        </h2>
                        <h4 className="blog-heading">Introduction :</h4>
                        <p>
                        In the dynamic landscape of education, the integration of technology has become imperative to foster engaging and effective learning environments. One such revolutionary advancement is the infusion of Artificial Intelligence (AI) into e-Learning platforms. Among the myriad of AI tools available, ChatGPT stands out as a powerful language model developed by OpenAI. This blog delves into the exciting possibilities that arise when ChatGPT is harnessed to enhance the e-Learning experience, fostering a new era of innovation in education.
                        </p>
                        <h4 className="blog-heading">Empowering Personalized Learning:</h4>
                        <p>
                        Traditional education often struggles to address the diverse learning needs of individual students. AI, and specifically ChatGPT, can play a pivotal role in personalized learning experiences. The model’s ability to understand and generate human-like text enables it to tailor content to the unique pace, preferences, and comprehension levels of each learner. As a result, students can engage with educational material in a way that is best suited to their individual learning styles, promoting a more efficient and enjoyable learning journey.
                        </p>
                        <h4 className="blog-heading">Real-time Feedback for Rapid Improvement:</h4>
                        <p>
                        One of the key challenges in conventional education is the delayed feedback loop. Students submit assignments, wait for grading, and receive feedback days or even weeks later. AI-powered systems, like ChatGPT, can provide instantaneous feedback, enabling learners to correct mistakes and solidify their understanding in real time. This immediate feedback loop not only accelerates the learning process but also cultivates a sense of continuous improvement, encouraging students to actively participate in their own learning journey.
                        </p>
                        <h4 className="blog-heading">Enhanced Interactivity in Virtual Classrooms:</h4>
                        <p>
                        The integration of ChatGPT in virtual classrooms transforms the learning experience into an interactive and dynamic process. The model can act as a virtual assistant, answering questions, facilitating discussions, and even simulating real-world scenarios for practical application of knowledge. This interactivity fosters a collaborative and engaging online learning environment, breaking down the barriers often associated with remote education.
                        </p>
                        <h4 className="blog-heading">Natural Language Understanding for Simplified Communication:</h4>
                        <p>
                        Language barriers can hinder effective communication in educational settings, especially in diverse global classrooms. ChatGPT’s natural language understanding capabilities can bridge these gaps by providing real-time language translation and interpretation. This not only facilitates communication between students and educators from different linguistic backgrounds but also opens up a world of educational resources that might otherwise be inaccessible due to language constraints.
                        </p>
                        <h4 className="blog-heading">Ethical Considerations in AI-Enhanced Education:</h4>
                        <p>
                        While the integration of AI in education holds immense promise, it also raises ethical considerations. It is crucial to establish guidelines and ethical standards to ensure responsible use of AI, safeguarding against biases and maintaining the privacy and security of student data. Striking a balance between innovation and ethical considerations is paramount to realizing the full potential of AI-enhanced e-Learning.
                        </p>
                        <h4 className="blog-heading">Conclusion:</h4>
                        <p>
                        The fusion of AI, particularly ChatGPT, with e-learning platforms heralds a new era of innovation in education. By personalizing learning experiences, providing real-time feedback, enhancing interactivity, and overcoming language barriers, ChatGPT contributes to the creation of a more inclusive and effective educational landscape. As we navigate this transformative journey, it is essential to remain mindful of ethical considerations, ensuring that AI is harnessed responsibly for the betterment of education worldwide.
                        </p>
                        <blockquote>
                          <div className="icon-box">
                            <i className="icon-47"></i>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit amet sit purus tempor dui consequat nibh elit
                            urna interdum.
                          </p>
                          <h4>Neha Tyagi</h4>
                        </blockquote>
                        {/* <p>
                          Tortor etiam sed suspendisse faucibus ac volutpat
                          mattis tortor nec. Orc velit posuere turpis amet
                          Lectus lacus lectus habitasse amet quam libero lorem
                          Volutpat maecenas viverra consequat proin condimentum
                          diam donec aliquet natoque quam vitae leo risus. Eget
                          neque proin in dolor cursus bibendum urna dictum.
                        </p> */}
                        {/* <ul className="tags-list clearfix">
                          <li>
                            <Link href="/blog">Agency</Link>
                          </li>
                          <li>
                            <Link href="/blog">Business</Link>
                          </li>
                          <li>
                            <Link href="/blog">Consult</Link>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                  <div className="author-box">
                    <figure className="author-thumb">
                      <img src="/assets/images/news/author-1.jpg" alt="" />
                    </figure>
                    <h3>Neha Tyagi</h3>
                    <span className="designation">About Author</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      amet sit purus tempor dui pharetra consequat nibh elit
                      urna interdum viera quam.
                    </p>
                  </div>
                  <div className="comment-form-area">
                    <h3>Leave A Comments</h3>
                    <div className="form-inner">
                    <form
      action="blog-details"
      method="post"
      className="default-form"
      onSubmit={handleSubmit}
    >
      <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            name="message"
            placeholder="Type message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <div className="message-btn">
            <button type="submit" className="theme-btn-one"  disabled={isSubmitting}>
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
                      <h3>Recent Article</h3>
                    </div>
                    <div className="post-inner">
                      <div className="post">
                        <figure className="post-thumb">
                          <Link href="/blog">
                            <img src="/assets/images/news/post-1.jpg" alt="" />
                          </Link>
                        </figure>
                        <h5>
                          <Link href="/blog">
                            How to Manage Online Business’s
                          </Link>
                        </h5>
                        <span className="post-date">Apr 17, 2022</span>
                      </div>
                      <div className="post">
                        <figure className="post-thumb">
                          <Link href="/blog">
                            <img src="/assets/images/news/post-2.jpg" alt="" />
                          </Link>
                        </figure>
                        <h5>
                          <Link href="/blog">
                            Your Business is Ready For Integration
                          </Link>
                        </h5>
                        <span className="post-date">Apr 16, 2022</span>
                      </div>
                      <div className="post">
                        <figure className="post-thumb">
                          <Link href="/blog">
                            <img src="/assets/images/news/post-3.jpg" alt="" />
                          </Link>
                        </figure>
                        <h5>
                          <Link href="/blog">
                            Ensure that Copies of Documents
                          </Link>
                        </h5>
                        <span className="post-date">Apr 15, 2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget tags-widget">
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
                  </div>
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
