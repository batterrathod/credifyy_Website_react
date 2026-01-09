import {
  ClipboardList,
  Zap,
  Lock,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

type Feature = {
  title: string;
  description: string;
  icon: JSX.Element;
  bg: string;
};

const mainFeatures: Feature[] = [
  {
    title: "Compare 100+ Cards",
    description:
      "Comprehensive comparison of features, rewards, and fees from all major Indian banks and financial institutions",
    icon: <ClipboardList className="text-orange-500" />,
    bg: "bg-orange-50",
  },
  {
    title: "2-Minute Approval",
    description:
      "Get instant pre-approval decisions and receive your Credit card within 7 working days with doorstep delivery",
    icon: <Zap className="text-green-600" />,
    bg: "bg-green-50",
  },
  {
    title: "Zero Hidden Fees",
    description:
      "Complete transparency in all charges with no hidden costs, processing fees, or surprise billing statements",
    icon: <Lock className="text-orange-600" />,
    bg: "bg-orange-50",
  },
  {
    title: "Expert Guidance",
    description:
      "Personalized recommendations from certified Credit experts with 24/7 customer support and dedicated relationship managers",
    icon: <HelpCircle className="text-blue-600" />,
    bg: "bg-blue-50",
  },
];

const trustFeatures: Feature[] = [
  {
    title: "Banks Compliant",
    description: "Fully regulated and compliant",
    icon: <ShieldCheck className="text-green-600" />,
    bg: "bg-green-50",
  },
  {
    title: "AI-Powered Matching",
    description: "Smart card recommendations",
    icon: <Sparkles className="text-blue-600" />,
    bg: "bg-blue-50",
  },
  {
    title: "2M+ Happy Customers",
    description: "Trusted across India",
    icon: <Heart className="text-purple-600" />,
    bg: "bg-purple-50",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseCredify() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
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
            ⭐ Why Choose Credify
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            India's Most Trusted Credit Card Platform
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Experience the Credify advantage with transparent pricing, expert
            guidance, and unmatched service quality.
          </p>
        </motion.div>

        {/* Main Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {mainFeatures.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="rounded-2xl bg-white p-6 text-center shadow-sm hover:shadow-md"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
              >
                {item.icon}
              </motion.div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12, delayChildren: 0.3 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {trustFeatures.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
            >
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg}`}
              >
                {item.icon}
              </motion.div>

              <div>
                <p className="font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
