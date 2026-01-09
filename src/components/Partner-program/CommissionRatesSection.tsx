import { motion } from "framer-motion";
import { Home, User, CreditCard, Briefcase } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CommissionRatesSection() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            💰 Transparent Earnings Structure
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Industry-Leading{" "}
            <span className="text-orange-500">Commission Rates</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Maximize your earnings with our transparent, performance-based
            commission structure. Higher volumes unlock premium rates and
            exclusive bonuses.
          </p>
        </motion.div>

        {/* Commission Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Home Loans */}
          <motion.div variants={card} whileHover={{ y: -8 }} className="rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-100">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
              <Home className="text-orange-500" />
            </div>
            <h3 className="mt-6 font-semibold text-slate-900">Home Loans</h3>
            <p className="mt-3 text-2xl font-extrabold text-orange-500">
              0.75% – 1%
            </p>
            <p className="text-sm text-slate-500">of loan amount</p>
            <div className="mt-4 rounded-lg bg-slate-50 py-2 text-sm text-orange-600">
              Up to ₹1,00,000 per case
            </div>
          </motion.div>

          {/* Personal Loans */}
          <motion.div variants={card} whileHover={{ y: -8 }} className="rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-100">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
              <User className="text-indigo-500" />
            </div>
            <h3 className="mt-6 font-semibold text-slate-900">
              Personal Loans
            </h3>
            <p className="mt-3 text-2xl font-extrabold text-indigo-500">
              2% – 3%
            </p>
            <p className="text-sm text-slate-500">of loan amount</p>
            <div className="mt-4 rounded-lg bg-slate-50 py-2 text-sm text-indigo-600">
              Up to ₹30,000 per case
            </div>
          </motion.div>

          {/* Credit Cards */}
          <motion.div variants={card} whileHover={{ y: -8 }} className="rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-100">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
              <CreditCard className="text-green-600" />
            </div>
            <h3 className="mt-6 font-semibold text-slate-900">
              Credit Cards
            </h3>
            <p className="mt-3 text-2xl font-extrabold text-green-600">
              ₹500 – ₹5,000
            </p>
            <p className="text-sm text-slate-500">per approval</p>
            <div className="mt-4 rounded-lg bg-green-50 py-2 text-sm text-green-600">
              Premium Cards · Higher Rates
            </div>
          </motion.div>

          {/* Business Loans */}
          <motion.div variants={card} whileHover={{ y: -8 }} className="rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-100">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
              <Briefcase className="text-orange-500" />
            </div>
            <h3 className="mt-6 font-semibold text-slate-900">
              Business Loans
            </h3>
            <p className="mt-3 text-2xl font-extrabold text-orange-500">
              1% – 1.5%
            </p>
            <p className="text-sm text-slate-500">of loan amount</p>
            <div className="mt-4 rounded-lg bg-slate-50 py-2 text-sm text-orange-600">
              Up to ₹75,000 per case
            </div>
          </motion.div>
        </motion.div>

        {/* Bonuses */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl bg-slate-50 p-10"
        >
          <h3 className="text-center text-lg font-bold text-slate-900">
            Performance Bonuses & Incentives
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <p className="font-semibold text-orange-500">Volume Bonus</p>
              <p className="mt-2 text-sm text-slate-600">
                Extra 0.1% on 50+ cases/month
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <p className="font-semibold text-indigo-500">
                Quality Incentive
              </p>
              <p className="mt-2 text-sm text-slate-600">
                ₹5,000 bonus for 95%+ approval rate
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <p className="font-semibold text-green-600">Loyalty Reward</p>
              <p className="mt-2 text-sm text-slate-600">
                Annual bonus for top performers
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-slate-500">
            *Commission rates and bonuses may vary based on product, lender,
            volume, and performance metrics.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
