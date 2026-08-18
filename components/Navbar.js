'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-lg border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl font-bold">
          SS<span className="text-accent-blue">.</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {item}
            </Link>
          ))}
          <Link href="/contacts" className="px-5 py-2 bg-gradient-main text-white rounded-full text-sm font-semibold shadow-lg hover:-translate-y-0.5 transition-transform">
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setIsOpen(!isOpen)}>
          <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4">
           {['Home', 'About', 'Projects', 'Skills', 'Contacts'].map((item) => (
            <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-center py-2 text-gray-300 hover:text-white">
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}