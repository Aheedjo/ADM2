import { BsFillArrowRightCircleFill, BsBagFill, BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { ImFacebook2 } from "react-icons/im"
import arrow from "../assets/arrow-down.svg"

const Hero = () => {
  return (
    <section className="hero container">
        <div className="cont">
            <div className="text">
                <div className="hero-title">
                    <span className='little'>Lorem ipsum dolor</span>
                    <h1>Lorem ipsum, consectetur adipisicing.</h1>
                </div>
            </div>
            <div className="btn-cont">
                <button className="btn rev">Portfolio <BsBagFill /></button>
                <button className="btn">Hire Me <BsFillArrowRightCircleFill /> </button>
            </div>
            <div className="social-links">
            <a className="social-link" target="_blank" href="https://api.whatsapp.com/send?phone=08143410800" rel="noreferrer"><FaWhatsapp className="icon-" /></a>
                        <a className="social-link" target="_blank" href="https://twitter.com/Ahidjo_DM" rel="noreferrer"><BsTwitter className="icon-" /></a>
                        <a className="social-link" target="_blank" href="https://www.instagram.com/ahidjo.dm/" rel="noreferrer"><BsInstagram className="icon-" /></a>
                        <a className="social-link" target="_blank" href="https://www.linkedin.com/in/maishanu-ahijo-36bb7b1bb/" rel="noreferrer"><BsLinkedin className="icon-" /></a>
                        <a className="social-link" target="_blank" href="https://github.com/Aheedjo" rel="noreferrer"><BsGithub className="icon-" /></a>
            </div>
            <div className="bg">
                <span>Backend</span>
                <span>Frontend</span>
                <span>ui/ux</span>
            </div>
        </div>
        <div className="arrow">
            <img src={arrow} alt="arrow" />
        </div>
    </section>
  )
}

export default Hero
