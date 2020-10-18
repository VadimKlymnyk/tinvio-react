import React from 'react'
import { Countries } from '../Countries/Countries'
import { Form } from '../Form/Form'
import left from './img/arrow-left.png'
import right from './img/arrow-right.png'
import './styles.scss'

function GetStarted() {
    return (
        <section className='section-seven'>
            <div className='container'>            
                <div className='section-container'>
                    <div className='left-column'>
                        <h4>let’s do this</h4>
                        <h1>Fill up the form and we’ll get in touch within a few hours</h1>
                        <div className='countries-container'>
                            <div className='arrow-text'>
                                <img src={right}></img>
                                <p>Or meet us in</p>
                            </div>
                            <Countries/>
                        </div>
                    </div>
                    <div className='right-column'>
                        <div className='form-container'>
                            <div className='arrow-text'>
                                <img src={left}></img>
                                <p>Let’s get to know each other</p>
                            </div>
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {GetStarted}
