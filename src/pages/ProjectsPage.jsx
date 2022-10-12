import Projects from '../components/Projects';
import CTA from '../components/CTA';

const ProjectsPage = () => {
  return (
    <>
        <div className='container'>
            <h1 className='text-3xl text-center uppercase'>Projects</h1>
            <p className='text-center'>Here are a couple of personal projects I've worked on</p>
        </div>
        <Projects />
        <CTA />
    </>
  )
}

export default ProjectsPage
