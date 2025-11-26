import React, { useMemo } from 'react'
import logo from '../assets/images/ClipSon.jpg'

const platformNodes = [
  {
    id: 'instagram',
    name: 'Instagram',
    revenue: '$10.8K',
    caption: 'Revenue for the month',
    platform: 'instagram',
    position: { top: '10%', left: '78%' },
    connector: { x: 78, y: 18 },
  },
  {
    id: 'youtube',
    name: 'YouTube',
    revenue: '$8.2K',
    caption: 'Revenue for the month',
    platform: 'youtube',
    position: { top: '38%', left: '92%' },
    connector: { x: 90, y: 38 },
  },
  {
    id: 'facebook',
    name: 'Facebook',
    revenue: '$7.4K',
    caption: 'Revenue for the month',
    platform: 'facebook',
    position: { top: '66%', left: '82%' },
    connector: { x: 82, y: 66 },
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    revenue: '$6.5K',
    caption: 'Revenue for the month',
    platform: 'tiktok',
    position: { top: '82%', left: '58%' },
    connector: { x: 60, y: 82 },
  },
  {
    id: 'x',
    name: 'X',
    revenue: '$4.1K',
    caption: 'Revenue for the month',
    platform: 'x',
    position: { top: '58%', left: '24%' },
    connector: { x: 30, y: 60 },
  },
]

const ParticleLayer = ({ items, className = '' }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    {items}
  </div>
)

const PlatformLogo = ({ platform }) => {
  const logos = {
    youtube: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    tiktok: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    x: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  }
  return logos[platform] || null
}

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const glowDots = useMemo(
    () =>
      Array.from({ length: 60 }, (_, index) => {
        const colors = ['rgba(16,185,129,0.7)', 'rgba(248,113,113,0.6)', 'rgba(94,234,212,0.6)']
        return {
          id: index,
          size: 1.5 + Math.random() * 3,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 4,
          duration: 3 + Math.random() * 4,
          color: colors[Math.floor(Math.random() * colors.length)],
        }
      }),
    []
  )

  const streaks = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        id: index,
        width: 80 + Math.random() * 120,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 8 + Math.random() * 6,
      })),
    []
  )

  return (
    <section className="relative isolate min-h-screen overflow-hidden flex items-center pt-32 pb-16 text-white">
      <div className="absolute inset-0 bg-[#050818]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_55%)]"></div>
      <div className="absolute -top-40 -right-32 w-[55vw] h-[55vw] bg-emerald-500/25 rounded-full blur-[180px] opacity-70"></div>
      <div className="absolute -bottom-32 -left-32 w-[50vw] h-[50vw] bg-indigo-900/40 rounded-full blur-[160px] opacity-60"></div>

      <ParticleLayer
        items={glowDots.map((dot) => (
          <span
            key={`dot-${dot.id}`}
            className="absolute rounded-full"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              backgroundColor: dot.color,
              animation: `twinkle ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
              boxShadow: `0 0 10px ${dot.color}`,
            }}
          ></span>
        ))}
      />

      <ParticleLayer
        className="opacity-70"
        items={streaks.map((streak) => (
          <span
            key={`streak-${streak.id}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{
              width: `${streak.width}px`,
              left: `${streak.left}%`,
              top: `${Math.random() * 100}%`,
              animation: `drift ${streak.duration}s ease-in-out infinite`,
              animationDelay: `${streak.delay}s`,
            }}
          ></span>
        ))}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_520px] items-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.6em] uppercase text-white/60 mb-6">
              Clipson Network
              <span className="h-1.5 w-1.5 rounded-full bg-clipson-green animate-pulse"></span>
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight text-balance">
              Post Clips.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-clipson-green via-emerald-400 to-lime-300">
                Guaranteed Clipper Earnings.
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              ClipSon is the platform that pays clippers for making viral short-form content. Join thousands of
              creators earning from every view without waiting on brand deals.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.pink58.com/clipper-login.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-clipson-green px-8 py-4 text-base font-semibold text-gray-900 shadow-clipson-glow transition hover:bg-clipson-green-light"
              >
                Start Clipping
              </a>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white/80 hover:text-white hover:border-white/30 transition"
              >
                How ClipSon Works →
              </button>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <p className="text-3xl font-semibold text-white">4,200+</p>
                <p className="mt-1 text-sm text-white/60">Active clippers paid last month</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <p className="text-3xl font-semibold text-white">$2.4M</p>
                <p className="mt-1 text-sm text-white/60">Creator payouts tracked on-chain</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] aspect-square">
            <div className="absolute inset-6 rounded-full border border-white/5"></div>
            <div className="absolute inset-12 rounded-full border border-white/10 opacity-60"></div>
            <div className="absolute inset-16 rounded-full border border-clipson-green/30 blur-sm"></div>
            <div className="absolute inset-0 rounded-full border border-white/5 animate-[glow-orbit_24s_linear_infinite] opacity-20"></div>

            <ParticleLayer
              items={[
                <div
                  key="ring"
                  className="absolute inset-14 rounded-full border border-clipson-green/30"
                  style={{ animation: 'pulse-ring 5s ease-in-out infinite' }}
                ></div>,
              ]}
            />

            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              {platformNodes.map((node) => (
                <g key={node.id}>
                  <line
                    x1="50"
                    y1="50"
                    x2={node.connector.x}
                    y2={node.connector.y}
                    stroke="rgba(16, 185, 129, 0.35)"
                    strokeWidth="1.2"
                    strokeDasharray="6 6"
                  />
                  <circle cx={node.connector.x} cy={node.connector.y} r="1.3" fill="rgba(74, 222, 128, 0.9)" />
                </g>
              ))}
            </svg>

            <div className="absolute inset-[28%] rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 flex flex-col items-center justify-center shadow-clipson-glow">
              <div className="w-3/4 h-3/4 rounded-full overflow-hidden border border-white/10 shadow-inner">
                <img src={logo} alt="ClipSon Logo" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="mt-4 text-sm uppercase tracking-[0.4em] text-white/60">Clipper Network</p>
            </div>

            {platformNodes.map((node) => (
              <div
                key={node.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: node.position.top, left: node.position.left }}
              >
                <div className="relative w-48 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-clipson-glow">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white">
                      <PlatformLogo platform={node.platform} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-white/60">{node.caption}</p>
                      <p className="text-lg font-semibold text-white">{node.revenue}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-white/70">{node.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
