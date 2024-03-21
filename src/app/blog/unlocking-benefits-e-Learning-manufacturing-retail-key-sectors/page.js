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
                          {/* classname image to blog-images */}
                          <img className="blog-img01" src="/assets/images/Blog/blog-6.jpg" alt="" />
                        </figure>
                        <h2>
                          04<span>Oct</span>
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
                        Unlocking the benefits of e-Learning for manufacturing and retail key sectors
                        </h2>
                        <h4 className="blog-heading">Introduction</h4>
                        <p>
                        In today’s rapidly evolving world, industries across the board are recognizing the importance of e-learning as a powerful tool for workforce development and continuous learning. Among the sectors that have particularly benefited from this educational paradigm shift are Retail, Healthcare, Pharma, Automotive, and Banking, Financial Services, and Insurance (BFSI). E-learning has emerged as a game-changer, providing these industries with cost-effective and efficient ways to train employees, enhance their skills, and adapt to the ever-changing landscape of their respective markets. In this article, we will explore how e-learning is revolutionizing these sectors, delivering a range of benefits from cost savings to improved performance and compliance.
                        </p>
                        <h4 className="blog-heading">Retail revolution</h4>
                        <p>
                        The retail industry has always been known for its fast-paced nature and the need for constant adaptation to market trends. E-learning has played a pivotal role in helping retail organizations stay competitive and ensure that their workforce is well-equipped to meet the demands of today’s consumers.
                        </p>
                        
                        <p>
                        One of the primary benefits of e-learning in retail is its ability to provide consistent training to employees across multiple locations. Whether it’s customer service, sales techniques, or product knowledge, e-learning platforms can deliver standardized content to employees regardless of their physical location. This ensures that all employees are on the same page, delivering a uniform customer experience.
                        </p>
                        
                        <p>
                        Moreover, e-learning enables retail organizations to reduce training costs significantly. Traditional training methods often involve expenses such as travel, printed materials, and physical trainers. E-learning eliminates many of these costs by offering training materials online, which can be accessed from anywhere, at any time, and on various devices. This not only saves money but also provides employees with the flexibility to learn at their own pace.
                        </p>
                        
                        <p>
                        Additionally, e-learning platforms in retail can track and measure employee progress and performance. This data can help identify areas where additional training is needed and where employees excel. This information is invaluable for managers and HR departments to make data-driven decisions about their workforce’s development and allocation.
                        </p>
                        <h4 className="blog-heading">Healthcare and pharma proficiency</h4>
                        <p>
                        In the healthcare and pharmaceutical sectors, where knowledge is critical, e-learning has proven to be a lifesaver. Medical professionals and pharmaceutical representatives must continually update their knowledge to keep up with the latest research, treatments, and regulations. E-learning offers a convenient and efficient way to achieve this.
                        </p>
                        
                        <p>
                        One of the most significant benefits of e-learning in healthcare and pharma is the ability to provide training on complex topics through interactive and engaging content. Medical professionals can access multimedia resources, simulations, and case studies that make learning more immersive and effective. This not only enhances their understanding but also helps them apply their knowledge in real-world scenarios.
                        </p>
                       
                        <p>
                        Moreover, e-learning ensures that healthcare and pharma professionals stay compliant with changing regulations and guidelines. This is crucial in these industries, where non-compliance can have severe consequences. E-learning platforms can deliver updated compliance training modules to employees, track their completion, and provide documentation for audits.
                        </p>
                        
                        <p>
                        E-learning also offers flexibility, allowing healthcare professionals to balance their work schedules with continuing education. Whether it’s a nurse completing a certification course or a pharmaceutical representative learning about a new drug, e-learning allows them to study at their own pace, reducing the disruption to their daily routines.
                        </p>
                        <h4 className="blog-heading">Automotive advancements</h4>
                        <p>
                        In the automotive industry, where technology and innovation are constantly evolving, e-learning has become an indispensable tool for training and development. Manufacturers, dealerships, and repair shops have all embraced e-learning to keep their employees up to date with the latest automotive advancements.
                        </p>
                       
                        <p>
                        One of the key advantages of e-learning in the automotive sector is its ability to deliver just-in-time training. Technicians and mechanics can access information and tutorials on specific car models, diagnostics, and repair procedures when they need it. This ensures that they are well-prepared to tackle the task at hand, leading to faster and more accurate repairs.
                        </p>
                        
                        <p>
                        Additionally, e-learning allows automotive companies to standardize training programs across their network of dealerships and service centers. This consistency ensures that customers receive the same level of service and expertise, regardless of where they go. It also simplifies the onboarding process for new employees, as they can access a centralized repository of training materials.
                        </p>
                        
                        <p>
                        Additionally, e-learning allows automotive companies to standardize training programs across their network of dealerships and service centers. This consistency ensures that customers receive the same level of service and expertise, regardless of where they go. It also simplifies the onboarding process for new employees, as they can access a centralized repository of training materials.
                        </p>
                        <h4 className="blog-heading">BFSI excellence</h4>
                        <p>
                        The BFSI sector has witnessed significant transformations in recent years, driven by technological advancements and regulatory changes. E-learning has been instrumental in helping financial institutions and insurance companies stay compliant, reduce risks, and enhance the skills of their workforce.
                        </p>
                        
                        <p>
                        One of the primary benefits of e-learning in BFSI is its ability to deliver compliance training efficiently. Financial regulations are complex and ever-changing, and non-compliance can result in severe consequences. E-learning platforms can provide up-to-date compliance training modules, track employee progress, and generate reports to demonstrate adherence to regulatory requirements.
                        </p>
                        
                        <p>
                        Moreover, e-learning is cost-effective for large organizations in the BFSI sector, which often have a geographically dispersed workforce. Instead of conducting in-person training sessions for employees in different locations, e-learning allows them to access the same training materials online. This saves time and money while ensuring that all employees receive consistent training.
                        </p>
                        
                        <p>
                        E-learning also enables financial institutions to provide continuous professional development opportunities for their employees. Banking and insurance professionals can enhance their skills in areas such as risk management, investment strategies, and customer service through e-learning courses. This not only improves employee satisfaction but also contributes to the overall success of the organization.
                        </p>
                       
                        <h4 className="blog-heading">Conclusion</h4>
                        <p>
                        E-learning has emerged as a transformative force in the Retail, Healthcare, Pharma, Automotive, and BFSI sectors. Its ability to deliver consistent, cost-effective, and flexible training has revolutionized workforce development and continuous learning in these industries. As technology continues to advance, we can expect e-learning to play an even more significant role in shaping the future this is just to hardsectors, ensuring that employees are well-equipped to meet the challenges and opportunities that lie ahead. Whether it’s providing standardized retail training, keeping healthcare professionals compliant, delivering just-in-time automotive expertise, or ensuring regulatory adherence in BFSI, e-learning has become an indispensable tool for unlocking success and excellence in these industries.
                        </p>
                        {/* <blockquote>
                          <div className="icon-box">
                            <i className="icon-47"></i>
                          </div>
                          <p>
                          As a Digital Tech professional with significant experience, Neha Tyagi has mastered the art of teamwork. Throughout her career, she maintains a commitment to continuous learning. Currently, Neha is delving into innovative technologies aimed at transforming businesses.
                          </p>
                          <h4>Neha Tyagi</h4>
                        </blockquote> */}
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
