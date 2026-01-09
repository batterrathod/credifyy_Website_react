import {
  DollarSign,
  Layers,
  ShieldCheck,
  GraduationCap,
  Settings,
  Zap,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Industry-Leading Commissions",
    desc: (
      <>
        Earn up to{" "}
        <span className="font-semibold text-orange-500">₹1 lakh per case</span>{" "}
        with the highest payout rates in the industry. Our transparent structure
        ensures maximum profitability for your business.
      </>
    ),
    icon: DollarSign,
    iconBg: "bg-green-500",
    bullet: "7-day payout guarantee",
    bulletColor: "text-green-600",
  },
  {
    title: "Comprehensive Product Suite",
    desc: (
      <>
        Access{" "}
        <span className="font-semibold text-orange-500">
          50+ financial products
        </span>{" "}
        from India’s top banks and NBFCs. Offer complete financial solutions to
        your customers.
      </>
    ),
    icon: Layers,
    iconBg: "bg-blue-500",
    bullet: "Pre-approved offers available",
    bulletColor: "text-blue-600",
  },
  {
    title: "Zero Investment Business",
    desc: (
      <>
        Start your enterprise partnership with{" "}
        <span className="font-semibold text-orange-500">
          zero upfront investment
        </span>
        . We provide all tools, training, and marketing support from day one.
      </>
    ),
    icon: ShieldCheck,
    iconBg: "bg-purple-500",
    bullet: "Free training & certification",
    bulletColor: "text-purple-600",
  },
  {
    title: "Expert Training & Support",
    desc: (
      <>
        Get comprehensive training from industry experts, dedicated relationship
        managers, and{" "}
        <span className="font-semibold text-orange-500">
          24/7 technical support
        </span>
        .
      </>
    ),
    icon: GraduationCap,
    iconBg: "bg-orange-500",
    bullet: "Dedicated success manager",
    bulletColor: "text-orange-600",
  },
  {
    title: "Advanced Digital Platform",
    desc: (
      <>
        Access enterprise-grade CRM, lead management system, mobile app, and{" "}
        <span className="font-semibold text-orange-500">
          AI-powered insights
        </span>{" "}
        for seamless business operations.
      </>
    ),
    icon: Settings,
    iconBg: "bg-red-500",
    bullet: "Real-time analytics dashboard",
    bulletColor: "text-red-600",
  },
  {
    title: "Lightning-Fast Payouts",
    desc: (
      <>
        Receive commissions within{" "}
        <span className="font-semibold text-orange-500">
          7 days of disbursement
        </span>{" "}
        with our automated payout system.
      </>
    ),
    icon: Zap,
    iconBg: "bg-indigo-500",
    bullet: "Automated payout system",
    bulletColor: "text-indigo-600",
  },
];

export default function EnterpriseBenefitsSection() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600">
            🚀 Enterprise Partnership Benefits
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Why Leading Businesses{" "}
            <span className="text-orange-500">Choose Credify</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Join the fastest-growing fintech ecosystem with enterprise-grade
            infrastructure, comprehensive support, and proven results that drive
            business growth.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-100"
            >
              {/* Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${item.iconBg}`}
              >
                <item.icon size={22} />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>

              {/* Bullet */}
              <div className="mt-4 flex items-center gap-2 text-sm">
                <CheckCircle size={16} className={item.bulletColor} />
                <span className={item.bulletColor}>{item.bullet}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
