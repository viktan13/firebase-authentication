import React, {useState} from 'react';
import {auth} from "../../firebase";
import {createUserWithEmailAndPassword} from 'firebase/auth'

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="sign-up-container">
            <form onSubmit={signUp}>
                <h1>Create an account</h1>
                <input
                    type="email"
                    placeholder="enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;