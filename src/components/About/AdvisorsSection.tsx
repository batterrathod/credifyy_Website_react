import { motion } from "framer-motion";

const advisors = [
  {
    name: "Joel Epstein",
    role:
      "Former chairman and CEO of AIG Consumer Finance Group (NYSE: AIG)",
    accent: "bg-orange-500",
  },
  {
    name: "Mark Goines",
    role: "Former Senior VP and GM at Intuit",
    accent: "bg-indigo-500",
  },
  {
    name: "Steven Freiberg",
    role:
      "Vice Chair of SoFi (NASDAQ: SOFI)\nFormer CEO of Citigroup's Global Consumer Group",
    accent: "bg-orange-500",
  },
  {
    name: "Yu Kai Chou",
    role: "Gamification expert and creator of Octalysis framework",
    accent: "bg-indigo-500",
  },
];

export default function AdvisorsSection() {
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
            👥 Advisors
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Advised by Industry Veterans
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Experienced leaders from top financial institutions and technology
            companies driving our mission forward
          </p>
        </motion.div>

        {/* Advisors Grid */}
        <div className="mt-24 grid grid-cols-1 gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {advisors.map((advisor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Avatar */}
              <div className="relative">
                <div className="h-28 w-28 rounded-full bg-gradient-to-br from-indigo-100 to-purple-200" />
              </div>

              {/* Name */}
              <h3 className="mt-6 text-lg font-bold text-slate-900">
                {advisor.name}
              </h3>

              {/* Role */}
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-600">
                {advisor.role}
              </p>

              {/* Indicator */}
              <div className="mt-4 flex items-center gap-2">
                <span
                  className={`h-1.5 w-8 rounded-full ${advisor.accent}`}
                />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
