import CTA from '../components/CTA';
import About from '../components/About';

const AboutPage = () => {
    return (
        <>
        <About />
        <div className="container">
            <div className="more-details">
                <h2 className='title'><span className="line"></span> Lorem ipsum dolor, sit amet.</h2>
                <div className="text md:flex">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam temporibus dicta impedit nihil dolores? Consectetur eum ipsum tempora repellat rerum earum, quas porro eveniet fuga. Distinctio molestias libero animi nihil.</p>
                    <p className='mt-5 md:mt-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam temporibus dicta impedit nihil dolores? Consectetur eum ipsum tempora repellat rerum earum, quas porro eveniet fuga. Distinctio molestias libero animi nihil.</p>
                </div>
            </div>
        </div>
        <CTA />
    </>
  )
}

export default AboutPage