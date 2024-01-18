
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
            <section className="banner-style-two alternat-2 p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">                    
                    <SwiperSlide className="slide-item p_relative">
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-29.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-30.png)' }}></div>
                        </div>
                        <figure className="banner-image"><img src="assets/images/banner/banner-img-1.png" alt="" /></figure>
                        <div className="auto-container">
                            <div className="content-box">
                                <span>Change The World</span>
                                <h2>Build & Grow Your Business</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />Turpis ridiculus tellus.</p>
                                <div className="btn-box">
                                    <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                                </div>
                            </div> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-29.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-30.png)' }}></div>
                        </div>
                        <figure className="banner-image"><img src="assets/images/banner/banner-img-2.png" alt="" /></figure>
                        <div className="auto-container">
                            <div className="content-box">
                                <span>Change The World</span>
                                <h2>Build & Grow Your Business</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />Turpis ridiculus tellus.</p>
                                <div className="btn-box">
                                    <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                                </div>
                            </div>   
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-29.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-30.png)' }}></div>
                        </div>
                        <figure className="banner-image"><img src="assets/images/banner/banner-img-1.png" alt="" /></figure>
                        <div className="auto-container">
                            <div className="content-box">
                                <span>Change The World</span>
                                <h2>Build & Grow Your Business</h2>
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
