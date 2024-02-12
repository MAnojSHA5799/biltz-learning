import Link from "next/link";
import "../../../main.css";

export default function Features() {
  return (
    <>
      <section className="feature-section  pd-5 mt-5 mb-5 centred">
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
              {/* <br />Blitz Learning Technologies. */}
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
                      Crafted to meet speciﬁc learning objectives, our custom
                      e-learning content with advanced e-Learning technology
                      ensures engagement.
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
                      We create and localize content for your e-learning to
                      advance skills, improve performance, and get results.
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
                    <img src="/assets/images/services/VideoProduction.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                    <img className="icon-01" src="/assets/images/icon/VIDEO PRODUCTION.png"></img>
                    </div>
                    <h3>
                      <Link href="/">Video production</Link>
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
                      Our learning consulting services focus on aligning
                      education strategies with business goals, creating a
                      seamless bridge.
                    </p>
                    
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
