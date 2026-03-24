import NextAuth, { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "read:user repo"
        }
      }
    })
  ],
  session:{
    strategy:'jwt'
  },
  callbacks: {
    async jwt({ token, user,profile }) {
      if(user){
        token.id=user.id
      }
      return token
    },

    async session({ session, token }) {
  if (session.user && token.id) {
    session.user.id = token.id as string
  }
  return session
}
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
