import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Teamwork"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Soft glow */}
            <div className="absolute -inset-4 bg-indigo-200/20 blur-3xl -z-10 rounded-full" />
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 bg-indigo-50 text-orange-500 px-4 py-2 rounded-full text-sm font-medium">
                🏢 About Credifyy
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Building stronger <br />
              financial futures for{" "}
              <span className="text-orange-500">every Indian</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2018, Credifyy has become India&apos;s trusted financial
              companion, serving over 5 million customers across 500+ cities.
            </p>

            <p className="text-gray-600 mb-10 leading-relaxed">
              Our mission is simple: democratize financial services and make
              them accessible to every Indian, from metro cities to tier-3
              towns.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-orange-500 font-bold text-xl mb-1">
                  ₹2,500+ Cr
                </p>
                <p className="text-gray-600 text-sm">Interest Saved</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-orange-500 font-bold text-xl mb-1">
                  75 Points
                </p>
                <p className="text-gray-600 text-sm">
                  Avg Credit Score Improvement
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all"
            >
              Learn more about us →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
