'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import '../../main.css'
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
export default function TestimonialSlider0() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
            <SwiperSlide className="slide ">
            
                    <div className="testimonial-block-two1" >
                        <div className="inner-box">
                        <p>“I can’t express how impressed I am with the e-Learning courses provided by Blitz Learning. The courses are not only informative but also engaging. Our team has seen a significant improvement in their skills and knowledge, thanks to the tailored content and interactive learning experiences.”</p>
                        <div className="inner-box1" >
                        <h3>Integrity Engineer</h3>
                            <span className="designation">Leading oil and gas company in North America</span>
                            <ul className="rating clearfix center">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                 
        
                </SwiperSlide>
               

                <SwiperSlide className="slide">
                    <div className="testimonial-block-two1">
                        
                        <div className="inner-box">
                        <div className="inner-box1" >
                            
                            <p>“Working with Blitz Learning has been a true partnership. Their commitment to creating high-quality e-Learning materials that align perfectly with our industry needs has been outstanding. We’ve seen a remarkable increase in employee satisfaction and performance since implementing their solutions.”</p>
                           
                        </div>
                        <h3>Digital Marketing Content Manager</h3>
                            <span className="designation">Leading European semiconductor manufacturer</span>
                            <ul className="rating clearfix center">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two1">
                        <div className="inner-box">
                        <div className="inner-box1" >
                            
                            <p>
                            “I am thoroughly impressed with Blitz Learning’s e-Learning solutions. The team’s expertise, attention to detail, and dedication to our success shine through in every aspect of their service. Our employees are now more engaged and motivated to learn, resulting in a noticeable improvement in our company’s performance.”
                            </p>
                            
                            </div>
                            <h3>Head of Global Technical Training</h3>
                            <span className="designation">Leading European manufacturing company</span>
                            <ul className="rating clearfix center">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                 <SwiperSlide className="slide">
                    <div className="testimonial-block-two1">
                        <div className="inner-box">
                        <div className="inner-box1">
                          
                            <p>“We have been using Blitz Learning’s e-Learning services for several months now, and the results have been outstanding. Our team’s knowledge and skills have improved, and we’ve seen a significant reduction in training costs.”</p>
                            
                        </div>
                        <h3>Director, EHS</h3>
                            <span className="designation">A leading process manufacturing company</span>
                            <ul className="rating clearfix center">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                            <br />
                        </div>
                    </div>
                </SwiperSlide>
            
            </Swiper>
           
        </>
    )
}
