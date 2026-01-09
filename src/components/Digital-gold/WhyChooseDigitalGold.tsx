import {
  IndianRupee,
  ShieldCheck,
  Star,
  Zap,
  DollarSign,
  BarChart3,
  Check,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseDigitalGold() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            ⚡ Why Choose Digital Gold
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Smart Gold Investment for Modern India
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Experience the future of gold investment with complete transparency,
            security, and convenience.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Start with ₹10 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 220 }}
            className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100"
            >
              <IndianRupee className="text-yellow-600" />
            </motion.div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Start with Just ₹10
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Begin your gold investment journey without traditional minimum
              purchase barriers. Build wealth systematically with
              micro-investments.
            </p>

            <motion.button
              whileHover={{ x: 6 }}
              className="mt-4 text-sm font-semibold text-yellow-600 hover:underline"
            >
              Micro-investing enabled →
            </motion.button>
          </motion.div>

          {/* Bank-Grade Security */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.03 }}
            className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100"
            >
              <ShieldCheck className="text-green-600" />
            </motion.div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Bank-Grade Security
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Your gold is stored in climate-controlled, high-security vaults
              with 24/7 surveillance and comprehensive insurance coverage.
            </p>

            <motion.button
              whileHover={{ x: 6 }}
              className="mt-4 text-sm font-semibold text-green-600 hover:underline"
            >
              Fully insured & audited →
            </motion.button>
          </motion.div>

          {/* 24K Pure Gold (Highlighted) */}
          <motion.div
            variants={fadeUp}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 p-6 shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500">
              <Star className="text-white" />
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              24K Pure Gold (99.99%)
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Invest in BIS Hallmark certified, MMTC-PAMP sourced gold with
              guaranteed purity and authenticity.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="text-green-600" size={14} />
                LBMA Accredited Sources
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-600" size={14} />
                BIS Hallmark Certified
              </li>
            </ul>
          </motion.div>

          {/* Instant Liquidity */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.03 }}
            className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100"
            >
              <Zap className="text-blue-600" />
            </motion.div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Instant Liquidity
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Buy or sell your gold 24/7 at live market rates. Funds are credited
              to your account within 2–3 working days.
            </p>

            <motion.button
              whileHover={{ x: 6 }}
              className="mt-4 text-sm font-semibold text-blue-600 hover:underline"
            >
              24/7 trading available →
            </motion.button>
          </motion.div>

          {/* Zero Hidden Charges */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.03 }}
            className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100"
            >
              <DollarSign className="text-purple-600" />
            </motion.div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Zero Hidden Charges
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              No making charges, wastage fees, or storage costs. Transparent
              pricing with minimal buy-sell spreads.
            </p>

            <motion.button
              whileHover={{ x: 6 }}
              className="mt-4 text-sm font-semibold text-purple-600 hover:underline"
            >
              Complete transparency →
            </motion.button>
          </motion.div>

          {/* Gold SIP */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.03 }}
            className="rounded-2xl bg-slate-50 p-6 shadow-sm hover:shadow-md"
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500"
            >
              <BarChart3 className="text-white" />
            </motion.div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Gold SIP Available
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Start systematic investment plans from ₹100/month. Benefit from
              rupee cost averaging during price fluctuations.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="text-green-600" size={14} />
                Automated Investments
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-600" size={14} />
                Flexible Amount & Frequency
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-white hover:bg-yellow-600"
          >
            Start Your Gold Investment Journey
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
