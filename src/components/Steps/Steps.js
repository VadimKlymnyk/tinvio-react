import React from 'react'
import icon1 from './img/group1.png'
import icon2 from './img/group2.png'
import icon3 from './img/group3.png'
import './styles.scss'

const list = [
    {
        icon: icon1,
        title: 'Get in Touch With Us',
        text: 'Fill up the from and we\'ll reach out to you',
    },
    {
        icon: icon2,
        title: 'Connect to Your Clients',
        text: 'They’ll receive a fully guided tutorial on how to order',
    },
    {
        icon: icon3,
        title: 'On boarded In a Heartbeat',
        text: 'Activated and live within a day',
    },
]

function Steps() {
    return (
        <section className='section-six'>
            <div className='section-container'>
                <div className='title-container'>
                    <h3>ARE YOU READY?</h3>
                    <h1>3 Simple Steps to Get Started</h1>
                </div>
                <div className='steps'>
                    {list.map((item, i) => 
                        <div key={Date.now()+i} className='container-step'>
                            <img className='step-image' src={item.icon}></img>
                            <div className='step-footer'>
                                <h2>{item.title}</h2>
                                <h4>{item.text}</h4>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export {Steps}
