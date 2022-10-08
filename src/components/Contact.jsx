import { FaWhatsapp } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { ImFacebook2 } from "react-icons/im"
import { BsInstagram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsMailbox } from "react-icons/bs"
import { BsTelephone } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { useForm } from "react-hook-form"

const Contact = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();

    console.log(errors);

    return (
        <section className="contact container">
                <div className="left">
                    <h2 className="title"><span className="line"></span>Get in touch</h2>
                    <p>Fill in the form below to send me an email</p>            
                    <form onSubmit={handleSubmit((data) => {
                        console.log(data);
                    })}>
                        <div className="grid-input">
                            <div>
                                <input {...register("fullName", {required: "Field can't be empty"})} placeholder="Full name" />
                                <span className="error-msg">{errors.fullName?.message}</span>
                            </div>

                            <div>
                                <input {...register("email", {required: "Field can't be empty"})} placeholder="Email" />
                                <span className="error-msg">{errors.email?.message}</span>
                            </div>
                        </div>
                        <div className="grid-input">
                            <div>
                                <input {...register("phoneNumber", {required: "Field can't be empty", minLength: {
                                    value: 4,
                                    message: "Minimum length is 7" 
                                }})} placeholder="Phone number" />
                                <span className="error-msg">{errors.phoneNumber?.message}</span>
                            </div>
                            <input {...register("subject")} placeholder="Subject" />
                        </div>
                        <div>
                            <textarea {...register("message", {required: "Field can't be empty"})} placeholder="Message" />
                                <span className="error-msg">{errors.message?.message}</span>
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
                <div className="right">
                    <h2 className="title"><span className="line"></span>Contact Information</h2>
                    <p className="mb-3">Use any of the social media links of your choice below to contact me</p>            
                    <div className="one-liner">
                        <BsMailbox />
                        <p>admdevs@email.com</p>
                    </div>
                    <div className="one-liner">
                        <BsTelephone />
                        <p>+23481 2345 6789</p>
                    </div>
                    <div className="social-links">
                        <a className="social-link" target="_blank" href="https://api.whatsapp.com/send?phone=08143410800" rel="noreferrer"><FaWhatsapp className="icon-" /></a>
                        <a className="social-link" target="_blank" href="https://twitter.com/Ahidjo_DM" rel="noreferrer"><BsTwitter className="icon-" /></a>
                        <a className="social-link" target="_blank" href="https://www.instagram.com/ahidjo.dm/" rel="noreferrer"><BsInstagram className="icon-" /></a>
                        <a className="social-link" target="_blank" href="https://www.linkedin.com/in/maishanu-ahijo-36bb7b1bb/" rel="noreferrer"><BsLinkedin className="icon-" /></a>
                        <a className="social-link" target="_blank" href="https://github.com/Aheedjo" rel="noreferrer"><BsGithub className="icon-" /></a>
                    </div>
                </div>
        </section>
    )
}

export default Contact
