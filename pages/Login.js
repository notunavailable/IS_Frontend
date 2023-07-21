import React, { useState, useEffect } from 'react';
import styles from '../styles/form.module.css';
import { signIn } from "next-auth/react"
import { hash } from 'bcryptjs';
import {USER_REGISTER} from '../utils/api-defs'
import { useRouter } from 'next/router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [birthday, setBirthday] = useState(new Date());

    const router = useRouter();

    const [isSignUp, setIsSignUp] = useState(false);

    async function onSignInSubmit() {
        try {
            const status = await signIn('credentials', {
                redirect: false,
                email: email,
                password: password,
                callbackUrl: '/'
            });

            if (status.error) {
                alert(status.error); 
            } else {
                router.push('/');
            }
        } catch (error) {
            if (error.message === 'incorrect_password') {
                alert('Incorrect password');
            }
        }
    }

    const onSignUpSubmit = async () => {
        if (!email || !email.includes('@') || !password) {
            alert('Invalid details');
            return;
        }

        const hashedPassword = await hash(password, 12);

        const res = await fetch(USER_REGISTER(), {
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

        const data = await res.json();

        const status = await signIn('credentials', {
            redirect: true,
            email: email,
            password: password,
            callbackUrl: '/'
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

    return (
        <div className={styles.container}>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (isSignUp) {
                    onSignUpSubmit();
                } else {
                    onSignInSubmit();
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
                    <input
                        type="submit"
                        value={isSignUp ? "Sign Up" : "Sign In"}
                    />
                </div>
            </form>
            <div className={styles.containerItem}>
                <button onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp ? "Already registered? Sign In" : "New user? Sign Up"}
                </button>
            </div>
        </div>
    )
}

export default Login;