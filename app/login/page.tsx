import Link from 'next/link';
import { login } from '../actions/auth';
import { auth } from '../../auth';
import { redirect } from 'next/navigation';

export default async function page() {
    const session = await auth();
	if (session) return redirect('/');
    return (
        <form action={login}>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Email..." />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>
            <button>
                <Link href="/register">Don't have an account? Sign up.</Link>
            </button>
            <button type="submit">Login</button>
        </form>
    )
}