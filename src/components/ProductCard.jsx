import { motion } from 'framer-motion'

export default function ProductCard({ product, onView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      <div
        className="relative h-64 overflow-hidden cursor-pointer"
        onClick={() => onView(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 text-white font-semibold bg-sweet-brown/90 px-6 py-2 rounded-full transition-all duration-300">
            View Details
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-sweet-dark mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{product.description}</p>
        <button
          onClick={() => onView(product)}
          className="w-full bg-sweet-brown text-white py-2 rounded-full font-semibold hover:bg-sweet-dark transition-colors"
        >
          Order Now
        </button>
      </div>
    </motion.div>
  )
}