import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta container">
        <div>
            <h1 className="text">Have a project in mind?</h1>        
            <h1 className="text">Have a Job for me?</h1>        
        </div>
        <Link to="/contact-me"><button className="btn">Contact me</button></Link>
    </section>
  )
}

export default CTA
