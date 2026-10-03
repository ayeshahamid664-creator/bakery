import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import CategoryCard from '../components/CategoryCard'
import QuoteSection from '../components/QuoteSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'
import { categories } from '../data/products'

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Categories Section */}
      <section id="categories" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sweet-brown tracking-[0.3em] mb-3 text-sm">
              OUR SPECIALTIES
            </p>
            <h2 className="section-title">Explore Our Categories</h2>
            <p className="section-subtitle">
              From custom cakes to beautiful gift baskets — each creation is
              tailored to your taste and occasion.
            </p>
          </motion.div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((cat, i) => (
              <CategoryCard key={i} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  )
}