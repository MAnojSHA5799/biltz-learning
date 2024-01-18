'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}


export default function News() {
    return (
        <>
            <section className="news-section sec-pad">
                <div className="auto-container">
                    <div className="sec-title centred mb_50">
                    <span className="sub-title">Our Article</span>
                    <h2>Get More Update For <br />BizTech</h2>
                    </div>
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                            <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-1.jpg" alt="Article 1" /></Link></figure>
                            <h2>15<span>APRIL</span></h2>
                            </div>
                            <div className="lower-content">
                            <h3><Link href="/blog-details">How to Manage Business’s Online Reputation</Link></h3>
                            <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                            <ul className="post-info">
                                <li><i className="icon-21"></i><Link href="/blog-details">Admin</Link></li>
                                <li><i className="icon-22"></i><Link href="/blog-details">0 Comnt</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                            <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-2.jpg" alt="Article 2" /></Link></figure>
                            <h2>14<span>APRIL</span></h2>
                            </div>
                            <div className="lower-content">
                            <h3><Link href="/blog-details">Is Your Business Ready For Integration?</Link></h3>
                            <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                            <ul className="post-info">
                                <li><i className="icon-21"></i><Link href="/blog-details">Admin</Link></li>
                                <li><i className="icon-22"></i><Link href="/blog-details">7 Comnt</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                            <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-3.jpg" alt="Article 3" /></Link></figure>
                            <h2>13<span>APRIL</span></h2>
                            </div>
                            <div className="lower-content">
                            <h3><Link href="/blog-details">Does My Business Need a Director of Training?</Link></h3>
                            <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                            <ul className="post-info">
                                <li><i className="icon-21"></i><Link href="/blog-details">Admin</Link></li>
                                <li><i className="icon-22"></i><Link href="/blog-details">3 Comnt</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
