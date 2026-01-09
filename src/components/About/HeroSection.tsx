import { ArrowRight, ChevronDown, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function CreditCardsHero() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute left-24 top-24 h-64 w-64 rounded-full bg-purple-200 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute right-24 bottom-24 h-64 w-64 rounded-full bg-orange-200 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            💳 About Credify
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Building Financial <br />
            <span className="relative inline-block text-orange-500">
              Futures for India
              <span className="absolute left-0 top-full mt-2 h-[3px] w-full rounded-full bg-orange-200" />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Since 2018, Credify has been on a mission to democratize financial
            services across India with transparent, affordable, and personalized
            solutions.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg hover:bg-orange-600"
            >
              Join Our Mission
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Explore Our Story
              <ChevronDown size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT VISUAL (REFERENCE STYLE) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative rounded-3xl bg-white p-8 shadow-2xl">
            
            {/* Floating Stat */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute right-6 top-6 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <Check className="text-green-600" size={16} />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-slate-800">
                  2M+ Happy Customers
                </p>
                <p className="text-xs text-slate-500">Across 500+ cities</p>
              </div>
            </motion.div>

            {/* Steps Illustration Placeholder */}
            <div className="mt-16 flex items-end justify-center gap-6">
              {[1, 2, 3].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex h-40 w-24 items-end justify-center rounded-xl bg-slate-100"
                >
                  <div className="mb-4 h-10 w-10 rounded-full bg-blue-500" />
                </motion.div>
              ))}
            </div>

            {/* Base Platform */}
            <div className="mt-6 h-4 w-full rounded-full bg-slate-200" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
