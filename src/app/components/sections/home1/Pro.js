import Link from "next/link";
import "../../../main.css";

export default function Pro() {
  return (
    <>
      <section className="feature-section pt-5 pb-3 centred bg-color-1 sec-pad">
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
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/assets/Image/home_page/Onboarding.jpg" alt="/" />
                  </figure>
                  <div className="lower-content ml_0">
                    <h3 style={{ textAlign: "left"}}>
                      <Link href="/">Onboarding</Link>
                    </h3>
                    <p style={{ textAlign: "left" }}>
                      We revamp your onboarding program to create an impressive
                      experience for new joiners.
                    </p>
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/assets/Image/home_page/Sales.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <h3 style={{ textAlign: "left" }}>
                      <Link href="/">Sales</Link>
                    </h3>
                    <p style={{ textAlign: "left" }}>
                      Our sales training caters to informed customers and adapts
                      to changing products, customers, and competition.
                    </p>
                    <br />
                    <br />
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
                    <img src="/assets/Image/home_page/Operations-image.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <h3 style={{ textAlign: "left" }}>
                      <Link href="/">Operations</Link>
                    </h3>
                    <p style={{ textAlign: "left" }}>
                      Our engaging training programs educate employees on
                      operational best practices.
                    </p>
                    <br />
                    <br />
                    <br />
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
                    <img src="/assets/Image/home_page/Support-Functions.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <h3 style={{ textAlign: "left" }}>
                      <Link href="/">Support functions</Link>
                    </h3>
                    <p style={{ textAlign: "left" }}>
                      We design customer service training to meet four universal
                      needs: consistency, responsiveness, personalization, and
                      convenience.
                    </p>
                    <br />
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
