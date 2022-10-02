import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.svg'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { Link } from "react-router-dom";

function Navbar() {
    const [show, setShow] = useState(false);
    
    return (
        <header className='nav'>
            <div className="container">
                <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
                <nav>
                    <ul className={show ? "mobile navigation-mobile active" : "mobile navigation-mobile"}>
                        <li className="navigation-item">
                            <Link to="/">Home</Link>
                            <span className="line"></span>
                        </li>
                        <li className="navigation-item"><Link to="/projects">projects</Link><span className="line"></span></li>
                        <li className="navigation-item"><Link to="/about">about</Link><span className="line"></span></li>
                        <li className="navigation-item"><Link to="/resume">r&Eacute;sum&Eacute;</Link><span className="line"></span></li>
                        <Link to="hire-me"><button>hire me <BsFillArrowRightCircleFill className='col' /></button></Link>
                    </ul>
                    <ul className="navigation-desktop">
                        <li className="navigation-item" ><Link to="/">Home</Link><span className="line"></span></li>
                        <li className="navigation-item"><Link to="/projects">projects</Link><span className="line"></span></li>
                        <li className="navigation-item"><Link to="/about">about</Link><span className="line"></span></li>
                        <li className="navigation-item"><Link to="/resume">r&Eacute;sum&Eacute;</Link><span className="line"></span></li>
                    </ul>
                    <div className="hamburger" onClick={() => setShow(!show)}>
                        <svg className="hamburger-img" width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="bar center-bar" d="M29.3372 7.5H1.4978C1.13191 7.5 0.834961 7.68666 0.834961 7.91664V8.74993C0.834961 8.97992 1.13191 9.16657 1.4978 9.16657H29.3372C29.7031 9.16657 30 8.97992 30 8.74993V7.91664C30 7.68666 29.7031 7.5 29.3372 7.5Z" fill="black"/>
                            <path className="bar bottom-bar" d="M17.499 15H0.833287C0.373313 15 0 15.1867 0 15.4166V16.2499C0 16.4799 0.373313 16.6666 0.833287 16.6666H17.499C17.959 16.6666 18.3323 16.4799 18.3323 16.2499V15.4166C18.3323 15.1867 17.959 15 17.499 15Z" fill="black"/>
                            <path className="bar top-bar" d="M29.167 0H12.5013C12.0413 0 11.668 0.186656 11.668 0.416644V1.24993C11.668 1.47992 12.0413 1.66657 12.5013 1.66657H29.167C29.627 1.66657 30.0003 1.47992 30.0003 1.24993V0.416644C30.0003 0.186656 29.627 0 29.167 0Z" fill="black"/>
                        </svg>
                    </div>
                </nav>
                <Link to="hire-me" className='desktop'><button className='btn-desktop'>hire me <BsFillArrowRightCircleFill className='col' /></button></Link>
            </div>
        </header>
    )
}

export default Navbar
