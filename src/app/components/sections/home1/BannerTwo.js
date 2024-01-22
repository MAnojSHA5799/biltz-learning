
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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

export default function BannerTwo() {
    return (
        <>
            <section className="banner-section style-one p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">                    
                    <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: 'url(/assets/images/homepage.jpg)' }}></div>
                        <div className="starshi">
                            <div className="shine shine-1"></div>
                            <div className="shine shine-2"></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                            <div className="content-inner">
                                {/* <span>Customized Learning</span> */}
                                <h2>Learning Experiences with e-Learning Technology</h2>
                                <p>At Blitz Learning Technologies, we specialize in crafting customized learning content using e-Learning technology.</p>
                                <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
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
