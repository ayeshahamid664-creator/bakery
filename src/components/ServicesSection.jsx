import { motion } from 'framer-motion'
import { FaBirthdayCake, FaCookieBite, FaGift, FaHeart } from 'react-icons/fa'

const services = [
  {
    icon: <FaBirthdayCake />,
    title: 'Custom Cakes',
    desc: 'Designed to match your theme, flavour, weight and toppers.',
  },
  {
    icon: <FaCookieBite />,
    title: 'Brownies & Treats',
    desc: 'Customizable size, flavour, toppers and packing.',
  },
  {
    icon: <FaGift />,
    title: 'Treat Boxes & Baskets',
    desc: 'Personalized goodies, themes and premium packaging.',
  },
  {
    icon: <FaHeart />,
    title: 'Bouquets & Gift Packing',
    desc: 'Fresh flower bouquets and elegant gift wrapping.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-sweet-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sweet-brown tracking-[0.3em] mb-3 text-sm">WHAT WE OFFER</p>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            From cakes to gift baskets — everything customized to your taste.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center group"
            >
              <div className="text-5xl text-sweet-brown mb-4 group-hover:scale-110 transition-transform flex justify-center">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-sweet-dark mb-3">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}