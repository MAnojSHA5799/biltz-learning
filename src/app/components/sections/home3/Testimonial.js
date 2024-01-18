import TestimonialSlider1 from '@/components/slider/TestimonialSlider1'

export default function Testimonial() {
    return (
        <>
            <section className="testimonial-section p_relative bg-color-1">
                <div
                    className="pattern-layer"
                    style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}
                ></div>
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                        <div className="sec-title">
                        <span className="sub-title">Testimonials</span>
                        <h2>What They’re Say About Us?</h2>
                        <p>
                            Amet dui scelerisque vel habitant eget tincidunt facilisis
                            pretium. Porttitor mi nisi, non vitae tempus.
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            {/*Theme Carousel*/}
                            <TestimonialSlider1 />                        
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
