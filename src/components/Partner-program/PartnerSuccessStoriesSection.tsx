import { motion } from "framer-motion";
import { Star } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PartnerSuccessStoriesSection() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            ⭐ Real Partner Success Stories
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Partners Achieving{" "}
            <span className="text-orange-500">Exceptional Growth</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Join thousands of successful partners who have transformed their
            businesses and achieved financial independence through our
            enterprise partnership program.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1 */}
          <motion.div
            variants={card}
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-100"
          >
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                RK
              </div>
              <div>
                <p className="font-semibold text-slate-900">Rajesh Kumar</p>
                <p className="text-sm text-slate-500">
                  Financial Advisor, Mumbai
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-4 text-center">
              <div>
                <p className="text-lg font-bold text-orange-500">₹15L+</p>
                <p className="text-xs text-slate-500">Monthly Earnings</p>
              </div>
              <div>
                <p className="text-lg font-bold text-green-600">300%</p>
                <p className="text-xs text-slate-500">
                  Growth in 18 months
                </p>
              </div>
            </div>

            {/* Testimonial */}
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              “Credify transformed my insurance agency into a comprehensive
              financial services hub. The enterprise-grade tools and dedicated
              support helped me scale from 20 to 500+ cases monthly.”
            </p>

            {/* Rating */}
            <div className="mt-6 flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={card}
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-100"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 font-bold text-white">
                PS
              </div>
              <div>
                <p className="font-semibold text-slate-900">Priya Sharma</p>
                <p className="text-sm text-slate-500">
                  DSA Partner, Bangalore
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-4 text-center">
              <div>
                <p className="text-lg font-bold text-indigo-500">800+</p>
                <p className="text-xs text-slate-500">Cases / Month</p>
              </div>
              <div>
                <p className="text-lg font-bold text-green-600">1000%</p>
                <p className="text-xs text-slate-500">
                  Business Growth
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              “The AI-powered CRM and automated workflows increased my team’s
              productivity by 10x. From a small operation to managing 800+
              monthly cases with the same team size.”
            </p>

            <div className="mt-6 flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={card}
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-100"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 font-bold text-white">
                AP
              </div>
              <div>
                <p className="font-semibold text-slate-900">Amit Patel</p>
                <p className="text-sm text-slate-500">
                  Enterprise Partner, Pune
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-indigo-50 p-4 text-center">
              <div>
                <p className="text-lg font-bold text-green-600">97%</p>
                <p className="text-xs text-slate-500">Approval Rate</p>
              </div>
              <div>
                <p className="text-lg font-bold text-orange-500">₹25L+</p>
                <p className="text-xs text-slate-500">
                  Monthly Revenue
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              “The enterprise partnership tier gave us white-label solutions and
              custom integrations. Our approval rates improved to 97% and
              customer satisfaction is at an all-time high.”
            </p>

            <div className="mt-6 flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-8 text-center md:grid-cols-4"
        >
          <div>
            <p className="text-2xl font-extrabold text-orange-500">₹250Cr+</p>
            <p className="text-sm text-slate-600">
              Total Partner Earnings
            </p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-indigo-500">10,000+</p>
            <p className="text-sm text-slate-600">Active Partners</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-green-600">94%</p>
            <p className="text-sm text-slate-600">
              Partner Satisfaction
            </p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-orange-500">2.5Cr+</p>
            <p className="text-sm text-slate-600">Cases Processed</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
