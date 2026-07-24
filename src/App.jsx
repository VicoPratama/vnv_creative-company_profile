import React from 'react';
import heroCollage from './assets/hero_collage.png';
import logoBosles from './assets/logo_bosles.jpg';
import serviceVideo from './assets/service_video.png';
import serviceWeb from './assets/service_web.png';
import serviceGraphic from './assets/service_graphic.png';
import projectHelpdesk from './assets/project_helpdesk.png';
import projectRecruitment from './assets/project_recruitment.png';
import projectBimbel from './assets/project_bimbel.png';
import projectPortfolio from './assets/project_portfolio.png';
import projectTransit from './assets/project_transit.png';

function App() {
  const [openFaq, setOpenFaq] = React.useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Berapa lama waktu pengerjaan untuk sebuah website?",
      a: "Waktu pengerjaan berkisar antara 2 hingga 4 minggu tergantung pada tingkat kompleksitas fitur website Anda. Proyek landing page sederhana biasanya selesai dalam 5-7 hari kerja, sedangkan aplikasi custom atau portal korporat membutuhkan waktu 3-6 minggu."
    },
    // {
    //   q: "Apakah website yang dibuat sudah SEO-friendly dan responsive?",
    //   a: "Tentu saja! Kami selalu menerapkan best-practice optimasi performa agar website memuat sangat cepat, ramah mesin pencari (SEO), dan tampil sempurna di berbagai layar seperti ponsel pintar, tablet, laptop, hingga layar monitor besar."
    // },
    {
      q: "Teknologi apa saja yang VnV Creative gunakan?",
      a: "Kami menggunakan stack teknologi modern terdepan untuk memastikan performa maksimal, seperti React, Vite, TypeScript, Tailwind CSS, Supabase (Database & Real-time storage), serta solusi hosting handal yang menjamin 99.9% uptime."
    },
    {
      q: "Bagaimana proses pembayaran dan revisi proyek?",
      a: "Proses pengerjaan dibagi menjadi beberapa tahap pembayaran (biasanya DP 50% di awal dan pelunasan setelah proyek siap rilis). Kami memberikan jaminan 3 kali revisi mayor pada tahap desain & layout, serta garansi pemeliharaan gratis selama 1 bulan setelah rilis."
    }
  ];

  return (
    <div className="app">
      {/* Components will be added here */}
      <div className="glass-nav-container">
        <nav className="glass-nav">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '1.2rem 2.5rem', alignItems: 'center' }}>
            <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 900, fontSize: '1.4rem', color: 'var(--secondary)', letterSpacing: '0.5px' }}>
              <img src="/logo.png" alt="VnV Creative Logo" style={{ height: '36px', width: '36px', borderRadius: '6px', objectFit: 'cover' }} />
              VnV CREATIVE
            </div>
            <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
              <a href="#services" style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Services</a>
              <a href="#portfolio" style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Work</a>
              <a href="#contact" className="btn-primary" style={{ padding: '0.7rem 1.6rem', fontSize: '0.85rem' }}>Get Started</a>
            </div>
          </div>
        </nav>
      </div>

      <main style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>

        <section className="hero" style={{ padding: '160px 0 100px', position: 'relative', textAlign: 'center' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            <div className="float-fast" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', borderRadius: '100px', fontWeight: 700, fontSize: '0.75rem', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              CREATIVE STUDIO
            </div>
            <h1 style={{ fontSize: 'clamp(4rem, 8vw, 6.5rem)', fontWeight: 900, marginBottom: '2rem', lineHeight: '1.1', letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
              TRANSFORM. BUILD. <span style={{ color: 'var(--secondary)' }}>REALITY.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3.5rem', maxWidth: '640px', lineHeight: '1.6' }}>
              We blend cinematic storytelling with cutting-edge technology to build digital experiences that move people and markets.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', justifyContent: 'center' }}>
              <a href="#portfolio" className="btn-primary" style={{ padding: '1.2rem 3rem', color: '#fff' }}>
                Start Your Project
              </a>
              <a href="#contact" className="btn-primary" style={{ background: 'transparent', border: '1px solid rgba(255, 255, 255, 1)', padding: '1.2rem 3rem', boxShadow: 'none', color: '#fff' }}>
                 View Showcase
              </a>
            </div>
          </div>
        </section>

        <section id="stats" style={{ background: '#0a0a0a', color: '#fff', padding: '4rem 0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900 }}>15+</div>
              <div style={{ opacity: 0.7, textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600 }}>Global Clients</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900 }}>100+</div>
              <div style={{ opacity: 0.7, textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600 }}>Videos Produced</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900 }}>30M+</div>
              <div style={{ opacity: 0.7, textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600 }}>Total Views</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900 }}>10+</div>
              <div style={{ opacity: 0.7, textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600 }}>Tech Awards</div>
            </div>
          </div>
        </section>

        <section id="partners" style={{ padding: '80px 0', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
          <div className="container">
             <div style={{ textAlign: 'center', opacity: 0.5, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '4px', marginBottom: '2.5rem', fontWeight: 800 }}>SUCCESS STORY</div>
             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a href="https://bosles-bimbel.vercel.app/" target="_blank" rel="noopener noreferrer" className="glass-dark bento-card" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '3rem', padding: '3.5rem', borderRadius: '32px', border: '1px solid rgba(255,255,255, 0.1)', boxShadow: 'var(--shadow-sm)', maxWidth: '900px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease' }}>
                   
                   <div style={{ flex: 1 }}>
                     <div style={{ color: 'var(--secondary)', fontSize: '2rem', marginBottom: '1rem', lineHeight: 1 }}>"</div>
                     <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                       "VnV Creative merombak total cara kami beroperasi. Mereka tidak hanya membuat website biasa, tapi membangun sebuah <strong>Sistem Dashboard Terintegrasi</strong> yang sangat kompleks namun mudah digunakan."
                     </p>
                     <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
                       <li style={{ marginBottom: '0.5rem' }}>Portal registrasi dan pembayaran untuk Siswa & Orang Tua.</li>
                       <li style={{ marginBottom: '0.5rem' }}>Dashboard Admin untuk manajemen seluruh siswa, tentor, dan arus kas.</li>
                       <li>Portal Tentor khusus untuk melihat jadwal mengajar, siswa yang dihandle, dan tracking gaji.</li>
                     </ul>
                     <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       VIEW LIVE PLATFORM <span style={{ fontSize: '1.2rem' }}>→</span>
                     </div>
                   </div>

                   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingLeft: '2rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                     <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #fff', boxShadow: 'var(--shadow-sm)', background: '#fff', marginBottom: '1rem' }}>
                       <img src={logoBosles} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Bosles Bimbel" />
                     </div>
                     <div style={{ textAlign: 'center' }}>
                       <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '0.5px', display: 'block' }}>BOSLES BIMBEL</span>
                       <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginTop: '0.2rem', display: 'block' }}>Pendidikan & Les Privat</span>
                     </div>
                   </div>

                </a>
             </div>
          </div>
        </section>

        <section id="services" style={{ background: '#0a0a0a', padding: '120px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.02em', borderBottom: '2px solid rgba(255,255,255,0.1)', display: 'inline-block', paddingBottom: '0.5rem' }}>Core Expertise</h2>
            </div>
            
            <div className="expertise-grid">
              
              {/* Card 1: Video Editing (Large) */}
              <div className="bento-card expertise-card-large" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>🎬</span>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                  Video Editing
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', maxWidth: '80%' }}>
                  High-end cinematic storytelling, color grading, and motion graphics that capture your audience.
                </p>
                <div style={{ position: 'absolute', right: '2rem', bottom: '2rem', opacity: 0.1, fontSize: '8rem' }}>
                  〰
                </div>
              </div>

              {/* Card 2: Web Development (Tall) */}
              <div className="bento-card expertise-card-tall" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>💻</span>
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                    Web Development
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                    Bespoke, high-performance websites built with the latest technologies and a focus on conversion.
                  </p>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <div className="portfolio-tech-badge" style={{ marginBottom: '0.5rem' }}>React & Vite</div>
                  <div className="portfolio-tech-badge">Supabase & Tailwind</div>
                </div>
              </div>

              {/* Card 3: Graphic Design (Small) */}
              <div className="bento-card expertise-card-small" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>🎨</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.8rem', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                  Graphic Design
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Visual identities and branding that make your business unforgettable in a crowded market.
                </p>
              </div>

              {/* Card 4: Operational Radar (Small) */}
              <div className="bento-card expertise-card-small" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                  <div className="radar-dot"><div className="radar-ripple"></div></div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#10b981', letterSpacing: '1px', textTransform: 'uppercase' }}>Available</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.8rem', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                  Operational Radar
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Based in Jakarta Selatan. Ready to deploy custom solutions within 24 hours.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section id="portfolio" style={{ padding: '120px 0', background: '#050505' }}>
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '4rem' }}>
              <div style={{ color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)', padding: '0.4rem 1rem', borderRadius: '100px' }}>WORK SHOWCASE</div>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Crafting <span style={{color: '#a78bfa'}}>Motion</span> & Visual<br/>Identity.</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '500px' }}>A selection of high-fidelity projects where cinematic precision meets strategic design. Every frame is engineered for impact.</p>
              
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', fontSize: '0.85rem', fontWeight: 700 }}>
                <span style={{ borderBottom: '2px solid #fff', paddingBottom: '0.3rem' }}>All Projects</span>
                <span style={{ color: 'var(--text-muted)' }}>Video</span>
                <span style={{ color: 'var(--text-muted)' }}>Design</span>
              </div>
            </div>
            
            <div className="portfolio-masonry">
              {[
                {
                  title: 'HAKA Auto Helpdesk (ADAS)',
                  subtitle: 'Unified Ticketing & Operations Portal',
                  class: 'portfolio-card-wide',
                  img: projectHelpdesk
                },
                {
                  title: 'BYD Haka Careers Hub',
                  subtitle: 'Enterprise Recruitment Platform',
                  class: 'portfolio-card-square',
                  img: projectRecruitment
                },
                {
                  title: 'Bosles Bimbel Portal',
                  subtitle: 'E-Learning & Tutoring Matchmaker',
                  class: 'portfolio-card-square',
                  img: projectBimbel
                },
                {
                  title: 'Vico Pratama Portfolio',
                  subtitle: 'Personal Engineering Showcase',
                  class: 'portfolio-card-wide',
                  img: projectPortfolio
                },
                {
                  title: 'Tebet to BSD Commuter',
                  subtitle: 'Transit Route Planner Utility',
                  class: 'portfolio-card-square',
                  img: projectTransit
                }
              ].map((p, idx) => (
                <div key={idx} className={p.class} style={{ position: 'relative', height: p.class === 'portfolio-card-wide' ? '400px' : '450px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="portfolio-img-container-masonry">
                    <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="portfolio-content-overlay">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>{p.subtitle}</span>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0 }}>{p.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" style={{ padding: '120px 0', background: 'var(--primary)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
              <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '1rem' }}>INVESTMENT</div>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>Paket Layanan Fleksibel</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>Solusi digital yang dirancang khusus untuk skala bisnis Anda, tanpa biaya tersembunyi. Kami fokus pada hasil dan performa.</p>
            </div>

            <div className="pricing-grid">
              {/* Essential */}
              <div className="pricing-card">
                <h3 className="pricing-title">Essential</h3>
                <div className="pricing-subtitle">Pondasi digital yang solid untuk brand Anda.</div>
                <div className="pricing-price">Mulai Rp 3.500.000</div>
                <div className="pricing-features">
                  <div className="pricing-feature">
                    <span className="pricing-feature-icon">✦</span>
                    <span className="pricing-feature-text">Landing Page & Profil Perusahaan</span>
                  </div>
                  <div className="pricing-feature">
                    <span className="pricing-feature-icon">✦</span>
                    <span className="pricing-feature-text">Desain UI/UX Eksklusif</span>
                  </div>
                  <div className="pricing-feature">
                    <span className="pricing-feature-icon">✦</span>
                    <span className="pricing-feature-text">Optimasi SEO Dasar</span>
                  </div>
                  <div className="pricing-feature">
                    <span className="pricing-feature-icon">✦</span>
                    <span className="pricing-feature-text">Free Domain & Hosting (1 Tahun)</span>
                  </div>
                </div>
                <a href="#contact" className="pricing-btn pricing-btn-outline">Pilih Essential</a>
              </div>

              {/* Growth */}
              <div className="pricing-card highlight">
                <div className="pricing-badge">REKOMENDASI</div>
                <h3 className="pricing-title">Growth</h3>
                <div className="pricing-subtitle">Ekosistem lengkap untuk otomatisasi bisnis.</div>
                <div className="pricing-price">Mulai Rp 8.000.000</div>
                <div className="pricing-features">
                  <div className="pricing-feature">
                    <span className="pricing-feature-icon">✦</span>
                    <span className="pricing-feature-text">Semua Fitur di Paket Essential</span>
                  </div>
                  <div className="pricing-feature">
                    <span className="pricing-feature-icon">✦</span>
                    <span className="pricing-feature-text">Dashboard Admin & Manajemen Data</span>
                  </div>
                  <div className="pricing-feature">
                    <span className="pricing-feature-icon">✦</span>
                    <span className="pricing-feature-text">Integrasi API & Notifikasi WhatsApp</span>
                  </div>
                  <div className="pricing-feature">
                    <span className="pricing-feature-icon">✦</span>
                    <span className="pricing-feature-text">Sistem Pembayaran / E-Commerce Dasar</span>
                  </div>
                  <div className="pricing-feature">
                    <span className="pricing-feature-icon">✦</span>
                    <span className="pricing-feature-text">Support Prioritas 24/7</span>
                  </div>
                </div>
                <a href="#contact" className="pricing-btn pricing-btn-solid">Mulai Transformasi</a>
              </div>

              {/* Enterprise */}
              <div className="pricing-card">
                <h3 className="pricing-title">Enterprise</h3>
                <div className="pricing-subtitle">Solusi custom untuk skala korporat.</div>
                <div className="pricing-price">Berdasarkan Scope</div>
                <div className="pricing-features">
                  <div className="pricing-feature">
                    <span className="pricing-feature-icon">✦</span>
                    <span className="pricing-feature-text">Arsitektur Microservices / Custom</span>
                  </div>
                  <div className="pricing-feature">
                    <span className="pricing-feature-icon">✦</span>
                    <span className="pricing-feature-text">Keamanan & Enkripsi Tingkat Tinggi</span>
                  </div>
                  <div className="pricing-feature">
                    <span className="pricing-feature-icon">✦</span>
                    <span className="pricing-feature-text">Modul Operasional & ERP Khusus</span>
                  </div>
                  <div className="pricing-feature">
                    <span className="pricing-feature-icon">✦</span>
                    <span className="pricing-feature-text">Dedicated Engineering Team</span>
                  </div>
                </div>
                <a href="#contact" className="pricing-btn pricing-btn-outline">Jadwalkan Konsultasi</a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" style={{ padding: '120px 0', background: '#111111', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '1rem' }}>F.A.Q</div>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Pertanyaan Umum</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Semua hal yang perlu Anda ketahui tentang layanan dan proses kerja kami.</p>
            </div>
            
            <div>
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className={`faq-accordion ${isOpen ? 'open' : ''}`}>
                    <button className="faq-header" onClick={() => toggleFaq(idx)} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ paddingRight: '1.5rem' }}>{faq.q}</span>
                      <div className="faq-icon-wrapper">
                        <span>+</span>
                      </div>
                    </button>
                    <div className={`faq-content ${isOpen ? 'open' : ''}`} style={{ transition: 'max-height 0.4s cubic-bezier(0.23, 1, 0.32, 1)' }}>
                      <div className="faq-body">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" style={{ padding: '120px 0', background: '#0a0a0a' }}>
          <div className="container">
            <div style={{ marginBottom: '4rem' }}>
              <div style={{ color: '#10b981', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}>LET'S COLLABORATE</div>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>BRING YOUR VISION<br/><span style={{color: '#a78bfa'}}>TO LIFE.</span></h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '600px' }}>Whether it's high-stakes commercial editing or cinematic brand narratives, we're here to elevate your output. Reach out and start the conversation.</p>
            </div>
            
            <div className="contact-split">
              {/* Left Side: Form */}
              <div style={{ background: '#111111', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '2rem' }}>Send an Inquiry</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label className="contact-label">FULL NAME</label>
                    <input type="text" className="contact-input" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="contact-label">EMAIL ADDRESS</label>
                    <input type="email" className="contact-input" placeholder="hello@company.com" />
                  </div>
                </div>
                <div style={{ marginTop: '1.5rem' }}>
                  <label className="contact-label">SUBJECT</label>
                  <select className="contact-input" style={{ appearance: 'none', color: '#666' }}>
                    <option>Video Editing Project</option>
                    <option>Web Development</option>
                    <option>Graphic Design</option>
                  </select>
                </div>
                <div style={{ marginTop: '1.5rem' }}>
                  <label className="contact-label">MESSAGE</label>
                  <textarea className="contact-input" rows="4" placeholder="Tell us about your creative goals..."></textarea>
                </div>
                <button className="contact-btn" style={{ width: '100%', marginTop: '1rem' }}>SUBMIT INQUIRY</button>
              </div>

              {/* Right Side: Details */}
              <div>
                <div className="studio-details-block">
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>Studio Details</h3>
                  
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>📍</span>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.2rem' }}>HEADQUARTERS</div>
                      <div style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>Malang, East Java<br/>Indonesia</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>✉️</span>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.2rem' }}>EMAIL</div>
                      <div style={{ fontSize: '0.95rem' }}>vnvcreator@gmail.com</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>🕒</span>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.2rem' }}>HOURS</div>
                      <div style={{ fontSize: '0.95rem' }}>Mon — Fri, 9am — 6pm WIB</div>
                    </div>
                  </div>
                </div>
                
                <div className="studio-details-block" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '200px', background: 'linear-gradient(45deg, #1a1a1a, #0a0a0a)' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '2px', fontWeight: 800 }}>ACTIVE STUDIO LOCATION</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '6rem 0 3rem', background: '#050505', color: 'rgba(255, 255, 255, 0.8)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
            
            {/* Column 1: Branding & Intro */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', background: '#fff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', fontWeight: 900, fontSize: '1.2rem' }}>V</div>
                <div style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff', letterSpacing: '1px' }}>VnV CREATIVE</div>
              </div>
              <p style={{ lineHeight: '1.8', marginBottom: '2rem', fontSize: '0.95rem' }}>
                Katalis digital untuk bisnis Anda. Kami mengombinasikan desain estetis, teknologi mutakhir, dan strategi terarah untuk menciptakan ekosistem digital yang unggul.
              </p>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1.5px', marginBottom: '1rem', color: '#fff' }}>TERHUBUNG DENGAN KAMI</div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://www.instagram.com/vnvcreative.id/" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'var(--transition)', textDecoration: 'none' }} aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/@vnvcreative.id" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'var(--transition)', textDecoration: 'none' }} aria-label="TikTok">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/vnv-creative/" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'var(--transition)', textDecoration: 'none' }} aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '1.5px', marginBottom: '2rem', textTransform: 'uppercase' }}>Layanan Utama</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', listStyle: 'none', padding: 0 }}>
                <li><a href="#" style={{ transition: 'var(--transition)', opacity: 0.9 }}>Pengembangan Web Apps</a></li>
                <li><a href="#" style={{ transition: 'var(--transition)', opacity: 0.9 }}>Pembuatan Company Profile</a></li>
                <li><a href="#" style={{ transition: 'var(--transition)', opacity: 0.9 }}>Integrasi & Otomatisasi Sistem</a></li>
                <li><a href="#" style={{ transition: 'var(--transition)', opacity: 0.9 }}>Desain UI/UX Eksklusif</a></li>
                <li><a href="#" style={{ transition: 'var(--transition)', opacity: 0.9 }}>Video & Motion Graphics</a></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '1.5px', marginBottom: '2rem', textTransform: 'uppercase' }}>Informasi Kontak</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ color: '#fff', fontSize: '1.2rem', marginTop: '2px' }}>📍</span>
                  <div style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                    Malang, East Java, Indonesia
                  </div>
                </div>
                {/* <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: '#fff', fontSize: '1.2rem' }}>📞</span>
                  <a href="tel:+6281907211950" style={{ fontSize: '0.95rem', opacity: 0.9 }}>+62 819 0721 1950</a>
                </div> */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: '#fff', fontSize: '1.2rem' }}>✉️</span>
                  <a href="mailto:vnvcreator@gmail.com" style={{ fontSize: '0.95rem', opacity: 0.9 }}>vnvcreator@gmail.com</a>
                </div>
              </div>
            </div>

          </div>
          
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem' }}>
            <div>© {new Date().getFullYear()} VnV Creative Agency. Hak cipta dilindungi.</div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="#" style={{ opacity: 0.8, transition: 'var(--transition)' }}>Kebijakan Privasi</a>
              <a href="#" style={{ opacity: 0.8, transition: 'var(--transition)' }}>Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
