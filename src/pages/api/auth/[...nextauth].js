import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials) {
        // 외부 서버와의 통신을 통해 유저 정보와 토큰을 가져옵니다.
        const response = await axios.post(
          "http://localhost:8080/api/user/login",
          {
            userId: credentials?.userId,
            password: credentials?.password,
          }
        );

        const user = response.data;
        console.log(user);

        if (user) {
          return {
            user: user,
            username: user.username,
            email: user.email,
            nickName: user.nickName,
            createdDate: user.createdDate,
          };
        } else {
          // 로그인 실패 시 null을 반환합니다.
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
});
