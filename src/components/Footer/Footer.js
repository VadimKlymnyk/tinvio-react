import React from 'react'
import {Link} from "react-router-dom";
import logo from './img/logo.png'
import linkedIn from './img/linkedin.png'
import inst from './img/inst.png'
import googlePlay from './img/google-play.png'
import appStore from './img/app-store.png'
import './styles.scss'

const list = ['Home', 'Supplier', 'About', 'Contact', 'FAQ', 'Legal']

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='information'>
                    <Link to='/' className='logo-container'>
                        <img alt='' src={logo} className='logo'/>
                    </Link>
                    <nav>
                        {list.map((item, i) => 
                            <Link key={Date.now()+i} to={`/${item}`}>
                                {item}
                            </Link>
                        )}
                    </nav>
                    <div className='right-reserved'>© Tinvio™ 2019. All Rights Reserved</div>
                    <div className='social-media'>
                        <a href='instagram.com' target='_blank'>
                            <img alt='' src={inst} />
                        </a>
                        <a href='linkedin.com' target='_blank'>
                            <img alt='' src={linkedIn} />
                        </a>
                    </div>
                    <div className='application'>
                        <a href='apple.com' target='_blank'>
                            <img alt='' src={appStore} />
                        </a>
                        <a href='play.google.com' target='_blank'>
                            <img alt='' src={googlePlay} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}

export {Footer}
