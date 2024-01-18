import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Services from "@/components/sections/home3/Services"
import Projects from "@/components/sections/home3/Projects"
import Features from "@/components/sections/home3/Features"
import Video from "@/components/sections/home3/Video"
import Team from "@/components/sections/home3/Team"
import Clients from "@/components/sections/home3/Clients"
import Expertise from "@/components/sections/home3/Expertise"
import Testimonial from "@/components/sections/home3/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <Services />
                <Video />
                <Team />
                <Testimonial />
                <Clients />
                <Projects />
                <Expertise />
            </Layout>
        </>
    )
}