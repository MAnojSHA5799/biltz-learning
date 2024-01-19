// import VideoPopup from "./components/elements/VideoPopup"
import '../../../main.css'
export default function About() {
    return (
        <>
            <section className="about-sections">
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                        <div className="image_block_one">
                        <div className="image-box p_relative pr_50 mr_30">
                            <figure className="image image-1"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                            <figure className="image image-2"><img src="assets/images/resource/about-2.jpg" alt="" /></figure>
                            <div className="video-inner">
                                <div className="video-btn">
                                    {/* <VideoPopup /> */}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                        <div className="content_block_one">
                        <div className="content-box p_relative ml_30">
                            <div className="sec-title mb_25">
                            <span className="sub-title">About BizTech</span>
                            <h2>Dedicated And <br/>Professional Consulting Services</h2>
                            </div>
                            <div className="text mb_35">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio est. Sit semper et velit fusce.</p>
                            </div>
                            <div className="inner-box mb_35">
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>Solution Focused</h3>
                                <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>99.99% Success</h3>
                                <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                            </div>
                            </div>
                            <figure className="signature"><img src="assets/images/icons/signature-1.png" alt="" /></figure>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}
