import { createClient } from "@/lib/supabase";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';

const supabase = createClient();

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                // Menyimpan atau memperbarui user di Supabase
                const { data, error } = await supabase.from('users').upsert({
                    email: user.email,
                    nama: user.name,
                    foto: user.image,
                    provider: "google",
                    password: null,
                }, { onConflict: ['email'] }); // Specify email column for conflict

                // Jika ada error saat upsert, kita cek apakah errornya karena duplikat email
                if (error) {
                    console.error("Error saving user:", error);
                    return false;
                }

                const token = jwt.sign({ email: user.email, id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

                // Simpan token di cookie
                const cookiesStore = await cookies();
                cookiesStore.set({
                    name: 'accessToken',
                    value: token,
                    maxAge: 60 * 60 * 1,
                    path: '/',
                    httpOnly: true,
                    secure: true,
                });

                return true;
            }
            return true;
        },
        async session({ session, token }) {
            // Menambahkan informasi tambahan ke sesi jika diperlukan
            session.user.id = token.sub;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
