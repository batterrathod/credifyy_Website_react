import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type TabKey = "loans" | "cards" | "gold" | "score";

const tabs: { key: TabKey; label: string; icon: string }[] = [
  { key: "loans", label: "Loans", icon: "🏠" },
  { key: "cards", label: "Credit Cards", icon: "💳" },
  { key: "gold", label: "Digital Gold", icon: "🪙" },
  { key: "score", label: "Credit Score", icon: "📊" },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<TabKey>("loans");

  return (
    <section className="bg-white py-12 md:py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-indigo-50 text-orange-500 px-4 py-2 rounded-full text-sm font-medium">
            🧰 Our Services
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Financial Solutions Tailored for You
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Explore our comprehensive range of financial products designed to meet
          your unique needs
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-14">
          <div className="flex bg-gray-100 p-1 rounded-full gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition
                  ${
                    activeTab === tab.key
                      ? "bg-white text-orange-500 shadow"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "loans" && <Loans />}
            {activeTab === "cards" && <CreditCards />}
            {activeTab === "gold" && <DigitalGold />}
            {activeTab === "score" && <CreditScore />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ================= LOANS ================= */

function Loans() {
  const items = [
    {
      title: "Home Loans",
      desc: "Rates from 8.40% with tenures up to 30 years",
      icon: "🏡",
    },
    {
      title: "Personal Loans",
      desc: "Up to ₹50 lakhs with 24-hour approval",
      icon: "💼",
    },
    {
      title: "Business Loans",
      desc: "MSME loans up to ₹5 crores",
      icon: "🏢",
    },
    {
      title: "Loan Against Property",
      desc: "Leverage your assets for larger amounts",
      icon: "🏠",
    },
  ];

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl p-6 text-left shadow-sm border border-gray-100"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-xl mb-4 text-xl">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
            <span className="text-orange-500 text-sm font-medium">
              Learn more →
            </span>
          </motion.div>
        ))}
      </div>

      <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold">
        Apply for a Loan →
      </button>
    </>
  );
}

/* ================= CREDIT CARDS ================= */

function CreditCards() {
  const cards = [
    {
      title: "Cashback Cards",
      desc: "Earn up to 5% cashback on all purchases",
      gradient: "from-pink-500 to-purple-500",
      icon: "💰",
    },
    {
      title: "Rewards Cards",
      desc: "Earn points for travel and shopping",
      gradient: "from-blue-500 to-cyan-400",
      icon: "🎁",
    },
    {
      title: "Premium Cards",
      desc: "Exclusive benefits and lounge access",
      gradient: "from-yellow-400 to-orange-500",
      icon: "✨",
    },
  ];

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 mb-14">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className={`rounded-2xl p-8 text-left text-white shadow-lg bg-gradient-to-br ${card.gradient}`}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl mb-6 text-2xl">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-white/90 mb-6">{card.desc}</p>
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              Explore cards →
            </span>
          </motion.div>
        ))}
      </div>

      <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold">
        Compare Credit Cards →
      </button>
    </>
  );
}

/* ================= DIGITAL GOLD ================= */

function DigitalGold() {
  return (
    <div className="max-w-xl mx-auto">
      <p className="text-gray-600 mb-6">
        Invest in 24K digital gold securely starting from as low as ₹10.
      </p>
      <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold">
        Start Investing →
      </button>
    </div>
  );
}

/* ================= CREDIT SCORE ================= */

function CreditScore() {
  return (
    <div className="max-w-xl mx-auto">
      <p className="text-gray-600 mb-6">
        Check your credit score instantly and get personalized improvement tips.
      </p>
      <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold">
        Check Credit Score →
      </button>
    </div>
  );
}
