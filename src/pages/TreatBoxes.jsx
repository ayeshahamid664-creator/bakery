import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import { treatBoxes } from '../data/products'

export default function TreatBoxes() {
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
            Treat Boxes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Can be customized according to your desired <strong>goodies, flavours,
            toppers, and packing</strong>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatBoxes.map((p) => (
            <ProductCard key={p.id} product={p} onView={setSelected} />
          ))}
        </div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  )
}