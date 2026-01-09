import { CheckCircle, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function PurposeSection() {
  return (
    <section className="bg-white py-28">
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
            ⚡ Our Purpose
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Driven by Purpose, Guided by Vision
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-slate-50 p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
              <CheckCircle className="text-orange-500" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              To democratize financial services across India by providing
              transparent, affordable, and personalized solutions that empower
              individuals and businesses to achieve their financial goals,
              regardless of their location or background.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 font-medium text-orange-500 hover:underline"
            >
              Financial inclusion for all →
            </a>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-slate-50 p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
              <Eye className="text-indigo-500" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Our Vision
            </h3>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              To become India’s most trusted financial services platform,
              connecting every Indian to the right financial products and
              services, fostering financial inclusion and economic growth across
              all communities.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 font-medium text-indigo-500 hover:underline"
            >
              Building trust, enabling growth →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
