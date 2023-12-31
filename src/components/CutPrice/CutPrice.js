import React from 'react'
import CardItem from './CutPriceItem'
import './CutPrice.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Our Cut Price</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explor the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/products'
                        />

                        <CardItem
                            src='images/img-2.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
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
