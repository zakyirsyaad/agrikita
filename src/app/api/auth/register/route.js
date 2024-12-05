import { createClient } from '@/lib/supabase';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
    const { nama, email, password } = await req.json();

    // Ensure required fields are provided
    if (!nama || !email || !password) {
        return new Response(
            JSON.stringify({ message: 'Missing required fields' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const supabase = createClient();

        // Insert user into Supabase
        const { data, error } = await supabase
            .from('users')
            .insert([{ nama, email, password: hashedPassword }]);

        if (error) {
            return new Response(
                JSON.stringify({ message: error.message }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Create JWT access token
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return success response with token
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
