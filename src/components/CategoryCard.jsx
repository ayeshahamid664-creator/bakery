import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CategoryCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
    >
      <Link to={category.link}>
        <div className="relative h-80 overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold font-display mb-2">{category.name}</h3>
          <p className="text-sm text-white/80 mb-3">{category.description}</p>
          <span className="inline-block text-sweet-gold font-semibold group-hover:translate-x-2 transition-transform">
            Explore →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}