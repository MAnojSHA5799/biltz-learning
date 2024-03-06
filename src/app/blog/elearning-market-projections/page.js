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
                          <img className="blog-img01" src="/assets/images/Blog/eLearning-market-projections.jpg" alt="" />
                        </figure>
                        <h2>
                          03<span>May</span>
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
                        e-Learning market projections
                        </h2>
                        <h4 className="blog-heading">Introduction</h4>
                        <p>
                        The eLearning market is expected to grow significantly in the coming years as more and more learners and organizations turn to online learning solutions. The Global eLearning Corporate Compliance Training Market is anticipated to rise at a considerable rate during the forecast period, between 2023 and 2028. In 2021, the market is growing at a steady rate, and with the rising adoption of strategies by key players, the market is expected to rise over the projected horizon.
                        </p>
                        <p>
                        The global eLearning Corporate Compliance Training market size was valued at USD 4404.68 million in 2022 and is expected to expand at a CAGR of 12.3% during the forecast period, reaching USD 8833.45 million by 2028.
                        </p>
                        <p>
                        According to The Business Research Company’s market research, the eLearning market is projected to experience substantial growth in the coming years. The global e-learning market size is expected to grow from $245.5 billion in 2022 to $278 billion in 2023, at a CAGR of more than 13%. By 2027, the market is projected to reach $462.6 billion, growing at a CAGR of more than 13%. North America was the largest region in the global eLearning market report in 2022.
                        </p>
                        <p>
                        The COVID-19 pandemic has accelerated the adoption of remote learning practices, which is expected to drive the growth of the e-learning market in the future. Remote learning involves the use of technology such as video conferencing, virtual examinations, and discussion boards to facilitate distance learning. This has allowed students and teachers to stay connected and engaged with the curriculum while working from home.
                        </p>
                        <p>
                        For example, in the United States, the National Council for State Authorization Reciprocity Agreements (NC-SARA) reported a 93% increase in distance education enrolment from fall 2019 to fall 2020, with 2,201 SARA schools reporting more than 5.8 million students enrolled solely in distant education.
                        </p>
                        <p>
                        Innovative technologies such as artificial intelligence, augmented reality, gamification, big data, and mixed reality are being developed by major companies to sustain their position in the market. Skilldora Inc., a US-based ed-tech startup, partnered with D-ID, an Israel-based information technology company, to introduce an eLearning platform and app in the United States that uses AI instructors.
                        </p>
                        <h4 className="blog-heading">Here are some projections for the eLearning market from 2024 to 2030 based on various reports:</h4>
                        <ul>
                <li className="our-work-li">
                The global eLearning market is expected to continue its growth trajectory and reach a market size of $404 billion by 2025, growing at a CAGR of 15% from 2021 to 2025. (Source: Technavio)
                </li>
                <li className="our-work-li">The corporate eLearning market is expected to continue to grow and reach $64 billion by 2030, growing at a CAGR of 10% from 2021 to 2030. (Source: ResearchAndMarkets)</li>
                <li className="our-work-li">The online higher education market is expected to grow at a CAGR of 10.28% during the period 2020-2030. (Source: Technavio)</li>
                <li className="our-work-li">The mobile learning market is expected to reach $165.36 billion by 2030, growing at a CAGR of 21.5% from 2021 to 2030. (Source: MarketsandMarkets)</li>
                <li className="our-work-li">The self-paced eLearning market is expected to reach $41.36 billion by 2030, growing at a CAGR of 5.4% from 2021 to 2030. (Source: MarketsandMarkets)</li>
              </ul>
                        <p>
                        Overall, it’s evident that the eLearning market will continue to grow at a significant pace in the coming years, driven by factors such as the increasing adoption of online learning solutions, technological advancements, and the rising demand for upskilling and reskilling.
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
