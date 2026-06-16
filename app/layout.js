import './globals.css';
import { Syne, DM_Sans } from 'next/font/google';
import Script from 'next/script';

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
      <body>
        {children}

        {/* Script Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XW0PD6H07W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XW0PD6H07W');
          `}
        </Script>
      </body>
    </html>
  );
}