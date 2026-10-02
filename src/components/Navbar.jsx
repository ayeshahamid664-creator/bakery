import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', path: '/', hash: '' },
  { name: 'About', path: '/', hash: 'about' },
  { name: 'Categories', path: '/', hash: 'categories' },
  { name: 'Services', path: '/', hash: 'services' },
  { name: 'Contact', path: '/', hash: 'contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Page change pe mobile menu band
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const handleNavClick = (link) => {
    setIsOpen(false)
    if (location.pathname === '/' && link.hash) {
      const el = document.getElementById(link.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-xl py-2'
          : 'bg-gradient-to-b from-black/60 to-transparent py-3 md:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0">
          <img
            src="/logo.png"
            alt="Sweetables"
            className={`rounded-full transition-all duration-300 ${
              scrolled ? 'h-10 w-10 md:h-12 md:w-12' : 'h-11 w-11 md:h-14 md:w-14'
            }`}
          />
          <div className="leading-tight">
            <h1
              className={`text-lg md:text-2xl font-bold font-display transition-colors ${
                scrolled ? 'text-sweet-dark' : 'text-white'
              }`}
            >
              Sweetables
            </h1>
            <p
              className={`text-[10px] md:text-xs tracking-widest transition-colors ${
                scrolled ? 'text-sweet-brown' : 'text-sweet-gold'
              }`}
            >
              ADMIRE THE TASTE
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.hash ? `${link.path}#${link.hash}` : link.path}
              onClick={() => handleNavClick(link)}
              className={`font-semibold transition-colors relative group text-sm xl:text-base ${
                scrolled ? 'text-sweet-dark' : 'text-white drop-shadow-md'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sweet-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Social Icons Desktop */}
          <div className="flex items-center gap-3 pl-3 border-l border-current/20">
            <a
              href="https://www.instagram.com/sweetablespk"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl transition-all hover:scale-125 ${
                scrolled ? 'text-pink-600' : 'text-white'
              }`}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/923353616908"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl transition-all hover:scale-125 ${
                scrolled ? 'text-green-600' : 'text-white'
              }`}
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Mobile Buttons (Call + Menu) */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="https://wa.me/923353616908"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl transition-colors ${
              scrolled ? 'text-green-600' : 'text-white'
            }`}
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-2xl p-1 transition-colors ${
              scrolled ? 'text-sweet-dark' : 'text-white'
            }`}
            aria-label="Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-white shadow-2xl"
      >
        <div className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.hash ? `${link.path}#${link.hash}` : link.path}
              onClick={() => handleNavClick(link)}
              className="text-sweet-dark font-semibold py-3 px-2 border-b border-sweet-cream hover:bg-sweet-cream hover:text-sweet-brown transition-colors rounded"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex gap-3 mt-3">
            <a
              href="https://www.instagram.com/sweetablespk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-3 rounded-full font-semibold"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://wa.me/923353616908"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-full font-semibold"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}