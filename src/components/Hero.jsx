import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: '/images/hero1.jpg',
    title: 'Handcrafted With Love',
    subtitle: 'Custom Cakes For Every Occasion',
    cta: 'Explore Cakes',
    link: '/cakes',
  },
  {
    image: '/images/hero2.jpg',
    title: 'Divine Taste In Every Bite',
    subtitle: 'Premium Brownies & Chocolates',
    cta: 'Shop Brownies',
    link: '/brownies',
  },
  {
    image: '/images/hero3.jpg',
    title: 'Gift Beyond Expectations',
    subtitle: 'Beautiful Baskets & Treat Boxes',
    cta: 'View Baskets',
    link: '/baskets',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-sweet-dark">
      {/* Background Images — crossfade with overlap (no white flash) */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{
              opacity: i === current ? 1 : 0,
              scale: i === current ? 1 : 1.08,
            }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0"
            style={{ zIndex: i === current ? 1 : 0 }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </motion.div>
        ))}
        {/* Dark overlay — always on, keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-2xl"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-sweet-gold tracking-[0.25em] sm:tracking-[0.3em] mb-3 sm:mb-4 text-xs sm:text-sm md:text-base font-semibold"
              >
                ✦ SWEETABLES ✦
              </motion.p>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 font-display leading-tight drop-shadow-2xl">
                {slides[current].title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 drop-shadow-lg">
                {slides[current].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to={slides[current].link}
                  className="bg-sweet-brown text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-sweet-dark transition-all duration-300 hover:scale-105 shadow-lg text-center"
                >
                  {slides[current].cta}
                </Link>
                <a
                  href="https://wa.me/923353616908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-sweet-dark transition-all duration-300 text-center"
                >
                  Order Now
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
              i === current
                ? 'w-8 sm:w-12 bg-sweet-gold'
                : 'w-1.5 sm:w-2 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}