import React, { useState } from 'react'
import './Header.css'

const Header = () => {
    const [x, setX] = useState(false)

    // Set Initial State Of Menu
    // let showMenu = false;


    const changeMenu = () => {
        setX(!x)
        console.log(x)
    }

    return (
        <header>

            <div className="menu-btn" onClick={changeMenu}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>


            <div className="container">

                <div className="sidebar">


                    <nav id="mySidebar" className={x ? `menu show` : `menu close`}>

                        <ul className={x ? `menu-nav show` : `menu-nav close`} id="actions">
                            <li className={x ? `nav-item show` : `nav-item close`}>
                                <a href="#home" className='nav-link'>Home</a></li>
                            <li className={x ? `nav-item show` : `nav-item close`}>
                                <a href="#about" className='nav-link'>About Me</a></li>
                            <li className={x ? `nav-item show` : `nav-item close`}>
                                <a href="#skills" className='nav-link'>Skills</a></li>
                            <li className={x ? `nav-item show` : `nav-item close`}>
                                <a href="#myWork" className='nav-link'>My Work</a></li>
                            <li className={x ? `nav-item show` : `nav-item close`}>
                                <a href="#contact" className='nav-link'>Contact Me</a></li>
                        </ul>
                    </nav>



                </div >
            </div>










        </header >

    )
}

export default Header