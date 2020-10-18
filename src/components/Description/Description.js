import React from 'react'
import './styles.scss'

function Description() {

    const handleClick = () => {
        window.scrollTo({
            top: 4400,
            behavior: "smooth"
        })
    }
    return (
        <section className='section'>
            <div className='background-img'>
                <div className='container'>
                    <div className='section-title'>
                        <h2>FOR A SMARTER SUPPLY CHAIN</h2>
                        <div className='title-container'>
                            <h1>Take your business to the next level with Tinvio’s Supplier Platform</h1>
                        </div>
                    </div>
                    <div className='section-button'>
                        <button onClick={handleClick}>Get Started Now</button>
                        <h5>Yes, it’s free 🎉</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Description}
