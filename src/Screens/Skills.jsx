import React from 'react'
import './Skills.css'

const Skills = () => {
    return (

        <main class="skills" id="skills">
            <h2 className='text-center-skills'> What My Skills Include </h2>
            {/* <hr /> */}

            <div className='box-skills' >
                <div className="frontback-card">
                    <div className="s-icons">
                        <i className='bx bx-mobile-alt' ></i>
                    </div>
                    <h3 className='title2'>Frontend Development</h3>
                    <p className='desc'>to extract your imagination & apply it on the browser </p>
                    <hr className='frontend-hr' />

                    <div class="rows" >
                        <img src="/css3.png" alt="" className='skill' />
                        <p>CSS 3</p>
                    </div>

                    <div class="rows" >
                        <img src="/react.png" alt="" className='skill' />
                        <p> React</p>
                    </div>

                    <div class="rows" >
                        <img src="/redux.png" alt="" className='skill' />
                        <p>Redux</p>
                    </div>
                </div>

                <div className="frontback-card">
                    <div className="s-icons">
                        <i className='bx bx-mobile-alt' ></i>
                    </div>
                    <h3 className='title2'>Backend Development</h3>
                    <p className='desc'>to implement business logic & the "behind the scenes" of your project </p>
                    <hr className='frontend-hr' />

                    <div class="rows" >
                        <img src="/node.png" alt="" className='skill' />
                        <p>NodeJS</p>
                    </div>

                    <div class="rows" >
                        <img src="/mongo.png" alt="" className='skill' />
                        <p>MongoDB</p>
                    </div>

                    <div class="rows" >
                        <img src="/api-1.png" alt="" className='skill' />
                        <p>RESTful API </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Skills