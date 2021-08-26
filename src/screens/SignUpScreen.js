import React, { useRef, useState } from 'react'
import { auth } from '../firebase';
import './SignUpScreen.css';
import { useDispatch } from 'react-redux';
import { } from "antd";
import { updateUserAction } from '../store/actions';
import Loader from '../components/Loader';

function SignUpScreen() {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState();
    const dispatch = useDispatch();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                console.log(error.message)
            })
    };




    const signIn = (e) => {
        e.preventDefault();
        setLoading(true)
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value

        ).then((authUser) => {
            console.log(authUser.user)
            dispatch(
                updateUserAction({
                    uid: authUser.user.uid,
                    email: authUser.user.email,
                })
            );
            setLoading(false);
        }).catch((error) => {
            console.log(error.message)
            setErr(error.message);
            setLoading(false);
        })
    };

    return (
        <div className="signupScreen">
            <Loader loading={loading} />
            <form>
                <h1>Sign In</h1>
                <h3>{err}</h3>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signupScreen__gray">
                        New to Netflix?
                    </span>
                    <span onClick={register} className="signupScreen__link">
                        Sign Up now.
                    </span>

                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen
