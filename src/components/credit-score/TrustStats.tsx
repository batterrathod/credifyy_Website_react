import {
  Star,
  CheckCircle,
  ThumbsUp,
  AlertCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

type RangeItem = {
  range: string;
  label: string;
  description: string;
  color: string;
  bg: string;
  border: string;
  icon: JSX.Element;
};

const ranges: RangeItem[] = [
  {
    range: "800 - 850",
    label: "Excellent",
    description:
      "Outstanding Credit profile. You're eligible for premium financial products with the most competitive rates and terms.",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
    icon: <Star className="text-green-600" size={18} />,
  },
  {
    range: "740 - 799",
    label: "Very Good",
    description:
      "Strong Credit profile. You qualify for most Credit products with favorable interest rates and terms.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: <CheckCircle className="text-blue-600" size={18} />,
  },
  {
    range: "670 - 739",
    label: "Good",
    description:
      "Solid Credit profile. You're likely to be approved for Credit with standard rates and terms.",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
    icon: <ThumbsUp className="text-teal-600" size={18} />,
  },
  {
    range: "580 - 669",
    label: "Fair",
    description:
      "Developing Credit profile. You may qualify for Credit but could face higher rates or additional requirements.",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    icon: <AlertCircle className="text-yellow-600" size={18} />,
  },
  {
    range: "300 - 579",
    label: "Poor",
    description:
      "Credit improvement needed. Focus on building positive Credit history with secured Credit products.",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
    icon: <XCircle className="text-red-600" size={18} />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function CreditScoreRanges() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            📊 Credit Score Ranges
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Understanding Your Equifax Score
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Your Equifax Credit score ranges from 300 to 850. Here's what each
            range means for your financial opportunities.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
          className="mt-14 space-y-6"
        >
          {ranges.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220 }}
              className={`flex items-center justify-between rounded-2xl border px-6 py-6 ${item.bg} ${item.border}`}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="rounded-xl bg-white p-3 shadow-sm"
                >
                  {item.icon}
                </motion.div>

                <div>
                  <div className="flex items-center gap-3">
                    <h3
                      className={`text-lg font-bold ${item.color}`}
                    >
                      {item.range}
                    </h3>

                    <span
                      className={`rounded-full px-3 py-0.5 text-xs font-semibold ${item.bg} ${item.color}`}
                    >
                      {item.label}
                    </span>
                  </div>

                  <p className="mt-2 max-w-3xl text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>

              <motion.div
                whileHover={{ x: 6 }}
                className="hidden md:block"
              >
                <ArrowRight
                  className={`${item.color}`}
                  size={20}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-xl bg-slate-50 px-6 py-4 text-center text-sm text-slate-600"
        >
          <span className="font-semibold">Powered by Equifax:</span> India&apos;s
          leading Credit information company, providing accurate Credit scores
          and reports to help you make informed financial decisions.
        </motion.div>
      </div>
    </section>
  );
}
