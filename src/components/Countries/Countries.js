import React from 'react'
import './styles.scss'

const list = [
    {flag: '🇸🇬',name: 'Singapore',},
    {flag: '🇦🇺',name: 'Australia',},
    {flag: '🇭🇰',name: 'Hong Kong',},
    {flag: '🇮🇳',name: 'India',},
    {flag: '🇮🇩',name: 'Indonesia',},
    {flag: '🇹🇼',name: 'Taiwan',},
    {flag: '🇹🇭',name: 'Thailand',},
    {flag: '🇻🇳',name: 'Vietnam',},
]

function Countries() {
    return (
        <div className='base'>
            <div className='base-container'>
                {list.map((item, i) => 
                    <div key={Date.now()+i} className='item-container'>
                        <span>{item.flag}</span>
                        <h5>{item.name}</h5>
                    </div>
                )}
            </div>
        </div>
    )
}

export {Countries}
