import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 md:pt-32 pb-12 md:pb-20">
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-orange-500 px-4 py-2 rounded-full text-sm mb-6">
            ⚡ Trusted by 5 Million+ Indians
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Smarter Financial <br />
            <span className="text-orange-500">Solutions for India</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Your comprehensive financial hub for loans, Credit cards,
            investments, and more. Compare offers from 90+ leading
            banks and financial institutions.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition">
              Check Your Credit Score →
            </button>

            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-300 font-semibold text-gray-700 hover:bg-gray-50 transition">
              Explore Services
              <span className="text-xl">⌄</span>
            </button>
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Image */}
          <img
            src="https://suryoday.bank.in/cms/uploads/Home_Loan_8b35f56123.png"
            alt="Happy Indian Family"
            className="relative z-10 rounded-2xl"
          />

          {/* Floating Card: Instant Approval */}
          <motion.div
            className="absolute top-10 right-6 bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              ✓
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Instant Approval
              </p>
              <p className="text-xs text-gray-500">
                Get approved in minutes
              </p>
            </div>
          </motion.div>

          {/* Floating Card: Secure */}
          <motion.div
            className="absolute bottom-10 left-0 bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
              🔒
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                100% Secure
              </p>
              <p className="text-xs text-gray-500">
                Bank-level encryption
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
