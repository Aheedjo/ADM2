import logo from '../assets/logolight.svg'
import { Link } from "react-router-dom";

const Footer = ( ) => {
    const year = new Date().getFullYear();

  return (
    <footer className="footer">
        <div className="container">
            <a href="/"><img src={logo} alt="logo" className="logo"/></a>
            <span className="copyright">&copy; ADM DEVS {year}</span>
        </div>
    </footer>
  )
}

export default Footer