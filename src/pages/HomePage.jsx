import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import WebTechs from '../components/WebTechs';
import Projects from '../components/Projects';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <>
        <Hero />
        <Skills />
        <WebTechs />
        <Projects />
        <About />
        <CTA />
    </>
  )
}

export default HomePage