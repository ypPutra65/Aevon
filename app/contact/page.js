import Link from 'next/link';

export const metadata = {
  title: 'Hubungi Aevon',
  description:
    'Hubungi Aevon untuk konsultasi chatbot AI, demo gratis, dan implementasi layanan pelanggan yang lebih cepat.',
  alternates: {
    canonical: '/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f1c27 0%, #355872 100%)', color: 'white', padding: '80px 24px 60px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9cd5ff', fontWeight: 700, marginBottom: '12px' }}>
          Hubungi Aevon
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '16px' }}>
          Siap tingkatkan respons pelanggan Anda?
        </h1>
        <p style={{ fontSize: '1.05rem', maxWidth: '720px', margin: '0 auto 32px', color: 'rgba(247,248,240,0.9)' }}>
          Konsultasikan kebutuhan chatbot AI Anda sekarang. Kami siap membantu dari tahap ide, implementasi, sampai optimasi berkelanjutan.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" style={{ background: '#9cd5ff', color: '#0f1c27', padding: '12px 20px', borderRadius: '999px', textDecoration: 'none', fontWeight: 700 }}>
            Chat via WhatsApp
          </a>
          <a href="mailto:hello@aevonchatbot.vercel.app" style={{ background: 'transparent', border: '1px solid white', color: 'white', padding: '12px 20px', borderRadius: '999px', textDecoration: 'none', fontWeight: 700 }}>
            hello@aevonchatbot.vercel.app
          </a>
        </div>

        <Link href="/" style={{ color: '#9cd5ff', textDecoration: 'none', fontWeight: 700 }}>
          ← Kembali ke halaman utama
        </Link>
      </div>
    </main>
  );
}
