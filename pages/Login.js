import React, { useState } from 'react';
import styles from '../styles/form.module.css';
import { signIn } from "next-auth/react"
import { hash } from 'bcryptjs';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [birthday, setBirthday] = useState(new Date());

    const [isSignUp, setIsSignUp] = useState(false);

    async function onSignInSubmit() {
        const status = await signIn('credentials', {
            redirect: true,
            email: email,
            password: password,
            callbackUrl: 'http://localhost:3000'
        });
        console.log(status);
    }

    const onSignUpSubmit = async () => {

        //Validation
        if (!email || !email.includes('@') || !password) {
            alert('Invalid details');
            return;
        }
        const hashedPassword = await hash(password, 12);
        //POST form values
        const res = await fetch('http://localhost:5001/api/v1/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: hashedPassword,
                firstName: firstName,
                lastName: lastName,
                username: username,
                birthday: birthday,
            }),
        });

        //Await for data for any desirable next steps
        const data = await res.json();

        //Sign in user
        const status = await signIn('credentials', {
            redirect: true,
            email: email,
            password: password,
            callbackUrl: 'http://localhost:3000/'
        });

    };

    const renderSignUpForm = () => {
        if (isSignUp) {
            return (
                <div>
                    <div className={styles.containerItem}>
                        <label>First Name:</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className={styles.containerItem}>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className={styles.containerItem}>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={styles.containerItem}>
                        <label>Birthday:</label>
                        <input
                            type="date"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                        />
                    </div>
                </div>

            )
        }
        return;
    }

    const renderSignInButton = () => {
        if (isSignUp) {
            return;
        }
        return (
            <input
                type="submit"
                value="Sign In"
                onClick={() => onSignInSubmit()}
            />
        )
    }

    return (
        <div className={styles.container}>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (isSignUp) {
                    onSignUpSubmit();
                } else {
                    setIsSignUp(true);
                }
            }}>
                <div className={styles.containerItem}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.containerItem}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {renderSignUpForm()}
                <div className={styles.containerItem}>
                    {renderSignInButton()}
                    <input
                        type="submit"
                        value="Sign Up"
                    />
                </div>
            </form>
        </div>
    )
}

export default Login;