import Link from "next/link"


export default function News() {
    return (
        <> 

            <section className="news-style-two sec-pad">
                <div className="auto-container">
                    <div className="sec-title centred mb_50">
                        <span className="sub-title">Our Article</span>
                        <h2>Get More Update For <br />BizTech</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-4.jpg" alt="" /></Link></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <span className="post-date">15 APRIL</span>
                                            <h3><Link href="/blog-details">How to Manage Business’s Online Reputation</Link></h3>
                                            <ul className="post-info clearfix">
                                                <li><i className="icon-21"></i><Link href="/blog-details">Admin</Link></li>
                                                <li><i className="icon-22"></i><Link href="/blog-details">7 Comnt</Link></li>
                                            </ul>
                                            <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                            <div className="btn-box">
                                                <Link href="/blog-details" className="theme-btn-one">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-5.jpg" alt="" /></Link></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <span className="post-date">14 APRIL</span>
                                            <h3><Link href="/blog-details">Is Your Business Ready For Integration?</Link></h3>
                                            <ul className="post-info clearfix">
                                                <li><i className="icon-21"></i><Link href="/blog-details">Admin</Link></li>
                                                <li><i className="icon-22"></i><Link href="/blog-details">0 Comnt</Link></li>
                                            </ul>
                                            <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                            <div className="btn-box">
                                                <Link href="/blog-details" className="theme-btn-one">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-6.jpg" alt="" /></Link></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <span className="post-date">13 APRIL</span>
                                            <h3><Link href="/blog-details">Does My Business Need a Director of Training?</Link></h3>
                                            <ul className="post-info clearfix">
                                                <li><i className="icon-21"></i><Link href="/blog-details">Admin</Link></li>
                                                <li><i className="icon-22"></i><Link href="/blog-details">3 Comnt</Link></li>
                                            </ul>
                                            <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                            <div className="btn-box">
                                                <Link href="/blog-details" className="theme-btn-one">Read More</Link>
                                            </div>
                                        </div>
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
