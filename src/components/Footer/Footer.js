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
                    <Link to='/'>
                        <img src={logo} className='logo'/>
                    </Link>
                    <nav>
                        {list.map((item, i) => 
                            <Link key={Date.now()+i} to={`/${item}`}>
                                {item}
                            </Link>
                        )}
                    </nav>
                    <div className='social-media'>
                        <a href='http://instagram.com' target='_blank'>
                            <img src={inst} />
                        </a>
                        <a href='http://linkedin.com' target='_blank'>
                            <img src={linkedIn} />
                        </a>
                    </div>
                    <div className='application'>
                        <a to='https://www.apple.com/' target='_blank'>
                            <img src={appStore} />
                        </a>
                        <a to='https://play.google.com/' target='_blank'>
                            <img src={googlePlay} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}

export {Footer}
