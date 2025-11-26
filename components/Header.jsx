import React from 'react'
import logo from '../assets/images/ClipSon.jpg'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-[#030b1f]/70 backdrop-blur-2xl border-b border-white/5"></div>
      <nav className="relative container mx-auto px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between gap-6">
          <a href="#main-content" className="flex items-center gap-4">
            <img
              src={logo}
              alt="ClipSon Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border border-white/10 shadow-clipson-glow"
              fetchPriority="high"
              width="56"
              height="56"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-white font-semibold tracking-wide text-base sm:text-lg leading-tight">
                ClipSon
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                Earn from every view
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How it works
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors">
              Community
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://app.pink58.com/clipper-login.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 rounded-full bg-clipson-green text-gray-900 font-semibold text-sm sm:text-base hover:bg-clipson-green-light transition-all shadow-clipson-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clipson-green/60"
            >
              Start Clipping
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

