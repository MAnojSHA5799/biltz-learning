"use client";
import Link from "next/link";
import { useState } from "react";
export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="far fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/white-Blitzlogo.png" alt="" />
            </Link>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li
                 
                >
                  <Link href="/">Home</Link>
                
                </li>
                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/Services">Services</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/Services/Custom-eLearning">
                        Custom E-Learning
                      </Link>
                    </li>
                    <li>
                      <Link href="/Services/Content-Services">
                        Content Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/Services/learning-consulting">
                        Learning Consulting
                      </Link>
                    </li>
                    <li>
                      <Link href="/Services/video-production">
                        Video Production
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li
                  className={
                    isActive.key == 3 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/our-works">Our Work</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 3 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/our-works/web-based-training-and-online-portal-lmssales-academy-training">
                        Online Portal|Sales Academy
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-works/revamp-and-localization-company-policy-refresh-training">
                        Revamp And Localization|Company Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-works/mobile-based-mentor-driven-trainingsales-call-training">
                        Mobile Driven Trainin| Sales Call
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-works/content-development-web-based-training-localization-workplace-hazards-and-safety">
                        Content Development |Workplace Safety
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-works/web-based-training-and-localization-product-training">
                        Localization |Product Training
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-works/scenario-based-trainingworkplace-integrity">
                        Scenario based Training |Workplace Integrity
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(3)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li
                 
                >
                  <Link href="/about-us">About US</Link>

                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="https://twitter.com/">
                  <span className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/blitzlearning.in/">
                  <span className="fab fa-facebook-square" />
                </Link>
              </li>
              {/* <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-instagram" /></Link></li> */}
              <li>
                <Link href="https://www.youtube.com/channel/UCCS6m2rYmcz1zysoDIPYcqA">
                  <span className="fab fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
}
