import { motion } from 'framer-motion'

const quotes = [
  {
    text: "Life is short, eat the cake first.",
    author: "Sweetables",
  },
  {
    text: "Every dessert is a celebration waiting to happen.",
    author: "Sweetables",
  },
  {
    text: "Made with love, baked to perfection.",
    author: "Sweetables",
  },
]

export default function QuoteSection() {
  return (
    <section className="py-20 bg-sweet-cream relative overflow-hidden">
      <div className="absolute top-10 left-10 text-8xl text-sweet-brown/10 font-display">"</div>
      <div className="absolute bottom-10 right-10 text-8xl text-sweet-brown/10 font-display">"</div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-sweet-dark mb-12"
        >
          Words That Taste Sweet
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <p className="text-lg italic text-sweet-dark mb-4 font-display">
                "{q.text}"
              </p>
              <p className="text-sm text-sweet-brown font-semibold tracking-wider">
                — {q.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}