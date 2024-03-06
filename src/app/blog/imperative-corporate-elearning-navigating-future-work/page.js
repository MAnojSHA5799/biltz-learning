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
                          <img className="blog-img01" src="/assets/images/Blog/The-Imperative4a.jpg" alt="/" />
                        </figure>
                        <h2>
                          14<span>Aug</span>
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
                        The imperative of corporate elearning: Navigating the future of Work
                        </h2>
                        <h4 className="blog-heading">Introduction</h4>
                        <p>
                        In an ever-evolving business landscape, the role of learning and development has taken center stage. Traditional modes of training are giving way to innovative solutions, and at the forefront of this transformation is corporate eLearning. As we dive into the digital age, the need for effective eLearning programs has become paramount for corporations seeking to empower their workforce, enhance skills, and drive sustainable success.
                        </p>
                        <h4 className="blog-heading">The changing dynamics of learning</h4>
                        <p>
                        The 21st century workforce is characterized by diversity, remote work, and rapid technological advancements. To remain competitive, companies must adapt swiftly to these changes, and that includes reimagining how employees learn. This is where corporate eLearning steps in, offering a comprehensive solution to cater to the diverse learning needs of the modern workforce.
                        </p>
                        <h4 className="blog-heading">Addressing learning needs with precision</h4>
                        <p>
                        One of the most compelling aspects of corporate eLearning is its ability to personalize learning experiences. Recent data highlights that personalized learning increases engagement and retention rates. By harnessing data-driven insights, corporations can create tailored learning paths for individual employees, ensuring they acquire the skills necessary to excel in their roles.
                        </p>
                        
                        
                        <h4 className="blog-heading">Cost-Efficiency: A strategic advantage</h4>
                        <p>
                        Cost considerations have always played a crucial role in corporate decision-making. Elearning, when compared to traditional classroom training, emerges as a cost-efficient alternative. Recent studies suggest that organizations can save up to 70% in training costs through eLearning, thanks to reduced travel expenses, printing costs, and the ability to reuse and update content.
                        </p>
                       
                       
                        <h4 className="blog-heading">Global reach and consistency</h4>
                        <p>
                        As corporations expand across borders, maintaining consistent training standards can be a challenge. Corporate eLearning transcends geographical boundaries, allowing organizations to disseminate uniform training content to employees worldwide. This not only ensures compliance with industry regulations but also fosters a unified corporate culture.
                        </p>
                        <h4 className="blog-heading">Learning analytics: navigating the learning journey</h4>
                        <p>
                        The power of data analytics is revolutionizing how organizations approach learning and development. With the ability to track learners' progress, identify knowledge gaps, and measure the effectiveness of training modules, corporations can make informed decisions to refine their eLearning programs continually.
                        </p>
                        <h4 className="blog-heading">Flexibility fuels engagement</h4>
                        <p>
                        The concept of 9-to-5 jobs is gradually giving way to flexible work arrangements. Corporate eLearning aligns seamlessly with this trend, allowing employees to access training materials at their convenience. Whether it's a busy parent, a remote worker, or an employee juggling multiple responsibilities, eLearning ensures that upskilling remains a viable option for all.
                        </p>
                        <h4 className="blog-heading">Embracing the future: A call to action</h4>
                        <p>
                        The need for corporate eLearning has never been more evident. As businesses navigate the complexities of a digital era, investing in a robust eLearning strategy is not only prudent but imperative. It empowers employees, enhances their skill sets, and ultimately contributes to the organization's growth and success.
                        </p>
                        <p>
                        In conclusion, the dynamic landscape of corporate learning demands an equally dynamic solution. Corporate eLearning, with its personalization, cost-efficiency, global reach, and data-driven insights, positions itself as the go-to choice for businesses determined to remain agile, relevant, and ahead of the curve. By embracing this transformative approach to learning, corporations are not only investing in their employees' growth but also securing a prosperous future in an ever-evolving world of work.
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
