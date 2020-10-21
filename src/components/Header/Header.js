import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import './styles.scss'
import Logo from './logo.svg'
import iconMenu from './icon-menu.png'

export const Header = () => {
    const [small, setSmall] = useState(false)

    window.onscroll = () => scrollFunc()
    window.onresize = () => sizeFunc()

    useEffect(() => {
        sizeFunc()
    }, [])

    const scrollFunc = () => {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            document.getElementById('header').style.background = 'white'
        }else{
            document.getElementById('header').style.background = ''
        }
    }

    const sizeFunc = () => {
        if(window.innerWidth < 768) setSmall(true)
        if(window.innerWidth >= 768) setSmall(false)
    }

    const handleClick = () => {
        console.log('Open menu')
    }

    return (
        <div className='header-top'>
            <div id='header' className='header-main'>
                <div className='container'>
                    <header className='header'>
                        <div className='navbar'>
                            <Link to='/'>
                                <img alt='' src={Logo} className='logo'/>
                            </Link>
                            {!small ? <nav className='header-menu'>
                                <Link to='/'>
                                    Home
                                </Link>
                                <Link to='/suppliers'>
                                    Suppliers
                                </Link>
                                <Link to='/about'>
                                    About
                                </Link>
                                <Link to='/contract'>
                                    Contact
                                </Link>
                            </nav> : null}
                        </div> 
                        <div className='btn-container'>
                            {small ? <span className='icon-menu' onClick={handleClick}>
                                        <img alt='' src={iconMenu} />
                                     </span>
                                   :    <button className='header-btn'>
                                            Get Started
                                        </button>
                            }
                        </div> 
                    </header> 
                </div>
            </div>
        </div>
        
            
            
        
    )
}
