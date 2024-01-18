import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-three"> */}
            
            <header className={`main-header header-style-three ${scroll ? "fixed-header" : ""}`}>
                {/* header-lower */}
                <div className="header-lower">
                    <div className="outer-container">
                    <div className="outer-box">
                        <div className="logo-box">
                        <figure className="logo">
                            <Link href="/">
                            <img src="/Blitzlogo.png" alt="" />
                            </Link>
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
                        <li className="search-box-outer search-toggler" onClick={handlePopup}>
                            <i className="icon-4"></i>
                        </li>
                        <li className="cart-box">
                            <Link href="/shop">
                            <i className="icon-26"></i>
                            </Link>
                        </li>
                        <li className="btn-box">
                            <Link href="/contact" className="theme-btn-one"> Free Consulting </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>

                {/* Sticky Header */}
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
                                <li className="btn-box">
                                    <Link href="/contact">Free Consulting</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />
            

            
        </>
    )
}
