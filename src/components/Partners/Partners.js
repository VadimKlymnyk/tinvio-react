import React from 'react'
import HomePageShadow from './HomePageShadow.png'
import GoCheken from './img/GoCheken.png'
import Jolliebean from './img/Jolliebean.svg'
import Bens from './img/Bens.svg'
import SimplyWrapps from './img/SimplyWrapps.png'
import Italian from './img/Italian.png'
import './styles.scss'

const listLogo = [GoCheken, Jolliebean, Bens, SimplyWrapps, Italian]

function Partners() {
    return (
        <section className='section-two'>
            <img className='img-home-page' src={HomePageShadow}></img>
            <div className='container'>
                <h1>Trusted by 1000+ partners across APAC</h1>
                <ul className='list-logo'>
                    {listLogo.map((logo, i) => <li key={Date.now()+i}>
                        <img src={logo}></img>
                        </li>
                    )}
                    
                </ul>
            </div>
        </section>
    )
}

export {Partners}
