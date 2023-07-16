import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient, ObjectId } from 'mongodb';
import { compare } from 'bcryptjs';

export default NextAuth({
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const client = await MongoClient.connect(
                    process.env.URI,
                    { useNewUrlParser: true, useUnifiedTopology: true }
                );
                const users = await client.db().collection('users');
                const result = await users.findOne({
                    email: credentials.email,
                });

                if (!result) {
                    client.close();
                    throw new Error('No user found with the email');
                }

                const checkPassword = await compare(credentials.password, result.password);

                if (!checkPassword) {
                    client.close();
                    throw new Error('Incorrect password');
                }

                // Update lastLoginDate after successful login
                await users.updateOne(
                  { _id: ObjectId(result._id) },
                  { $set: { lastLoginDate: new Date() } }
                );

                client.close();
                return {
                  email: result.email,
                  id: result._id,
                  firstName: result.firstName,
                  lastName: result.lastName
                };
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) token.id = user.id
            return token
        },
        session: async ({ session, token }) => {
            if (token) session.id = token.id
            return session
        },
    },
    secret: process.env.SECRET_KEY,
    session: {
        strategy: 'jwt',
        maxAge: 1 * 24 * 60 * 60, // 1d
    },
    jwt: {
        secret: process.env.SECRET_KEY,
        encryption: true,
    },
});