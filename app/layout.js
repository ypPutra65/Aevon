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

const siteUrl = 'https://aevonchatbot.vercel.app';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aevon',
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    'Aevon membantu bisnis meningkatkan layanan pelanggan dengan chatbot AI cerdas yang terintegrasi di WhatsApp, Instagram, dan website.',
  sameAs: ['https://www.instagram.com', 'https://www.linkedin.com'],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aevon | Chatbot AI untuk Bisnis yang Responsif',
    template: '%s | Aevon',
  },
  description:
    'Aevon membantu bisnis meningkatkan layanan pelanggan dengan chatbot AI cerdas yang terhubung ke WhatsApp, Instagram, dan website.',
  keywords: [
    'chatbot AI',
    'chatbot bisnis',
    'ai customer service',
    'whatsapp chatbot',
    'chatbot instagram',
    'automation pelanggan',
  ],
  authors: [{ name: 'Aevon' }],
  creator: 'Aevon',
  publisher: 'Aevon',
  alternates: {
    canonical: '/',
    languages: {
      id: '/',
    },
  },
  openGraph: {
    title: 'Aevon | Chatbot AI untuk Bisnis yang Responsif',
    description:
      'Tingkatkan layanan pelanggan dengan chatbot AI cerdas yang siap membantu 24/7 di berbagai kanal.',
    url: siteUrl,
    siteName: 'Aevon',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Aevon chatbot AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aevon | Chatbot AI untuk Bisnis yang Responsif',
    description:
      'Tingkatkan layanan pelanggan dengan chatbot AI cerdas yang siap membantu 24/7 di berbagai kanal.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#355872',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        {children}

        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(structuredData)}
        </Script>

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