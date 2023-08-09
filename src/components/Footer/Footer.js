import React from 'react'
import { Button } from "../Button/Button";

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
        </div>
    )
}

export default Footer
