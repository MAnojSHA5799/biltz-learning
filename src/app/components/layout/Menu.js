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
                <li ><Link href="/">Home</Link>
                    {/* <ul>
                        <li><Link href="/">Home Page 01</Link></li>
                        <li><Link href="/index-2">Home Page 02</Link></li>
                        <li><Link href="/index-3">Home Page 03</Link></li>
                    </ul> */}
                </li>
                <li className="dropdown"><Link href="/Services">Services</Link>
                    <ul>
                        <li><Link href="/Services/Custom-eLearning">Custom E-Learning</Link></li>
                        <li><Link href="/Services/Content-Services">Content Services</Link></li>
                        <li><Link href="/Services/learning-consulting">Learning Consulting</Link></li>
                        <li><Link href="/Services/video-production">Video Production</Link></li>
                        {/* <li><Link href="/program-manager">Program Manager</Link></li>
                        <li><Link href="/investment-policy">Investment Policy</Link></li>
                        <li><Link href="/financial-advices">Financial Advices</Link></li>
                        <li><Link href="/insurance-strategy">Insurance Strategy</Link></li> */}
                    </ul>
                </li>
                <li className="dropdown"><Link href="/our-works">Our Work</Link>
                    <ul>
                        {/* <li className="dropdown"><Link href="#">Team</Link>
                            <ul>
                                <li><Link href="/team">Team Member</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li> */}
                        <li><Link href="/our-works/web-based-training-and-online-portal-lmssales-academy-training">Online Portal|Sales Academy</Link></li>
                        <li><Link href="/our-works/revamp-and-localization-company-policy-refresh-training">Revamp And Localization|Company Policy</Link></li>
                        <li><Link href="/our-works/mobile-based-mentor-driven-trainingsales-call-training">Mobile Driven Trainin| Sales Call</Link></li>
                        <li><Link href="/our-works/content-development-web-based-training-localization-workplace-hazards-and-safety">Content Development |Workplace Safety</Link></li>
                        <li><Link href="/our-works/web-based-training-and-localization-product-training">Localization |Product Training</Link></li>
                        <li><Link href="/our-works/scenario-based-trainingworkplace-integrity">Scenario based Training |Workplace Integrity</Link></li>

                        {/* <li><Link href="/testimonials">Testimonials</Link></li>
                        <li><Link href="/404">404</Link></li> */}
                    </ul>
                </li>
                <li className=""><Link href="/about-us">About Us</Link>
                    {/* <ul>
                        <li><Link href="/shop">Products</Link></li>
                        <li><Link href="/product-details">Product Details</Link></li>
                        <li><Link href="/shopping-cart">Shopping Cart</Link></li>
                        <li><Link href="/checkout">Checkout</Link></li>
                    </ul> */}
                </li>
                <li className=""><Link href="/blog">Blog</Link>
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
