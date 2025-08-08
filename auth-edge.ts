import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

// Minimal Edge-safe NextAuth config for middleware only.
// Avoids importing Prisma, adapters, or providers to keep the Edge bundle tiny.
export const edgeAuthConfig: NextAuthConfig = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [],
  callbacks: {
    authorized({ request, auth }) {
      const protectedPaths = [
        /\/shipping-address/,
        /\/payment-method/,
        /\/place-order/,
        /\/profile/,
        /\/user\/(.*)/,
        /\/order\/(.*)/,
        /\/admin/,
      ];

      const { pathname } = request.nextUrl;
      if (!auth && protectedPaths.some((p) => p.test(pathname))) return false;

      if (!request.cookies.get("sessionCartId")) {
        const response = NextResponse.next();
        response.cookies.set("sessionCartId", crypto.randomUUID());
        return response;
      }

      return true;
    },
  },
};

export const { auth } = NextAuth(edgeAuthConfig);
