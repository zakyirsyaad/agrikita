import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "AgriKita",
  description: "Agrikita adalah website yang menyediakan layanan untuk mempermudah para petani dalam mengelola tanaman mereka.",
  openGraph: {
    title: "AgriKita",
    description: "Agrikita adalah website yang menyediakan layanan untuk mempermudah para petani dalam mengelola tanaman mereka.",
    images: "https://firebasestorage.googleapis.com/v0/b/jekydatabase.appspot.com/o/pixelcut-export%201.png?alt=media&token=fcd78d4a-1af5-4c3d-9044-599f9fb9a921", // Gantilah dengan URL gambar yang sesuai
    url: "https://agrikita.vercel.app" // Gantilah dengan URL halaman Anda
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
