import Link from "next/link"


export default function Subscribe() {
    return (
        <> 

            <section className="subscribe-section">
            <div className="auto-container">
                <div className="inner-container">
                <h2>Subscribe To Our Newsletter</h2>
                <div className="form-inner">
                    <form action="index-2.html" method="post">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" name="name" placeholder="Your name" required />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="email" name="email" placeholder="Your email" required />
                        </div>
                    </div>
                    <div className="message-btn">
                        <button type="submit" className="theme-btn-one">Subscribe Now</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </section>
            
        </>
    )
}
