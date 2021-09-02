import React, { useEffect, useState } from 'react';
import './Nav.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from './assets/netflix-logo.png'

function Nav() {

    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {

        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.addEventListener("scroll", transitionNavBar)
    }, []);



    return (
        <div className={`nav ${show && 'nav__black'} `}>
            <div className="nav__contents">
                <img
                    onClick={() => history.push('/')}
                    className="nav__logo"
                    src={Logo} alt=""
                />
                <img
                    onClick={() => history.push('/profile')}
                    className="nav__avatar"
                    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/128009228/original/8e8ad34b012b46ebd403bd4157f8fef6bb2c076b/design-minimalist-flat-cartoon-caricature-avatar-in-6-hours.jpg" alt=""
                />

            </div>
        </div>
    )
}

export default Nav
