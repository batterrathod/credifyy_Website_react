import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function TrustStats() {
  return (
    <section className="bg-white py-24">
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
            ✔ Trusted by Millions
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            India's Most Trusted Financial Platform
          </h2>
        </motion.div>

        {/* Main Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          className="mt-14 grid grid-cols-2 gap-12 text-center md:grid-cols-4"
        >
          {[
            ["2M+", "Happy Customers"],
            ["90+", "Partner Banks"],
            ["₹20+", "Crores Saved"],
            ["500+", "Cities Served"],
          ].map(([value, label]) => (
            <motion.div
              key={label}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <p className="text-5xl font-extrabold text-slate-900">
                {value}
              </p>
              <p className="mt-2 text-slate-600">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-20 h-px w-full origin-left bg-slate-200"
        />

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-4"
        >
          {[
            ["98%", "Customer Satisfaction"],
            ["24/7", "Support Available"],
            ["3 Min", "Avg Response Time"],
            ["100%", "Secure & Private"],
          ].map(([value, label]) => (
            <motion.div
              key={label}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="rounded-2xl bg-white p-6 text-center shadow-sm hover:shadow-md"
            >
              <p className="text-3xl font-extrabold text-orange-500">
                {value}
              </p>
              <p className="mt-2 text-slate-600">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600"
        >
          {[
            "Banks Compliant",
            "ISO 27001 Certified",
            "256-bit Encryption",
            "SOC 2 Compliant",
          ].map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex items-center gap-2"
            >
              <ShieldCheck className="text-green-600" size={18} />
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
