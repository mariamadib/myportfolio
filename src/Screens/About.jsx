import React from 'react'
import './About.css'

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <h2 className='text-center'> WHAT I DO ! </h2>
                {/* <hr /> */}

                <div class="rounded-box">
                    <div class="rounded-card" data-aos="flip-right">
                        <div className="s-icons">
                            <i className='bx bx-code-alt' ></i>
                        </div>
                        <div className='title'>
                            <h4 class="sub-title">Web Development</h4>
                            <p class="paragraph">the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
                        </div>
                    </div>

                    <div class="rounded-card" data-aos="flip-right" >
                        <div className="s-icons">
                            <i className='bx bx-mobile-alt' ></i>
                        </div>
                        <div className='title'>
                            <h4 class="sub-title">Frontend Development</h4>
                            <p class="paragraph">provide insights and data that can be used to create a better user experience for website visitors.</p>
                        </div>
                    </div>

                    <div class="rounded-card" data-aos="flip-right"  >
                        <div className="s-icons">
                            <i className='bx bx-mobile-alt' ></i>
                        </div>
                        <div className='title'>
                            <h4 class="sub-title">Backend Development</h4>
                            <p class="paragraph">Enjoy creative problem solving and getting exposure to multiple projects with NodeJs,Express & mongoDB</p>
                        </div>
                    </div>

                    <div class="rounded-card" data-aos="flip-right" >
                        <div className="s-icons">
                            <i className='bx bx-code-alt' ></i>
                        </div>
                        <div className='title'>
                            <h4 class="sub-title">MERN Stack Developer</h4>
                            <p class="paragraph">Designed, developed and modified web Apps with MERN technologies.</p>
                        </div>
                    </div>

                </div>
                <div className='experience' data-aos="flip-left" >
                    <h2 className='text-center-exp'> Experience  </h2>
                    <hr className='exp' />
                    <div className="experience-card">
                        <div className="s-icons">
                            <i className='bx bx-briefcase' ></i>
                        </div>
                        <div className='exp-box'>
                            <h3 className='title-exp'>Experience</h3>
                            <p className='p-exp'>Freelancer-Mern Stack Developer </p>
                            <p className='experience-p'>2020 - Present </p>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default About