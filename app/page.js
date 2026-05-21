export default function HomePage() {
  return (
    <>
      <nav>
        <div className="nav-logo">Aev<span>on</span></div>
        <a href="#top" className="nav-cta">Konsultasi Gratis</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="badge">
              <span className="badge-dot"></span>
              Chatbot AI untuk Bisnis Kamu
            </div>

            <h1>
              Pernah Kelewatan Orderan Gara-Gara<em> Telat Balas Chat?</em>
            </h1>

            <p className="subhead">
              Jangan biarkan kompetitor merebut penjualanmu hanya karena tokomu lagi slow response.
            </p>

            <p className="value">
              Kenalan yuk sama <strong style={{ color: 'var(--bright)' }}>Aevon!</strong> Jasa pembuatan chatbot pintar yang siap jadi asisten andalan bisnismu 24/7. Merespons pesan pelanggan secara natural, cepat, dan akurat.
            </p>

            <div className="hero-actions">
              <a href="#top" className="btn-primary">Konsultasi Gratis Sekarang! →</a>
              <div className="trust-badge">
                <span className="stars">★★★★★</span>
                <span>Dipercaya oleh <strong>50+ UMKM</strong></span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="phone-wrap">
              <div className="phone-glow"></div>

              <div className="chip chip-1">⚡ Balas &lt; 1 detik</div>
              <div className="chip chip-2">🤖 AI Powered</div>
              <div className="chip chip-3">🛒 Auto Order</div>

              <div className="phone">
                <div className="phone-notch"></div>
                <div className="phone-header">
                  <div className="phone-avatar">🤖</div>
                  <div className="phone-header-text">
                    <div className="phone-header-name">Aevon Bot</div>
                    <div className="phone-status"><span className="status-dot"></span> Online • Aktif 24/7</div>
                  </div>
                </div>
                <div className="phone-chat">
                  <div className="msg user">
                    <div className="bubble">Halo kak, produk A masih ada stok gak?</div>
                    <div className="msg-time">10:42</div>
                  </div>
                  <div className="msg bot">
                    <div className="bubble">Halo! 😊 Produk A masih tersedia kak! Saat ini ada 15 pcs tersisa. Mau langsung order atau butuh info lebih lanjut?</div>
                    <div className="msg-time">10:42 • Balas otomatis</div>
                  </div>
                  <div className="msg user">
                    <div className="bubble">Mau 2 pcs, bisa COD ke Semarang?</div>
                    <div className="msg-time">10:43</div>
                  </div>
                  <div className="msg bot">
                    <div className="bubble">Bisa banget! COD area Semarang ongkir Rp5.000 aja. Boleh saya buatkan ordernya sekarang? 🛍️</div>
                    <div className="msg-time">10:43</div>
                  </div>
                  <div className="typing-bubble">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
                <div className="phone-input">
                  <div className="phone-input-field">Ketik pesan...</div>
                  <div className="phone-send">➤</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-why">
        <p className="section-label">Lebih dalam tentang Aevon</p>
        <h2 className="section-title">Mengapa Bisnismu<br /><span>Membutuhkan Aevon?</span></h2>

        <div className="why-grid">
          <div className="video-wrap">
            <div className="video-overlay">
              <div className="play-btn" title="Play Demo">▶</div>
              <p className="video-label">Tonton Demo Aevon Bekerja →</p>
            </div>
          </div>

          <div className="benefits-list">
            <div className="benefit-card">
              <div className="benefit-icon">💸</div>
              <div className="benefit-text">
                <h4>Pangkas Biaya Operasional</h4>
                <p>Nggak perlu lagi pusing rekrut banyak admin CS. Satu Aevon bisa handle ratusan chat sekaligus tanpa biaya tambahan.</p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <div className="benefit-text">
                <h4>Pelanggan Senang, Omzet Naik</h4>
                <p>Pesan dibalas dalam hitungan detik! Pelanggan nggak perlu nunggu lama — kepercayaan naik, konversi meningkat.</p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🧘</div>
              <div className="benefit-text">
                <h4>Kamu Lebih Santai & Fokus</h4>
                <p>Biar Aevon yang jaga tokomu tanpa lelah 24/7. Kamu bisa fokus kembangkan strategi bisnis tanpa was-was.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="why-cta-wrap">
          <a href="#top" className="btn-primary">Saya Mau Buat Chatbot Aevon! 🚀</a>
        </div>
      </section>

      <section className="section-testi">
        <p className="section-label" style={{ color: 'rgba(0,183,181,0.8)' }}>Kata Mereka</p>
        <h2 className="section-title light">Ribuan Pesan Dibalas,<br /><span>Omzet Terus Naik</span></h2>

        <div className="testi-grid">
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">"Sebelum pakai Aevon, banyak orderan kabur karena gue lupa balas chat. Sekarang? 24 jam toko gue aktif terus, omzet naik 3x lipat dalam 2 bulan!"</p>
            <div className="testi-author">
              <div className="testi-avatar">R</div>
              <div>
                <div className="testi-name">Rizky Pratama</div>
                <div className="testi-role">Owner Toko Fashion Online, Semarang</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">"Chatbot-nya natural banget, pelanggan nggak sadar lagi ngobrol sama bot. Biaya admin CS gue turun 60%, tapi kepuasan pelanggan malah naik!"</p>
            <div className="testi-author">
              <div className="testi-avatar">S</div>
              <div>
                <div className="testi-name">Sari Dewi</div>
                <div className="testi-role">Pemilik Catering, Surabaya</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">"Setup-nya cepat banget, gak ribet. Tim Aevon langsung support dan dalam 3 hari chatbot udah jalan. Recommended banget buat UMKM!"</p>
            <div className="testi-author">
              <div className="testi-avatar">B</div>
              <div>
                <div className="testi-name">Budi Santoso</div>
                <div className="testi-role">Dropshipper, Yogyakarta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-final">
        <div className="final-card">
          <div className="promo-tag">🎁 Penawaran Terbatas Minggu Ini</div>
          <h2 className="final-title">Sayang Banget Kan Kalau Pelanggan Kabur Cuma Karena Nunggu Lama?</h2>
          <p className="final-sub">
            Yuk, bikin bisnismu profesional hari ini.<br />
            Daftar minggu ini dan dapatkan <strong>Uji Coba Gratis 7 Hari!</strong><br />
            Tanpa kartu kredit. Tanpa risiko.
          </p>
          <a href="#top" className="btn-primary" style={{ fontSize: '1.1rem', padding: '18px 42px' }}>Ambil Promo Uji Coba! 🎉</a>
        </div>
      </section>

      <footer>
        <div className="footer-logo">Aevon</div>
        <div className="footer-text">© 2025 Aevon. Chatbot Pintar untuk UMKM Indonesia.</div>
        <div className="footer-text">Dibuat untuk bisnis yang lebih cerdas</div>
      </footer>
    </>
  );
}
