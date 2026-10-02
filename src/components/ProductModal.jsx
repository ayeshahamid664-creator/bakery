import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function ProductModal({ product, onClose }) {
  if (!product) return null

  const whatsappMessage = encodeURIComponent(
    `Hi Sweetables! I want to order: ${product.name}`
  )

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
          >
            <FaTimes className="text-sweet-dark text-xl" />
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-80 md:h-full min-h-[400px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-sweet-dark font-display mb-3">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-6">{product.description}</p>

              {product.details && (
                <div className="mb-6">
                  <h4 className="font-semibold text-sweet-brown mb-2">Details:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {product.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-3">
                <p className="font-semibold text-sweet-dark mb-2">
                  Order via:
                </p>
                <a
                  href={`https://wa.me/923353616908?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-all hover:scale-105"
                >
                  <FaWhatsapp className="text-xl" /> WhatsApp Order
                </a>
                <a
                  href="https://www.instagram.com/sweetablespk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105"
                >
                  <FaInstagram className="text-xl" /> Instagram DM
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}