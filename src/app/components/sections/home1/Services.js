"use client";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../main.css'
export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <section
        className="service-section p_relative centred bg-color-1 sec-pad"
        style={{ padding: "50px" }}
      >
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}
        ></div>
        <div className="auto-container">
          <div className="sec-title mb_70">
            <span className="sub-title">Key advantages</span>
            <h2>Generating new ideas. Solving big problems</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="static-content">
                    <div
                      className="shape"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-4.png)",
                      }}
                    ></div>
                    <div className="icon-box">
                      <img
                        className="icon-02"
                        src="/assets/images/icon/measurable cost advantage.png"
                      ></img>
                    </div>
                    <h3>
                      <Link href="/">Measurable cost advantage</Link>
                    </h3>
                  </div>
                  <div className="overlay-content">
                    <div
                      className="shape"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-5.png)",
                      }}
                    ></div>
                    <p className="key-1">
                      We provide a proven cost advantage of up to 30% over our
                      competitors in India and around 50% over standard rates in
                      the US and Europe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="static-content">
                    <div className="icon-box">
                      <img
                        className="icon-02"
                        src="/assets/images/icon/proven growth record.png"
                      ></img>
                    </div>
                    <h3>
                      <Link href="/program-manager">Proven growth record</Link>
                    </h3>
                    <br />
                    <br />
                  </div>
                  <div className="overlay-content">
                    <p style={{ textAlign: "left" }}>
                      We have been growing at over 150% in the past 9 years of
                      our incorporation. The growth is attributed to 95% repeat
                      business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-2">
              <div
                className="service-block-one wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="static-content">
                    <div
                      className="shape"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-6.png)",
                      }}
                    ></div>
                    <div className="icon-box">
                      <img
                        className="icon-02"
                        src="/assets/images/icon/unparalled value addition .png"
                      ></img>
                    </div>
                    <h3 style={{ textAlign: "left" }}>
                      <Link href="/tax-management">
                        Unparalleled value addition
                      </Link>
                    </h3>
                  </div>
                  <div className="overlay-content">
                    <div
                      className="shape"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-7.png)",
                      }}
                    ></div>
                    <p className="key-3">
                      We provide extended support for up to 3 months for any
                      course that we create. This includes minor changes and
                      updates without any charge for up to three sprints. We
                      provide the source file along with the SCORM published
                      file, which is included in the project price agreed upon.
                    </p>
                    <div className="btn-box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="more-btn mt_20">
            <Link href="/about-us" className="theme-btn-one">
              See more{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
