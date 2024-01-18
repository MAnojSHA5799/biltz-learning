import Link from "next/link"


export default function Expertise() {
    return (
        <>
            <section className="expertise-section alternat-2 p_relative bg-color-1">
                <div className="pattern-layer">
                    <div className="pattern-3" style={{ backgroundImage: 'url(assets/images/shape/shape-36.png)' }}></div>
                </div>
                <figure className="image-layer"><img src="assets/images/resource/men-1.png" alt="" /></figure>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-6 content-column">
                            <div className="content_block_four">
                                <div className="content-box p_relative ml_30 mt_20 centred">
                                    <h3>Request for Our Free <br />Consultation</h3>
                                    <div className="form-inner">
                                        <form action="#" method="post" className="default-form">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="name" placeholder="Your name" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="email" name="email" placeholder="Email address" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="phone" placeholder="Phone number" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <div className="select-box">
                                                        <select className="selectmenu">
                                                            <option value={1}>Tax Management</option>
                                                            <option value={2}>Strategy & Planning</option>
                                                            <option value={3}>Program Manager</option>
                                                            <option value={4}>Investment Policy</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button type="submit" className="theme-btn-one">Send Request</button>
                                                </div>
                                            </div>
                                        </form>
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
