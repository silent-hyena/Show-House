import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "../lib/jwtToken";
// import {db} from "../lib/database"

export function middleware(req: NextRequest) {
  const token = req.cookies.get("userToken")?.value;

  const isProtectedRoute =
    req.nextUrl.pathname.startsWith("/dashboard");

  if (isProtectedRoute) {
    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    const payload = verifyToken(token);

    if (!payload) {
      return NextResponse.redirect(new URL("/l", req.url));
    }
  }

  return NextResponse.next();
}

// set the api path which need middleware:

export const config = {
  matcher: ["/dashboard/:path*"],
};