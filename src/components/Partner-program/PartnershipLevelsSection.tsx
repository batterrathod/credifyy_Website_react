import { motion } from "framer-motion";
import { User, Briefcase, Building2, CheckCircle } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
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

export default function PartnershipLevelsSection() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            ⚙️ Scalable Partnership Tiers
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Choose Your{" "}
            <span className="text-orange-500">Partnership Level</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Start at any level and scale up as your business grows. Each tier
            unlocks new benefits, higher commission rates, and exclusive
            opportunities.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {/* Individual Partner */}
          <motion.div
            variants={card}
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-100"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
              <User className="text-orange-500" />
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Starting at{" "}
              <span className="font-semibold text-orange-500">
                ₹25K/month
              </span>
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              Individual Partner
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Perfect for financial advisors, agents, and consultants starting
              their partnership journey.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Standard Commission Rates",
                "Free Training & Certification",
                "Digital Tools Access",
                "Email & Chat Support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-orange-500" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-xl border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-50">
              Start Individual Partnership
            </button>
          </motion.div>

          {/* Corporate Partner (Most Popular) */}
          <motion.div
            variants={card}
            whileHover={{ y: -10 }}
            className="relative rounded-3xl border-2 border-indigo-500 bg-white p-8 shadow-xl"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold text-white">
              Most Popular
            </span>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
              <Briefcase className="text-orange-500" />
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Potential earnings{" "}
              <span className="font-semibold text-orange-500">
                ₹1L+/month
              </span>
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              Corporate Partner
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Ideal for DSAs, financial services companies, and established
              channel partners.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Enhanced Commission Rates",
                "Dedicated Relationship Manager",
                "Priority Technical Support",
                "Marketing Co-op Programs",
                "API Integration Support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-orange-500" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600">
              Start Corporate Partnership →
            </button>
          </motion.div>

          {/* Enterprise Partner */}
          <motion.div
            variants={card}
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-2xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-slate-900">
              <Building2 />
            </div>

            <p className="mt-6 text-sm text-slate-300">
              Enterprise earnings{" "}
              <span className="font-semibold text-yellow-400">
                ₹5L+/month
              </span>
            </p>

            <h3 className="mt-2 text-xl font-bold">
              Enterprise Partner
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              For large-scale operations, fintech companies, and strategic
              alliance partners.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Premium Commission Rates",
                "Executive Account Management",
                "White-label Solutions",
                "Custom Development",
                "Exclusive Product Access",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-yellow-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-yellow-300">
              Contact Enterprise Team →
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
