import { createClient } from '@/lib/supabase';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(req) {
    const { email, password } = await req.json();

    // Pastikan email dan password ada
    if (!email || !password) {
        return new Response(
            JSON.stringify({ message: 'Email and password are required' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    try {
        const supabase = createClient();
        // Cari user berdasarkan email
        const { data: user, error } = await supabase
            .from('users')
            .select('id, nama, email, password')
            .eq('email', email)
            .single();

        if (error || !user) {
            return new Response(
                JSON.stringify({ message: 'Invalid credentials' }),
                { status: 401, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Verifikasi password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return new Response(
                JSON.stringify({ message: 'Invalid credentials' }),
                { status: 401, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Buat JWT token
        const token = jwt.sign({ email: user.email, id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Simpan token di cookie
        const cookiesStore = await cookies()
        cookiesStore.set({
            name: 'accessToken',
            value: token,
            maxAge: 60 * 60 * 1,
            path: '/',
            httpOnly: true,
            secure: true,
        })
        // Kirim response dengan token
        return new Response(
            JSON.stringify({ token }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ message: 'Server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
