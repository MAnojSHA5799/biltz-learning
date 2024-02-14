import CounterUp from "../../elements/CounterUp.js";

export default function Funfacts() {
  return (
    <>
      <section className="funfact-section centred mb-0">
        <div className="auto-container">
          <p className="mb-4">
            Where excellence, creativity, and learner-centric approaches
            converge. We aspire to be the driving force that inspires
            transformation in mindset, actions, performance, and the motivation
            for improvement within your organization.
          </p>
          <div className="inner-container">
            <div className="shape">
              <div
                className="shape-1"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-18.png)",
                }}
              ></div>
              <div
                className="shape-2"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-19.png)",
                }}
              ></div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer count-box">
                      <CounterUp end={25} />
                      <span>+</span>
                    </div>
                    <p>Global locations served</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer count-box">
                      <CounterUp end={20} />
                      <span>+</span>
                    </div>
                    <p>Satisfied fortune clients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer count-box">
                      <CounterUp end={300} />
                      <span>+</span>
                    </div>
                    <p>e-Learning hours</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer count-box">
                      <CounterUp end={35} />
                      <span>+</span>
                    </div>
                    <p>Languages</p>
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
