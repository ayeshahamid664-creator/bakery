import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sweet-brown tracking-[0.3em] mb-3 text-sm">ABOUT US</p>
          <h2 className="text-4xl md:text-5xl font-bold text-sweet-dark font-display mb-6">
            Baking Happiness Since Day One
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At <span className="font-semibold text-sweet-brown">Sweetables</span>, we believe every
            celebration deserves something extraordinary. From custom cakes to handcrafted
            brownies, treat boxes to elegant baskets — we pour love into every creation.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our promise is simple: <span className="italic">Admire The Taste</span>. Every bite
            is crafted to leave you wanting more, and every order is treated with the care
            it deserves.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { num: '500+', label: 'Happy Clients' },
              { num: '1000+', label: 'Orders Delivered' },
              { num: '50+', label: 'Custom Designs' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-sweet-brown font-display">{s.num}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-4"
        >
          <img src="/images/about1.jpg" alt="About" className="rounded-2xl shadow-lg h-64 w-full object-cover" />
          <img src="/images/about2.jpg" alt="About" className="rounded-2xl shadow-lg h-64 w-full object-cover mt-8" />
          <img src="/images/about3.jpg" alt="About" className="rounded-2xl shadow-lg h-64 w-full object-cover -mt-4" />
          <img src="/images/about4.jpg" alt="About" className="rounded-2xl shadow-lg h-64 w-full object-cover mt-4" />
        </motion.div>
      </div>
    </section>
  )
}