import { motion } from "framer-motion";

export default function Process() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= SECURITY BADGES ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            {
              title: "SOC 2 Certified",
              desc: "24/7 monitoring",
              icon: "🛡️",
            },
            {
              title: "256-bit SSL",
              desc: "Bank-level encryption",
              icon: "🔒",
            },
            {
              title: "ISO 27001",
              desc: "Certified secure",
              icon: "✅",
            },
            {
              title: "Data Protected",
              desc: "Your data is secure",
              icon: "🏦",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-xl mb-3">
                {item.icon}
              </div>
              <p className="font-semibold text-gray-900">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 bg-indigo-50 text-orange-500 px-4 py-2 rounded-full text-sm font-medium">
              ⚡ Simple Process
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Financial Journey in 4 Easy Steps
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            From application to approval, we make your financial journey seamless
          </p>
        </div>

        {/* ================= STEPS ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              step: "1",
              title: "Choose Your Product",
              desc: "Select from our wide range of loans, Credit cards, or investment options",
              link: "Get Started →",
              color: "text-orange-500",
            },
            {
              step: "2",
              title: "Compare Options",
              desc: "View personalized offers from 90+ banks and financial institutions",
              link: "Compare Now →",
              color: "text-indigo-500",
            },
            {
              step: "3",
              title: "Submit Application",
              desc: "Quick online application with minimal documentation required",
              link: "Apply Online →",
              color: "text-orange-500",
            },
            {
              step: "✓",
              title: "Get Approved",
              desc: "Fast approval process with funds disbursed in 24–48 hours",
              link: "Track Status →",
              color: "text-green-600",
              success: true,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-bold text-lg
                ${
                  item.success
                    ? "bg-green-100 text-green-600"
                    : "bg-indigo-50 text-indigo-500"
                }`}
              >
                {item.step}
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>

              <span className={`text-sm font-medium ${item.color}`}>
                {item.link}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-semibold shadow hover:bg-orange-600 transition">
            Start Your Journey Today →
          </button>
        </div>
      </div>
    </section>
  );
}
