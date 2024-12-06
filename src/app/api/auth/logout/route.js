import { cookies } from 'next/headers';

export async function POST(req) {
    try {
        const cookiesStore = cookies();
        cookiesStore.delete('accessToken'); // Hapus cookie 'accessToken'

        return new Response(
            JSON.stringify({ message: 'Logout successful' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error deleting cookie:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to logout' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
