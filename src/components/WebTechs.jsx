import { webTechnologies } from '../data.js'
import { FaHtml5 } from "react-icons/fa"
import { FaSass } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { FaAngular } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { FaFigma } from "react-icons/fa"
import { FaBootstrap } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { SiJira } from "react-icons/si"
import { SiSvelte } from "react-icons/si"
import { SiFlask } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import { DiDjango } from "react-icons/di"
import { DiGit } from "react-icons/di"


const WebTechs = () => {
  return (
    <section className='web-techs container'>
        <>
            <h2 className="title"><span className="line"></span>Web technologies</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita vitae quaerat tempora unde, pariatur minima illo dicta aperiam officia sunt!</p>
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
                <FaBootstrap className='web-tech' />
                <p>Bootstrap</p>
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
                <DiDjango className='web-tech' />
                <p>Django</p>
            </div>
            <div>
                <DiGit className='web-tech' />
                <p>Git</p>
            </div>
            <div>
                <SiExpress className='web-tech' />
                <p>Express</p>
            </div>
        </div>
    </section>
  )
}

export default WebTechs
