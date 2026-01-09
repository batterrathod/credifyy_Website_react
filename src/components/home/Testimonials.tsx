import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== BADGE ===== */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-indigo-50 text-orange-500 px-4 py-2 rounded-full text-sm font-medium">
            ✓ Customer Success Stories
          </span>
        </div>

        {/* ===== HEADING ===== */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Real Stories, Real Impact
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-20">
          Discover how Credifyy has transformed the financial lives of Indians
          across the country
        </p>

        {/* ===== GRID ===== */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* ===== BIG STORY ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-3xl p-10 bg-gradient-to-br from-indigo-50 to-white shadow-sm"
          >
            {/* Stars */}
            <Stars />

            <p className="text-gray-700 text-lg leading-relaxed mt-6 mb-8">
              “I was struggling with Credit card debt and a poor Credit score.
              Credifyy not only helped me improve my score by 100+ points in
              8 months but also saved me ₹4.8 lakhs through home loan
              refinancing. The digital gold investment feature has been perfect
              for festival savings with great tax benefits.”
            </p>

            <User
              name="Kamini Saha"
              role="Marketing Executive, Delhi"
              avatar="https://randomuser.me/api/portraits/women/44.jpg"
            />
          </motion.div>

          {/* ===== SIDE STORIES ===== */}
          <div className="flex flex-col gap-8">

            {/* Story 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <Stars />
              <p className="text-gray-700 mt-4 mb-6 text-sm leading-relaxed">
                “Found my dream home in Mumbai with Credifyy&apos;s help. They
                compared rates from multiple banks and saved me ₹6,500 on
                monthly EMI.”
              </p>

              <User
                name="Devansh Dewan"
                role="Software Engineer, Mumbai"
                avatar="https://randomuser.me/api/portraits/men/32.jpg"
              />
            </motion.div>

            {/* Story 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <Stars />
              <p className="text-gray-700 mt-4 mb-6 text-sm leading-relaxed">
                “Digital gold investment starting from ₹10 has been perfect for
                my monthly SIPs. Great way to diversify!”
              </p>

              <User
                name="Anand Dora"
                role="Financial Analyst, Bangalore"
                avatar="https://randomuser.me/api/portraits/men/54.jpg"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

function Stars() {
  return (
    <div className="flex gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function User({
  name,
  role,
  avatar,
}: {
  name: string;
  role: string;
  avatar: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-gray-900 text-sm">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
}
