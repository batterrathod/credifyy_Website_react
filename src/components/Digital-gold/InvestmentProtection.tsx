import {
  ShieldCheck,
  Lock,
  BadgeCheck,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";

type SecurityItem = {
  title: string;
  description: string;
  icon: JSX.Element;
  bg: string;
  iconColor: string;
};

const primarySecurity: SecurityItem[] = [
  {
    title: "MMTC-PAMP Certified",
    description: "India's only LBMA accredited refinery partnership",
    icon: <ShieldCheck />,
    bg: "bg-blue-100",
    iconColor: "text-green-600",
  },
  {
    title: "Bank-Grade Vaults",
    description: "Climate-controlled, 24/7 monitored storage",
    icon: <Lock />,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Full Insurance",
    description: "Complete coverage against theft & damage",
    icon: <ShieldCheck />,
    bg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Independent Trustee",
    description: "Third-party gold holding protection",
    icon: <Landmark />,
    bg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

const complianceSecurity: SecurityItem[] = [
  {
    title: "SOC 2 Certified",
    description: "24/7 monitoring",
    icon: <ShieldCheck />,
    bg: "bg-blue-100",
    iconColor: "text-green-600",
  },
  {
    title: "256-bit SSL",
    description: "Bank-level encryption",
    icon: <Lock />,
    bg: "bg-blue-100",
    iconColor: "text-green-600",
  },
  {
    title: "ISO 27001",
    description: "Certified secure",
    icon: <BadgeCheck />,
    bg: "bg-blue-100",
    iconColor: "text-green-600",
  },
  {
    title: "Data Protected",
    description: "Your data is secure",
    icon: <Landmark />,
    bg: "bg-blue-100",
    iconColor: "text-green-600",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function InvestmentProtection() {
  return (
    <section className="bg-white py-28">
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
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1 text-sm font-medium text-green-600">
            🛡️ Bank-Grade Security & Compliance
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Your Investment is Protected
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Multi-layered security protocols, regulatory compliance, and
            comprehensive insurance coverage.
          </p>
        </motion.div>

        {/* Primary Security */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-12 text-center sm:grid-cols-2 lg:grid-cols-4"
        >
          {primarySecurity.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220 }}
            >
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <span className={item.iconColor}>
                  {item.icon}
                </span>
              </motion.div>

              <h4 className="mt-4 font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="mt-1 text-sm text-slate-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12, delayChildren: 0.3 }}
          className="mt-20 grid grid-cols-2 gap-12 text-center md:grid-cols-4"
        >
          {complianceSecurity.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
            >
              <motion.div
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <span className={item.iconColor}>
                  {item.icon}
                </span>
              </motion.div>

              <h4 className="mt-4 text-sm font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="mt-1 text-sm text-slate-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
