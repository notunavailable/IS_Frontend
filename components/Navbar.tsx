import Link from "next/link";
import styles from './styles/navbar.module.css';
import SignOut from './SignOut'
import SignIn from "./SignIn";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/">Home</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/register">Register</Link>
            <SignOut/>
            <SignIn/>
        </div>
    );
}

export default Navbar;