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
                          <img className="blog-img01" src="/assets/images/Blog/blog-5.jpg" alt="" />
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
                        Benefits of our custom e-Learning services
                        </h2>
                        <h4 className="blog-heading">Introduction :</h4>
                        <p>
                        In a rapidly evolving world, education and training have become more important than ever. The traditional classroom model is no longer the sole means of acquiring knowledge and skills. The emergence of e-learning has revolutionized the way we learn, making education accessible to people around the globe. One size does not fit all when it comes to education, and that’s where custom e-learning services come into play. These services offer a myriad of benefits that cater to the unique needs and preferences of learners. In this blog, we will explore some of the key advantages of custom e-learning services and why they are crucial for modern learning and development teams.
                        </p>
                        <h4 className="blog-heading">Tailored learning experience</h4>
                        <p>
                        Custom e-learning services enable a personalized and tailored learning experience. Unlike generic courses, custom e-learning is designed to meet the specific needs of a particular audience or organization. It takes into account the prior knowledge, learning pace, and preferences of the learners, resulting in a more engaging and effective learning experience. This personalization not only improves the learning outcomes but also keeps the learners motivated and engaged throughout their educational journey.
                        
                        </p>
                        <h4 className="blog-heading">Cost-effectiveness</h4>
                        <p>
                        Custom e-learning services can be cost-effective in the long run. While initial development costs might be higher compared to off-the-shelf solutions, the ability to reuse and adapt content for different courses and learners can lead to significant cost savings over time. Moreover, custom e-learning can be integrated with an organization’s existing systems and processes, streamlining training efforts and reducing overhead expenses. Our e-learning services can save you up to 30% cost as compared to the cost in Europe and North America.
                        </p>
                        <h4 className="blog-heading">Flexibility and accessibility</h4>
                        <p>
                        The flexibility of custom e-learning services is one of their most significant advantages. They can be designed to fit the learners’ schedules and preferences. This means that learners can access the content from anywhere at any time, whether they’re on their commute, at home, or during lunch breaks. Such flexibility is especially valuable for working professionals and students juggling various commitments.
                        </p>
                        <h4 className="blog-heading">Improved engagement</h4>
                        <p>
                        Custom e-learning services are built with engagement in mind. They incorporate various interactive elements, such as quizzes, simulations, videos, and gamified content, making the learning process more engaging and enjoyable. The use of multimedia and interactive features not only captures the learners’ attention but also enhances their understanding and retention of the material.
                        </p>
                        <h4 className="blog-heading">Better learning outcomes</h4>
                        <p>
                        One of the primary goals of education and training is to achieve desirable learning outcomes. Custom e-learning services can significantly contribute to this goal. They enable the alignment of the course content with the learning objectives, ensuring that learners acquire the knowledge and skills they need. This, in turn, leads to better performance and results.
                        </p>
                        <h4 className="blog-heading">Scalability</h4>
                        <p>
                        Custom e-learning services can easily scale to accommodate the growing needs of learners or an expanding organization. Whether you’re on boarding new employees or reaching a larger audience, these services can be adapted and extended without compromising the quality of the learning experience. This scalability is a crucial advantage for businesses and educational institutions.
                        </p>
                        <h4 className="blog-heading">Consistency</h4>
                        <p>
                        Maintaining consistency in education and training materials is essential, especially for organizations aiming to ensure that all employees receive the same level of knowledge and skills. Custom e-learning services provide the means to maintain consistency in content delivery, assessment methods, and learning objectives. This consistency results in a more standardized and effective training process.
                        </p>
                        <h4 className="blog-heading">Quick updates</h4>
                        <p>
                        In a rapidly changing world, educational content must stay up-to-date to remain relevant. Custom e-learning services allow for quick and seamless updates. If new information, regulations, or best practices emerge, the content can be modified or expanded to reflect these changes. This ensures that learners are always working with the most current information.
                        </p>
                        <h4 className="blog-heading">Better tracking and reporting</h4>
                        <p>
                        Custom e-learning services often come with robust tracking and reporting capabilities. This means that instructors, administrators, and learners can monitor progress, identify areas that need improvement, and assess the effectiveness of the training program. Detailed reports help in making data-driven decisions and continuous improvement efforts.
                        </p>
                        <h4 className="blog-heading">Accessibility and inclusivity</h4>
                        <p>
                        Custom e-learning services can be designed with accessibility and inclusivity in mind. They can incorporate features like closed captioning, screen readers, and other accommodations to ensure that all learners, regardless of their abilities, have equal access to the content. This is not only ethical but also often a legal requirement.
                        </p>
                        <h4 className="blog-heading">Conclusion</h4>
                        <p>
                        Custom e-learning services offer a wide range of benefits that make them indispensable in modern education and training. They provide tailored learning experiences, save costs in the long run, offer flexibility, engage learners effectively, and produce better learning outcomes. Their scalability, consistency, and ability to be quickly updated make them an ideal choice for businesses and educational institutions. Furthermore, the tracking and reporting features enhance the ability to monitor progress, and the focus on accessibility and inclusivity ensures that education is truly for everyone. Embracing custom e-learning services is not just a trend but a strategic decision that can transform the way we learn and train for the better.
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
            placeholder="Your name"
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
            <button type="submit" className="theme-btn-one" disabled={isSubmitting}>
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
