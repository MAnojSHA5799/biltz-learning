import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import '@fortawesome/fontawesome-free/css/all.css';

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
                    <div className="auto-container">
                        <div className="top-inner">
                        <div className="top-left">
                            <ul className="info clearfix">
                            <li><i className="icon-1"></i>Mon-Fri 9:30 am-6:30 pm</li>
                            <li><i className="icon-2"></i><Link href="tel:911204316127">+91-1204316127</Link></li>
                            <li><i className="icon-3"></i><a href="mailto:contactus@blitzlearning.in">contactus@blitzlearning.in</a></li>
                            </ul>
                        </div>
                        <div className="top-right">
                            <div className="login">
                                <Link href="#" style={{ color: 'black' }}>.</Link>
                                </div>
                            <ul className="social-links clearfix">
                            <li><Link href="https://www.facebook.com/blitzlearning.in/"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="https://twitter.com/"><i class="fa-brands fa-x-twitter"></i></Link></li>
                            <li><Link href="https://www.linkedin.com/company/blitz-learning-technologies-pvt.-ltd./"><i className="fab fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo">
                            <Link href="/"><img src="/Blitzlogo.png" alt="" /></Link>
                            </figure>
                        </div>
                        <div className="menu-area clearfix">
                            {/* Mobile Navigation Toggler */}
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <Menu />
                            </div>
                            </nav>
                        </div>
                        <ul className="menu-right-content">
                            {/* <li className="search-box-outer search-toggler" onClick={handlePopup}><i className="icon-4"></i></li>
                            <li className="btn-box">
                            <Link href="/contact">Free Consulting</Link>
                            </li> */}
                        </ul>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                            <figure className="logo">
                                <Link href="/">
                                <img src="/Blitzlogo.png" alt="/" />
                                </Link>
                            </figure>
                            </div>
                            <div className="menu-area clearfix">
                            <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                            </div>
                            <ul className="menu-right-content">
                            {/* <li className="search-box-outer search-toggler" onClick={handlePopup}>
                                <i className="icon-4"></i>
                            </li>
                            <li className="btn-box">
                                <Link href="/contact">Free Consulting</Link>
                            </li> */}
                            </ul>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
