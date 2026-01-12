import { motion } from "framer-motion";

export default function Comparison() {
  return (
    <section className="bg-white py-12 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== BADGE ===== */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-indigo-50 text-orange-500 px-4 py-2 rounded-full text-sm font-medium">
            📊 Why Choose Us
          </span>
        </div>

        {/* ===== HEADING ===== */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Compare Our Offerings
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          See how Credifyy stands out from traditional financial services
        </p>

        {/* ===== TABLE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[900px] bg-white border border-indigo-100 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-indigo-50/50">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Features
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-orange-500">
                    Credifyy
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Traditional Banks
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Other Aggregators
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {[
                  {
                    feature: "Number of Partners",
                    credifyy: "90+ Banks",
                    bank: "Single Bank",
                    other: "20–30 Banks",
                  },
                  {
                    feature: "Approval Time",
                    credifyy: "24–48 Hours",
                    bank: "7–15 Days",
                    other: "3–7 Days",
                  },
                  {
                    feature: "Interest Rates",
                    credifyy: "Best in Market",
                    bank: "Fixed Rates",
                    other: "Competitive",
                  },
                  {
                    feature: "Documentation",
                    credifyy: "100% Digital",
                    bank: "Physical Paperwork",
                    other: "Partial Digital",
                  },
                  {
                    feature: "Customer Support",
                    credifyy: "24/7 Available",
                    bank: "Banking Hours",
                    other: "Business Hours",
                  },
                  {
                    feature: "Service Charges",
                    credifyy: "Zero Fees",
                    bank: "Processing Fees",
                    other: "Variable Fees",
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">
                      {row.feature}
                    </td>

                    <td className="px-6 py-4 text-sm font-semibold text-orange-500 flex items-center gap-2">
                      {row.credifyy}
                      <span className="text-green-500">✔</span>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {row.bank}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {row.other}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ===== CTA ===== */}
        <div className="text-center mt-16">
          <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-semibold shadow hover:bg-orange-600 transition">
            Experience the Credifyy Advantage →
          </button>
        </div>
      </div>
    </section>
  );
}
