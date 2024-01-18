'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <div
                            className="shape"
                            style={{ backgroundImage: 'url(assets/images/shape/shape-14.png)' }}
                            ></div>
                            <div className="icon-box"><i className="icon-19"></i></div>
                            <figure className="thumb-box">
                            <img src="assets/images/resource/testimonial-1.jpg" alt="" />
                            </figure>
                            <p>
                            “Mattis cras magna morb nula punar aenean aliquet in. Risus
                            a arcu eget mi hendrerit gravida elit scelerisque tempor
                            Pharetra fringilla tellus vivera eget sapien viverra
                            faucibus facilisis sed facilisi dictum.”
                            </p>
                            <ul className="rating clearfix">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                            </ul>
                            <h3>Brooklyn Simmons</h3>
                            <span className="designation">Manager</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <div
                            className="shape"
                            style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}
                            ></div>
                            <div className="icon-box"><i className="icon-19"></i></div>
                            <figure className="thumb-box">
                            <img src="assets/images/resource/testimonial-6.jpg" alt="" />
                            </figure>
                            <p>
                            “Mattis cras magna morb nula punar aenean aliquet in. Risus
                            a arcu eget mi hendrerit gravida elit scelerisque tempor
                            Pharetra fringilla tellus vivera eget sapien viverra
                            faucibus facilisis sed facilisi dictum.”
                            </p>
                            <ul className="rating clearfix">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                            </ul>
                            <h3>Annette Black</h3>
                            <span className="designation">Manager</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <div
                            className="shape"
                            style={{ backgroundImage: 'url(assets/images/shape/shape-14.png)' }}
                            ></div>
                            <div className="icon-box"><i className="icon-19"></i></div>
                            <figure className="thumb-box">
                            <img src="assets/images/resource/testimonial-1.jpg" alt="" />
                            </figure>
                            <p>
                            “Mattis cras magna morb nula punar aenean aliquet in. Risus
                            a arcu eget mi hendrerit gravida elit scelerisque tempor
                            Pharetra fringilla tellus vivera eget sapien viverra
                            faucibus facilisis sed facilisi dictum.”
                            </p>
                            <ul className="rating clearfix">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                            </ul>
                            <h3>Brooklyn Simmons</h3>
                            <span className="designation">Manager</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <div
                            className="shape"
                            style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}
                            ></div>
                            <div className="icon-box"><i className="icon-19"></i></div>
                            <figure className="thumb-box">
                            <img src="assets/images/resource/testimonial-6.jpg" alt="" />
                            </figure>
                            <p>
                            “Mattis cras magna morb nula punar aenean aliquet in. Risus
                            a arcu eget mi hendrerit gravida elit scelerisque tempor
                            Pharetra fringilla tellus vivera eget sapien viverra
                            faucibus facilisis sed facilisi dictum.”
                            </p>
                            <ul className="rating clearfix">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                            </ul>
                            <h3>Annette Black</h3>
                            <span className="designation">Manager</span>
                        </div>
                    </div>
                </SwiperSlide>                
            </Swiper>
        </>
    )
}
