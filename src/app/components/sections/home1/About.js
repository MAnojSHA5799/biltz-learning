// import VideoPopup from "./components/elements/VideoPopup"
import "../../../main.css";
export default function About() {
  return (
    <>
      <section className="about-sections">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12 col-sm-12 image-column">
              <div className="image_block_one">
                <div className="image-box p_relative pr_50 mr_30">
                  {/* <figure className="image image-1"><img src="/assets/images/aboutus-1.jpg" alt="" /></figure> */}
                  <video
                    className="image"
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    src="/assets/animations/Animation-1.mp4/"
                    // style={{ width: '400px', height: '40%',}}
                  />
                  {/* <figure className="image image-2"><img src="/assets/images/about_us_350x250.jpg" alt="" /></figure> */}
                  <div className="video-inner">
                    <div className="video-btn">{/* <VideoPopup /> */}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
              <div className="content_block_one">
                <div className="content-box p_relative ml_30">
                  <div className="sec-title mb-3">
                    <span className="sub-title">
                      About Blitz Learning Technologies
                    </span>
                    <h2>
                      We are the Ultimate Learning Partner for your Training
                      Needs
                    </h2>
                  </div>
                  <div className="text mb-2">
                    <p>
                      Founded in 2016, Blitz Learning Technologies was
                      established with a goal to provide the highest quality
                      eLearning content for an immersive experience.
                    </p>
                  </div>
                  <div className="text mb_35">
                    <p>
                      The founders of Blitz Learning Technologies identified the
                      gaps in client delivery and decided to create a mechanism
                      of extremely customized client delivery.
                    </p>
                  </div>
                  <div className="inner-box mb_35">
                    <div className="single-item">
                      <div className="icon-box">
                        <i className="icon-11"></i>
                      </div>
                      <h3>Measurable Performance</h3>
                      <p>
                        Putting people at the center of transformation to
                        improve employee.
                      </p>
                    </div>
                    <div className="single-item">
                      <div className="icon-box">
                        <i className="icon-11"></i>
                      </div>
                      <h3>Intuitive Learning</h3>
                      <p>
                        Designing meaningful & engaging learning experiences
                        that attract and engage employees across every stage in
                        the learning journey.
                      </p>
                    </div>
                  </div>
                  {/* <figure className="signature"><img src="assets/images/icons/signature-1.png" alt="" /></figure> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
