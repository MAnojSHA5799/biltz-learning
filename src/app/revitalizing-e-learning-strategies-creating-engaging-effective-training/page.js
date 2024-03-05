'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Layout from "../components/layout/Layout";
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
                        <figure className="blog-images">
                          <img className="blog-img01" src="/assets/images/Blog/blog-7.jpg" alt="" />
                        </figure>
                        <h2>
                          05<span>Sep</span>
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
                        Revitalizing e-Learning strategies for creating engaging and effective training
                        </h2>
                        <h4 className="blog-heading">Introduction</h4>
                        <p>
                        The field of education has been undergoing a remarkable transformation in recent years, with technology playing a pivotal role in reshaping how learning takes place. E-learning, in particular, has gained significant traction as a convenient and efficient way to deliver training and education across various domains. However, not all E-learning experiences are created equal. To truly make an impact, organizations and educators must focus on creating engaging and effective training modules that captivate learners and facilitate knowledge retention. In this blog, we will delve into some strategies that can help revitalize e-learning and elevate its effectiveness.
                        </p>
                        <h4 className="blog-heading">Interactive multimedia content</h4>
                        <p>
                        One of the most critical aspects of revitalizing e-learning is incorporating interactive multimedia content. Traditional text-heavy modules can lead to disengagement and reduced retention rates. By integrating videos, animations, infographics, and simulations, learners can interact with the content actively. Visual and auditory elements stimulate different senses, enhancing the learning experience and making it more memorable. Interactive scenarios also encourage learners to apply theoretical concepts to real-world situations, fostering a deeper understanding of the subject matter.
                        </p>
                        <h4 className="blog-heading">Personalized learning paths</h4>
                        <p>
                        Every learner is unique, with varying levels of knowledge, skills, and learning preferences. Embracing personalized learning paths can greatly enhance engagement and effectiveness. By using technology to assess the learner’s initial proficiency and objectives, the training program can adapt to their needs. This could mean providing additional resources for struggling learners or fast-tracking those who grasp concepts quickly. Personalization fosters a sense of ownership over the learning process and increases the likelihood of achieving desired outcomes.
                        </p>
                        
                        
                        <h4 className="blog-heading">Gamification elements</h4>
                        <p>
                        Gamification has proven to be a game-changer in the e-learning landscape. By incorporating game-like elements such as quizzes, challenges, leaderboards, and rewards, training modules can become not only informative but also enjoyable. Gamification taps into the human inclination towards competition and achievement, boosting motivation to complete courses. When learners are invested in the process, they are more likely to retain information and apply it effectively.
                        </p>
                       
                       
                        <h4 className="blog-heading">Bite-sized modules</h4>
                        <p>
                        In a world characterized by information overload, attention spans have become shorter. Lengthy e-learning courses can lead to cognitive overload and disinterest. To counter this, breaking down content into bite-sized modules can have a significant impact. Microlearning involves delivering content in short, focused bursts, making it easier for learners to digest and retain information. This approach also accommodates the modern learner’s busy lifestyle, allowing them to learn on-the-go.
                        </p>
                        <h4 className="blog-heading">Social learning communities</h4>
                        <p>
                        Learning is not a solitary activity; it thrives in a collaborative environment. Integrating social learning communities within e-learning platforms can rejuvenate the learning experience. Discussion boards, forums, and live chat sessions enable learners to connect, ask questions, share insights, and engage in meaningful discussions. Peer interaction promotes a deeper understanding of the subject matter through diverse perspectives and experiences.
                        </p>
                        <h4 className="blog-heading">Real-world application</h4>
                        <p>
                        The ultimate goal of e-learning is to enable learners to apply their knowledge in real-world scenarios. Therefore, incorporating practical exercises and case studies is crucial. When learners can see the direct relevance of what they are learning to their work or life, their motivation and engagement levels soar. Real-world application not only solidifies understanding but also instils confidence in learners’ abilities.
                        </p>
                        <h4 className="blog-heading">Continuous assessment and feedback</h4>
                        <p>
                        Regular assessments provide learners with a sense of progress and achievement. Implementing quizzes, tests, and assignments at strategic intervals helps reinforce learning and identify areas that need further attention. Additionally, timely feedback – whether automated or instructor-led – guides learners towards improvement. Constructive feedback serves as a roadmap for enhancement and keeps learners engaged in the learning process.
                        </p>
                        <h4 className="blog-heading">Conclusion</h4>
                        <p>
                        e-learning is a dynamic tool that has the potential to revolutionize education and training. However, to harness its full potential, organizations and educators must adopt strategies that prioritize engagement and effectiveness. Incorporating interactive multimedia content, personalized learning paths, gamification, microlearning, social learning communities, real-world application, and continuous assessment can collectively transform e-learning from a passive experience to an active and impactful journey of knowledge acquisition. As technology continues to evolve, embracing these strategies can ensure that e-learning remains a vibrant and essential component of modern education and training paradigms.
                        </p>
                        <blockquote>
                          <div className="icon-box">
                            <i className="icon-47"></i>
                          </div>
                          <p>
                          As a Digital Tech professional with significant experience, Neha Tyagi has mastered the art of teamwork. Throughout her career, she maintains a commitment to continuous learning. Currently, Neha is delving into innovative technologies aimed at transforming businesses.
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
                        <span className="post-date">Apr 17, 2022</span>
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
                        <span className="post-date">Apr 16, 2022</span>
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
                        <span className="post-date">Apr 15, 2022</span>
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
