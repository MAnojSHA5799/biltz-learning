
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import '../../../main.css'
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
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



}

export default function Banner() {
    return (
        <>
            <section className="banner-section style-one p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">                    
                    <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/homepage.jpg)' }}></div>
                        <div className="starshine">
                            <div className="shine shine-1"></div>
                            <div className="shine shine-2"></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                            <div className="content-inner">
                                {/* <span>Customized Learning</span> */}
                                <h2>Full-service creative learning consulting and advisory firm</h2>
                                <p>We specialize in industries facing knowledge retention challenges and disruption.</p>
                                <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: 'url(/assets/images/homepage2.jpg)' }}></div>
                        <div className="starshine">
                            <div className="shine shine-1"></div>
                            <div className="shine shine-2"></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                            <div className="content-inner">
                                <h2>We are catalysts of knowledge retention</h2>
                                <p>We are catalysts of knowledge retention, helping clients translate learning and development efforts into knowledge repositories through scientific and strategic learning mechanisms.</p>
                                <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    {/* <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: 'url(/assets/images/homepage.jpg)' }}></div>
                        <div className="starshine">
                            <div className="shine shine-1"></div>
                            <div className="shine shine-2"></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                            <div className="content-inner">
                                <h2>We're the architects of enduring learning experiences</h2>
                                <p>Through innovative strategies, personalized content, and interactive engagement, we ignite the sparks that transform information into lasting wisdom.</p>
                                <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span>‹</span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span>›</span>
                        </button>
                    </div>
                </Swiper>

            </section>
        </>
    )
}
