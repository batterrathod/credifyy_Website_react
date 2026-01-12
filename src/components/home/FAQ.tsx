import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How accurate is the Credit score you provide for customers?",
    a: "We fetch Credit scores directly from authorized credit bureaus, ensuring accuracy and real-time updates aligned with industry standards.",
  },
  {
    q: "How do you determine which bank loan offers to show me?",
    a: "Offers are personalized based on your credit profile, income, eligibility, and lender criteria to ensure the best possible match.",
  },
  {
    q: "Is digital gold a safe investment for Indians compared to traditional gold?",
    a: "Yes. Digital gold is backed by physical gold stored securely and offers transparency, liquidity, and ease of investment starting from ₹10.",
  },
  {
    q: "How can I improve my Credit score in the Credit system?",
    a: "Maintain timely repayments, keep credit utilization low, avoid frequent applications, and regularly monitor your credit report.",
  },
  {
    q: "What makes your Credit card recommendations different for consumers?",
    a: "Our recommendations are unbiased, data-driven, and personalized, focusing on rewards, fees, and benefits best suited to your lifestyle.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white py-12 md:py-28">
      <div className="max-w-4xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-indigo-50 text-orange-500 px-4 py-2 rounded-full text-sm font-medium">
            ❓ Help & Support
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-14">
          Find answers to commonly asked questions about our financial services.
        </p>

        {/* FAQ Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm divide-y">
          {faqs.map((item, index) => (
            <div key={index} className="px-6">
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="bg-gray-100 text-gray-500 text-sm font-semibold px-3 py-1 rounded-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-800 font-medium">
                    {item.q}
                  </span>
                </div>

                <motion.span
                  animate={{ rotate: active === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden pb-5 pl-16 pr-10"
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-10 text-gray-600">
          Still have questions?{" "}
          <a
            href="#"
            className="text-orange-500 font-medium hover:underline"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
}
