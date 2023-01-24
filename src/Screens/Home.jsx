import React from 'react'
import './Home.css'



const Home = () => {
    const firstName = "Mariam "
    const lastName = "Al Adib"



    return (
        <>
            <main id="home">
                <div className='container-home' >
                    <div className='profile'>
                        <img src="./profile-PhotoRoom.png" width="285" height="500" alt=""
                            className="img-cover">
                        </img>
                        <div className="contact-icons" >
                            <a href="https://www.linkedin.com"><i className="bx bxl-linkedin"></i></a>
                            <a href="https://twitter.com"><i className="bx bxl-twitter"></i></a>
                            <a href="https://github.com"><i className="bx bxl-github"></i></a>

                        </div>


                    </div>


                    <div className="details">
                        <h1 className="lg-heading-firstname">
                            {firstName}
                            <span className="lastname">{lastName}</span>
                        </h1>

                        <h2 className="sm-heading" id="typed">
                            Full Stack Developer, Programmer, Designer
                        </h2>

                        <div className='short-paragraph'>
                            <p>I work to make a better web; easy to use and beautiful,</p>
                            <p>I design and develop Websites & Landing Pages.</p>
                        </div>

                        <div className="btn-group">
                            <a href="#contact" className="btn btn-primary blue">Get a Quote</a>

                            <a href="#about" className="btn btn-primary blue">About Me</a>
                        </div>



                    </div>



                </div>
            </main>
        </>
    )
}

export default Home