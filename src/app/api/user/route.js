import { createClient } from '@/lib/supabase';
import jwt from 'jsonwebtoken';

export async function GET(req) {
    // Ambil token dari header Authorization
    const token = req.headers.get('Authorization')?.split(' ')[1];  // Bearer token

    if (!token) {
        return new Response(
            JSON.stringify({ message: 'Token is required' }),
            { status: 401, headers: { 'Content-Type': 'application/json' } }
        );
    }

    try {
        // Verifikasi token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const supabase = createClient();

        // Ambil data user berdasarkan ID dari decoded token
        const { data: user, error } = await supabase
            .from('users')
            .select('id, nama, email, foto')
            .eq('id', decoded.id)
            .single();

        if (error || !user) {
            return new Response(
                JSON.stringify({ message: 'User not found' }),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Kirim data pengguna
        return new Response(
            JSON.stringify(user),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ message: 'Invalid token' }),
            { status: 401, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
