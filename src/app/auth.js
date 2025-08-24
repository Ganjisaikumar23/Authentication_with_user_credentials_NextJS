import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import userModel from "./utilis/models/User";

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
        const user = await userModel.findOne({
          email: credentials?.email,
          password: credentials?.password,
        });
        if (!user) {
          return null;
        } else {
          return {
            id: user._id,
            name: user.username,
            email: user.email,
            password: user.password,
          };
        }
      },
    }),
  ],
  secret: process.env.SECRET_KEY,
  pages: {
    signIn: "/login",
  },
});
