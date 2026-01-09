import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export default function CreditScoreHero() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* soft background blur */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-200 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-purple-200 blur-3xl"
      />

      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeLeft}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            ● Powered by Equifax
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Your Equifax <br />
            <span className="text-orange-500">Credit Score</span> <br />
            Free &amp; Instantly
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 h-1 rounded-full bg-orange-200"
          />

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Get your comprehensive Equifax Credit report instantly. Access
            detailed insights, monitor your credit health, and receive
            personalized recommendations.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Get Your Free Score
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Learn More
            </motion.button>
          </div>

          {/* trust badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-center gap-3"
            >
              <div className="rounded-full bg-green-100 p-2">
                <ShieldCheck className="text-green-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-slate-800">
                  Bank-Grade Security
                </p>
                <p className="text-sm text-slate-500">
                  256-bit encryption
                </p>
              </div>
            </motion.div>

            <span className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
              Powered by Equifax
            </span>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeRight}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 p-8 text-white shadow-2xl"
          >
            {/* floating badge left */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -left-8 top-12 rounded-xl bg-white px-4 py-3 text-sm text-slate-700 shadow-lg"
            >
              <p className="font-semibold text-orange-600">Updated Today</p>
              <p className="text-xs text-slate-500">Real-time data</p>
            </motion.div>

            {/* floating badge right */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-6 top-6 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm shadow-lg"
            >
              <TrendingUp className="text-green-500" size={18} />
              <div>
                <p className="font-semibold text-slate-800">
                  Score Improved
                </p>
                <p className="text-xs text-green-600">+45 points</p>
              </div>
            </motion.div>

            <p className="text-center text-sm opacity-90">
              Your Credit Score
            </p>

            <h2 className="mt-4 text-center text-6xl font-extrabold">
              750
            </h2>

            <p className="mt-2 text-center text-lg font-semibold">
              Excellent
            </p>

            {/* progress bar */}
            <div className="mt-8 rounded-full bg-orange-300 p-4">
              <div className="mb-2 flex justify-between text-xs font-medium">
                <span>300</span>
                <span>Score Range</span>
                <span>850</span>
              </div>

              <div className="h-3 w-full rounded-full bg-orange-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="h-3 rounded-full bg-white"
                />
              </div>
            </div>

            <p className="mt-6 text-center text-xs opacity-80">
              Powered by Equifax
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
