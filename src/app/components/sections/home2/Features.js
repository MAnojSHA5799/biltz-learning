import Link from "next/link"


export default function Features() {
    return (
        <>
           
           <section className="feature-style-two bg-color-2 pt_150 pb_150">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-22.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-23.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 title-column">
                            <div className="sec-title light pr_100">
                                <span className="sub-title">Feature</span>
                                <h2>Professional And Dedicated Consulting Solutions.</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-two mt_50 wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-7"></i></div>
                                    <h3><Link href="/index-2">Business Planning</Link></h3>
                                    <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-two mt_50 wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-9"></i></div>
                                    <h3><Link href="/index-2">Business Intelligence</Link></h3>
                                    <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
