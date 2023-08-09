import React from 'react';
import { Button } from '../Button/Button'
import './HeroSection.css'
import CardItem from '../CutPrice/CutPriceItem'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>FIND YOUR CAMERA</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">

                <Button className="btns" buttonStyle='btn--outline'
                    buttonSize='btn--large'>CUT-PRICE CAMERA</Button>

                <Button className="btns" buttonStyle='btn--primary'
                    buttonSize='btn--large'>BRAND OF CAMERA</Button>
            </div>
            {/* <div className='cards'>
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
            </div> */}
        </div>



    )
}

export default HeroSection

