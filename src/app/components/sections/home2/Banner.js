
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

export default function Banner() {
    return (
        <>

            <section className="banner-style-two p_relative centred">
                <Swiper {...swiperOptions} className="banner-carousel">                    
                    <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: "url(assets/images/banner/banner-6.jpg)" }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                            <span>Business Consulting</span>
                            <h2>Take Care of Your Future Business</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />Turpis ridiculus tellus.</p>
                            <div className="btn-box">
                                <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                            </div>
                            </div> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: "url(assets/images/banner/banner-7.jpg)" }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                            <span>Business Consulting</span>
                            <h2>Take Care of Your Future Business</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />Turpis ridiculus tellus.</p>
                            <div className="btn-box">
                                <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                            </div>
                            </div>  
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: "url(assets/images/banner/banner-6.jpg)" }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                            <span>Business Consulting</span>
                            <h2>Take Care of Your Future Business</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />Turpis ridiculus tellus.</p>
                            <div className="btn-box">
                                <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                            </div>
                            </div> 
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span className="icon-5"></span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span className="icon-6"></span>
                        </button>
                    </div>
                </Swiper>

            </section>
        </>
    )
}
