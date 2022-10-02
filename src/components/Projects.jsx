import { projects } from '../data.js'

const Projects = () => {
  return (
    <section className="projects container">
        <h2 className="title"><span className="line"></span>Projects</h2>
        <div className="projects-grid">
            {
                projects.map((project, i) => {
                    return (
                        <article key={i} className='project'>
                            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="" />               
                            <div className="info-cont">
                                <div className="info">
                                    <div className="icon"></div>
                                    <h4 className="title">{project.title}</h4>
                                    <div className="text">{project.text}</div>
                                </div>
                                <div className="btn-cont">
                                    <a href='/'>Case Study</a>
                                    <a href='/'>Visit Site</a>
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
