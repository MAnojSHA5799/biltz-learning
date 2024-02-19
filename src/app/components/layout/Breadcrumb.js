'use client'
import Link from "next/link"
import '../../main.css'
export default function Breadcrumb({ breadcrumbTitle }) {



    return (
        <>
            {console.log(breadcrumbTitle)}
            <section className="page-title centred">
                <div className="bg-layer"
                    // style={{ backgroundImage: 'url(/assets/images/Contact-Us.jpg)' }}

                    // style = {{backgroundImage:breadcrumbTitle?'url(/assets/images/Contact-Us.jpg)':'none'}}
                    style={{
                        backgroundImage: breadcrumbTitle === "Our Services" ? 'url(/assets/header-images/ourservice2.jpg)' :
                            breadcrumbTitle === "Custom e-Learning" ? 'url(/assets/header-images/Custome_e-learning.mp4)' :
                                breadcrumbTitle === "Content Services" ? 'url(/assets/header-images/content_services.mp4)' :
                                    breadcrumbTitle === "Video Production" ? 'url(/assets/header-images/video_production.mp4)' :
                                        breadcrumbTitle === "Learning Consulting" ? 'url(/assets/header-images/learning_consulting.mp4)' :
                                            breadcrumbTitle === "Why Us" ? 'url(/assets/header-images/whyus.png)' :
                                                breadcrumbTitle === "About Us" ? 'url(/assets/header-images/aboutus-3.jpg)' :
                                                    breadcrumbTitle === "Get In Touch" ? 'url(/assets/header-images/contact-us.png)' :
                                                    breadcrumbTitle === "Blogs" ? 'url(/assets/header-images/blog.jpg)' :
                                                    breadcrumbTitle === "Our Works" ? 'url(/assets/header-images/our-work.jpg)' :
                                                    breadcrumbTitle === "Blog Details" ? 'url(/assets/header-images/Blog-Detiails.jpg)' :
                                                    breadcrumbTitle === "Career" ? 'url(/assets/header-images/career.jpg)' :
                                                    breadcrumbTitle === "Privacy Policy" ? 'url(/assets/header-images/Privacy-Policy-1.jpg)' :
                                                        'none'
                    }}

                >
                    {breadcrumbTitle === "Custom e-Learning" && (
                        <video autoPlay loop muted className="bg-video">
                            <source src="/assets/header-images/Custome_e-learning.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}

                    {breadcrumbTitle === "Content Services" && (
                        <video autoPlay loop muted className="bg-video">
                            <source src="/assets/header-images/content_services.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}

                    {breadcrumbTitle === "Video Production" && (
                        <video autoPlay loop muted className="bg-video">
                            <source src="/assets/header-images/video_production.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}

                    {breadcrumbTitle === "Learning Consulting" && (
                        <video autoPlay loop muted className="bg-video">
                            <source src="/assets/header-images/learning_consulting.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}

                </div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>{breadcrumbTitle}</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link href="/">Home</Link></li>
                            <li>{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}
