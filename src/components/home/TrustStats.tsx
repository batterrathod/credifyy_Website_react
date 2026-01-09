import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ---------- Animated Counter Hook ---------- */
function Counter({
  to,
  suffix = "",
  duration = 1200,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = to / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ---------- MAIN COMPONENT ---------- */
export default function TrustStats() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-indigo-50 text-orange-500 px-4 py-2 rounded-full text-sm font-medium">
            ✔ Trusted by Millions
          </span>
        </div>

            {/* Heading */}
        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          India&apos;s Most Trusted Financial Platform
        </motion.h2>

        {/* Top Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center mb-16">
          {[
            { value: 0, suffix: "M+", label: "Happy Customers" },
            { value: 12, suffix: "+", label: "Partner Banks" },
            { value: 2, suffix: "+", label: "Crores Saved", prefix: "₹" },
            { value: 58, suffix: "+", label: "Cities Served" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-gray-900">
                {item.prefix}
                <Counter to={item.value} suffix={item.suffix} />
              </div>
              <p className="mt-2 text-gray-500">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-12" />

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            { value: "4%", label: "Customer Satisfaction" },
            { value: "1/7", label: "Support Available" },
            { value: "0 Min", label: "Avg Response Time" },
            { value: "4%", label: "Secure & Private" },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="text-2xl font-bold text-orange-500 mb-1">
                {card.value}
              </div>
              <p className="text-gray-600 text-sm">{card.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Row */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          {[
            "Banks Compliant",
            "ISO 27001 Certified",
            "256-bit Encryption",
            "SOC 2 Compliant",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <span className="text-green-500 text-lg">✔</span>
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
