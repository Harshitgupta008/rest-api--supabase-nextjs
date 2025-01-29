import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get("users");
    const pathname = request.nextUrl.pathname;

    
    const isAuthPage = pathname === "/account/login" || pathname === "/account/register";
    if (isAuthPage && token) {
        return NextResponse.redirect(new URL('/', request.url));
    }
    
    const userpath = pathname === "/" || pathname.startsWith("/useraccount");
    if (userpath && !token) {
        return NextResponse.redirect(new URL('/account/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/account/:path*", "/useraccount/:path*"], 
};
