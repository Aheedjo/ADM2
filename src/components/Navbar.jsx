import React from 'react'
import logo from '../assets/logo.svg'
import resume from "../assets/MaishanuResume.pdf"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { Link } from "react-router-dom";

function Navbar() {    
    return (
        <header className='nav'>
            <div className="container">
                <nav>
                    <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
                    <div>
                        <div className="navigation-item">
                            <Link to="/"><a className="" href="/">Home</a></Link>
                            <span className="line"></span>
                        </div>
                        <div>
                            <div className="navigation-item">
                                <a href={ resume } download="Maishanu's Resume">Download r&Eacute;sum&Eacute;</a>
                                <span className="line"></span>
                            </div>
                            <Link to="/contact-me">
                                <button className='btn-desktop'>
                                    Contact me 
                                    <BsFillArrowRightCircleFill className='col' />
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
