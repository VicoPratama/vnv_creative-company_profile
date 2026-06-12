import React from 'react';

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

        <section className="hero" style={{ padding: '100px 0 160px', position: 'relative' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', alignItems: 'center', gap: '5rem' }}>
            <div style={{ zIndex: 2 }}>
              <div className="float-fast" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', background: 'var(--secondary-glow)', color: 'var(--secondary)', borderRadius: '100px', fontWeight: 700, fontSize: '0.85rem', marginBottom: '2rem', border: '1px solid rgba(3, 5, 198, 0.1)' }}>
                <span style={{ fontSize: '1.2rem' }}>✨</span> CREATIVE EXCELLENCE & TECH
              </div>
              <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', fontWeight: 900, marginBottom: '2rem', lineHeight: '0.95', letterSpacing: '-0.04em' }}>
                Transforming <span style={{ color: 'var(--secondary)', position: 'relative' }}>
                  Ideas
                  <svg style={{ position: 'absolute', bottom: '-10px', left: 0, width: '100%', height: '12px' }} viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0 10 Q 50 0 100 10" stroke="var(--secondary)" strokeWidth="3" fill="none" opacity="0.3" />
                  </svg>
                </span> into Reality.
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3.5rem', maxWidth: '540px', lineHeight: '1.6' }}>
                We blend cinematic storytelling with cutting-edge technology to build digital experiences that move people and markets.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <a href="#portfolio" className="btn-primary">
                  Explore Work <span style={{ fontSize: '1.2rem' }}>→</span>
                </a>
                <a href="#contact" style={{ fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'var(--transition)' }}>
                   Book a Consultation
                </a>
              </div>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="float-slow" style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 50px 100px rgba(3, 5, 198, 0.15)', transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)' }}>
                <img src="/src/assets/hero_collage.png" alt="Creative Excellence" style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(45deg, rgba(3, 5, 198, 0.1), transparent)' }}></div>
              </div>

              {/* Floating Elements */}
              <div className="glass float" style={{ position: 'absolute', top: '-30px', right: '-40px', padding: '1.5rem', borderRadius: '24px', minWidth: '180px', zIndex: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--secondary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem' }}>📊</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.4rem', lineHeight: 1, color: 'var(--secondary)' }}>50+</div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)' }}>PROJECTS</div>
                  </div>
                </div>
              </div>

              <div className="glass float-fast" style={{ position: 'absolute', bottom: '40px', left: '-50px', padding: '1.2rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 10 }}>
                <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 15px #10b981' }}></div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Open for Collaboration</div>
              </div>

              <div className="glass float-slow" style={{ position: 'absolute', top: '40%', right: '-60px', padding: '1rem', borderRadius: '18px', zIndex: 5 }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[1, 2, 3].map(i => (
                    <div key={i} style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ddd', border: '2px solid #fff' }}></div>
                  ))}
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--secondary)', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.7rem', fontWeight: 800 }}>+12</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="bento" style={{ padding: '80px 0', background: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.02)', borderBottom: '1px solid rgba(0,0,0,0.02)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
              
              {/* Bento Card 1: Operational Radar Availability */}
              <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                  <div className="radar-dot">
                    <div className="radar-ripple"></div>
                  </div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#10b981', letterSpacing: '1px', textTransform: 'uppercase' }}>Available for Projects</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                  Operational Radar
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Based in Mampang, Jakarta Selatan, active on both local development environments and Supabase cloud integrations. Ready to deploy within 24 hours.
                </p>
              </div>

              {/* Bento Card 2: Coding Pulse Equalizer */}
              <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--secondary)', letterSpacing: '1px', textTransform: 'uppercase' }}>Coding Focus</span>
                  <div className="equalizer-container">
                    <div className="equalizer-bar"></div>
                    <div className="equalizer-bar"></div>
                    <div className="equalizer-bar"></div>
                    <div className="equalizer-bar"></div>
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                    Active Development Pulse
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Constant development rhythm pushing live updates to production. We specialize in zero-downtime hot-reloads and enterprise ticketing systems.
                  </p>
                </div>
              </div>

              {/* Bento Card 3: Interactive Tech Stack Badges */}
              <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--secondary)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Tech Arsenal</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '1.2rem', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                  Our Tech Stack
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['React', 'Vite', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Figma', 'VS Code'].map((tech, i) => (
                    <div key={i} className="portfolio-tech-badge" style={{ margin: 0, padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.72rem', background: 'var(--secondary-glow)', color: 'var(--secondary)' }}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>


        <section id="stats" style={{ background: '#0305C6', color: '#fff', padding: '4rem 0' }}>
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

        <section id="partners" style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
          <div className="container">
             <div style={{ textAlign: 'center', opacity: 0.5, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '4px', marginBottom: '2.5rem', fontWeight: 800 }}>Our Trusted Client</div>
             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="glass-dark" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2.5rem 5rem', borderRadius: '32px', border: '1px solid rgba(3, 5, 198, 0.1)', boxShadow: 'var(--shadow-sm)' }}>
                   <div style={{ width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #fff', boxShadow: 'var(--shadow-sm)', background: '#fff' }}>
                     <img src="/src/assets/logo_bosles.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Bosles Bimbel" />
                   </div>
                   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                     <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '0.5px' }}>BOSLES BIMBEL</span>
                     <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginTop: '0.2rem' }}>Pendidikan & Les Privat</span>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <section id="services" style={{ background: '#fcfcfc', padding: '120px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
              <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '1rem' }}>WHAT WE DO</div>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Core Capabilities</h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>Specialized solutions merging art and engineering for modern brands.</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
              {[
                { title: 'Video Editing', icon: '🎬', desc: 'High-end cinematic storytelling, color grading, and motion graphics that capture your audience.', img: '/src/assets/service_video.png', link: '#contact' },
                { title: 'Web Development', icon: '💻', desc: 'Bespoke, high-performance websites built with the latest technologies and a focus on conversion.', img: '/src/assets/service_web.png', link: '#portfolio' },
                { title: 'Graphic Design', icon: '🎨', desc: 'Visual identities and branding that make your business unforgettable in a crowded market.', img: '/src/assets/service_graphic.png', link: '#contact' }
              ].map((s, idx) => (
                <div key={idx} className="service-card" style={{ background: '#fff', borderRadius: '32px', overflow: 'hidden', padding: '1rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: 'var(--shadow-md)', transition: 'var(--transition)' }}>
                  <div style={{ height: '240px', overflow: 'hidden', borderRadius: '24px', position: 'relative' }}>
                      <img src={s.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: '#fff', padding: '0.8rem 1.2rem', borderRadius: '16px', fontSize: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>{s.icon}</div>
                  </div>
                  <div style={{ padding: '2.5rem 1.5rem' }}>
                      <h3 style={{ fontSize: '1.75rem', marginBottom: '1.2rem', fontWeight: 900 }}>{s.title}</h3>
                      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>{s.desc}</p>
                      <a href={s.link} style={{ fontWeight: 800, color: 'var(--secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        LEARN MORE <span style={{ fontSize: '1.2rem' }}>→</span>
                      </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" style={{ padding: '120px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem' }}>
              <div>
                <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '1rem' }}>PORTFOLIO</div>
                <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Featured Projects</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>A glimpse into our recent creative ventures.</p>
              </div>
              <a href="#" style={{ color: 'var(--secondary)', fontWeight: 800, borderBottom: '2px solid var(--secondary-glow)', paddingBottom: '4px' }}>View All Projects →</a>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem' }}>
              {[
                {
                  title: 'HAKA Auto Helpdesk (ADAS)',
                  subtitle: 'Unified Ticketing & Operations Portal',
                  desc: 'Streamlined corporate operations portal for HAKA Auto Group featuring automated ticket routing, real-time tracking, and integrated GA meeting room bookings.',
                  tech: 'React • TypeScript • Tailwind CSS • Supabase • TanStack Query',
                  github: 'https://github.com/ict-bumiauto/adas-helpdesk-hakaauto',
                  img: '/src/assets/project_helpdesk.png'
                },
                {
                  title: 'BYD Haka Careers Hub',
                  subtitle: 'Enterprise Recruitment Platform',
                  desc: 'A comprehensive candidate recruitment portal for HR to post listings, track applicants, score profiles, and schedule interviews with elegant dashboard insights.',
                  tech: 'React • TypeScript • Supabase • Tailwind CSS • TanStack Query • Recharts',
                  github: 'https://github.com/ict-bumiauto/hakaauto-rekrutmen',
                  img: '/src/assets/project_recruitment.png'
                },
                {
                  title: 'Bosles Bimbel Portal',
                  subtitle: 'E-Learning & Tutoring Matchmaker',
                  desc: 'An interactive study and tutoring platform enabling seamless tutor-student scheduling, virtual classes, progress analytics, and curriculum resources.',
                  tech: 'React • Vite • Tailwind CSS • Supabase Auth & Storage',
                  github: 'https://github.com/VicoPratama/bosles-bimbel',
                  img: '/src/assets/project_bimbel.png'
                },
                {
                  title: 'Vico Pratama Portfolio',
                  subtitle: 'Personal Engineering Showcase',
                  desc: 'A bespoke personal portfolio website displaying complex engineering projects with glowing interactive UI components, dark mode, and seamless layouts.',
                  tech: 'React • Vite • Tailwind CSS • Vercel Hosting',
                  github: 'https://github.com/VicoPratama/portfolio-vicopf',
                  img: '/src/assets/project_portfolio.png'
                },
                {
                  title: 'Tebet to BSD Commuter',
                  subtitle: 'Transit Route Planner Utility',
                  desc: 'An intelligent transit helper mapping routes, estimating travel fares, and tracking real-time KRL and shuttle schedules for Tebet-BSD commuters.',
                  tech: 'React • Tailwind CSS • Vite • Local Transit API',
                  github: 'https://github.com/VicoPratama/tebet-to-bsd',
                  img: '/src/assets/project_transit.png'
                }
              ].map((p, idx) => (
                <div key={idx} className="portfolio-card">
                  <div className="portfolio-img-container">
                    <img src={p.img} alt={p.title} />
                  </div>
                  <div style={{ padding: '2rem 1.2rem 1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.6rem', opacity: 0.8 }}>{p.subtitle}</div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: '1.3' }}>{p.title}</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6', flex: 1 }}>{p.desc}</p>
                    <div className="portfolio-tech-badge">
                      {p.tech}
                    </div>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800, color: 'var(--secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', letterSpacing: '0.5px', marginTop: 'auto' }}>
                      VIEW CODE ON GITHUB <span style={{ fontSize: '1.1rem' }}>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" style={{ padding: '120px 0', background: '#fafafa' }}>
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

        <section id="faq" style={{ padding: '120px 0', background: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.02)', borderBottom: '1px solid rgba(0,0,0,0.02)' }}>
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

        <section id="contact" style={{ padding: '120px 0' }}>
          <div className="container">
            <div className="float-slow" style={{ background: 'var(--secondary)', color: 'var(--primary)', textAlign: 'center', padding: '100px 4rem', borderRadius: '48px', boxShadow: '0 40px 100px rgba(3, 5, 198, 0.3)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
              <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.03em', lineHeight: 1 }}>Ready to Start a Project?</h2>
                <p style={{ fontSize: '1.25rem', marginBottom: '3.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 3.5rem' }}>Let's collaborate and create something extraordinary together that sets your brand apart.</p>
                <button className="btn-primary" style={{ background: '#fff', color: 'var(--secondary)', padding: '1.2rem 3.5rem', fontSize: '1.1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                  Work With Us <span style={{ fontSize: '1.4rem' }}>→</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '6rem 0 3rem', background: 'var(--secondary)', color: 'rgba(255, 255, 255, 0.8)' }}>
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
