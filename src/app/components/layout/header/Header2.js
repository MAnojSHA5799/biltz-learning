import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-two"> */}
            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
                <div className="header-top">
                    <div className="auto-container">
                        <div className="top-inner padding_0">
                            <div className="top-left">
                                <ul className="info clearfix">
                                <li><i className="icon-1"></i>Mon-Fri 9:30 am-7:00 pm</li>
                            <li><i className="icon-2"></i><Link href="tel:911204316127">+91-1204316127</Link></li>
                            <li><i className="icon-3"></i><Link href="mailto:contactus@biltzlearning.in">contactus@biltzlearning.in</Link></li>
                                </ul>
                            </div>
                            <div className="top-right">
                                <div className="login"><Link href="/" style={{ color: 'black' }}>.</Link></div>
                                <ul className="social-links clearfix">
                                    <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo">
                                    <Link href="/"><img src="/Blitzlogo.png" alt="" /></Link>
                                </figure>
                            </div>
                            <div className="menu-area clearfix">
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
                                {/* <li className="btn-box">
                                    <Link href="/contact" className="theme-btn-one">Free Consulting</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><Link href="/"><img src="/Blitzlogo.png" alt="" /></Link></figure>
                            </div>
                            <div className="menu-area clearfix">
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                            </div>
                            <ul className="menu-right-content">
                                {/* <li className="btn-box">
                                    <Link href="/contact">Free Consulting</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />


        </>
    )
}
