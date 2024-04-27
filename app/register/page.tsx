import { redirect } from 'next/navigation';
import { auth } from '../../auth';
import { register } from '../actions/auth';
export default async function page() {
    const session = await auth();
	if (session) return redirect('/');
    return (
        <form action={register}>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" name="username" placeholder="Username..." />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Email..." />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" placeholder="First Name..." />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" placeholder="Last Name..." />
            </div>
            <div>
                <label htmlFor="birthday">Birthday</label>
                <input id="birthday" name="birthday" type="date" />
            </div>
            <button type="submit">Register</button>
        </form>
    )
}