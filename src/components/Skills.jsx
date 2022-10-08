import { skillss } from "../data.js"

const Services = () => {
    return (
        <section className="skills container">
            <h2 className="title"><span className="line"></span>Skills</h2>
            <div className="skills-grid">
                {
                    skillss.map((skill, i) => {
                        return (
                            <div 
                                className="skill"
                                key={i} 
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            >
                                <div className="icon"></div>
                                <h3 className="title">{skill.title}</h3>
                                <p className="info">{skill.info}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services
