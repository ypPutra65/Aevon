'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect } from 'react';

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apa itu chatbot AI Aevon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aevon adalah layanan chatbot AI yang membantu bisnis merespons pelanggan secara otomatis di WhatsApp, Instagram, dan website.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah chatbot bisa dipasang di WhatsApp dan Instagram?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya, chatbot Aevon dapat diintegrasikan ke WhatsApp, Instagram, dan website dengan alur percakapan yang sesuai kebutuhan bisnis Anda.',
      },
    },
    {
      '@type': 'Question',
      name: 'Berapa lama proses setup-nya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proses setup biasanya berlangsung cepat, tergantung kompleksitas alur chatbot yang ingin Anda gunakan.',
      },
    },
  ],
};

export default function HomePage() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const handleNavScroll = () => {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleNavScroll, { passive: true });

    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    const handleMobileToggle = () => {
      if (!navLinks || !mobileToggle) return;
      navLinks.classList.toggle('active');
      const spans = mobileToggle.querySelectorAll('span');
      if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    };

    if (mobileToggle) {
      mobileToggle.addEventListener('click', handleMobileToggle);
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (navLinks?.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    };
    anchorLinks.forEach((link) => link.addEventListener('click', handleAnchorClick));

    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => counterObserver.observe(c));

    function animateCounter(el) {
      const target = parseInt(el.dataset.count || '0', 10);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 2000;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(eased * target);
        el.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    }

    const savingsBars = document.querySelectorAll('.savings-bar-fill');
    const barsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.width || '0';
            barsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    savingsBars.forEach((bar) => barsObserver.observe(bar));

    const particlesContainer = document.querySelector('.particles-container');
    if (particlesContainer) {
      for (let i = 0; i < 30; i += 1) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
        particlesContainer.appendChild(particle);
      }
    }

    const chatInput = document.querySelector('.chat-input-area input');
    const chatSendBtn = document.querySelector('.chat-input-area button');
    const chatMessages = document.querySelector('.chat-messages');

    const botResponses = [
      'Halo, terima kasih sudah menghubungi kami. Ada yang bisa saya bantu?',
      'Tentu, kami menyediakan chatbot yang bisa diintegrasikan langsung ke WhatsApp, Instagram, dan website Anda.',
      'Untuk harga, kami punya beberapa pilihan paket. Kalau mau, bisa mulai dengan konsultasi gratis dulu supaya kami bisa rekomendasikan yang paling cocok.',
      'Baik, saya akan hubungkan Anda dengan tim kami. Boleh tahu nama dan nomor WhatsApp yang bisa dihubungi?',
      'Chatbot kami mendukung bahasa Indonesia dan Inggris, dan bisa disesuaikan dengan kebutuhan spesifik bisnis Anda.',
      'Proses setup biasanya memakan waktu 2 sampai 3 hari kerja, tergantung kompleksitas yang dibutuhkan.',
      'Ya, Anda bisa mencoba gratis selama 7 hari tanpa syarat apapun. Kalau tidak cocok, tidak ada kewajiban lanjut.',
      'Sampai saat ini kami sudah membantu lebih dari 500 bisnis meningkatkan kecepatan respons pelanggan mereka secara signifikan.',
    ];

    let responseIdx = 0;
    const timeoutIds = [];

    function sendMessage() {
      if (!chatInput || !chatMessages) return;
      const text = chatInput.value.trim();
      if (!text) return;

      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble user';
      userBubble.textContent = text;
      userBubble.style.animation = 'bubbleIn 0.4s ease forwards';
      userBubble.style.opacity = '0';
      chatMessages.appendChild(userBubble);
      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;

      const typingEl = document.createElement('div');
      typingEl.className = 'chat-typing';
      typingEl.style.opacity = '1';
      typingEl.innerHTML = '<span></span><span></span><span></span>';
      chatMessages.appendChild(typingEl);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      const timeoutId = window.setTimeout(() => {
        typingEl.remove();
        const botBubble = document.createElement('div');
        botBubble.className = 'chat-bubble bot';
        botBubble.textContent = botResponses[responseIdx % botResponses.length];
        botBubble.style.animation = 'bubbleIn 0.4s ease forwards';
        botBubble.style.opacity = '0';
        chatMessages.appendChild(botBubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        responseIdx += 1;
      }, 1200 + Math.random() * 800);
      timeoutIds.push(timeoutId);
    }

    if (chatSendBtn) {
      chatSendBtn.addEventListener('click', sendMessage);
    }
    if (chatInput) {
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendMessage();
      });
    }

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
      const handleMouseLeave = () => {
        card.style.transform = '';
      };
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach((btn) => {
      const handleMouseMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translateY(-3px) translate(${x * 0.15}px, ${y * 0.15}px)`;
      };
      const handleMouseLeave = () => {
        btn.style.transform = '';
      };
      btn.addEventListener('mousemove', handleMouseMove);
      btn.addEventListener('mouseleave', handleMouseLeave);
    });

    const heroOrbs = document.querySelectorAll('.hero-orb');
    let ticking = false;
    const handleMouseMoveWindow = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth - 0.5) * 2;
          const y = (e.clientY / window.innerHeight - 0.5) * 2;
          heroOrbs.forEach((orb, i) => {
            const speed = (i + 1) * 12;
            orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('mousemove', handleMouseMoveWindow);

    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
      @keyframes rippleEffect {
        to { transform: scale(2.5); opacity: 0; }
      }
    `;
    document.head.appendChild(rippleStyle);

    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach((btn) => {
      const handleClick = function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transform: scale(0);
          animation: rippleEffect 0.6s ease-out forwards;
          left: ${e.clientX - rect.left - size / 2}px;
          top: ${e.clientY - rect.top - size / 2}px;
          pointer-events: none;
        `;
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        window.setTimeout(() => ripple.remove(), 600);
      };
      btn.addEventListener('click', handleClick);
    });

    let highlightTimeout = null;
    const highlightEl = document.querySelector('.hero-title .highlight');
    if (highlightEl) {
      highlightEl.textContent = 'Chat Lambat?';
    }

    const sections = document.querySelectorAll('section[id]');
    const handleActiveLink = () => {
      const scrollY = window.scrollY + 100;
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (link) {
          if (scrollY >= top && scrollY < top + height) {
            link.style.color = 'var(--white)';
          } else {
            link.style.color = '';
          }
        }
      });
    };
    window.addEventListener('scroll', handleActiveLink, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleNavScroll);
      window.removeEventListener('mousemove', handleMouseMoveWindow);
      window.removeEventListener('scroll', handleActiveLink);
      if (mobileToggle) mobileToggle.removeEventListener('click', handleMobileToggle);
      anchorLinks.forEach((link) => link.removeEventListener('click', handleAnchorClick));
      revealObserver.disconnect();
      counterObserver.disconnect();
      barsObserver.disconnect();
      buttons.forEach((btn) => btn.removeEventListener('click', () => {}));
      if (rippleStyle.parentNode) rippleStyle.parentNode.removeChild(rippleStyle);
      if (highlightTimeout) window.clearTimeout(highlightTimeout);
      timeoutIds.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <div className="logo-icon">
              <img src="/icon.svg" alt="Aevon logo" />
            </div>
            Aevon
          </Link>
          <ul className="nav-links" id="navLinks">
            <li><a href="#features">Fitur</a></li>
            <li><a href="#how">Cara Kerja</a></li>
            <li><a href="#benefits">Keuntungan</a></li>
            <li><a href="#testimonials">Testimoni</a></li>
            <li><Link href="/contact" className="nav-cta">Coba Gratis</Link></li>
          </ul>
          <button className="mobile-toggle" id="mobileToggle" aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-bg-grid"></div>
        <div className="particles-container"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              Chatbot AI · Aktif 24/7
            </div>
            <h1 className="hero-title">
              Chatbot AI untuk<br />
              <span className="highlight">WhatsApp, Instagram & Website</span>
            </h1>
            <p className="hero-subtitle">
              Aevon membantu bisnis menjawab pelanggan lebih cepat, mengotomatiskan layanan 24/7, dan meningkatkan konversi lewat chatbot AI yang natural di platform favorit Anda.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                Mulai Gratis 7 Hari
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/services" className="btn-secondary">
                Lihat Layanan Kami
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="7 13 12 18 17 13" />
                  <polyline points="7 6 12 11 17 6" />
                </svg>
              </Link>
            </div>
            <div className="hero-trust">
              <span>✓ Setup cepat</span>
              <span>✓ Tanpa biaya awal</span>
              <span>✓ Support 24/7</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="chat-widget">
              <div className="chat-header">
                <div className="chat-avatar">A</div>
                <div className="chat-info">
                  <h4>Aevon Chatbot</h4>
                  <span>Online sekarang</span>
                </div>
              </div>
              <div className="chat-messages">
                <div className="chat-bubble user">Halo, saya mau tanya soal produk kalian</div>
                <div className="chat-bubble bot">Halo, selamat datang! Saya Aevon, asisten virtual yang siap membantu Anda. Produk mana yang ingin Anda ketahui lebih lanjut?</div>
                <div className="chat-bubble user">Berapa harga untuk paket premium?</div>
                <div className="chat-bubble bot">Paket Premium mulai dari Rp 299.000 per bulan, sudah termasuk integrasi multi-platform dan custom flow percakapan. Mau saya kirimkan detail lengkapnya?</div>
                <div className="chat-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="chat-input-area">
                <input type="text" placeholder="Ketik pesan Anda..." id="chatInput" />
                <button id="chatSend" aria-label="Kirim pesan">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="floating-element float-1">
              <div className="float-card">
                <div className="fc-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div>Respon &lt; 1 detik</div>
              </div>
            </div>
            <div className="floating-element float-2">
              <div className="float-card">
                <div className="fc-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>99.9% Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stats-container">
          <div className="stat-item reveal">
            <div className="stat-number" data-count="500" data-suffix="+">0+</div>
            <div className="stat-label">Bisnis Terlayani</div>
          </div>
          <div className="stat-item reveal reveal-delay-1">
            <div className="stat-number" data-count="2" data-suffix="M+">0M+</div>
            <div className="stat-label">Pesan Diproses per Bulan</div>
          </div>
          <div className="stat-item reveal reveal-delay-2">
            <div className="stat-number" data-count="99" data-suffix=".9%">0%</div>
            <div className="stat-label">Akurasi Respons</div>
          </div>
          <div className="stat-item reveal reveal-delay-3">
            <div className="stat-number" data-count="10" data-suffix="x">0x</div>
            <div className="stat-label">Lebih Cepat dari Manual</div>
          </div>
        </div>
      </div>

      <section className="section features-section" id="features">
        <div className="section-container">
          <div className="section-header reveal">
            <div className="section-label">Kenapa Aevon</div>
            <h2 className="section-title">Chatbot AI untuk Customer Service 24/7 yang Lebih Cepat dan Efisien</h2>
            <p className="section-desc">Aevon membantu bisnis mengotomatiskan layanan pelanggan di WhatsApp, Instagram, dan website dengan chatbot AI yang natural, cepat, dan siap menangani pertanyaan berulang tanpa mengorbankan kualitas.</p>
          </div>

          <div className="features-showcase reveal">
            <img src="/images/chatbot-dashboard.png" alt="Aevon Chatbot Dashboard" className="showcase-img" loading="lazy" />
          </div>

          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Percakapan yang Terasa Manusiawi</h3>
              <p>Pelanggan Anda tidak akan merasa sedang bicara dengan mesin. Aevon menyesuaikan gaya bahasa sesuai konteks — formal untuk pertanyaan serius, santai untuk obrolan ringan.</p>
            </div>
            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Terintegrasi ke Semua Platform</h3>
              <p>WhatsApp, Instagram DM, Telegram, hingga live chat di website — semuanya terhubung ke satu dashboard. Tidak perlu buka banyak aplikasi sekaligus.</p>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Tidak Pernah Libur, Tidak Pernah Lelah</h3>
              <p>Jam 2 pagi, tanggal merah, atau peak season — Aevon tetap merespons dalam hitungan detik. Tidak ada lagi pelanggan yang merasa diabaikan.</p>
            </div>
            <div className="feature-card reveal reveal-delay-3">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3>Insight Bisnis yang Jelas</h3>
              <p>Ketahui apa yang paling sering ditanyakan pelanggan, jam-jam tersibuk, dan tingkat konversi — langsung dari dashboard tanpa perlu analisis manual.</p>
            </div>
            <div className="feature-card reveal reveal-delay-4">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3>Follow-Up Otomatis</h3>
              <p>Pelanggan yang belum checkout akan mendapat pengingat secara otomatis. Promo dan penawaran khusus dikirim pada waktu yang tepat — tanpa Anda harus mengatur satu per satu.</p>
            </div>
            <div className="feature-card reveal reveal-delay-5">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3>Keamanan Data Terjamin</h3>
              <p>Seluruh data percakapan dienkripsi end-to-end dan disimpan sesuai standar keamanan enterprise. Data pelanggan Anda bukan urusan kami — itu urusan Anda, dan kami menjaganya.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section how-section" id="how">
        <div className="section-container">
          <div className="how-layout">
            <div className="how-image reveal">
              <img src="/images/automation-workflow.png" alt="Alur kerja otomatis Aevon Chatbot" loading="lazy" />
            </div>
            <div className="how-content">
              <div className="section-header-left reveal">
                <div className="section-label">Cara Kerja</div>
                <h2 className="section-title">Solusi Implementasi Chatbot AI yang Mudah dan Terarah</h2>
                <p className="section-desc">Anda tidak perlu paham soal teknologi. Cukup ceritakan tujuan bisnis Anda, lalu tim Aevon yang akan merancang alur chatbot yang cocok untuk layanan pelanggan dan penjualan.</p>
              </div>
              <div className="how-steps-vertical">
                <div className="step-card-h reveal">
                  <div className="step-number">1</div>
                  <div className="step-text">
                    <h3>Diskusi Kebutuhan</h3>
                    <p>Kami dengarkan dulu bagaimana alur bisnis Anda — mulai dari cara pelanggan bertanya, proses order, sampai keluhan yang paling sering muncul.</p>
                  </div>
                </div>
                <div className="step-card-h reveal reveal-delay-2">
                  <div className="step-number">2</div>
                  <div className="step-text">
                    <h3>Bangun dan Sesuaikan</h3>
                    <p>Tim kami membangun chatbot sesuai karakter brand Anda. Gaya bahasa, alur percakapan, bahkan cara menyapa pelanggan — semua disesuaikan.</p>
                  </div>
                </div>
                <div className="step-card-h reveal reveal-delay-4">
                  <div className="step-number">3</div>
                  <div className="step-text">
                    <h3>Aktifkan dan Pantau</h3>
                    <p>Begitu chatbot aktif, kami tidak langsung lepas tangan. Tim kami terus memantau performa dan melakukan optimasi berkala.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section" id="benefits">
        <div className="section-container">
          <div className="section-header reveal">
            <div className="section-label">Keuntungan</div>
            <h2 className="section-title">Yang Anda Dapat Bukan Cuma Chatbot, Tapi Partner Bisnis</h2>
            <p className="section-desc">Coba hitung: berapa biaya gaji tim CS per bulan? Berapa pelanggan yang hilang karena chat dibalas keesokan harinya? Aevon hadir untuk menyelesaikan dua masalah itu sekaligus.</p>
          </div>
          <div className="benefits-layout">
            <div className="benefits-visual reveal">
              <div className="benefits-image-wrapper">
                <img src="/images/ai-assistant.png" alt="Aevon AI Assistant bekerja 24/7" className="benefits-hero-img" loading="lazy" />
              </div>
              <div className="benefits-card-main">
                <div className="savings-amount" data-count="70" data-suffix="%">0%</div>
                <div className="savings-label">Rata-rata Penghematan Biaya Operasional</div>
                <div className="savings-bars">
                  <div className="savings-bar">
                    <span className="savings-bar-label">Kecepatan</span>
                    <div className="savings-bar-track">
                      <div className="savings-bar-fill" data-width="95%"></div>
                    </div>
                    <span className="savings-bar-value">95%</span>
                  </div>
                  <div className="savings-bar">
                    <span className="savings-bar-label">Kepuasan</span>
                    <div className="savings-bar-track">
                      <div className="savings-bar-fill" data-width="92%"></div>
                    </div>
                    <span className="savings-bar-value">92%</span>
                  </div>
                  <div className="savings-bar">
                    <span className="savings-bar-label">Konversi</span>
                    <div className="savings-bar-track">
                      <div className="savings-bar-fill" data-width="78%"></div>
                    </div>
                    <span className="savings-bar-value">78%</span>
                  </div>
                  <div className="savings-bar">
                    <span className="savings-bar-label">Efisiensi</span>
                    <div className="savings-bar-track">
                      <div className="savings-bar-fill" data-width="88%"></div>
                    </div>
                    <span className="savings-bar-value">88%</span>
                  </div>
                </div>
              </div>
              <div className="floating-benefit fb-1">
                <div className="fb-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <span>Konversi Naik 3x</span>
              </div>
            </div>
            <div className="benefits-content reveal reveal-delay-2">
              <div className="benefit-list">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <h3>Biaya Operasional Turun Drastis</h3>
                    <p>Satu chatbot Aevon bisa menangani ribuan percakapan secara bersamaan. Anda tidak perlu lagi merekrut tim CS besar hanya untuk menjawab pertanyaan yang berulang.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <div>
                    <h3>Pelanggan Dilayani Instan, Kapanpun</h3>
                    <p>Tidak ada antrian, tidak ada "mohon ditunggu". Setiap pertanyaan dijawab dalam detik — dan itu yang membuat pelanggan betah dan percaya dengan bisnis Anda.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <div>
                    <h3>Penjualan Jalan Terus, Bahkan Saat Anda Tidur</h3>
                    <p>Dari pertanyaan produk sampai closing order, semuanya dihandle otomatis. Anda cukup buka dashboard di pagi hari dan lihat pesanan yang sudah masuk.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h3>Tim Anda Bisa Fokus ke Hal yang Lebih Penting</h3>
                    <p>Biarkan Aevon yang menangani pertanyaan rutin. Tim Anda bisa fokus ke strategi bisnis, pengembangan produk, atau sekadar istirahat dengan tenang.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-container">
          <div className="section-header reveal">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Pertanyaan yang Sering Diajukan tentang Aevon</h2>
            <p className="section-desc">Informasi singkat tentang manfaat, cara kerja, dan integrasi chatbot AI yang kami tawarkan untuk bisnis modern.</p>
          </div>
          <div className="faq-grid">
            <details className="faq-item reveal">
              <summary>Apa itu chatbot AI Aevon?</summary>
              <p>Aevon adalah solusi chatbot AI yang membantu bisnis merespons pertanyaan pelanggan secara otomatis di berbagai kanal seperti WhatsApp, Instagram, dan website.</p>
            </details>
            <details className="faq-item reveal reveal-delay-1">
              <summary>Apakah cocok untuk usaha kecil dan menengah?</summary>
              <p>Ya. Aevon bisa disesuaikan untuk bisnis kecil, UMKM, hingga perusahaan yang sudah memiliki sistem layanan pelanggan lebih kompleks.</p>
            </details>
            <details className="faq-item reveal reveal-delay-2">
              <summary>Bisakah chatbot ini meningkatkan penjualan?</summary>
              <p>Biasanya ya. Dengan respons cepat dan follow-up otomatis, chatbot membantu mengurangi hambatan dalam proses pembelian dan meningkatkan konversi.</p>
            </details>
            <details className="faq-item reveal reveal-delay-3">
              <summary>Bagaimana cara memulai?</summary>
              <p>Anda cukup menghubungi tim Aevon untuk konsultasi awal, lalu kami bantu menyiapkan chatbot yang paling sesuai dengan bisnis Anda.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="section-container">
          <div className="section-header reveal">
            <div className="section-label">Testimoni</div>
            <h2 className="section-title">Cerita Mereka yang Sudah Merasakan Sendiri</h2>
            <p className="section-desc">Bukan klaim sepihak — ini langsung dari pemilik bisnis yang sudah menggunakan Aevon dalam operasional harian mereka.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <div className="testimonial-stars">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              </div>
              <p className="testimonial-text">"Yang paling terasa itu kecepatan closing. Dulu pelanggan nanya malam, baru dibalas paginya — kebanyakan sudah beli di tempat lain. Sekarang tidak ada yang terlewat. Omzet naik signifikan dalam bulan pertama."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar t-avatar-1">RA</div>
                <div>
                  <div className="testimonial-name">Rina Amelia</div>
                  <div className="testimonial-role">Owner, Raina Beauty</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal reveal-delay-1">
              <div className="testimonial-stars">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              </div>
              <p className="testimonial-text">"Tadinya saya pakai 5 orang admin CS. Sekarang tinggal 1 orang yang khusus handle eskalasi. Penghematan biayanya cukup besar, dan justru rating kepuasan pelanggan malah naik karena respons jauh lebih cepat."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar t-avatar-2">BW</div>
                <div>
                  <div className="testimonial-name">Budi Wicaksono</div>
                  <div className="testimonial-role">CEO, TechStore Indonesia</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal reveal-delay-2">
              <div className="testimonial-stars">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              </div>
              <p className="testimonial-text">"Jujur saya skeptis awalnya. Tapi setelah coba, banyak pelanggan yang tidak sadar mereka chat dengan bot. Bahasa dan alurnya sangat natural. Tim Aevon juga responsif kalau ada yang perlu disesuaikan."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar t-avatar-3">DS</div>
                <div>
                  <div className="testimonial-name">Diana Sari</div>
                  <div className="testimonial-role">Marketing Manager, FoodKita</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="cta">
        <div className="cta-orb cta-orb-1"></div>
        <div className="cta-orb cta-orb-2"></div>
        <div className="cta-container reveal">
          <div className="cta-image-wrapper">
            <img src="/images/business-growth.png" alt="Pertumbuhan bisnis dengan Aevon" className="cta-img" loading="lazy" />
          </div>
          <div className="cta-badge">Penawaran Terbatas</div>
          <h2 className="cta-title">Pelanggan Anda Tidak Akan Menunggu Selamanya</h2>
          <p className="cta-desc">Jadikan bisnis Anda lebih responsif mulai hari ini. Tim Aevon siap membantu Anda membangun chatbot yang bekerja — bukan sekadar menjawab, tapi menghasilkan penjualan. <strong style={{ color: 'var(--accent)' }}>Konsultasi gratis, uji coba 7 hari tanpa biaya.</strong></p>
          <div className="cta-actions">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn-primary" id="ctaWhatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Hubungi via WhatsApp
            </a>
            <Link href="/contact" className="btn-secondary" id="ctaDM">
              Kirim Pesan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </Link>
          </div>
          <div className="cta-trust">
            <div className="trust-item">
              <span className="t-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Tanpa kartu kredit
            </div>
            <div className="trust-item">
              <span className="t-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Setup dalam 48 jam
            </div>
            <div className="trust-item">
              <span className="t-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Batal kapan saja
            </div>
            <div className="trust-item">
              <span className="t-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Support 24/7
            </div>
          </div>
        </div>
      </section>

      <Script id="faq-structured-data" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqStructuredData)}
      </Script>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="nav-logo">
                <div className="logo-icon">
                  <img src="/icon.svg" alt="Aevon logo" />
                </div>
                Aevon
              </Link>
              <p>Jasa pembuatan chatbot terintegrasi yang menjadi perpanjangan tangan tim bisnis Anda — 24 jam penuh, tanpa jeda, tanpa kompromi kualitas.</p>
            </div>
            <div className="footer-col">
              <h4>Layanan</h4>
              <ul>
                <li><Link href="/services">Chatbot WhatsApp</Link></li>
                <li><Link href="/services">Chatbot Instagram</Link></li>
                <li><Link href="/services">Chatbot Website</Link></li>
                <li><Link href="/services">Custom Integration</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Perusahaan</h4>
              <ul>
                <li><Link href="/services">Tentang Kami</Link></li>
                <li><Link href="/services">Studi Kasus</Link></li>
                <li><Link href="/services">Blog</Link></li>
                <li><Link href="/contact">Karir</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Bantuan</h4>
              <ul>
                <li><Link href="/services">FAQ</Link></li>
                <li><Link href="/services">Dokumentasi</Link></li>
                <li><Link href="/services">Kebijakan Privasi</Link></li>
                <li><Link href="/contact">Hubungi Kami</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Aevon Chatbot. All rights reserved.</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

