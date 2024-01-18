'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Affordable Pricing">
                <div>
                    <section className="pricing-section sec-pad">
                        <div className="auto-container">
                        <div className="sec-title centred mb_50">
                            <span className="sub-title">Pricing Table</span>
                            <h2>Not Any Hidden Charge, Choose <br />Our Pricing Plan</h2>
                        </div>
                            <div className="text-center">
                                <div className="tab-btn-box p_relative d_block mb_60 centred">
                                    <ul className="tab-btns tab-buttons clearfix p_relative d_iblock" role="tablist">
                                        <li className="tab-btn active-btn" onClick={() => handleOnClick(1)}>
                                            <a className={activeIndex == 1 ? "nav-link active" : "#tab-1"}>Monthly
                                            </a>
                                        </li>
                                        <li className="tab-btn active-btn" onClick={() => handleOnClick(2)}>
                                            <a className={activeIndex == 2 ? "nav-link" : "#tab-2"}>
                                            Yearly
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pricing-content">
                                {/* Tab panes */}
                                <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="wrapper-box">
                                            <div className="row m-0">
                                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                                    <div className="pricing-block-one">
                                                        <div className="pricing-table">
                                                            <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-38.png)' }}></div>
                                                            <div className="table-header mb_35">
                                                                <span className="title">Basic Pack</span>
                                                                <h2>$24.50/<span>mo</span></h2>
                                                            </div>
                                                            <div className="table-content">
                                                                <ul className="feature-list list-style-one clearfix">
                                                                    <li>Powerful Admin Panel</li>
                                                                    <li>1 Native Android App</li>
                                                                    <li>Multi-Language Support</li>
                                                                    <li className="light">Advance Options</li>
                                                                    <li className="light">24/7 Tech Support</li>
                                                                </ul>
                                                            </div>
                                                            <div className="table-footer">
                                                                <Link href="/pricing-table" className="theme-btn-one">Get Started Now</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                                    <div className="pricing-block-one active-block">
                                                        <div className="pricing-table">
                                                            <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-39.png)' }}></div>
                                                            <div className="table-header mb_35">
                                                                <span className="title">Standard Pack</span>
                                                                <h2>$45.50/<span>mo</span></h2>
                                                            </div>
                                                            <div className="table-content">
                                                                <ul className="feature-list list-style-one clearfix">
                                                                    <li>Powerful Admin Panel</li>
                                                                    <li>1 Native Android App</li>
                                                                    <li>Multi-Language Support</li>
                                                                    <li>Advance Options</li>
                                                                    <li className="light">24/7 Tech Support</li>
                                                                </ul>
                                                            </div>
                                                            <div className="table-footer">
                                                                <Link href="/pricing-table" className="theme-btn-one">Get Started Now</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                                    <div className="pricing-block-one">
                                                        <div className="pricing-table">
                                                            <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-38.png)' }}></div>
                                                            <div className="table-header mb_35">
                                                                <span className="title">Advanced Pack</span>
                                                                <h2>$55.50/<span>mo</span></h2>
                                                            </div>
                                                            <div className="table-content">
                                                                <ul className="feature-list list-style-one clearfix">
                                                                    <li>Powerful Admin Panel</li>
                                                                    <li>1 Native Android App</li>
                                                                    <li>Multi-Language Support</li>
                                                                    <li>Advance Options</li>
                                                                    <li>24/7 Tech Support</li>
                                                                </ul>
                                                            </div>
                                                            <div className="table-footer">
                                                                <Link href="/pricing-table" className="theme-btn-one">Get Started Now</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="wrapper-box">
                                            <div className="row m-0">
                                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                                    <div className="pricing-block-one">
                                                        <div className="pricing-table">
                                                        <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-38.png)' }}></div>
                                                        <div className="table-header mb_35">
                                                            <span className="title">Basic Pack</span>
                                                            <h2>$69.50/<span>yr</span></h2>
                                                        </div>
                                                        <div className="table-content">
                                                            <ul className="feature-list list-style-one clearfix">
                                                            <li>Powerful Admin Panel</li>
                                                            <li>1 Native Android App</li>
                                                            <li>Multi-Language Support</li>
                                                            <li className="light">Advance Options</li>
                                                            <li className="light">24/7 Tech Support</li>
                                                            </ul>
                                                        </div>
                                                        <div className="table-footer">
                                                            <Link href="/pricing-table" className="theme-btn-one">Get Started Now</Link>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                                    <div className="pricing-block-one active-block">
                                                        <div className="pricing-table">
                                                        <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-39.png)' }}></div>
                                                        <div className="table-header mb_35">
                                                            <span className="title">Standard Pack</span>
                                                            <h2>$79.50/<span>yr</span></h2>
                                                        </div>
                                                        <div className="table-content">
                                                            <ul className="feature-list list-style-one clearfix">
                                                            <li>Powerful Admin Panel</li>
                                                            <li>1 Native Android App</li>
                                                            <li>Multi-Language Support</li>
                                                            <li>Advance Options</li>
                                                            <li className="light">24/7 Tech Support</li>
                                                            </ul>
                                                        </div>
                                                        <div className="table-footer">
                                                            <Link href="/pricing-table" className="theme-btn-one">Get Started Now</Link>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                                    <div className="pricing-block-one">
                                                        <div className="pricing-table">
                                                        <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-38.png)' }}></div>
                                                        <div className="table-header mb_35">
                                                            <span className="title">Advanced Pack</span>
                                                            <h2>$99.50/<span>yr</span></h2>
                                                        </div>
                                                        <div className="table-content">
                                                            <ul className="feature-list list-style-one clearfix">
                                                            <li>Powerful Admin Panel</li>
                                                            <li>1 Native Android App</li>
                                                            <li>Multi-Language Support</li>
                                                            <li>Advance Options</li>
                                                            <li>24/7 Tech Support</li>
                                                            </ul>
                                                        </div>
                                                        <div className="table-footer">
                                                            <Link href="/pricing-table" className="theme-btn-one">Get Started Now</Link>
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
                    </section>
                </div>

            </Layout>
        </>
    )
}