import React, {useState, useEffect} from 'react'
import Analytics from './img/Analytics.png'
import Costs from './img/Costs.png'
import Orders from './img/Orders.png'
import iconBtn from './img/icon-btn.png'
import './styles.scss'

const list = [
    {
        title: 'All your orders in one place',
        text: 'Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform',
        image: Orders,
    },
    {
        title: 'Grow with insights',
        text: 'Manage new revenue opportunities with personalized catalogs, unlock business insights on sales volume, analyze order habits and trends',
        image: Analytics,
    },
    {
        title: 'Cut operational costs',
        text: 'Receive structured orders, digitize invoices, automate workflows, collect payments, or connect directly to your ERP systems',
        image: Costs,
    }
]

function SliderSection() {
    const [sliderIndex, setSliderIndex] = useState(0)

    useEffect(() => {
        const dots = document.getElementsByClassName("dot");
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[sliderIndex].className += " active";
        if(sliderIndex === 1){
            const img = document.getElementsByClassName("carousel-image");
        }
    }, [sliderIndex])

    const handleMinus = () => {
        if(sliderIndex === 0) setSliderIndex(2)
        else setSliderIndex(prev => prev - 1)
    }

    const handlePlus = () => {
        if(sliderIndex === 2) setSliderIndex(0)
        else setSliderIndex(prev => prev + 1)
    }    

    return (
        <section className='section-three'>
            <div className='slider'>
                <div className='slider-menu'>
                    <div className='title-container'>
                        <h1>{list[sliderIndex].title}</h1>
                        <h4>{list[sliderIndex].text}</h4>
                    </div>
                    <div className='select-container'>
                        <button onClick={handleMinus}><img alt='' className='left-icon' src={iconBtn}></img></button>
                        <div className="slider-dots">
                            <span onClick={() => setSliderIndex(0)}><div className="dot"/></span> 
                            <span onClick={() => setSliderIndex(1)}><div className="dot"/></span> 
                            <span onClick={() => setSliderIndex(2)}><div className="dot"/></span> 
                        </div>
                        <button onClick={handlePlus}><img alt='' src={iconBtn}></img></button>
                    </div>
                </div>
                <div className='slider-image'>
                    <div className='image-container'>
                        <img alt='' className={`carousel-image${sliderIndex}`} src={list[sliderIndex].image}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {SliderSection}
