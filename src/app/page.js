"use client";
import Layout from "./components/layout/Layout"
import About from "./components/sections/home1/About"
import Banner from "./components/sections/home1/Banner"
import BannerTwo from "./components/sections/home1/BannerTwo"
import Services from "./components/sections/home1/Services"
 import Projects from "./components/sections/home1/Projects"
import Features from "./components/sections/home1/Features"
import FeaturesTwo from "./components/sections/home1/featuresTwo"
import Pro from "./components/sections/home1/Pro"
 import Funfacts from "./components/sections/home1/Funfacts"
import News from "./components/sections/home1/News"
import Expertise from "./components/sections/home1/Expertise"
import Process from "./components/sections/home1/Process"
 import Testimonial from "./components/sections/home1/Testimonial"
import WhyChooseUs from "./components/sections/home1/WhyChooseUs"
import WhychooseusTwo from "./components/sections/home1/WhychooseusTwo"
import RootLayout from './RootLayout';

export default function Home() {

    return (
        <>
        <RootLayout
            title="Custom e-Learning Services Company - Blitz Learning Technologies"
            description="Transform your team with Blitz Learning service- your go-to custom e-learning solutions company. Elevate skills and efficiency with tailored courses."
        >
            {/* Content of the page */}
        </RootLayout>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <FeaturesTwo />
                 <Features />
               <Services />
               <WhyChooseUs />
               <Pro />
             <Projects />
                 <Process />
                <Funfacts />
                <Expertise /> 
                {/* <About />
                <WhychooseusTwo /> */}
                {/* <BannerTwo /> */}
                {/* <News />   */}
            </Layout>
        </>
    )
}