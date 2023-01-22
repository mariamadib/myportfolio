import React, { useRef } from 'react'
import './ContactMe.css'
import emailjs from 'emailjs-com'


const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_u3pweqc",
                "template_k5nr9w8",
                form.current,
                "VODe3px-_5k6h1NFW"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <>
            <section className='contact' id='contact'>

                <div className='text-center-skills'>
                    <h2>
                        Contact Me!
                    </h2>
                    <h4>Interested in working together? <span>Let's have a talk.</span>.</h4>
                    <p>
                        I'm a Full stuck web developer - creating bold & brave interface
                        design for companies all across the world.
                    </p>
                    <div className='list'>
                        <ul>
                            <li><i className='bx bx-phone'></i><a className='phone' href="tel:+96176321608">+961 76 321 608</a></li>
                            <li><i className='bx bxl-gmail'></i><a className='phone' href="mailto:mariam.al.adib1@gmail.com">mariam.al.adib1@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div
                    className='contact-form'

                >
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            name="user_name"
                            type='text'
                            placeholder='Your name'
                            required
                        />
                        <input
                            type='email'
                            name="user_email"
                            placeholder='Your Email Address'
                            required
                        />
                        <textarea
                            id='message'
                            name='message'
                            cols='35'
                            rows='10'
                            placeholder='How Can I Help You '
                            required
                        ></textarea>
                        <input type="submit" value="Send Message" className="submit" required />

                    </form>
                </div>

            </section>

        </>
    )
}

export default ContactMe