import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../Nav';
import './ProfileScreen.css';
import { useDispatch } from 'react-redux';
import { clearUserAction } from '../store/actions';

function ProfileScreen() {
    const user = useSelector((state) => state?.user?.user);

    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(clearUserAction());
    };

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/128009228/original/8e8ad34b012b46ebd403bd4157f8fef6bb2c076b/design-minimalist-flat-cartoon-caricature-avatar-in-6-hours.jpg"
                        alt="" />

                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <div className="profileScreen__standard subs">
                                <span>Netflix Standard - 1080p</span>
                                <button className="profileScreen__subscribe">Subscribe</button>
                            </div>
                            <div className="profileScreen__basic subs">
                                <span> Netflix Basic - 480p</span>
                                <button className="profileScreen__subscribe">Subscribe</button>
                            </div>
                            <div className="profileScreen__premium subs">
                                <span>Netflix Premium - 4K+HDR</span>
                                <button className="profileScreen__subscribe">Subscribe</button>
                            </div>
                            <button onClick={signOut} className="profileScreen__signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProfileScreen
