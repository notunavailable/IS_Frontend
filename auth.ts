import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
// Your own logic for dealing with plaintext password strings; be careful!
import { signInSchema } from "./lib/zod"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./lib/db"
import { compare } from 'bcryptjs';

const adapter = MongoDBAdapter(clientPromise);

const providers = [
    Credentials({
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
        },
        authorize: async (credentials) => {
            const { email, password } = await signInSchema.parseAsync(credentials)
            let user: any = await adapter.getUserByEmail(email);
            if (user) {
                console.log(user);
                const match = await compare(password, user.password);
                console.log(match)
                return match ? user : null;
            } else {
                return null;
            }
        },
    }),
]

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: '/login',

    },
    callbacks: {
        async signIn({ user }) {
            const existingUser = await adapter.getUser(user.id)

            if (!existingUser) return false

            return true
        },
        async session({ session, token }) {

            if (token.sub && session.user) {
                session.user.id = token.sub
            }

            return session
        },
    },
    adapter: adapter,
    session: { strategy: "jwt" },
    providers: providers
});





