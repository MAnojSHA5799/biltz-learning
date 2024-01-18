'use client'
import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import TestimonialSlider4 from "@/components/slider/TestimonialSlider4"
import Link from "next/link"
import { useState } from "react"
import 'swiper/css/thumbs'
import { Autoplay, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const swiperOptions1 = {
        modules: [Autoplay, Navigation, Thumbs],
        onSwiper: setThumbsSwiper,
        // freeMode: true,
        // preloadImages: false,
        loop: true,
        slidesPerView: 3,
        speed: 1400,
        spaceBetween: 0,
        direction: "vertical",
        breakpoints: {
            300: {
                slidesPerView: 3,
            },
        }
    }

    const swiperOptions2 = {
        loop: true,
        speed: 1400,
        spaceBetween: 0,
        effect: "fade",
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Product Details">
                <div>
                    <section className="shop-details p_relative">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-9 col-md-12 col-sm-12 content-side">
                                    <div className="shop-details-content mb_100">
                                        <div className="row clearfix">
                                            <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                                                <figure className="image-box">
                                                    <Link href="assets/images/shop/shop-10.png" className="lightbox-image" data-fancybox="gallery">
                                                        <img src="assets/images/shop/shop-10.png" alt="" />
                                                    </Link>
                                                </figure>
                                            </div>
                                            <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                                                <div className="content-box ml_50">
                                                    <h2>Armchair Black Leather</h2>
                                                    <div className="customer-rating clearfix">
                                                        <ul className="rating pull-left">
                                                            <li><i className="icon-17"></i></li>
                                                            <li><i className="icon-17"></i></li>
                                                            <li><i className="icon-17"></i></li>
                                                            <li><i className="icon-17"></i></li>
                                                            <li><i className="icon-17"></i></li>
                                                        </ul>
                                                        <div className="review pull-left">
                                                            <Link href="/product-details">( 2 Reviews )</Link>
                                                        </div>
                                                    </div>
                                                    <span className="price">$19.20</span>
                                                    <div className="text">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper sagittis dolor aliquet quam feugiat nisi a ultrices feugiat facilisi turpis.</p>
                                                    </div>
                                                    <div className="addto-cart-box p_relative d_block mb_25">
                                                        <div className="cart-wrapper">
                                                            <ul className="clearfix">
                                                                <li className="item-quantity p_relative d_block float_left mr_10">
                                                                <div className="qity">
                                                                    <QuantityInput />
                                                                </div>
                                                                </li>
                                                                <li className="p_relative d_block float_left mr_10">
                                                                    <button type="button" className="theme-btn-one">
                                                                        Add To Cart
                                                                    </button>
                                                                </li>
                                                                <li className="like-box p_relative d_block float_left">
                                                                    <Link href="/product-details" className="d_iblock p_relative fs_20 lh_55 w_50 h_50 centred b_radius_50">
                                                                        <i className="icon-36"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="other-option">
                                                        <ul className="list">
                                                            <li><span>Category: </span> <Link href="/shop"> Furniture</Link>, <Link href="/shop">Chair</Link></li>
                                                            <li><span>Tags:</span> <Link href="/shop">Car</Link>, <Link href="/shop">Charging</Link>, <Link href="/shop">Electric</Link>, <Link href="/shop">Solar</Link>, <Link href="/shop">Gas</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-discription p_relative d_block mb_90">
                                        <div className="tabs-box">
                                            <div className="col-md-12">
                                                <div className="tab-btn-box p_relative d_block">
                                                    <ul className="tab-btns tab-buttons clearfix">
                                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><span>Descriprion</span></li>
                                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><span>Reviews (2)</span></li>
                                                    </ul>
                                                    <div className="tabs-content">
                                                        <div id="desc" className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                                            <div className="product-details-content">
                                                            <div className="content-box">
                                                                <h3>Description</h3>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis enim justo in mauris posuere dolor dolor sapien sit egestas. Ut venenatis faucibus non sed faucibus mauris ultricies Cras varius proin amet vehicula magna maecenas gravida vel volutpat sed.</p>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="review">

                                                            <div className="review-form">
                                                                <div className="shop-page-title">
                                                                    <div className="title-two">Add Your Comments</div>
                                                                    <p>Your email address will not be published. Required fields are marked <b>*</b></p>
                                                                </div>
                                                                <div id="review-form" action="#">
                                                                    <div className="customer-inner">
                                                                        <div className="customer-review p_relative d_block pb_65 mb_65">
                                                                            <h4 className="p_relative d_block fs_20 lh_30 fw_medium fw_bold mb_40">Chicken & vegetable fry</h4>
                                                                            <div className="comment-box p_relative d_block pl_110">
                                                                                <figure className="comment-thumb p_absolute l_0 t_0 w_80 h_80 b_radius_55">
                                                                                    <img src="assets/images/shop/comment-1.jpg" alt="" />
                                                                                </figure>
                                                                                <h5 className="d_block fs_18 lh_20 fw_sbold">Keanu Reeves<span className="d_iblock fs_16 font_family_poppins"> - May 1, 2021</span></h5>
                                                                                <ul className="rating clearfix mb_15">
                                                                                    <li className="p_relative d_iblock pull-left mr_3 fs_13"><i className="fas fa-star"></i></li>
                                                                                    <li className="p_relative d_iblock pull-left mr_3 fs_13"><i className="fas fa-star"></i></li>
                                                                                    <li className="p_relative d_iblock pull-left mr_3 fs_13"><i className="fas fa-star"></i></li>
                                                                                    <li className="p_relative d_iblock pull-left mr_3 fs_13"><i className="fas fa-star"></i></li>
                                                                                    <li className="p_relative d_iblock pull-left mr_5 fs_13"><i className="far fa-star"></i></li>
                                                                                </ul>
                                                                                <div className="text">
                                                                                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim est laborum. Sed perspiciatis unde omnis natus error sit voluptatem accusa dolore mque laudant totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi arch tecto beatae vitae dicta.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="customer-comments p_relative">
                                                                            <h4 className="p_relative d_block fs_20 lh_30 fw_medium fw_sbold mb_25">Be First to Add a Review</h4>
                                                                            <div className="rating-box clearfix mb_12">
                                                                                <h6 className="p_relative d_iblock fs_16 fw_medium mr_15 float_left">Your Rating</h6>
                                                                                <ul className="rating p_relative d_block clearfix float_left">
                                                                                    <li className="p_relative d_iblock fs_14 lh_25 float_left mr_3"><i className="far fa-star"></i></li>
                                                                                    <li className="p_relative d_iblock fs_14 lh_25 float_left mr_3"><i className="far fa-star"></i></li>
                                                                                    <li className="p_relative d_iblock fs_14 lh_25 float_left mr_3"><i className="far fa-star"></i></li>
                                                                                    <li className="p_relative d_iblock fs_14 lh_25 float_left mr_3"><i className="far fa-star"></i></li>
                                                                                    <li className="p_relative d_iblock fs_14 lh_25 float_left"><i className="far fa-star"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                            <form action="/product-details" method="post" className="comment-form default-form">
                                                                                <div className="row clearfix">
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group mb_15">
                                                                                        <label className="p_relative d_block fs_16 mb_8">Your Review</label>
                                                                                        <textarea name="message"></textarea>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group mb_15">
                                                                                        <label className="p_relative d_block fs_16 mb_8">Your Name</label>
                                                                                        <input type="text" name="name" required="" />
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group mb_15">
                                                                                        <label className="p_relative d_block fs_16 mb_8">Your Email</label>
                                                                                        <input type="email" name="email" required="" />
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn m_0">
                                                                                        <button type="submit" className="theme-btn-one">
                                                                                            Submit Your Review
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="related-product">
                                        <div className="title-box">
                                            <h2>Related Products</h2>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                                <div className="shop-block-one">
                                                    <div className="inner-box">
                                                        <div className="image-box">
                                                            <figure className="image">
                                                                <img src="assets/images/shop/shop-1.png" alt="" />
                                                            </figure>
                                                            <ul className="option-list clearfix">
                                                                <li><Link href="/product-details"><i className="icon-36"></i></Link></li>
                                                                <li>
                                                                    <Link href="assets/images/shop/shop-1.png" className="lightbox-image" data-fancybox="gallery">
                                                                        <i className="icon-37"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="cart-btn">
                                                                <button type="button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h4><Link href="/product-details">Wooden Tea Table</Link></h4>
                                                            <span className="price">$19:20</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                                <div className="shop-block-one">
                                                    <div className="inner-box">
                                                        <div className="image-box">
                                                            <figure className="image">
                                                                <img src="assets/images/shop/shop-2.png" alt="" />
                                                            </figure>
                                                            <ul className="option-list clearfix">
                                                                <li><Link href="/product-details"><i className="icon-36"></i></Link></li>
                                                                <li>
                                                                    <Link href="assets/images/shop/shop-2.png" className="lightbox-image" data-fancybox="gallery">
                                                                        <i className="icon-37"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="cart-btn">
                                                                <button type="button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h4><Link href="/product-details">White Lamp Handcraft</Link></h4>
                                                            <span className="price">$10.50</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                                <div className="shop-block-one">
                                                    <div className="inner-box">
                                                        <div className="image-box">
                                                            <figure className="image">
                                                                <img src="assets/images/shop/shop-3.png" alt="" />
                                                            </figure>
                                                            <ul className="option-list clearfix">
                                                                <li><Link href="/product-details"><i className="icon-36"></i></Link></li>
                                                                <li>
                                                                    <Link href="assets/images/shop/shop-3.png" className="lightbox-image" data-fancybox="gallery">
                                                                        <i className="icon-37"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="cart-btn">
                                                                <button type="button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h4><Link href="/product-details">Armchair Black Leather</Link></h4>
                                                            <span className="price">$12.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                                    <div className="shop-sidebar">
                                        <div className="search-widget">
                                            <div className="widget-title">
                                                <h3>Search</h3>
                                            </div>
                                            <div className="search-form">
                                                <form action="/shop" method="post">
                                                    <div className="form-group">
                                                        <input type="search" name="search-field" placeholder="Search" required />
                                                        <button type="submit"><i className="icon-4"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="category-widget">
                                            <div className="widget-title">
                                                <h3>Categories</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul className="category-list clearfix">
                                                    <li><Link href="/shop">Decor</Link></li>
                                                    <li><Link href="/shop">Furnitures</Link></li>
                                                    <li><Link href="/shop">Clothing</Link></li>
                                                    <li><Link href="/shop">Electronics</Link></li>
                                                    <li><Link href="/shop">Accessories</Link></li>
                                                    <li><Link href="/shop">Uncategories</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}
