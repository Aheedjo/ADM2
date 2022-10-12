import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import WebTechs from '../components/WebTechs';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <>
        <Hero />
        <About />
        <Skills />
        <WebTechs />
        <Projects />
        <Testimonials />
        <CTA />
    </>
  )
}

export default HomePage