import React from 'react'
import './MyWorks.css'

const MyWorks = () => {
    return (
        <main class="myWork" id="myWork">
            <h2 className='text-center-work'> MY WORKS  </h2>
            <h5 className='text-center2'>Portfolio</h5>
            {/* <hr className='hr-2' /> */}

            <div className='project-box'>
                <div className='projects'>
                    {/* data-aos="zoom-in-down" */}
                    <img src="./ProShop.png" alt="" width='1700' height='700' className="img-proshop" />

                    <div className='layer'>
                        <h1>ProShop</h1>
                        <a href="https://astonishing-centaur-98915d.netlify.app/"><i className='bx bx-link-external' ></i></a>
                    </div>

                </div>
                <div className='projects'>
                    {/* data-aos="zoom-in-down" */}
                    <img src="./LinkdinClone.png" alt="" width='1700' height='700' />
                    <div className='layer'>
                        <h1>LinkdinClone</h1>
                        <a href=" https://mariamadib.github.io/linkedin-clone/"><i className='bx bx-link-external' ></i></a>
                    </div>

                </div>
                <div className='projects'>
                    {/* data-aos="zoom-in-down" */}
                    <img src="./Landing page.PNG" alt="" width='1700' height='700' />
                    <div className='layer'>
                        <h1>Tailwind LandingPage</h1>
                        <a href=" https://tailwindproject12.netlify.app"><i className='bx bx-link-external' ></i></a>
                    </div>

                </div>

            </div>
        </main>
    )
}

export default MyWorks