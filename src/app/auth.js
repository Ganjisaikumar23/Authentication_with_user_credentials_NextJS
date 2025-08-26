import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import userModel from "./utilis/models/User";
import DBconnection from "./utilis/config/db";
import bcrypt from "bcryptjs";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    CredentialProvider({
      name: "Credentials",
      async authorize(credentials) {
        await DBconnection();
        const user = await userModel.findOne({
          email: credentials?.email,
        
        });
          
        if (!user) {
          return null;
        } 

        const isPasswordValid = await bcrypt.compare(
          credentials?.password,
          user.password
        );
        if (!isPasswordValid) {
          return null;
        }
        return { email: user.email, name: user.username}
      },
    }),
  ],
  secret: process.env.SECRET_KEY,
  pages: {
    signIn: "/login",
  },
});
