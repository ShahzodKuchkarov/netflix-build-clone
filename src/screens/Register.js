import React, { useRef, useState } from 'react';
import { auth } from '../firebase/firebase';
import './Register.css';
import Loader from '../components/Loader';
import addUser from '../utils/users';

function Register() {
    const [sign, setSign] = useState(false);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const lastNameRef = useRef(null);
    const phoneNumberRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        setLoading(true);
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser);
                addUser(emailRef.current.value, passwordRef.current.value, nameRef.current.value, lastNameRef.current.value, phoneNumberRef.current.value);
                setLoading(false);
                setSign(true);
            })
            .catch((error) => {
                console.log(error.message);
                setErr(error.message);
                setLoading(false);
            })
    };
    return (
        <div className="register">
            <form>
                <Loader loading={loading} />
                <h1>Sign Up</h1>
                <h3>{err}</h3>
                <input ref={nameRef} type="text" placeholder="Name" />
                <input ref={lastNameRef} type="text" placeholder="Last Name" />
                <input ref={phoneNumberRef} type="number" placeholder="Phone Number" />
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type="submit" onClick={register}>Sign Up</button>
            </form>
        </div>
    )
}

export default Register
