import { BsFillArrowRightCircleFill, BsBagFill, BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { ImFacebook2 } from "react-icons/im"
import arrow from "../assets/arrow-down.svg"

const Hero = () => {
  return (
    <section className="hero container">
        <div className="cont">
            <div className="text">
                <h1 className="hero-title">
                    <span className='little'>Lorem ipsum dolor</span>
                    <h1>Lorem ipsum amet, consectetur adipisicing.</h1>
                </h1>
            </div>
            <div className="btn-cont">
                <button className="btn rev">Portfolio <BsBagFill /></button>
                <button className="btn">Hire Me <BsFillArrowRightCircleFill /> </button>
            </div>
            <div className="social-links">
                <a className="social-link" href="/"><FaWhatsapp className="icon-" /></a>
                <a className="social-link" href="/"><BsTwitter className="icon-" /></a>
                <a className="social-link" href="/"><ImFacebook2 className="icon-" /></a>
                <a className="social-link" href="/"><BsInstagram className="icon-" /></a>
                <a className="social-link" href="/"><BsLinkedin className="icon-" /></a>
                <a className="social-link" href="/"><BsGithub className="icon-" /></a>
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
