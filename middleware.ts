// export { auth as middleware } from "@/auth";

// convert for bundel size
// middleware.ts یا middleware.js

// اجرای middleware در Lambda معمولی (Node.js) نه Edge Function
export const config = {
  matcher: [
    // این‌ها رو با مسیرهایی که می‌خوای محافظت کنی جایگزین کن
    "/shipping-address",
    "/payment-method",
    "/place-order",
    "/profile",
    "/user/:path*",
    "/order/:path*",
    "/admin/:path*",
  ],
  runtime: "nodejs", // 🚀 مهم‌ترین خط برای حل ارور سایز
};

// Import کامل Auth با همه پکیج‌ها (Prisma, bcrypt و غیره)
export { auth as middleware } from "@/auth";
