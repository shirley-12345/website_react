import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destination!</h1>
            <div className='crads__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explor the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/products'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
