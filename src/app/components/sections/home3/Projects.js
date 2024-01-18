import Link from "next/link"


export default function Projects() {
    return (
        <>
        <section className="projects-section alternat-2 p_relative centred">
            <div className="auto-container">
                <div className="sec-title mb_50">
                    <span className="sub-title">Projects</span>
                    <h2>You Can Check Our Projects <br />as Inspirations.</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="project-block-one">
                            <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/project/project-1.jpg" alt="" />
                            </figure>
                            <div className="content-box">
                                <div className="inner">
                                <div className="view-btn">
                                    <Link
                                    href="assets/images/project/project-1.jpg"
                                    className="lightbox-image"
                                    data-fancybox="gallery"
                                    >
                                    <i className="icon-16"></i>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/index-3">Business Planning</Link>
                                </h3>
                                <span className="designation">Investment</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="project-block-one">
                            <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/project/project-2.jpg" alt="" />
                            </figure>
                            <div className="content-box">
                                <div className="inner">
                                <div className="view-btn">
                                    <Link
                                    href="assets/images/project/project-1.jpg"
                                    className="lightbox-image"
                                    data-fancybox="gallery"
                                    >
                                    <i className="icon-16"></i>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/index-3">Market Analysis</Link>
                                </h3>
                                <span className="designation">Marketing</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="project-block-one">
                            <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/project/project-3.jpg" alt="" />
                            </figure>
                            <div className="content-box">
                                <div className="inner">
                                <div className="view-btn">
                                    <Link
                                    href="assets/images/project/project-1.jpg"
                                    className="lightbox-image"
                                    data-fancybox="gallery"
                                    >
                                    <i className="icon-16"></i>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/index-3">Business Leadership</Link>
                                </h3>
                                <span className="designation">Financial</span>
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
