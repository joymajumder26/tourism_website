
import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Registration.css'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";


const Registration = () => {
    let location = useLocation();
    const history = useHistory()
    let { from } = location.state || { from: { pathname: "/" } };


    const { processLogin } = useAuth();
    const { signInUsingGoogle } = useAuth()
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();
// handle registration
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        if (isLogin) {
            processLogin(email, password, history, from);
        }
        else {
            registerNewUser(email, password);
        }



    }
// registernewuser
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user.displayName);
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
                // history.replace(from);



            })
            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {

        setPassword(e.target.value);

    }
    return (
        // registration info input
        <div className='register-form'>
            <div>
                <h1>Please {isLogin ? 'Login' : 'Register'}</h1>

                <form onSubmit={handleRegistration} className="container" id=" contactForm">
                    <div className="row align-items-stretch mb-5">
                        <div className="container col-md-12 ">
                            {!isLogin &&
                                <div className="form-group ">

                                    <input onBlur={handleNameChange} className="form-control mb-4" id="name" type="text" placeholder="Your Name *"
                                        data-sb-validations="required" style={{ height: "60px" }} />

                                </div>
                            }
                            <div className="form-group">

                                <input onBlur={handleEmailChange} className="form-control  mb-4" id="email" type="email" placeholder="Your Email *"
                                    data-sb-validations="required,email" style={{ height: "60px" }} required />

                            </div>
                            <div className="form-group mb-md-0">

                                <input onBlur={handlePasswordChange} className="form-control  mb-4" id="phone" type="password" placeholder="Your Password *"
                                    data-sb-validations="required" style={{ height: "60px" }} required />

                            </div>
                        </div>

                    </div>


                    <div className="text-danger">{error}</div>
                    <button type="submit" className="btn btn-warning">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already Registered?
                                </label>
                            </div>
                        </div>
                    </div>
                </form>

                <div>-------------or----------</div>
                <button onClick={() => signInUsingGoogle(history, from)} className='btn btn-warning m-5'><i class="fab fa-google-plus"></i> Google Sign In</button>
            </div>
        </div>
    );

};


export default Registration;