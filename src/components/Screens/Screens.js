import React from 'react'
import Screen1 from './img/Screen1.png'
import Screen2 from './img/Screen2.png'
import Screen3 from './img/Screen3.png'
import iconCheck from './img/icon-check.png'
import iconChevron from './img/icon-chevron.png'
import './styles.scss'

const list = [
    {
        image: Screen1,
        text: 'Select Items',
        icon: iconChevron
    },
    {
        image: Screen2,
        text: 'Review Order',
        icon: iconChevron
    },
    {
        image: Screen3,
        text: 'Send Order',
        icon: iconCheck
    },
]


function Screens() {
    return (
        <section className='section-five'>
            <div className='information'>
                <div className='container-title'>
                    <h1>Seamless Ordering Experience</h1>
                    <h4>Increase your sales by 30% with a better checkout experience. Your customers can place orders easily with a few taps on the item list</h4>
                </div>
                <div className='list-screen'>
                    {list.map((item, i) => 
                        <div key={Date.now()+i} className='container-screen'>
                            <img className='screen-image' src={item.image}></img>
                            <div className='screen-footer'>
                                <h5>{item.text}</h5>
                                <img src={item.icon}></img>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export {Screens}
