import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What are the qualification criteria for enterprise partnership?",
    a: "Enterprise partners typically require an established business presence, compliance readiness, and the ability to manage higher customer volumes. Our team evaluates eligibility based on scale and operational maturity.",
  },
  {
    q: "What kind of revenue can enterprise partners expect?",
    a: "Enterprise partners can earn ₹5L+ per month depending on volume, product mix, and performance. Higher tiers unlock premium commission slabs and bonuses.",
  },
  {
    q: "What investment is required to start the partnership?",
    a: "There is no upfront investment required. The partnership is zero-cost, with revenue generated purely through commissions.",
  },
  {
    q: "How quickly are commissions processed and paid out?",
    a: "Commissions are processed automatically and paid within 7 working days of successful disbursement.",
  },
  {
    q: "What ongoing support and training does Credify provide?",
    a: "Partners receive onboarding, product training, dedicated relationship managers, priority support, and access to sales enablement resources.",
  },
  {
    q: "Can partners integrate Credify services with their existing systems?",
    a: "Yes, we offer API integrations and white-label solutions for seamless integration with your existing CRM and platforms.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            ❓ Help & Support
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Find answers to commonly asked questions about our financial services.
          </p>
        </motion.div>

        {/* FAQ Box */}
        <div className="mt-20 rounded-3xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <div key={i} className="border-b last:border-none">
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-slate-900">
                      {item.q}
                    </span>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100"
                  >
                    <ChevronDown className="h-4 w-4 text-slate-500" />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-16 pb-6 text-sm leading-relaxed text-slate-600">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <p className="mt-10 text-center text-sm text-slate-600">
          Still have questions?{" "}
          <span className="cursor-pointer font-semibold text-orange-500 hover:underline">
            Contact our support team
          </span>
        </p>

      </div>
    </section>
  );
}
