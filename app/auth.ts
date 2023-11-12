import NextAuth, { NextAuthConfig } from "next-auth";
import { OIDCConfig } from "next-auth/providers";

export const authConfig = {
  providers: [
    {
      id: "id",
      name: "ID",
      type: "oidc",
      issuer: process.env.ISSUER_URL,
      authorization: {
        params: {
          scope: "openid",
        },
      },
      clientId: "console_app",
      clientSecret: "abc",
      profile: (profile) => {
        return {
          id: profile.sub,
          name: profile.name,
        };
      },
    } satisfies OIDCConfig<any>,
  ],
  callbacks: {
    jwt: async ({ token }) => {
      token.hello = "world";
      console.log(token);
      return token;
    },
  },
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(authConfig);
