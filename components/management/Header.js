import React from 'react';
import styles from '../../styles/header.module.css';
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"

const Header = () => {
    const { status } = useSession()

    async function onLogOut() {
        const status = await signOut('credentials', {
            redirect: true,
            callbackUrl: `/Login`
        });
    }

    const renderButton = () => {
        if (status == "authenticated") {
            return (
                <Link href="/Login" onClick={onLogOut}>
                    <h4 className={styles.pages}>Sign Out</h4>
                </Link>);
        } else if (status == "loading") {
            return <h4>Loading</h4>
        } else {
            return <Link href="/Login"><h4 className={styles.pages}>Sign In</h4></Link>
        }
    }


    return (
        <div className={styles.container}>
            <Link href="/">
                <h4 className={styles.pages}>Home</h4>
            </Link>
            <Link href="/About">
                <h4 className={styles.pages}>About</h4>
            </Link>
            <Link href="/Forum">
                <h4 className={styles.pages}>Forum</h4>
            </Link>
            <Link href="/Admin">
                <h4 className={styles.pages}>Admin</h4>
            </Link>
            {renderButton()}
        </div>
    )
}

export default Header;