import { motion } from "framer-motion";

export default function JoinOurJourneyCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-400 py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-slate-900 md:text-5xl"
          >
            Join Our Journey
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-700"
          >
            Be part of India&apos;s financial transformation. Experience
            transparent, accessible, and personalized financial services
            designed for your success.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10"
          >
            <button className="rounded-full bg-orange-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600">
              Get Started
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
