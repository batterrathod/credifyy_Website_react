import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function DigitalGoldStats() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Badge + Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-1 text-sm font-medium text-yellow-700">
            ⭐ India&apos;s Digital Gold Market Leader
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Trusted Digital Gold Investment Platform
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-12 text-center md:grid-cols-4"
        >
          {[
            ["₹1.8B+", "Market Value (2024)"],
            ["6M+", "Active Investors"],
            ["65%", "YoY Growth Rate"],
            ["₹10", "Minimum Investment"],
          ].map(([value, label]) => (
            <motion.div
              key={label}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220 }}
            >
              <p className="text-5xl font-extrabold text-yellow-600">
                {value}
              </p>
              <p className="mt-2 text-slate-600">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
