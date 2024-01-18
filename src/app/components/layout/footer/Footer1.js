import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer">
                <div className="widget-section">
                    <div className="pattern-layer">
                        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-20.png)' }}></div>
                        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-21.png)' }}></div>
                    </div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="logo-widget footer-widget">
                                    <figure className="logo">
                                    {/* footer */}
                                    <Link href="#">
                                        <img src="/white-Blitzlogo.png" alt="" />
                                    </Link>
                                    </figure>
                                    <div className="text">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elitsollicit udin netus quis ornare. Massa pharetra in nec sed nunc.
                                    </p>
                                    <p>nisl viverra massa imperdiet. Dui mattis quis congue fames.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="links-widget footer-widget ml_50">
                                    <div className="widget-title">
                                    <h3>Quick Link</h3>
                                    </div>
                                    <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="/about-us">About Us</Link></li>
                                        <li><Link href="/services1">Services</Link></li>
                                        <li><Link href="/career">Career</Link></li>
                                        <li><Link href="/pricing-table">Pricing</Link></li>
                                        <li><Link href="/contact">Contact Us</Link></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="links-widget footer-widget ml_30">
                                    <div className="widget-title">
                                    <h3>Useful Links</h3>
                                    </div>
                                    <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Terms & Condition</Link></li>
                                        <li><Link href="#">Support</Link></li>
                                        <li><Link href="#">Disclaimer</Link></li>
                                        <li><Link href="/faq">Faq</Link></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="contact-widget footer-widget">
                                    <div className="widget-title">
                                    <h3>Contact</h3>
                                    </div>
                                    <div className="widget-content">
                                    <p>Tincidunt neque pretium lectus donec risus.</p>
                                    <ul className="info-list clearfix">
                                        <li><i className="icon-23"></i>610, Tower B, iThum, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh</li>
                                        <li><i className="icon-3"></i><Link href="mailto:contactus@biltzlearning.in">contactus@biltzlearning.in</Link></li>
                                        <li><i className="icon-2"></i><Link href="tel:+911204316127">+91-1204316127</Link></li>
                                    </ul>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                <div className="footer-bottom centred">
                    <div className="auto-container">
                    <div className="copyright">
                        <p>
                        {/* Copyright {new Date().getFullYear()} by <Link href="#">biztech</Link> theme All Right Reserved. */}

                        © All rights reserved. • Blitz Learning • Maintained by Advert Rise
                        </p>
                    </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
