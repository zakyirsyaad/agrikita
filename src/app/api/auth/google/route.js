// app/api/auth/google-login/route.js
import { createClient } from '@/lib/supabase';
import jwt from 'jsonwebtoken';

export async function POST(req) {
    const { token } = await req.json();

    // Pastikan token ada
    if (!token) {
        return new Response(
            JSON.stringify({ message: 'Google token is required' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    try {
        const supabase = createClient();

        // Verifikasi token dengan Supabase
        const { user, error } = await supabase.auth.signInWithOAuth({ provider: 'google', token });

        if (error || !user) {
            return new Response(
                JSON.stringify({ message: 'Google authentication failed' }),
                { status: 401, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Periksa apakah user sudah ada di database
        const { data: existingUser, error: existingUserError } = await supabase
            .from('users')
            .select('id, nama, email, provider')
            .eq('email', user.email)
            .single();

        if (existingUserError || !existingUser) {
            // Jika user tidak ditemukan, buat user baru
            const { data, error } = await supabase
                .from('users')
                .upsert([
                    {
                        nama: user.user_metadata.full_name || 'No name', // Bisa ambil dari user_metadata Google
                        email: user.email,
                        foto: user.user_metadata.avatar_url, // Bisa ambil foto profil dari user_metadata
                        provider: 'google',
                    }
                ])
                .single();

            if (error) {
                return new Response(
                    JSON.stringify({ message: 'Error creating user' }),
                    { status: 400, headers: { 'Content-Type': 'application/json' } }
                );
            }
        }

        // Buat JWT token
        const jwtToken = jwt.sign({ email: user.email, id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Kirim response dengan token
        return new Response(
            JSON.stringify({ token: jwtToken }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ message: 'Server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
