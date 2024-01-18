import Layout from "./components/layout/Layout"
import About from "./components/sections/home2/About"
import Banner from "./components/sections/home2/Banner"
import Services from "./components/sections/home2/Services"
import Cta from "./components/sections/home2/Cta"
import Projects from "./components/sections/home2/Projects"
import Features from "./components/sections/home2/Features"
import News from "./components/sections/home2/News"
import Subscribe from "./components/sections/home2/Subscribe"
import Process from "./components/sections/home2/Process"
import Testimonial from "./components/sections/home2/Testimonial"
import WhyChooseUs from "./components/sections/home2/WhyChooseUs"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <Features />
                <About />
                <Services />
                <Cta />
                <Testimonial />
                <WhyChooseUs />
                <Process />
                <Projects />
                <News />
                <Subscribe />
            </Layout>
        </>
    )
}