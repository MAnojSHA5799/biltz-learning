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
                          <img className="blog-img01" src="/assets/images/Blog/eLearning-Development.jpg" alt="/" />
                        </figure>
                        <h2>
                          30<span>Aug</span>
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
                        Efficient e-Learning development: accelerating your path to success
                        </h2>
                        <h4 className="blog-heading">Introduction</h4>
                        <p>
                        In today’s fast-paced world, where information is constantly evolving, businesses and educational institutions need to keep up with the demand for rapid and effective learning solutions. Enter eLearning – a dynamic approach to education that leverages technology to deliver knowledge and skills efficiently. However, the effectiveness of eLearning hinges on its development process. Efficient e-Learning development not only saves time and resources but also ensures that learners receive high-quality content that drives success. Let’s explore strategies to accelerate your path to eLearning success.
                        </p>
                      
                      
                        <h4 className="blog-heading">Clear learning objectives</h4>
                        <p>
                        Before embarking on e-Learning content development, define clear learning objectives. What skills or knowledge do you want learners to acquire? Well-defined objectives guide eLearning content creation, ensuring that every element aligns with the learning goals. This focus prevents unnecessary tangents and keeps the eLearning module concise and effective.
                        </p>
                        <h4 className="blog-heading">Agile development</h4>
                        <p>
                        Embrace an agile development approach. Rather than developing the entire eLearning content and module at once, break it into smaller components or modules. This allows for iterative development, quick adjustments based on feedback, and the flexibility to make changes as needed.
                        </p>
                        <h4 className="blog-heading">Rapid authoring tools</h4>
                        <p>
                        Leverage rapid authoring tools that streamline the development process. These tools offer templates, interactions, and multimedia integration, reducing the need for extensive coding and design work. They enable subject matter experts and instructional designers to collaborate seamlessly, expediting content creation.
                        </p>
                        <h4 className="blog-heading">Collaborative development</h4>
                        <p>
                        Effective content development and e-Learning development involves collaboration among various stakeholders – subject matter experts, instructional designers, graphic designers, and tech experts. Regular meetings and open communication ensure that everyone is on the same page, minimizing misunderstandings and rework.
                        </p>
                        <h4 className="blog-heading">Reuse and repurpose</h4>
                        <p>
                        Maximize efficiency by reusing and repurposing existing content. If you have relevant materials from previous training sessions or resources, adapt and integrate them into your eLearning modules. This approach not only saves time but also maintains consistency across your learning materials.
                        </p>
                        <h4 className="blog-heading">Multimedia integration</h4>
                        <p>
                        Engagement is key to effective eLearning. Incorporate multimedia elements – videos, animations, infographics, and audio – to make the content visually appealing and interactive. Well-designed multimedia not only captures attention but also enhances understanding and retention.
                        </p>
                        <h4 className="blog-heading">User-Centric design</h4>
                        <p>
                        Put the learner at the center of the design process. Consider their preferences, learning styles, and technological comfort. A user-centric design ensures that the eLearning module is intuitive, easy to navigate, and responsive across different devices.
                        </p>
                        <h4 className="blog-heading">Assessment strategies</h4>
                        <p>
                        Integrate meaningful assessments to gauge learners’ comprehension. Instead of relying solely on traditional quizzes, incorporate scenario-based assessments, interactive simulations, and practical exercises that mirror real-world situations.
                        </p>
                        <h4 className="blog-heading">Pilot testing</h4>
                        <p>
                        Before launching the e-Learning module to a wider audience, conduct pilot testing with a small group of learners. Gather feedback on usability, content clarity, and overall effectiveness. This feedback loop allows for improvements and refinements before the official launch.
                        </p>
                        <h4 className="blog-heading">Continuous improvement</h4>
                        <p>
                        eLearning development doesn’t end with the launch. Regularly review and update your content based on learner feedback, changes in industry trends, or emerging technologies. This commitment to continuous improvement ensures that your eLearning modules stay relevant and effective over time.
                        </p>
                        <h4 className="blog-heading">Gamification and interactivity</h4>
                        <p>
                        Enhance engagement by integrating gamification elements such as badges, leaderboards, and challenges. Interactive scenarios and branching scenarios allow learners to apply concepts in practical contexts, boosting retention and application.
                        </p>
                        <h4 className="blog-heading">Conclusion</h4>
                        <p>
                        Efficient e-Learning development is a balance between well-defined objectives, agile processes, collaborative efforts, and learner-centric design. By leveraging rapid authoring tools, multimedia integration, and data analytics, organizations can create effective eLearning modules that accelerate learning and drive success. Remember that the key to efficient e-Learning development is not only delivering content quickly but also ensuring that the content is of high quality, engaging, and aligned with the learners’ needs. With these strategies in place, you can create a powerful eLearning experience that propels learners towards their goals.
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
