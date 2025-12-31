import Home from './sections/home'
import Skills from './sections/skills'
import Contact from './sections/contact'
import Projects from './sections/projects'
import Header from './sections/header'
import Footer from './sections/footer'
import Experience from './sections/experience'
import Education from './sections/education'
import About from './sections/about'
import { Routes, Route } from "react-router-dom"
import ProjectDetails from "./sections/projectDetails"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"

function LandingPage() {
    const { hash } = useLocation()

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out",
            once: true,
            offset: 80
        })
    }, [])

    useEffect(() => {
        if (!hash) return
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: "smooth" })
        AOS.refresh()
    }, [hash])

    return (
        <>
            <div>
                <Header/>
                <div data-aos="slide-up">
                    <Home/>
                </div>
                <div data-aos="fade-up">
                    <Skills/>
                </div>
                <div data-aos="fade-up">
                    <Projects/>
                </div>
                <div data-aos="fade-up">
                    <Experience/>
                </div>
                <div data-aos="fade-up">
                    <Education/>
                </div>
                <div data-aos="fade-up">
                    <About/>
                </div>
                <div data-aos="fade-up">
                    <Contact/>
                </div>
                <div data-aos="fade-up">
                    <Footer/>
                </div>
            </div>
        </>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
    )
}

export default App