import ProjectSlider0 from '@/components/slider/ProjectSlider0'

export default function Projects() {
    return (
        <>            
            <section className="project-style-two">
              <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/project-bg.jpg)" }}></div>
              <div className="outer-container">
                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                    <div className="content-box">
                        {/*Theme Carousel*/}
                        <ProjectSlider0 />                        
                    </div>
                </div>
              </div>
            </section>
        </>
    )
}

