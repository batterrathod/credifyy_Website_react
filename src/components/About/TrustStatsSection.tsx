import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustStatsSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            🛡 Trusted by Millions
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            India&apos;s Most Trusted Financial Platform
          </h2>
        </motion.div>

        {/* Top Stats */}
        <div className="mt-20 grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          {[
            { value: "0M+", label: "Happy Customers" },
            { value: "3+", label: "Partner Banks" },
            { value: "₹0+", label: "Crores Saved" },
            { value: "20+", label: "Cities Served" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-4xl font-extrabold text-slate-900 md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-lg text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-slate-200" />

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { value: "3%", label: "Customer Satisfaction" },
            { value: "0/7", label: "Support Available" },
            { value: "0 Min", label: "Avg Response Time" },
            { value: "3%", label: "Secure & Private" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100"
            >
              <p className="text-3xl font-extrabold text-orange-500">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Row */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-600">
          {[
            "Banks Compliant",
            "ISO 27001 Certified",
            "256-bit Encryption",
            "SOC 2 Compliant",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-green-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
