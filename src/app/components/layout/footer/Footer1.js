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
                                    <div className="text pb-0">
                                    <p>
                                    Blitz Learning is a top learning consulting and training development firm specializing in industries facing learning and development challenges and disruption. 
                                    
                                    </p>
                                    {/* <p>We have a deep understanding of what drives learners into retaining knowledge and, we help businesses turn those driving forces into actions that helps retain the learning that is imparted through creativity.</p> */}
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
                                        <li><Link href="/service">Services</Link></li>
                                        <li><Link href="/career">Career</Link></li>
                                        {/* <li><Link href="/pricing-table">Pricing</Link></li> */}
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
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        {/* <li><Link href="#">Terms & Condition</Link></li>
                                        <li><Link href="#">Support</Link></li>
                                        <li><Link href="#">Disclaimer</Link></li>
                                        <li><Link href="/faq">Faq</Link></li> */}
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
                                    {/* <p>Tincidunt neque pretium lectus donec risus.</p> */}
                                    <ul className="info-list clearfix">
                                        <li><i className="icon-23"></i>610, Tower B, iThum, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh</li>
                                        <li><i className="icon-3"></i><a href="mailto:contactus@blitzlearning.in">contactus@blitzlearning.in</a></li>
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

                        © Blitz Learning Technologies Pvt. Ltd., 2024. All rights reserved. Maintained by Blitz Learning Technologies Pvt. Ltd.
                        </p>
                    </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
