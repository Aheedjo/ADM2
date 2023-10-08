import { FaHtml5, FaSass, FaPython, FaAngular, FaReact, FaFigma, FaNodeJs, FaGithub } from "react-icons/fa"
import { SiTypescript, SiExpress, SiTailwindcss, SiFlask, SiJira, SiSvelte, SiMongodb, SiHeroku, SiVercel } from "react-icons/si"
import { DiGit } from "react-icons/di"


const WebTechs = () => {
  return (
    <section className='web-techs container'>
        <>
            <h2 className="title"><span className="line"></span>Web technologies</h2>
            <p>Passionate full-stack developer & UI/UX designer, dedicated to creating seamless web experiences through frontend and backend expertise.</p>
        </>
        <div className="web-techs-grid">
            <div>
                <FaHtml5 className='web-tech' />
                <p>Html</p>
            </div>
            <div>
                <FaSass className='web-tech' />
                <p>Sass</p>
            </div>
            <div>
                <FaPython className='web-tech' />
                <p>Python</p>
            </div>
            <div>
                <FaAngular className='web-tech' />
                <p>Angular</p>
            </div>
            <div>
                <FaReact className='web-tech' />
                <p>React</p>
            </div>
            <div>
                <FaFigma className='web-tech' />
                <p>Figma</p>
            </div>
            <div>
                <SiTypescript className='web-tech' />
                <p>TypeScript</p>
            </div>
            <div>
                <FaNodeJs className='web-tech' />
                <p>NodeJs</p>
            </div>
            <div>
                <SiTailwindcss className='web-tech' />
                <p>Tailwind</p>
            </div>
            <div>
                <SiJira className='web-tech' />
                <p>Jira</p>
            </div>
            <div>
                <SiSvelte className='web-tech' />
                <p>Svelte</p>
            </div>
            <div>
                <SiFlask className='web-tech' />
                <p>Flask</p>
            </div>
            <div>
                <DiGit className='web-tech' />
                <p>Git</p>
            </div>
            <div>
                <FaGithub className='web-tech' />
                <p>GitHub</p>
            </div>
            <div>
                <SiExpress className='web-tech' />
                <p>Express</p>
            </div>
            <div>
                <SiMongodb className='web-tech' />
                <p>MongoDB</p>
            </div>
            <div>
                <SiVercel className='web-tech' />
                <p>Vercel</p>
            </div>
            <div>
                <SiHeroku className='web-tech' />
                <p>Heroku</p>
            </div>
        </div>
    </section>
  )
}

export default WebTechs
