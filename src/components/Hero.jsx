import programming from '../assets/programing.svg'
import uiux from '../assets/ui-ux.svg'
import app from '../assets/app-development.svg'
import { BsMailbox } from "react-icons/bs";


const Hero = () => {
  return (
    <section className="hero">
        <div className="container">
            <div className="text">
                <h1 className="hero-title">
                    <span>hello I'm Ahidjo D.M,</span>
                    <span>a frontend developer</span>
                    <span>backend developer</span>
                    <span>UI/UX designer</span>
                </h1>
                <button className="btn">Hire Me <BsMailbox /> </button>
            </div>
            <div className="bg">
                <img src={programming} alt="programming" className='programming' />
                <img src={uiux} alt="uiux" className='uiux' />
                <img src={app} alt="app" className='app' />
            </div>
        </div>
    </section>
  )
}

export default Hero
