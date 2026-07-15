import Link from 'next/link';

export const metadata = {
  title: 'Layanan Chatbot AI Aevon',
  description:
    'Temukan layanan chatbot AI Aevon untuk WhatsApp, Instagram, website, dan integrasi custom sesuai kebutuhan bisnis Anda.',
};

export default function ServicesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7f8f0', color: '#1a2e3d', padding: '80px 24px 60px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#355872', fontWeight: 700, marginBottom: '12px' }}>
          Layanan Aevon
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '16px' }}>
          Solusi chatbot AI yang siap membantu bisnis Anda tumbuh
        </h1>
        <p style={{ fontSize: '1.05rem', maxWidth: '760px', marginBottom: '32px', color: '#355872' }}>
          Dari customer service 24/7, follow-up penjualan, hingga integrasi multi-platform, Aevon membantu bisnis menghemat waktu dan meningkatkan respons pelanggan.
        </p>

        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginBottom: '32px' }}>
          {[
            ['WhatsApp Chatbot', 'Jawab pertanyaan pelanggan, kirim promo, dan bantu transaksi lewat WhatsApp secara otomatis.'],
            ['Instagram DM Automation', 'Tangani pertanyaan produk dan order melalui DM Instagram tanpa menunggu balasan manual.'],
            ['Website Assistant', 'Tampilkan chatbot cerdas di website agar pengunjung bisa langsung bertanya dan mendapatkan jawaban.'],
            ['Custom Integration', 'Sesuai kebutuhan bisnis Anda, dari CRM, sistem order, hingga workflow internal.'],
          ].map(([title, desc]) => (
            <section key={title} style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 10px 30px rgba(53,88,114,0.08)' }}>
              <h2 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{title}</h2>
              <p style={{ color: '#355872', lineHeight: 1.7 }}>{desc}</p>
            </section>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: '#355872', color: 'white', padding: '12px 20px', borderRadius: '999px', textDecoration: 'none', fontWeight: 700 }}>
            Konsultasi Gratis
          </Link>
          <Link href="/" style={{ border: '1px solid #355872', color: '#355872', padding: '12px 20px', borderRadius: '999px', textDecoration: 'none', fontWeight: 700 }}>
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
