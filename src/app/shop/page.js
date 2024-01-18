
import Layout from "../components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Products">
                <div>

                    <section className="shop-section p_relative">
                        <div className="auto-container">
                            <div className="row clearfix">
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
                                        {/* Add the price filter code here */}
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-12 col-sm-12 content-side">
                                    <div className="our-shop centred">
                                        <div className="row clearfix">
                                            <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                                <div className="shop-block-one">
                                                    <div className="inner-box">
                                                        <div className="image-box">
                                                            <figure className="image">
                                                                <img src="assets/images/shop/shop-1.png" alt="Wooden Tea Table" />
                                                            </figure>
                                                            <ul className="option-list clearfix">
                                                                <li><Link href="/product-details"><i className="icon-36"></i></Link></li>
                                                                <li>
                                                                    <Link
                                                                        href="assets/images/shop/shop-1.png"
                                                                        className="lightbox-image"
                                                                        data-fancybox="gallery"
                                                                    >
                                                                        <i className="icon-37"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="cart-btn">
                                                                <button type="/shopping-cart">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h4>
                                                                <Link href="/product-details">Wooden Tea Table</Link>
                                                            </h4>
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
                                                                <img src="assets/images/shop/shop-2.png" alt="White Lamp Handcraft" />
                                                            </figure>
                                                            <ul className="option-list clearfix">
                                                                <li><Link href="/product-details"><i className="icon-36"></i></Link></li>
                                                                <li>
                                                                    <Link
                                                                        href="assets/images/shop/shop-2.png"
                                                                        className="lightbox-image"
                                                                        data-fancybox="gallery"
                                                                    >
                                                                        <i className="icon-37"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="cart-btn">
                                                                <button type="/shopping-cart">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h4>
                                                                <Link href="/product-details">White Lamp Handcraft</Link>
                                                            </h4>
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
                                                                <img src="assets/images/shop/shop-3.png" alt="Armchair Black Leather" />
                                                            </figure>
                                                            <ul className="option-list clearfix">
                                                                <li><Link href="/product-details"><i className="icon-36"></i></Link></li>
                                                                <li>
                                                                    <Link
                                                                        href="assets/images/shop/shop-3.png"
                                                                        className="lightbox-image"
                                                                        data-fancybox="gallery"
                                                                    >
                                                                        <i className="icon-37"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="cart-btn">
                                                                <button type="/shopping-cart">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h4>
                                                                <Link href="/product-details">Armchair Black Leather</Link>
                                                            </h4>
                                                            <span className="price">"$12.00"</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                                <div className="shop-block-one">
                                                    <div className="inner-box">
                                                        <div className="image-box">
                                                            <figure className="image">
                                                                <img src="assets/images/shop/shop-4.png" alt="Nordic Kitchen Teapot" />
                                                            </figure>
                                                            <ul className="option-list clearfix">
                                                                <li><Link href="/product-details"><i className="icon-36"></i></Link></li>
                                                                <li>
                                                                    <Link
                                                                        href="assets/images/shop/shop-4.png"
                                                                        className="lightbox-image"
                                                                        data-fancybox="gallery"
                                                                    >
                                                                        <i className="icon-37"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="cart-btn">
                                                                <button type="/shopping-cart">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h4>
                                                                <Link href="/product-details">Nordic Kitchen Teapot</Link>
                                                            </h4>
                                                            <span className="price">$20:00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                                <div className="shop-block-one">
                                                    <div className="inner-box">
                                                        <div className="image-box">
                                                            <figure className="image">
                                                                <img src="assets/images/shop/shop-5.png" alt="Globe Electric Tech Series" />
                                                            </figure>
                                                            <ul className="option-list clearfix">
                                                                <li><Link href="/product-details"><i className="icon-36"></i></Link></li>
                                                                <li>
                                                                    <Link
                                                                        href="assets/images/shop/shop-5.png"
                                                                        className="lightbox-image"
                                                                        data-fancybox="gallery"
                                                                    >
                                                                        <i className="icon-37"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="cart-btn">
                                                                <button type="/shopping-cart">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h4>
                                                                <Link href="/product-details">Globe Electric Tech Series</Link>
                                                            </h4>
                                                            <span className="price">$08:20</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                                <div className="shop-block-one">
                                                    <div className="inner-box">
                                                        <div className="image-box">
                                                            <figure className="image">
                                                                <img src="assets/images/shop/shop-6.png" alt="White Vase Handcraft" />
                                                            </figure>
                                                            <ul className="option-list clearfix">
                                                                <li><Link href="/product-details"><i className="icon-36"></i></Link></li>
                                                                <li>
                                                                    <Link
                                                                        href="assets/images/shop/shop-6.png"
                                                                        className="lightbox-image"
                                                                        data-fancybox="gallery"
                                                                    >
                                                                        <i className="icon-37"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="cart-btn">
                                                                <button type="/shopping-cart">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h4>
                                                                <Link href="/product-details">White Vase Handcraft</Link>
                                                            </h4>
                                                            <span className="price">$17:50</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                                <div className="shop-block-one">
                                                    <div className="inner-box">
                                                        <div className="image-box">
                                                            <figure className="image">
                                                                <img src="assets/images/shop/shop-7.png" alt="Wooden Chair Anthracite" />
                                                            </figure>
                                                            <ul className="option-list clearfix">
                                                                <li><Link href="/product-details"><i className="icon-36"></i></Link></li>
                                                                <li>
                                                                    <Link
                                                                        href="assets/images/shop/shop-7.png"
                                                                        className="lightbox-image"
                                                                        data-fancybox="gallery"
                                                                    >
                                                                        <i className="icon-37"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="cart-btn">
                                                                <button type="/shopping-cart">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h4>
                                                                <Link href="/product-details">Wooden Chair Anthracite</Link>
                                                            </h4>
                                                            <span className="price">$14:00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                                <div className="shop-block-one">
                                                    <div className="inner-box">
                                                        <div className="image-box">
                                                            <figure className="image">
                                                                <img src="assets/images/shop/shop-8.png" alt="Stylish Showpiece" />
                                                            </figure>
                                                            <ul className="option-list clearfix">
                                                                <li><Link href="/product-details"><i className="icon-36"></i></Link></li>
                                                                <li>
                                                                    <Link
                                                                        href="assets/images/shop/shop-8.png"
                                                                        className="lightbox-image"
                                                                        data-fancybox="gallery"
                                                                    >
                                                                        <i className="icon-37"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="cart-btn">
                                                                <button type="/shopping-cart">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h4>
                                                                <Link href="/product-details">Stylish Showpiece</Link>
                                                            </h4>
                                                            <span className="price">$10.20</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                                <div className="shop-block-one">
                                                    <div className="inner-box">
                                                        <div className="image-box">
                                                            <figure className="image">
                                                                <img src="assets/images/shop/shop-9.png" alt="Treated Pine Wood Chair" />
                                                            </figure>
                                                            <ul className="option-list clearfix">
                                                                <li><Link href="/product-details"><i className="icon-36"></i></Link></li>
                                                                <li>
                                                                    <Link
                                                                        href="assets/images/shop/shop-9.png"
                                                                        className="lightbox-image"
                                                                        data-fancybox="gallery"
                                                                    >
                                                                        <i className="icon-37"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="cart-btn">
                                                                <button type="/shopping-cart">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h4>
                                                                <Link href="/product-details">Treated Pine Wood Chair</Link>
                                                            </h4>
                                                            <span className="price">$14.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Map the shop items here */}
                                        </div>
                                        <div className="pagination-wrapper centred pt_20">
                                            <ul className="pagination clearfix">
                                                <li><Link href="/shop"><i className="icon-45"></i></Link></li>
                                                <li><Link href="/shop" className="current">1</Link></li>
                                                <li><Link href="/shop">2</Link></li>
                                                <li><Link href="/shop"><i className="icon-44"></i></Link></li>
                                            </ul>
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
