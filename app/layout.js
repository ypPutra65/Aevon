import './globals.css';
import { Syne, DM_Sans } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
});

export const metadata = {
  title: 'Aevon – Chatbot Cerdas untuk Bisnis Kamu',
  description: 'Landing page Aevon yang menampilkan solusi chatbot AI untuk UMKM.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
