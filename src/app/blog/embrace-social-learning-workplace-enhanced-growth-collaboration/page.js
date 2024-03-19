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
                          <img className="blog-img01" src="/assets/images/Blog/Embrace-Social-learning.jpg" alt="/" />
                        </figure>
                        <h2>
                          29<span>Aug</span>
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
                        Embrace social learning in the workplace for enhanced growth and collaboration
                        </h2>
                        <h4 className="blog-heading">Introduction</h4>
                        <p>
                        In the fast-paced and ever-evolving world of business, the key to success lies not only in individual expertise but also in the collective knowledge and collaboration of a team. Traditional training methods have their merits, but the modern workplace demands dynamic and efficient approaches to learning and development. Enter social learning – a powerful strategy that leverages the principles of collaboration, interaction, and shared experiences to foster growth and innovation within organizations.
                        </p>
                        <h4 className="blog-heading">Understanding social learning</h4>
                        <p>
                        Social learning is a concept grounded in the understanding that people learn from observing, interacting with, and learning from each other. This approach recognizes that knowledge is not limited to formal training sessions or textbooks; it is also embedded in day-to-day interactions, discussions, and shared experiences. Social learning transforms the workplace into a dynamic learning ecosystem where employees actively contribute to one another’s growth.
                        </p>
                        <h4 className="blog-heading">The benefits of social learning</h4>
                        <ul>
                <li className="our-work-li">
              <span className='bold-text'>Enhanced collaboration: </span>In a socially connected learning environment, employees are encouraged to collaborate across departments and levels. This collaboration not only improves problem-solving but also fuels innovation as diverse perspectives converge.
                </li>
                <li className="our-work-li"><span className='bold-text'>Faster knowledge transfer: </span>Social learning enables the swift transfer of knowledge and expertise. Instead of relying solely on formal training sessions, employees can tap into the collective wisdom of the organization, expediting their learning curve.</li>

                <li className="our-work-li"><span className='bold-text'>Engagement and motivation: </span>When employees actively participate in the learning process and contribute to discussions, their engagement and motivation levels soar. They feel valued and empowered, leading to higher job satisfaction and retention rates.</li>

                <li className="our-work-li"><span className='bold-text'>Continuous learning culture: </span>Continuous Learning Culture: Social learning nurtures a culture of continuous learning. As employees engage in ongoing discussions and knowledge-sharing, the organization becomes more adaptable and better equipped to navigate changes.</li>

                <li className="our-work-li"><sapn className='bold-text'>Personalized learning: </sapn>Every employee’s learning journey is unique. Social learning platforms allow individuals to explore topics aligned with their interests and goals, tailoring their learning experience.</li>
                
                <li className="our-work-li"><span className='bold-text'>Problem-Solving skills: </span>Collaborative learning environments expose employees to a variety of problem-solving approaches. This diversity of thought hones their critical thinking skills and equips them to tackle challenges creatively.</li>

              </ul>
                        
                        
                        <h4 className="blog-heading">Implementing social learning</h4>
                        <ul>
                <li className="our-work-li">
              <span className='bold-text'>Social learning platforms: </span>Invest in digital platforms that facilitate discussion boards, knowledge-sharing forums, and interactive groups. These platforms provide a virtual space for employees to ask questions, share insights, and engage in meaningful conversations.
                </li>
                <li className="our-work-li"><span className='bold-text'>Content sharing: </span>Encourage employees to curate and share relevant articles, videos, and resources. This democratization of knowledge ensures that valuable information reaches a wider audience.</li>

                <li className="our-work-li"><span className='bold-text'>Peer learning circles: </span>Form small groups or circles where employees with similar learning interests can collaborate on projects, share experiences, and collectively explore new concepts.</li>

                <li className="our-work-li"><span className='bold-text'>Virtual mentoring: </span>Facilitate mentoring relationships between experienced employees and those seeking guidance. Virtual mentorship bridges knowledge gaps and fosters professional development.</li>

                <li className="our-work-li"><sapn className='bold-text'>Collaborative projects: </sapn>Assign cross-functional projects that require employees to collaborate, share insights, and collectively arrive at solutions. This hands-on approach exemplifies the principles of social learning.</li>
                
                <li className="our-work-li"><span className='bold-text'>Recognition and rewards:  </span>Recognize and reward employees who actively contribute to the social learning culture. Acknowledgment encourages continued engagement and sets a positive example for others.</li>
              </ul>
                       
                       
                        <h4 className="blog-heading">Overcoming challenges</h4>
                        <p>
                        Implementing social learning in the workplace might encounter some challenges, such as resistance to change, time constraints, or maintaining a balance between formal and informal learning. Address these challenges by emphasizing the benefits, offering flexible learning opportunities, and integrating social learning with existing training initiatives.
                        </p>
                        <h4 className="blog-heading">In conclusion</h4>
                        <p>
                        Embracing social learning in the workplace is a strategic move that aligns with the demands of the modern business landscape. By harnessing the power of collaboration, interaction, and shared experiences, organizations can create a culture of continuous growth and innovation. Social learning transforms employees from passive recipients of information into active contributors to the collective knowledge pool. As organizations strive to remain competitive and adaptable, integrating social learning into their learning and development strategies becomes not just a choice, but a necessity for success.
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
