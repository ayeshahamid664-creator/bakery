import { motion } from 'framer-motion'
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sweet-brown tracking-[0.3em] mb-3 text-sm">GET IN TOUCH</p>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Ready to order? Reach out via WhatsApp or Instagram DM.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.a
            href="https://wa.me/923353616908"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-green-50 p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all"
          >
            <FaWhatsapp className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-sweet-dark mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-sm">0335 3616908</p>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/sweetablespk"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-pink-50 p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all"
          >
            <FaInstagram className="text-5xl text-pink-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-sweet-dark mb-2">Instagram</h3>
            <p className="text-gray-600 text-sm">@sweetablespk</p>
          </motion.a>

          <motion.a
            href="tel:+923353616908"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-amber-50 p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all"
          >
            <FaPhone className="text-5xl text-sweet-brown mx-auto mb-4" />
            <h3 className="text-xl font-bold text-sweet-dark mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm">0335 3616908</p>
          </motion.a>
        </div>
      </div>
    </section>
  )
}