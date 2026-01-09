import {
  ShieldCheck,
  Lock,
  BadgeCheck,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";

const securityItems = [
  {
    title: "SOC 2 Certified",
    desc: "24/7 monitoring",
    icon: ShieldCheck,
  },
  {
    title: "256-bit SSL",
    desc: "Bank-level encryption",
    icon: Lock,
  },
  {
    title: "ISO 27001",
    desc: "Certified secure",
    icon: BadgeCheck,
  },
  {
    title: "Data Protected",
    desc: "Your data is secure",
    icon: Landmark,
  },
];

export default function SecurityComplianceSection() {
  return (
    <section className="bg-white py-28">
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
            🛡 Security & Compliance
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Bank-Level Security Standards
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Your data is protected with industry-leading security measures and
            compliance standards
          </p>
        </motion.div>

        {/* Security Items */}
        <div className="mt-20 grid grid-cols-1 gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {securityItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                <item.icon className="h-7 w-7 text-green-600" />
              </div>

              {/* Text */}
              <h3 className="mt-6 text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
