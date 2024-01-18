import TestimonialSlider0 from '@/components/slider/TestimonialSlider0'
import TestimonialSlider3 from '@/components/slider/TestimonialSlider3'

export default function Testimonial() {
    return (
        <>

            <section className="testimonial-style-two p_relative">
                <div className="auto-container">
                    <div className="sec-title mb_50 centred">
                        <span className="sub-title">Testimonials</span>
                        <h2>What They’re Say <br />About Us?</h2>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            {/*Theme Carousel*/}
                            <TestimonialSlider0 />                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
