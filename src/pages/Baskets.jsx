import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import { baskets } from '../data/products'

export default function Baskets() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="pt-28 pb-20 bg-sweet-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sweet-brown hover:text-sweet-dark mb-6 font-semibold transition-colors"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-sweet-dark font-display mb-4">
            Baskets & Crates
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Customization can be done in terms of <strong>goodies added, theme,
            and packing</strong>. Bouquets can be customized according to your
            requirements. Gift packing in different styles available.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {baskets.map((p) => (
            <ProductCard key={p.id} product={p} onView={setSelected} />
          ))}
        </div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  )
}