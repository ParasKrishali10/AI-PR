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
  callbacks: {
    async jwt({ token, account }) {
      // First time login
      if (account?.access_token) {
        token.accessToken = account.access_token
      }
      token.githubId=token.sub
      return token
    },

    async session({ session, token }) {
      ;(session as any).accessToken = token.accessToken
       ;(session as any).githubId = token.githubId
      return session
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
