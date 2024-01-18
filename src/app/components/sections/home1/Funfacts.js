import CounterUp from "../../elements/CounterUp.js";



export default function Funfacts() {
    return (
        <>        
            <section className="funfact-section centred">
                <div className="auto-container">
                    <div className="inner-container">
                    <div className="shape">
                        <div
                        className="shape-1"
                        style={{ backgroundImage: 'url(assets/images/shape/shape-18.png)' }}
                        ></div>
                        <div
                        className="shape-2"
                        style={{ backgroundImage: 'url(assets/images/shape/shape-19.png)' }}
                        ></div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                            <div className="inner-box">
                            <div className="count-outer count-box">
                                <CounterUp end={300} /><span>k+</span>
                            </div>
                            <p>elearning Hours</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                            <div className="inner-box">
                            <div className="count-outer count-box">
                                <CounterUp end={35} /><span>+</span>
                            </div>
                            <p>Languages</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                            <div className="inner-box">
                            <div className="count-outer count-box">
                                <CounterUp end={4} /><span></span>
                            </div>
                            <p>Continents Served</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                            <div className="inner-box">
                            <div className="count-outer count-box">
                                <CounterUp end={20} /><span>+</span>
                            </div>
                            <p>Fortune 500 Clients</p>
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
