import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { BsTwitter, BsMailbox, BsInstagram, BsLinkedin, BsTelephone, BsGithub } from "react-icons/bs"
import { useForm } from "react-hook-form"
import emailjs from "emailjs-com"

const Contact = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const [statusMessage, setStatusMessage] = useState("Fill in the form below to send me a message")

    const onSubmit = () => {
        emailjs.sendForm('service_8qgli29', 'template_o8veyrt', '.form', '1qjUF6DjZjE5gJPhV')
            .then((result) => {
                setStatusMessage("Message sent successfully, and I'll make sure to get back to you within 24 hours.");
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        reset();
    };

    return (
        <>
            <div className='container my-5'>
                <h1 className='text-3xl text-center uppercase'>Contact Me</h1>
                <p className='status-message text-center'>{statusMessage}</p>            
            </div>
            <section className="contact container">
                    <div className="left">
                        <h2 className="title"><span className="line"></span>Get in touch</h2>

                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid-input">
                                <div>
                                    <input 
                                    {...register("fullName", {
                                        required: "required"
                                    })} 
                                    placeholder="Full Name" 
                                    name="fullName" 
                                    />
                                    {
                                        errors.fullName && errors.fullName.type === "required" && (
                                            <span className="error-msg">Field can't be empty</span>
                                        )
                                    }
                                </div>

                                <div>
                                    <input 
                                    {...register("email", {
                                        required: "required"
                                    })} 
                                    placeholder="Email" 
                                    name="email" 
                                    />
                                    {
                                        errors.email && errors.email.type === "required" && (
                                            <span className="error-msg">Field can't be empty</span>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="grid-input">
                                <div>
                                    <input 
                                    {...register("phoneNumber", {
                                        required: "required"
                                    })} 
                                    placeholder="Phone Number" 
                                    name="phoneNumber" 
                                    />
                                    {
                                        errors.phoneNumber && errors.phoneNumber.type === "required" && (
                                            <span className="error-msg">Field can't be empty</span>
                                        )
                                    }
                                </div>

                                <div>
                                    <input 
                                    {...register("subject", {
                                        required: "required"
                                    })} 
                                    placeholder="Subject" 
                                    name="subject" 
                                    />

                                </div>
                            </div>
                            <div>
                                <textarea 
                                {...register("message", {
                                    required: "required"
                                })} 
                                placeholder="Message" 
                                name="message"
                                />
                                {
                                    errors.message && errors.message.type === "required" && (
                                        <span className="error-msg">Field can't be empty</span>
                                    )
                                }
                            </div>
                            <button type="submit" className="btn">Send</button>
                        </form>
                    </div>

                    <div className="right">
                        <h2 className="title"><span className="line"></span>Contact Information</h2>
                        <p className="mb-3">Use any of the social media links of your choice below to contact me</p>            
                        <div className="one-liner">
                            <BsMailbox />
                            <p>maishanu.ahijo@yahoo.com</p>
                        </div>
                        <div className="one-liner">
                            <BsTelephone />
                            <p>+23481 4341 0800</p>
                        </div>
                        <div className="social-links">
                            <a className="social-link" target="_blank" href="https://www.linkedin.com/in/maishanu-ahidjo-36bb7b1bb/" rel="noreferrer"><BsLinkedin className="icon-" /></a>
                            <a className="social-link" target="_blank" href="https://github.com/Aheedjo" rel="noreferrer"><BsGithub className="icon-" /></a>
                            <a className="social-link" target="_blank" href="https://twitter.com/Ahidjo_DM" rel="noreferrer"><BsTwitter className="icon-" /></a>
                            <a className="social-link" target="_blank" href="https://api.whatsapp.com/send?phone=08143410800" rel="noreferrer"><FaWhatsapp className="icon-" /></a>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Contact
