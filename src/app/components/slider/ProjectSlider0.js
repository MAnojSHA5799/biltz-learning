'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
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
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
    }
}
export default function ProjectSlider0() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                  <div className="project-block-two">
                      <div className="inner-box">
                        <div className="static-content">
                          <span>Consulting</span>
                          <h3><Link href="/services2">Business Leadership</Link></h3>
                        </div>
                        <div className="overlay-content">
                          <span>Consulting</span>
                          <h3><Link href="/services2">Business Leadership</Link></h3>
                          <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                          <div className="btn-box">
                            <Link href="/services2" className="theme-btn-one">Read More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="project-block-two">
                    <div className="inner-box">
                      <div className="static-content">
                        <span>Marketing</span>
                        <h3><Link href="/services2">Market Expansion</Link></h3>
                      </div>
                      <div className="overlay-content">
                        <span>Marketing</span>
                        <h3><Link href="/services2">Market Expansion</Link></h3>
                        <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                        <div className="btn-box">
                          <Link href="/services2" className="theme-btn-one">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="project-block-two">
                    <div className="inner-box">
                      <div className="static-content">
                        <span>Financial</span>
                        <h3><Link href="/services2">Capital Management</Link></h3>
                      </div>
                      <div className="overlay-content">
                        <span>Financial</span>
                        <h3><Link href="/services2">Capital Management</Link></h3>
                        <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                        <div className="btn-box">
                          <Link href="/services2" className="theme-btn-one">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="project-block-two">
                    <div className="inner-box">
                      <div className="static-content">
                        <span>Technial</span>
                        <h3><Link href="/services2">Startup Business</Link></h3>
                      </div>
                      <div className="overlay-content">
                        <span>Technial</span>
                        <h3><Link href="/services2">Startup Business</Link></h3>
                        <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                        <div className="btn-box">
                          <Link href="/services2" className="theme-btn-one">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="project-block-two">
                      <div className="inner-box">
                        <div className="static-content">
                          <span>Consulting</span>
                          <h3><Link href="/services2">Business Leadership</Link></h3>
                        </div>
                        <div className="overlay-content">
                          <span>Consulting</span>
                          <h3><Link href="/services2">Business Leadership</Link></h3>
                          <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                          <div className="btn-box">
                            <Link href="/services2" className="theme-btn-one">Read More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="project-block-two">
                    <div className="inner-box">
                      <div className="static-content">
                        <span>Marketing</span>
                        <h3><Link href="/services2">Market Expansion</Link></h3>
                      </div>
                      <div className="overlay-content">
                        <span>Marketing</span>
                        <h3><Link href="/services2">Market Expansion</Link></h3>
                        <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                        <div className="btn-box">
                          <Link href="/services2" className="theme-btn-one">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="project-block-two">
                    <div className="inner-box">
                      <div className="static-content">
                        <span>Financial</span>
                        <h3><Link href="/services2">Capital Management</Link></h3>
                      </div>
                      <div className="overlay-content">
                        <span>Financial</span>
                        <h3><Link href="/services2">Capital Management</Link></h3>
                        <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                        <div className="btn-box">
                          <Link href="/services2" className="theme-btn-one">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="project-block-two">
                    <div className="inner-box">
                      <div className="static-content">
                        <span>Technial</span>
                        <h3><Link href="/services2">Startup Business</Link></h3>
                      </div>
                      <div className="overlay-content">
                        <span>Technial</span>
                        <h3><Link href="/services2">Startup Business</Link></h3>
                        <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                        <div className="btn-box">
                          <Link href="/services2" className="theme-btn-one">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

            </Swiper>

        </>
    )
}
