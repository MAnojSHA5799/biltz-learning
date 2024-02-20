'use client'
import Link from "next/link"
import { useRouter } from 'next/router';

export default function Menu() {
    //  const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li ><Link href="/">Home</Link></li>
                <li className=""><Link href="/about-us">About Us</Link></li>
                
               
                <li className="dropdown"><Link href="/Services">Services</Link>
                    <ul>
                        <li><Link href="/Services/Custom-eLearning">Custom e-Learning</Link></li>
                        <li><Link href="/Services/Content-Services">Content Services</Link></li>
                        <li><Link href="/Services/video-production">Video Production</Link></li>
                        <li><Link href="/Services/learning-consulting">Learning Consulting</Link></li>
                    </ul>
                </li>
                <li className=""><Link href="/why-us">Why Us</Link></li>
                <li className="dropdown"><Link href="/our-works">Our Work</Link>
                    <ul>
                        <li><Link href="/our-works/web-based-training-and-online-portal-lmssales-academy-training">Online Portal|Sales Academy</Link></li>
                        <li><Link href="/our-works/revamp-and-localization-company-policy-refresh-training">Revamp And Localization|Company Policy</Link></li>
                        <li><Link href="/our-works/mobile-based-mentor-driven-trainingsales-call-training">Mobile Driven training| Sales Call</Link></li>
                        <li><Link href="/our-works/content-development-web-based-training-localization-workplace-hazards-and-safety">Content Development |Workplace Safety</Link></li>
                        <li><Link href="/our-works/web-based-training-and-localization-product-training">Localization |Product Training</Link></li>
                        <li><Link href="/our-works/scenario-based-trainingworkplace-integrity">Scenario based Training |Workplace Integrity</Link></li>

                        {/* <li><Link href="/testimonials">Testimonials</Link></li>
                        <li><Link href="/404">404</Link></li> */}
                    </ul>
                </li>
                <li className=""><Link href="/blog">Blogs</Link>
                    <ul>
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-2">Blog Standard</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li> 

                {/* <li><Link href="/why-us">Why Us</Link></li> */}
                <li><Link href="/contact">Contact</Link></li>

            </ul>
        </>
    )
}
