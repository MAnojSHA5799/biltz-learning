import Link from "next/link";
import "../../../main.css";

export default function Features() {
  return (
    <>
      {/* <section className="feature-section  pd-5 mt-5 mb-5 centred">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
          ></div>
          <div
            className="pattern-2"
            style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}
          ></div>
        </div>
        <div className="auto-container">
          <div className="sec-title mb_50">
            <span className="sub-title pt-3">
              Elevating learning experiences with e-Learning development
            </span>
            <p>
              We have a profound understanding of what motivates learners to
              retain knowledge. Our expertise lies in helping businesses
              translate these motivations into actions that promote lasting
              knowledge retention through creative strategies. We advise,
              consult, and design with a purpose of addressing complex
              challenges that require an agile approach and have a wide-reaching
              solution.
            </p>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/assets/images/Custome-learning.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                    <img className="icon-01" src="/assets/images/icon/custom e-learning .png"></img>
                    </div>
                    <h3 style={{ margin: '10px 0' }}>
  <Link href="/Services/Custom-eLearning">
    Custom <br />e-Learning
  </Link>
</h3>
                    <p>
                    Our specialized e-Learning content, created to fulfill particular learning objectives, guarantees engagement with cutting-edge e-Learning technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/assets/images/services/Content-Services-image2.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                    <img className="icon-01" src="/assets/images/icon/content services .png"></img>
                    </div>
                    <h3>
                      <Link href="/Services/Content-Services">
                      Content services
                      </Link>
                    </h3>
                    <p>
                      We create and localize content for your e-Learning to
                      advance skills, improve performance, and get results.
                      <br/>
                    </p>
                    <br/>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/assets/images/services/Video_Production_2.jpg" style={{ width: '220px', height: '135px' }} alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                    <img className="icon-01" src="/assets/images/new-icon/Vdo Production.png"></img>
                    </div>
                    <h3>
                      <Link href="/Services/video-production">Video production</Link>
                    </h3>
                    <p>
                      We specialize in analyzing your current learning gaps and
                      designing effective roadmaps to address those gaps to
                      drive measurable results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/assets/images/LearningConsulting.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                    <img className="icon-01" src="/assets/images/New-Images/learning consulting.png"></img>
                    </div>
                    <h3>
                      <Link href="/Services/learning-consulting">
                      Learning consulting
                      </Link>
                    </h3>
                    <p>
                    Our learning consulting services aim to blend education strategies with business goals, creating a seamless link between learning and organizational success through advanced training technology.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="feature-section  pd-5 mt-5 mb-5 centred">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">
              Elevating learning experiences with e-Learning development
            </span>
            <p>
              {/* <br />Blitz Learning Technologies. */}
              We have a profound understanding of what motivates learners to
              retain knowledge. Our expertise lies in helping businesses
              translate these motivations into actions that promote lasting
              knowledge retention through creative strategies. We advise,
              consult, and design with a purpose of addressing complex
              challenges that require an agile approach and have a wide-reaching
              solution.
            </p>
            {/* <h2>
                Consistent ability to deliver rapid, accurate and most immersive
                learning experience
              </h2> */}
          </div>
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-two wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box" >
                {/* style={{ padding: '10px', margin: '10px', width: '600px' }} */}
                  <figure className="image-box">
                    <img src="/assets/Image/home_page/Custom-e-learning.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <div className="icon-box">
                        <img
                          className="icon-04"
                          src="/assets/images/icon/custom e-learning .png"
                        ></img>
                      </div>
                      <h3 style={{ textAlign: "left" }}>
                        <Link href="/custom-elearning">
                          Custom e-Learning
                        </Link>
                      </h3>
                      <p style={{ textAlign: "left" }}>
                        Our specialized e-Learning content, created to fulfill
                        particular learning objectives, guarantees engagement
                        with cutting-edge e-Learning technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-two wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                {/* style={{ padding: '20px', margin: '10px', width: '600px' }} */}
                  <figure className="image-box">
                    <img
                      src="/assets/Image/home_page/Content-Services-image.jpg"
                      alt="/"
                    />
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <div className="icon-box">
                        <img
                          className="icon-04"
                          src="/assets/images/icon/content services .png"
                        ></img>
                      </div>
                      <h3 style={{ textAlign: "left" }}>
                        <Link href="/content-services">
                          Content services
                        </Link>
                      </h3>
                      <p style={{ textAlign: "left" }}>
                        We create and localize content for your e-Learning to
                        advance skills, improve performance, and get results.
                      </p>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-two wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box" >
                {/* style={{ padding: '20px', margin: '10px', width: '600px' }} */}
                  <figure className="image-box">
                    <img
                      src="/assets/Image/home_page/Video-Production.jpg"
                      alt="/"
                    />
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <div className="icon-box">
                        <img
                          className="icon-04"
                          src="/assets/images/new-icon/Vdo Production.png"
                        ></img>
                      </div>
                      <h3 style={{ textAlign: "left" }}>
                        <Link href="/video-production">
                          Video production
                        </Link>
                      </h3>
                      <p style={{ textAlign: "left" }}>
                        We specialize in analyzing your current learning gaps
                        and designing effective roadmaps to address those gaps
                        to drive measurable results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-two wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box" >
                {/* style={{ padding: '20px', margin: '10px', width: '600px' }} */}
                  <figure className="image-box">
                    <img src="/assets/Image/home_page/Learning-Consulting.jpg" alt="/" />
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <div className="icon-box">
                        <img
                          className="icon-04"
                          src="/assets/images/New-Images/learning consulting.png"
                        ></img>
                      </div>
                      <h3 style={{ textAlign: "left" }}>
                        <Link href="/learning-consulting">
                          Learning consulting
                        </Link>
                      </h3>
                      <p style={{ textAlign: "left" }}>
                        Our learning consulting services aim to blend education
                        strategies with business goals, creating a seamless link
                        between learning and organizational success through
                        advanced training technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
   
    </>
  );
}
{/* <section className="service-details p_relative">
<div className="auto-container">
  <div className="row clearfix">
    
    <div className="col-lg-12 col-md-12 col-sm-12 content-side">
      <div className="service-details-content">
        <div className="content-one mb_90">
          <div className="text">
            <h2>Tailored learning modules with content services</h2>
            <p>
              Our content team tailors content to match every
              requirement by using rich media. Our localization
              services for e-Learning projects can help you
              translate and localize your content, including text
              translation and audio recording.
            </p>
          
          </div>
        </div>
        <div className="content-two mb_90">
        
        </div>
        <div className="content-three mb_85">
         
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 single-column" >
              <div className="single-item" style={{ backgroundColor: '#F96E27' }}>
                <div className="icon-box">
                  <img
                    className="icon-03"
                    src="/assets/images/new-icon/Research and report (1).png"
                  ></img>
                </div>
                <h3>Research and Report</h3>
                <p>
                  Our subject matter experts (SMEs) locate key
                  information and assemble quality data from
                  in-depth research on credible information sources
                  (web pages, databases). We then synthesize that
                  data into easy to comprehend reports, white
                  papers, and databases with clear insights and
                  knowledge to help you make informed business
                  decisions.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
              <div className="single-item">
                <div className="icon-box">
                  <img
                    className="icon-03"
                    src="/assets/images/new-icon/Regional connect (1).png"
                  ></img>
                </div>
                <h3>Regional Connect</h3>
                <p>
                  Developing content only in English neglects a
                  considerable segment of your potential audience.
                  There is no substitute for connecting with
                  employees, partners, and customers in their native
                  tongues and regional dialects.
                </p>
                <br />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 single-column mt-5">
              <div className="single-item">
                <div className="icon-box">
                  <img
                    className="icon-03"
                    src="/assets/images/new-icon/Review and summary (2).png"
                  ></img>
                </div>
                <h3>Review and Summary</h3>
                <p>
                  You give us content and we will summarize it, for
                  any industry. Our empaneled SMEs include
                  researchers, academicians, software engineers, and
                  PhDs in many academic disciplines. They review any
                  kind of document and extract the relevant
                  information, summarize it, and deliver those
                  summaries in print, electronic, and mobile
                  formats.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 single-column mt-5">
              <div className="single-item">
                <div className="icon-box">
                  <img
                    className="icon-03"
                    src="/assets/images/new-icon/Authorization and enrichment (1).png"
                  ></img>
                </div>
                <h3>Authoring and Enrichment</h3>
                <p>
                  We provide high quality writing and editorial
                  services, marketing content management with the
                  help of our content specialists– in any language,
                  for any industry.
                </p>
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 single-column mt-5">
              <div className="single-item">
                <div className="icon-box">
                  <img
                    className="icon-03"
                    src="/assets/images/new-icon/Native Translators.png"
                  ></img>
                </div>
                <h3>Native Translators</h3>
                <p>
                  Our localization services for e-Learning projects
                  can help you translate and localize your content
                  including text translation and audio recording. We have a panel of native translators in all major languages of the world.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 single-column mt-5">
              <div className="single-item">
                <div className="icon-box">
                  <img
                    className="icon-03"
                    src="/assets/images/new-icon/Multimedia .png"
                  ></img>
                </div>
                <h3>Multiple Formats</h3>
                <p>
                  We translate or re-engineer content in multiple
                  formats as per your needs. These include video,
                  audio, flash, PDF, PPTs, MS Word among others.
                </p>
                <br />
              </div>
            </div>
          </div>

          <div className="text mt_50">
            <p>
              Blitz Learning develops mobile training content across
              all platforms (iOS, Android, and Windows) with
              interactive functionalities.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="pattern-layer">
    <div
      className="pattern-1"
      style={{
        backgroundImage: "url(assets/images/shape/shape-2.png)",
      }}
    ></div>
    <div
      className="pattern-2"
      style={{
        backgroundImage: "url(assets/images/shape/shape-3.png)",
      }}
    ></div>
  </div>
  <div className="auto-container">
    <div className="row clearfix">
      <div className="col-lg-6 col-md-12 col-sm-12 content-column">
        <div className="content_block_three">
          <div className="content-box p_relative mr_30">
            
          
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
  
</section> */}