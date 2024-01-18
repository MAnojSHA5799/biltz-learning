
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")



    return (
        <>

            <div className="filters centred mb_50">
                <ul className="filter-tabs filter-btns clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Works </li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Business </li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Corporate </li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Marketing </li>
                </ul>
            </div>
            <div className="items-container row clearfix">
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12">
                    <div className="project-block-one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/project/project-4.jpg" alt="" />
                            </figure>
                            <div className="content-box">
                                <div className="inner">
                                    <div className="view-btn">
                                        <Link href="assets/images/project/project-4.jpg" className="lightbox-image" data-fancybox="gallery">
                                        <i className="icon-16"></i>
                                        </Link>
                                    </div>
                                    <h3><Link href="/portfolio">Business Planning</Link></h3>
                                    <span className="designation">Investment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all cat-2 col-lg-4 col-md-6 col-sm-12">
                    <div className="project-block-one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/project/project-5.jpg" alt="" />
                            </figure>
                            <div className="content-box">
                                <div className="inner">
                                    <div className="view-btn">
                                        <Link href="assets/images/project/project-5.jpg" className="lightbox-image" data-fancybox="gallery">
                                        <i className="icon-16"></i>
                                        </Link>
                                    </div>
                                    <h3><Link href="/portfolio">Market Analysis</Link></h3>
                                    <span className="designation">Marketing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-1 cat-2 cat-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="project-block-one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/project/project-6.jpg" alt="" />
                            </figure>
                            <div className="content-box">
                                <div className="inner">
                                    <div className="view-btn">
                                        <Link href="assets/images/project/project-6.jpg" className="lightbox-image" data-fancybox="gallery">
                                        <i className="icon-16"></i>
                                        </Link>
                                    </div>
                                    <h3><Link href="/portfolio">Business Leadership</Link></h3>
                                    <span className="designation">Financial</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-1 cat-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="project-block-one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/project/project-7.jpg" alt="" />
                        </figure>
                        <div className="content-box">
                            <div className="inner">
                                <div className="view-btn">
                                    <Link href="assets/images/project/project-7.jpg" className="lightbox-image" data-fancybox="gallery">
                                    <i className="icon-16"></i>
                                    </Link>
                                </div>
                                <h3><Link href="/portfolio">Strength Solutions</Link></h3>
                                <span className="designation">Strategy</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-2 cat-1 col-lg-4 col-md-6 col-sm-12">
                    <div className="project-block-one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/project/project-8.jpg" alt="" />
                            </figure>
                            <div className="content-box">
                                <div className="inner">
                                    <div className="view-btn">
                                        <Link href="assets/images/project/project-8.jpg" className="lightbox-image" data-fancybox="gallery">
                                        <i className="icon-16"></i>
                                        </Link>
                                    </div>
                                    <h3><Link href="/portfolio">Strength Solutions</Link></h3>
                                    <span className="designation">Consulting</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-2 cat-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="project-block-one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/project/project-9.jpg" alt="" />
                            </figure>
                            <div className="content-box">
                                <div className="inner">
                                    <div className="view-btn">
                                        <Link href="assets/images/project/project-9.jpg" className="lightbox-image" data-fancybox="gallery">
                                        <i className="icon-16"></i>
                                        </Link>
                                    </div>
                                    <h3><Link href="/portfolio">Startup Business</Link></h3>
                                    <span className="designation">Marketing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
