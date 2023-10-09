import { projects } from "../data"
import { GiWorld } from "react-icons/gi"

const Projects = () => {        
    return (
        <section className="projects container">
            <h2 className="title"><span className="line"></span>Projects</h2>
            <div className="projects-grid">
                {
                    projects.map((project, i) => {
                        return (
                            <article key={ i } className='project'>
                                {
                                    project.tag == 'Front-end' ? (
                                        <img src={ project.image } alt="project-image" />
                                    ) : null
                                }
                                <div className="info-cont">
                                    <div className="info">
                                        <div>
                                            <span className="tag">{ project.tag }</span>
                                        </div>
                                        <h4 className="title">{ project.title }</h4>
                                        <p className="text">{ project.text }</p>
                                    </div>
                                    <div className="techs">
                                        {
                                            project.techs.map((tech, i) => {
                                                return (
                                                    <div key={i}>
                                                        <p className="tech">{ tech }</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="btn-cont">
                                        {
                                            project.tag == 'Front-end' || project.tag == 'Back-end  ||  API' ? (
                                                <a href={ project.codeLink } target="_blank">View Code</a>
                                            ) : null
                                        }
                                        {
                                            project.tag == 'UI/UX' ? (
                                                <a href={ project.liveLink } target="_blank">View Design</a>
                                            ) : null
                                        }
                                        {
                                            project.tag == 'Front-end' ? (
                                                <a href={ project.liveLink } target="_blank">Visit Site</a>
                                            ) : null
                                        }
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>   
    )
}

export default Projects
