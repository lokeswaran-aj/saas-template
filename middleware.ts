import { NextRequest, NextResponse } from "next/server";

import { getCookieCache } from "better-auth/cookies";
import { CONSTANTS } from "@/config/constants";

export async function middleware(request: NextRequest) {
  const session = await getCookieCache(request, {
    cookiePrefix: CONSTANTS.COOKIE_PREFIX,
  });
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*"],
};
