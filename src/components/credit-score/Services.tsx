import { motion } from "framer-motion";

type Strategy = {
  title: string;
  description: string;
  icon: string;
};

const strategies: Strategy[] = [
  {
    title: "Pay Bills on Time",
    description:
      "Always pay your Credit card bills and EMIs on time. Payment history contributes 35% to your Credit score.",
    icon: "✔️",
  },
  {
    title: "Maintain Low Credit Utilization",
    description:
      "Keep your Credit card usage below 30% of the Credit limit. Lower utilization shows responsible Credit behavior.",
    icon: "💳",
  },
  {
    title: "Monitor Credit Report",
    description:
      "Check your Credit report regularly for errors and dispute any inaccuracies immediately.",
    icon: "📄",
  },
  {
    title: "Don't Close Old Cards",
    description:
      "Keep old Credit cards active to maintain a longer Credit history, which positively impacts your score.",
    icon: "📅",
  },
  {
    title: "Limit Hard Inquiries",
    description:
      "Avoid applying for multiple loans or Credit cards simultaneously as it creates multiple hard inquiries.",
    icon: "📉",
  },
  {
    title: "Mix Your Credit",
    description:
      "Maintain a healthy mix of secured and unsecured loans to show you can handle different types of Credit.",
    icon: "📊",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function BoostScore() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
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
            ⚡ Improvement Strategies
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
            6 Proven Ways to{" "}
            <span className="text-orange-500">Boost Your Score</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Follow these expert-recommended strategies to improve your Equifax
            Credit score and unlock better financial opportunities.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {strategies.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                {item.description}
              </p>

              <motion.button
                whileHover={{ x: 6 }}
                className="mt-6 flex items-center gap-1 text-sm font-semibold text-orange-500 hover:underline"
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
