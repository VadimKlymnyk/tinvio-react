import React, {useEffect, useState} from 'react'
import lottie from 'lottie-web'
import Before from './img/Before.png'
import animation from './img/animation.json'
import './styles.scss'

function Communication() {
    const [visible, setVisible] = useState(false)
    

    useEffect(() => {
            const anim = lottie.loadAnimation({
                container: document.querySelector('#animation'),
                animationData: animation,
            })
            if(visible)anim.play()
            else anim.pause()
         
    }, [visible])

    useEffect(() => {
        document.getElementById("btn-before").classList.add('btn-active')
    }, [])

    const handleBefore = () => {
        document.getElementById("btn-before").classList.add('btn-active')
        document.getElementById("btn-after").classList.remove('btn-active')
        setVisible(false)
    }

    const handleAfter = () => {
        document.getElementById("btn-after").classList.add('btn-active')
        document.getElementById("btn-before").classList.remove('btn-active')
        setVisible(true)
    }


    return (
        <section className='section-four'>
            <div className='container'>
                <div className='communication-container'>
                    <div className='communication-image'>
                        <div className='image-container'>
                            { visible 
                            ? <div id='animation'></div>
                            : <img alt='' className='carousel-image' src={Before}></img>}
                        </div>
                    </div>
                    <div className='communication-menu'>
                        <h1>Communication</h1>
                        <div className='btn-container'>
                            <button id='btn-before' onClick={handleBefore}>BEFORE</button>
                            <button id='btn-after' onClick={handleAfter}>AFTER</button>
                        </div>
                        <div className='divider'/>
                        {visible ? <h3>New-age Control</h3> : <h3>Old-School Chaos</h3>}
                        {visible ? <h4>Real-time chats with all your customers organized in one place. Perfectly formated orders designed to prevent mistakes</h4>
                         : <h4>Unstructured orders across multiple apps and inboxes. New message notifications and alerts every few minutes</h4>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Communication}
