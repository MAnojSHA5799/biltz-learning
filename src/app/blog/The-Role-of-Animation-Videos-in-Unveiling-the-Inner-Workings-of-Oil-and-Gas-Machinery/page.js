'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Layout from "../../components/layout/Layout";
import Link from "next/link";
export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
                          <img src="/assets/images/Blog/blog-1.jpg" alt="" />
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
                          The Role of Animation Videos in Unveiling the Inner
                          Workings of Oil and Gas Machinery
                        </h2>
                        <h4>Introduction :</h4>
                        <p>
                          Imperdiet consectetur gravida vel rutrum tempus,
                          mattis sit massa lacus morbi feugiat aliquam sagittis
                          nunc neque sit nec lorem tincidunt arcu nunc accumsan
                          risus felis in ornare Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. cursus ornare non non
                          massa elit rutrum. eros proin nibh neque interdum
                          accumsan, neque vitae. Tortor etiam sed suspendisse
                          faucibus ac volutpat mattis tortor nec. Orc velit
                          posuere turpis amet. Lectus lacus lectus habitasse
                          amet quam libero, lorem. Volutpat maecenas viverra
                          consequat condimentum diam donec aliquet. Natoque quam
                          vitae leo risus. Eget neque proin in dolor cursus
                          bibendum urna dictum. Aliquam gravida et proin
                          maecenas quis faucibus varius tristique.
                        </p>
                        <h4>Visualizing Complexity:</h4>
                        <p>
                          Oil and gas machinery are intricate systems with
                          numerous components and processes working in tandem.
                          Attempting to convey this complexity through
                          traditional means such as manuals or static images can
                          be daunting and overwhelming. Animation videos,
                          however, provide a dynamic and engaging platform to
                          visually represent these intricate mechanisms. By
                          combining graphics, motion, and narration, these
                          videos offer a comprehensive view of the machinery,
                          making it easier for both experts and novices to grasp
                          the nuances of their inner workings.
                        </p>
                        <h4>Enhanced Learning Experience:</h4>
                        <p>
                          The use of animation videos in explaining oil and gas
                          machinery transcends traditional educational methods.
                          These videos serve as valuable learning tools for
                          industry professionals, students, and even the general
                          public. The interactive and visually stimulating
                          nature of animations facilitates a more engaging
                          learning experience, allowing viewers to comprehend
                          complex concepts with greater ease. This not only aids
                          in training new personnel but also serves as a
                          continual learning resource for those already in the
                          field.
                        </p>
                        <h4> Simulation and Training:</h4>
                        <p>
                          Simulation plays a crucial role in the oil and gas
                          industry, where real-world scenarios can be risky and
                          expensive to replicate. Animation videos can simulate
                          various operational scenarios, providing a virtual
                          training ground for personnel. Through realistic
                          depictions of machinery in action, these videos enable
                          workers to familiarize themselves with emergency
                          procedures, maintenance protocols, and operational
                          nuances without exposing them to actual on-site risks.
                          This proactive approach to training enhances safety
                          standards and reduces the likelihood of errors in
                          critical situations. Traditional training methods
                          often involve expensive equipment and resources.
                          Animation videos provide a cost-effective alternative
                          by offering virtual simulations of machinery without
                          the need for physical prototypes. This not only
                          reduces training costs but also allows for consistent
                          and repeatable training experiences, ensuring that
                          personnel are well-prepared for real-world situations.
                        </p>
                        <h4>Showcasing Innovation:</h4>
                        <p>
                          As the oil and gas industry continues to evolve,
                          innovation becomes a driving force. Animation videos
                          serve as a medium to showcase cutting-edge
                          technologies and advancements in machinery. By
                          visually illustrating the latest developments,
                          companies can effectively communicate the benefits and
                          features of their innovations to a broader audience.
                          This not only enhances the industry’s reputation for
                          innovation but also fosters a culture of continuous
                          improvement
                        </p>
                        <h4>Effective Communication:</h4>
                        <p>
                          In a global industry where communication spans across
                          diverse cultures and languages, animation videos
                          transcend language barriers. Visual representations
                          are universally understood, making it easier for
                          companies to communicate complex concepts to a global
                          audience. Whether used in presentations, marketing
                          materials, or internal communications, animation
                          videos streamline the exchange of information,
                          ensuring that key messages are conveyed accurately and
                          comprehensively.
                        </p>
                        <h4>Conclusion:</h4>
                        <p>
                          Animation videos have become indispensable in the oil
                          and gas industry, serving as a bridge between
                          complexity and understanding. By visually unravelling
                          the inner workings of machinery, these videos
                          contribute to enhance learning experiences, improved
                          safety standards, and effective communication of
                          innovations. As the industry continues to push the
                          boundaries of technological advancement, animation
                          videos will remain a vital tool, playing a pivotal
                          role in elucidating the intricate tapestry of oil and
                          gas machinery for audiences around the world.
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
            <button type="submit" className="theme-btn-one">
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
