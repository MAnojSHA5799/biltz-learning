
import Layout from "../components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Standard">
                <div>
                    {/* sidebar-page-container */}
                    <section className="sidebar-page-container pt_150 pb_150">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-8 col-md-12 col-sm-12 sidebar-side">
                                    <div className="blog-standard-content">
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-13.jpg" alt="" /></Link></figure>
                                                    <h2>18<span>APRIL</span></h2>
                                                </div>
                                                <div className="lower-content">
                                                    <ul className="post-info clearfix"> 
                                                        <li><i className="icon-21"></i><Link href="/blog-details">Admin</Link></li>
                                                        <li><i className="icon-22"></i><Link href="/blog-details">0 Comnt</Link></li>
                                                    </ul>
                                                    <h3><Link href="/blog-details">How to Manage Business’s Online Reputation</Link></h3>
                                                    <p>Imperdiet consectetur gravida vel rutrum tempus, mattis sit massa lacus morbi feugiat aliquam sagittis nunc neque sit nec lorem tincidunt arcu nunc ac accumsan risus felis in ornare...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-14.jpg" alt="" /></Link></figure>
                                                    <h2>17<span>APRIL</span></h2>
                                                </div>
                                                <div className="lower-content">
                                                    <ul className="post-info clearfix"> 
                                                        <li><i className="icon-21"></i><Link href="/blog-details">Admin</Link></li>
                                                        <li><i className="icon-22"></i><Link href="/blog-details">7 Comnt</Link></li>
                                                    </ul>
                                                    <h3><Link href="/blog-details">Is Your Business Ready For Integration?</Link></h3>
                                                    <p>Imperdiet consectetur gravida vel rutrum tempus, mattis sit massa lacus morbi feugiat aliquam sagittis nunc neque sit nec lorem tincidunt arcu nunc ac accumsan risus felis in ornare...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-15.jpg" alt="" /></Link></figure>
                                                    <h2>17<span>APRIL</span></h2>
                                                </div>
                                                <div className="lower-content">
                                                    <ul className="post-info clearfix"> 
                                                        <li><i className="icon-21"></i><Link href="/blog-details">Admin</Link></li>
                                                        <li><i className="icon-22"></i><Link href="/blog-details">4 Comnt</Link></li>
                                                    </ul>
                                                    <h3><Link href="/blog-details">Does My Business Need a Director of Training?</Link></h3>
                                                    <p>Imperdiet consectetur gravida vel rutrum tempus, mattis sit massa lacus morbi feugiat aliquam sagittis nunc neque sit nec lorem tincidunt arcu nunc ac accumsan risus felis in ornare...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-16.jpg" alt="" /></Link></figure>
                                                    <h2>16<span>APRIL</span></h2>
                                                </div>
                                                <div className="lower-content">
                                                    <ul className="post-info clearfix"> 
                                                        <li><i className="icon-21"></i><Link href="/blog-details">Admin</Link></li>
                                                        <li><i className="icon-22"></i><Link href="/blog-details">5 Comnt</Link></li>
                                                    </ul>
                                                    <h3><Link href="/blog-details">How Investing in Dependend Increasing to Business</Link></h3>
                                                    <p>Imperdiet consectetur gravida vel rutrum tempus, mattis sit massa lacus morbi feugiat aliquam sagittis nunc neque sit nec lorem tincidunt arcu nunc ac accumsan risus felis in ornare...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="news-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-17.jpg" alt="" /></Link></figure>
                                                    <h2>15<span>APRIL</span></h2>
                                                </div>
                                                <div className="lower-content">
                                                    <ul className="post-info clearfix"> 
                                                        <li><i className="icon-21"></i><Link href="/blog-details">Admin</Link></li>
                                                        <li><i className="icon-22"></i><Link href="/blog-details">1 Comnt</Link></li>
                                                    </ul>
                                                    <h3><Link href="/blog-details">Email Marketing Tips That will Increase Your Sales</Link></h3>
                                                    <p>Imperdiet consectetur gravida vel rutrum tempus, mattis sit massa lacus morbi feugiat aliquam sagittis nunc neque sit nec lorem tincidunt arcu nunc ac accumsan risus felis in ornare...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination-wrapper">
                                            <ul className="pagination clearfix">
                                                <li><Link href="/blog-2"><i className="icon-45"></i></Link></li>
                                                <li><Link href="/blog-2" className="current">1</Link></li>
                                                <li><Link href="/blog-2">2</Link></li>
                                                <li><Link href="/blog-2"><i className="icon-44"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                    <div className="blog-sidebar ml_40">
                                        <div className="sidebar-widget search-widget">
                                            <div className="search-form">
                                                <form action="blog-2l" method="post">
                                                    <div className="form-group">
                                                        <input type="search" name="search-field" placeholder="Search..." required />
                                                        <button type="submit"><i className="icon-4"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="sidebar-widget category-widget">
                                            <div className="widget-title">
                                                <h3>Categories</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul className="category-list clearfix">
                                                    <li><Link href="/blog-2">Business</Link></li>
                                                    <li><Link href="/blog-2">Consulting</Link></li>
                                                    <li><Link href="/blog-2">Financial Plan</Link></li>
                                                    <li><Link href="/blog-2">Innovative</Link></li>
                                                    <li><Link href="/blog-2">Investment</Link></li>
                                                    <li><Link href="/blog-2">Management</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sidebar-widget post-widget">
                                            <div className="widget-title">
                                                <h3>Recent Article</h3>
                                            </div>
                                            <div className="post-inner">
                                                <div className="post">
                                                    <figure className="post-thumb"><Link href="/blog-2"><img src="assets/images/news/post-1.jpg" alt="" /></Link></figure>
                                                    <h5><Link href="/blog-2">How to Manage Online Business’s</Link></h5>
                                                    <span className="post-date">Apr 17, 2022</span>
                                                </div>
                                                <div className="post">
                                                    <figure className="post-thumb"><Link href="/blog-2"><img src="assets/images/news/post-2.jpg" alt="" /></Link></figure>
                                                    <h5><Link href="/blog-2">Your Business is Ready For Integration</Link></h5>
                                                    <span className="post-date">Apr 16, 2022</span>
                                                </div>
                                                <div className="post">
                                                    <figure className="post-thumb"><Link href="/blog-2"><img src="assets/images/news/post-3.jpg" alt="" /></Link></figure>
                                                    <h5><Link href="/blog-2">Ensure that Copies of Documents</Link></h5>
                                                    <span className="post-date">Apr 15, 2022</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-widget tags-widget">
                                            <div className="widget-title">
                                                <h3>Popular Tags</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul className="tags-list clearfix">
                                                    <li><Link href="/blog-2">Agency</Link></li>
                                                    <li><Link href="/blog-2">Business</Link></li>
                                                    <li><Link href="/blog-2">Consult</Link></li>
                                                    <li><Link href="/blog-2">Corporate</Link></li>
                                                    <li><Link href="/blog-2">Marketing</Link></li>
                                                    <li><Link href="/blog-2">Industry</Link></li>
                                                    <li><Link href="/blog-2">Idea</Link></li>
                                                    <li><Link href="/blog-2">Data</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* sidebar-page-container end */}
                </div>

            </Layout>
        </>
    )
}
