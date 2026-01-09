import { ArrowRight, ChevronDown, Check, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function CreditCardsHero() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute left-20 top-24 h-48 w-48 rounded-full bg-purple-200 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute right-24 bottom-24 h-48 w-48 rounded-full bg-purple-200 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            💳 Compare 100+ Credit Cards
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Best Credit Cards <br />
            <span className="relative inline-block text-orange-500">
              for Every Lifestyle
              <span className="absolute left-0 top-full mt-1 h-[3px] w-full rounded-full bg-orange-200" />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Discover India’s most rewarding Credit cards with instant approval,
            zero hidden fees, and exclusive benefits.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Find Your Perfect Card
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Compare Card Types
              <ChevronDown size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative rounded-3xl bg-white p-8 shadow-2xl">
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-6 top-6 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm shadow-lg"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
                <Check className="text-green-600" size={16} />
              </div>
              <div>
                <p className="font-semibold text-slate-800">Instant Approval</p>
                <p className="text-xs text-slate-500">Within 2 minutes</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -left-8 bottom-12 rounded-xl bg-white px-4 py-3 text-sm shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100">
                  <Lock className="text-orange-500" size={14} />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    Zero Hidden Fees
                  </p>
                  <p className="text-xs text-slate-500">100% transparent</p>
                </div>
              </div>
            </motion.div>

            {/* Card Stack */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative mt-12 flex items-center justify-center"
            >
              <div className="absolute h-44 w-72 -rotate-12 rounded-2xl bg-indigo-500 shadow-lg" />
              <div className="absolute h-44 w-72 rotate-6 rounded-2xl bg-green-500 shadow-lg" />
              <div className="relative h-44 w-72 rounded-2xl bg-yellow-400 shadow-xl">
                <div className="absolute right-6 top-6 h-6 w-10 rounded bg-yellow-200" />
                <div className="absolute left-6 bottom-6 text-xs font-semibold text-yellow-900">
                  PREMIUM MEMBER
                </div>
              </div>
            </motion.div>

            {/* Feature Icons */}
            <div className="mt-12 grid grid-cols-3 gap-4 text-center text-xs text-slate-600">
              <motion.div whileHover={{ scale: 1.1 }}>⭐<p>10X Rewards</p></motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>🎟️<p>Lounge Access</p></motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>🔒<p>Zero Fees</p></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
