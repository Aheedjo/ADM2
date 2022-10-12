import { testimonials } from "../data"
import avatar1 from "../assets/avatar1.png"

const Testimonials = () => {
    const slider = document.querySelector(".slide");
    // let isDown = false;
    // let startX;
    // let scrollLeft;

    // slider.addEventListener('mousedown', () => {
    //     isDown = true;
    // });

    // slider.addEventListener('mouseleave', () => {
    //     isDown = false;
        
    // });

    // slider.addEventListener('mouseup', () => {
    //     isDown = false;
    // });

    // slider.addEventListener('mousemove', () => {
    //     console.log(isDown);
    //     console.log("Do work");
    // });

    return (
        <section className="testimonials container">
            <div className="">
                <h2 className="title"><span className="line"></span>Clients testimonial</h2>
            </div>
            <div className="slide">
                {
                    testimonials.map((testimonial, i) => {
                        const {name, header, text} = testimonial;

                        return (
                            <div key={i} className="testimonial">
                                <div className="user-info">
                                    <img src={ avatar1 } alt="avatar" className="avatar" />
                                    <p className="name">{ name }</p>
                                </div>
                                <div className="feedback-content">
                                    <h4 className="header">{ header }</h4>
                                    <p className="text">{ text }</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonials