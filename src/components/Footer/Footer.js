import React from 'react'
import { Button } from "../Button/Button";
import './Footer.css'
import { IoCameraOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to recevice our best vacation deals
                </p>
                <p className='footer-scription-text'>
                    You can unscription at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            type='email'
                            name='email'
                            palceholder='Your email'
                            className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h3>ABOUT HKCamera</h3>
                        <Link to='/sign-up'>About Us</Link>
                        <Link to='/'>Join Us</Link>
                        <Link to='/'>Sustainability</Link>
                        <Link to='/'>Corporate Procurement</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h3>HELP & INFORMATION</h3>
                        <Link to='/sign-up'>Contact Us</Link>
                        <Link to='/'>Quick Start Guide</Link>
                        <Link to='/'>FAQs</Link>
                        <Link to='/'>Product & Stocks</Link>
                        <Link to='/'>Exchange & Refund</Link>
                        <Link to='/sign-up'>Payment</Link>
                        <Link to='/'>Sitemap</Link>
                        <Link to='/'>Brand Service Center</Link>
                        <Link to='/'>Store Center</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h3>OUR SERVICES</h3>
                        <Link to='/sign-up'>Installation Service</Link>
                        <Link to='/'>Installation Service</Link>
                        <Link to='/'>Deliver & PickUp</Link>
                        <Link to='/'>Workshop</Link>
                        <Link to='/'>Add-on Service</Link>
                        <Link to='/'>Membership</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h3>Legal</h3>
                        <Link to='/sign-up'>Terms & Conditions</Link>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>Terms of Use</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to="/" className="navbar-logo">
                            <IoCameraOutline color='white'
                                className="cameraicon"
                                alignItems="right"
                                size={50}
                            />
                            <p>HKCamera</p>
                        </Link>
                    </div>
                    <small className='website-rights'>HKCamera © 2023</small>
                    <div className='social-icons'>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
