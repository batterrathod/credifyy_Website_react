import {
  Eye,
  Users,
  Lightbulb,
  Globe,
  ShieldCheck,
  Scale,
} from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Transparency",
    desc: "Complete openness in all our dealings. No hidden fees, no fine print tricks, just honest communication.",
    icon: Eye,
    color: "text-orange-500 bg-orange-100",
  },
  {
    title: "Customer First",
    desc: "Every decision is guided by what's best for our customers. Their success is our success.",
    icon: Users,
    color: "text-indigo-500 bg-indigo-100",
  },
  {
    title: "Innovation",
    desc: "Continuously innovating to make financial services simpler, faster, and more accessible.",
    icon: Lightbulb,
    color: "text-orange-500 bg-orange-100",
  },
  {
    title: "Inclusion",
    desc: "Including everyone in the financial ecosystem, regardless of location, income, or background.",
    icon: Globe,
    color: "text-indigo-500 bg-indigo-100",
  },
  {
    title: "Excellence",
    desc: "Striving for excellence in everything we do, from product quality to customer service.",
    icon: ShieldCheck,
    color: "text-orange-500 bg-orange-100",
  },
  {
    title: "Integrity",
    desc: "Conducting business with the highest standards of integrity, honesty, and ethical behavior.",
    icon: Scale,
    color: "text-indigo-500 bg-indigo-100",
  },
];

export default function CoreValuesSection() {
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
            🧡 Our Values
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Core Values That Guide Us
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            These principles shape every decision we make and every action we take
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
              >
                <item.icon size={22} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
