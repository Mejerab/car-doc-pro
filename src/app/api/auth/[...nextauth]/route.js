import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import credentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from 'bcrypt';

const handler = NextAuth({
    secret: 'LaL2jIVCiw2o6HK393Cc0Yv05Jv4yYSoeXSHNYNw1tE=',
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        credentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) {
                    return null;
                }
                const db = await connectDB();
                const currentUser = await db.collection('users').findOne({ email });
                if (!currentUser) {
                    return null;
                }
                console.log(currentUser.password);

                const passMatch = bcrypt.compareSync(password, currentUser.password);
                if (!passMatch) {
                    return null;
                }
                return currentUser;
            },
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET
        }),
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
        })
    ],
    callbacks: {
        async signIn({user, account}) {
            if (account.provider === 'google' || account.provider === 'github') {
                const {name, email, image} = user;
                try {
                    const db = await connectDB();
                    const userCollection = db.collection('users');
                    const exist = await userCollection.findOne({email});
                    if (!exist) {
                        const res = await userCollection.insertOne(user);
                        return user;
                    }
                    else{
                        return user;
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            return user;
        }
    },
    pages: {
        signIn: '/login'
    }
})
export { handler as GET, handler as POST };