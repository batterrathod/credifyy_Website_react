import { motion } from "framer-motion";

const timeline = [
  {
    year: "2018",
    title: "Founded with a Vision",
    desc: "Started with a mission to democratize financial services",
    color: "bg-orange-500",
  },
  {
    year: "2019",
    title: "1 Million Users",
    desc: "Crossed 1M users, partnered with 30+ banks",
    color: "bg-indigo-500",
  },
  {
    year: "2021",
    title: "₹10,000 Cr Milestone",
    desc: "Disbursed ₹10,000 crores in loans, launched Digital Gold",
    color: "bg-orange-500",
  },
  {
    year: "2023",
    title: "2M+ Happy Customers",
    desc: "Serving 2M+ customers across 500+ cities",
    color: "bg-indigo-500",
  },
  {
    year: "2024",
    title: "AI-Powered Future",
    desc: "Launching AI-driven personalized financial recommendations",
    color: "bg-orange-500",
  },
];

export default function JourneyTimelineSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            🧭 Our Journey
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            From Vision to Reality
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            A story of innovation, determination, and financial empowerment
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">

          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Transforming Financial Services Since 2018
            </h3>

            <div className="mt-6 space-y-6 text-slate-600 leading-relaxed">
              <p>
                Credify was founded with a simple observation: accessing
                financial services in India was unnecessarily complex, opaque,
                and often unfair. Customers struggled to compare options,
                understand terms, and get approved for products they deserved.
              </p>

              <p>
                We started as a small team of financial services veterans and
                technology experts who believed that technology could solve
                these problems. Our mission was clear – make financial services
                transparent, accessible, and fair for every Indian.
              </p>

              <p>
                Today, we’ve grown into India’s leading financial services
                platform, serving over 5 million customers across 500+ cities.
                From helping first-time home buyers in tier-2 cities to enabling
                MSMEs access working capital, we’ve facilitated over ₹25,000
                crores in loans.
              </p>

              <p className="font-semibold text-slate-900">
                But we’re just getting started. Our vision is to create a
                financial ecosystem where every Indian has access to the right
                financial products and services, empowering them to achieve
                their dreams and build a better future.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 h-full w-px bg-slate-200" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-8"
                >
                  {/* Year Bubble */}
                  <div
                    className={`z-10 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white ${item.color}`}
                  >
                    {item.year}
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
