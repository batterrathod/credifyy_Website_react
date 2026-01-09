import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Financial Future?
          </h2>

          {/* Subtitle */}
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            Join millions of Indians who have already taken control of their
            finances. Start your journey with a free Credit score check today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-8 py-4 rounded-full shadow-lg"
            >
              Get Started Now
              <span className="text-lg">→</span>
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+917330755533"
              className="inline-flex items-center gap-3 border border-white/50 text-white font-medium px-8 py-4 rounded-full"
            >
              📞 Call Us: +91 73307 55533
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
