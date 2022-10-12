import logo from '../assets/logolight.svg'
import { Link } from "react-router-dom";

const Footer = ( name ) => {
  return (
    <footer className="footer">
        <div className="container">
            <a href="/"><img src={logo} alt="logo" className="logo"/></a>
            <nav>
                <ul className="navigation-desktop">
                    <li className="navigation-item" ><Link className='link' to="/">Home</Link><span className="line"></span></li>
                    <li className="navigation-item"><Link className='link' to="/projects">projects</Link><span className="line"></span></li>
                    <li className="navigation-item"><Link className='link' to="/about">about</Link><span className="line"></span></li>
                    <li className="navigation-item"><Link className='link' to="/resume">r&Eacute;sum&Eacute;</Link><span className="line"></span></li>
                </ul>
            </nav>
            <span className="copyright">&copy; ADM DEVS 2022</span>
        </div>
    </footer>
  )
}

export default Footer