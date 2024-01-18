import Link from "next/link"


export default function Cta() {
    return (
        <>            
            <section className="cta-section p_relative">
                <div className="bg-layer parallax-bg" data-parallax={{ y: 100 }} style={{ backgroundImage: 'url(assets/images/background/cta-bg.jpg)' }}></div>
                <div className="auto-container">
                    <div className="inner-box">
                        <h2>Let's <span>Start Talking</span> Now About Next Project</h2>
                        <h3><Link href="tel:912136660027">+91-213-666-0027</Link></h3>
                    </div>
                </div>
            </section> 

        </>
    )
}
