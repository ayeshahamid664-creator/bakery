import { Link } from 'react-router-dom'
import { FaInstagram, FaWhatsapp, FaPhone, FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-sweet-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Sweetables" className="h-14 w-14 rounded-full bg-white p-1" />
            <div>
              <h3 className="text-2xl font-bold font-display">Sweetables</h3>
              <p className="text-xs tracking-widest text-sweet-gold">ADMIRE THE TASTE</p>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Handcrafted cakes, brownies, treats and gift baskets — made with love, delivered with care.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-sweet-gold">Quick Links</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link to="/" className="hover:text-sweet-gold transition-colors">Home</Link></li>
            <li><a href="/#about" className="hover:text-sweet-gold transition-colors">About</a></li>
            <li><a href="/#services" className="hover:text-sweet-gold transition-colors">Services</a></li>
            <li><a href="/#contact" className="hover:text-sweet-gold transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-sweet-gold">Categories</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link to="/cakes" className="hover:text-sweet-gold transition-colors">Cakes</Link></li>
            <li><Link to="/brownies" className="hover:text-sweet-gold transition-colors">Brownies</Link></li>
            <li><Link to="/treat-boxes" className="hover:text-sweet-gold transition-colors">Treat Boxes</Link></li>
            <li><Link to="/baskets" className="hover:text-sweet-gold transition-colors">Baskets & Crates</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-sweet-gold">Contact</h4>
          <ul className="space-y-3 text-white/80 text-sm">
            <li>
              <a href="https://wa.me/923353616908" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sweet-gold">
                <FaWhatsapp /> 0335 3616908
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sweetablespk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sweet-gold">
                <FaInstagram /> @sweetablespk
              </a>
            </li>
            <li>
              <a href="tel:+923353616908" className="flex items-center gap-2 hover:text-sweet-gold">
                <FaPhone /> 0335 3616908
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 pt-6 text-center text-white/60 text-sm">
        <p className="flex items-center justify-center gap-1">
          Made with <FaHeart className="text-sweet-pink" /> by Sweetables © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}