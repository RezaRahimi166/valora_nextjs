export { auth as middleware } from "@/auth-edge";

// Narrow middleware to app routes; exclude static assets and API routes.
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|public).*)"],
};
