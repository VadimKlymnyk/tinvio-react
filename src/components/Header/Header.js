import React from 'react'
import {Link} from "react-router-dom";
import './styles.scss'
import Logo from './logo.svg'

export const Header = () => {
    window.onscroll = () => scrollFunc()

    const scrollFunc = () => {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            document.getElementById('header').style.background = 'white'
        }else{
            document.getElementById('header').style.background = ''
        }
    }

    return (
        <div className='header-top'>
            <div id='header' className='header-main'>
                <div className='container'>
                    <header className='header'>
                        <div className='navbar'>
                            <Link to='/'>
                                <img src={Logo} className='logo'/>
                            </Link>
                            <nav className='header-menu'>
                                {/* <div className="divider"/> */}
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
                            </nav>
                        </div> 
                        <div className='btn-container'>
                            <button className='header-btn'>
                                Get Started
                            </button>
                        </div> 
                    </header> 
                </div>
            </div>
        </div>
        
            
            
        
    )
}
