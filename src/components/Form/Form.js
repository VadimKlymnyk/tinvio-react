import React from 'react'
import icon from './img/icon-24-phone.png'
import './styles.scss'

function Form() {
    return (
        <div id='form-get-started' className='base-form'>
            <div className='form-items'>
                <div className='form-title'><h3>Hi, we are Tinvio! And you?</h3></div>
                <div className='form-item'>
                    <div className='input-container'>
                        <input placeholder='Name'></input>
                    </div>
                </div>
                <div className='form-item'>
                    <div className='input-container'>
                        <input placeholder='Business Name'></input>
                    </div>
                </div>
                <div className='form-item-phone'>
                    <div className='form-item'>
                        <div className='input-container'>
                            <input className='pre-phone' placeholder='+65'></input>
                        </div>
                    </div>
                    <div className='form-item'>
                        <div className='input-container'>
                            <input className='main-phone' ></input>
                            <img alt='' src={icon}></img>
                        </div>
                    </div>
                </div>
                <div className='form-footer'>
                    <button>Get Started</button>
                    <p>No spam, promise <span role='img' aria-label="promise">🙌</span></p>
                </div>
            </div>
        </div>
    )
}

export {Form}
