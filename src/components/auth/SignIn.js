import React, {useState} from 'react';
import {auth} from "../../firebase";
import {signInWithEmailAndPassword} from 'firebase/auth'

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1>Log in to your account</h1>
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
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default SignIn;