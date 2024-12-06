import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function middleware(request) {
    const cookiesStore = await cookies(); // Tidak perlu `await` karena `cookies()` bukan async
    const accessToken = cookiesStore.get('accessToken')?.value;

    // Redirect ke /login jika user tidak punya accessToken dan mencoba akses /dashboard
    if (request.nextUrl.pathname.startsWith('/dashboard') && !accessToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Redirect ke /dashboard jika user sudah login dan mencoba akses /login atau /register
    if (
        (request.nextUrl.pathname.startsWith('/login') ||
            request.nextUrl.pathname.startsWith('/register')) &&
        accessToken
    ) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // Lanjutkan request jika tidak ada kondisi yang terpenuhi
    return NextResponse.next();
}

export const config = {
    // Aktifkan middleware untuk rute yang sesuai
    matcher: ['/login', '/register', '/dashboard/:path*'],
};
