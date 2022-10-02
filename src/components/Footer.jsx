import logo from '../assets/logolight.svg'

const Footer = ( name ) => {
  return (
    <footer className="footer">
        <div className="container">
            <a href="/"><img src={logo} alt="logo" className="logo"/></a>
            <nav>
                <ul className="navigation-desktop">
                    <li className="navigation-item"><a href="/">Home</a><span className="line"></span></li>
                    <li className="navigation-item"><a href="/">projects</a><span className="line"></span></li>
                    <li className="navigation-item"><a href="/">about</a><span className="line"></span></li>
                    <li className="navigation-item"><a href="/">r&Eacute;sum&Eacute;</a><span className="line"></span></li>
                </ul>
            </nav>
            <span className="copyright">&copy; ADM DEVS 2022</span>
        </div>
    </footer>
  )
}

export default Footer