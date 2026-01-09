import { motion } from "framer-motion";

export default function EnterpriseCTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-slate-900 md:text-5xl"
        >
          Transform Your Business with <br />
          <span className="block">Enterprise Partnership</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-slate-600"
        >
          Join 10,000+ successful partners who have accelerated their growth
          with our enterprise-grade fintech platform. Start your journey toward
          financial independence and business scaling today.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-orange-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600"
          >
            Start Partnership Journey
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
