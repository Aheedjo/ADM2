import { testimonials } from "../data"

const Testimonials = () => {
    const slider = document.querySelector(".slide");
    console.log(slider);
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
                        return (
                            <div key={i} className="testimonial">
                                <div className="user-info">
                                    <div className="icon"></div>                        
                                    <p className="name">{ testimonial.name }</p>
                                </div>
                                <div className="feedback-content">
                                    <h4 className="header">{ testimonial.header }</h4>
                                    <p className="text">{ testimonial.text }</p>
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