import { ArrowRight, ChevronDown, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export default function DigitalGoldHero() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute left-16 top-32 h-48 w-48 rounded-full bg-yellow-200 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute right-20 bottom-24 h-48 w-48 rounded-full bg-purple-200 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeLeft}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-1 text-sm font-medium text-yellow-700">
            ⭐ 24K Pure Gold • MMTC-PAMP Certified
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Digital Gold <br />
            <span className="relative inline-block text-yellow-500">
              Investment Starting ₹10
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute left-0 top-full mt-1 h-[3px] rounded-full bg-yellow-200"
              />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Build your wealth with 99.99% pure digital gold. Secure storage in
            bank-grade vaults, instant liquidity, zero making charges, and
            complete insurance coverage.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3 font-semibold text-white hover:bg-yellow-600"
            >
              Start Gold Investment
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Learn More
              <ChevronDown size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeRight}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative rounded-3xl bg-slate-50 p-10 shadow-2xl"
          >
            {/* Gold Coin */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-xl"
            >
              <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-yellow-400 text-center">
                <p className="text-xl font-extrabold text-yellow-800">
                  24K
                </p>
                <p className="text-xs font-semibold text-yellow-900">
                  PURE GOLD
                </p>
              </div>

              <span className="absolute -top-3 right-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-yellow-700 shadow">
                99.99% Pure
              </span>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-6 top-10 rounded-xl bg-white px-4 py-3 text-sm shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Star className="text-yellow-500" size={16} />
                <div>
                  <p className="font-semibold text-slate-800">
                    24K Pure Gold
                  </p>
                  <p className="text-xs text-slate-500">
                    99.99% Purity
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -left-8 bottom-10 rounded-xl bg-white px-4 py-3 text-sm shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
                  <ShieldCheck className="text-green-600" size={16} />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    Bank-Grade Security
                  </p>
                  <p className="text-xs text-slate-500">
                    Fully Insured
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom features */}
            <div className="mt-14 grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-xl border border-yellow-300 bg-yellow-50 p-4 text-sm"
              >
                <p className="font-semibold text-yellow-700">
                  Investment Growth
                </p>
                <p className="mt-1 text-slate-600">
                  Long-term wealth creation
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-xl border border-green-300 bg-green-50 p-4 text-sm text-center"
              >
                <ShieldCheck className="mx-auto text-green-600" />
                <p className="mt-1 font-semibold text-green-700">
                  Bank-Grade Security
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
