'use'
import Link from "next/link";
import '../styles/globals.css';

const Navbar = () => {
    return (
        <div className="container">
            <Link href="/skills">Skills</Link>
            <Link href="/">Home</Link>
        </div>
    );
}

export default Navbar;