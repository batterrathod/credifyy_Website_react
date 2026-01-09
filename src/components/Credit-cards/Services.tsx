import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type CardType = {
  title: string;
  description: string;
  badge?: string;
  icon: string;
  benefits: string[];
  perfectFor: string;
};

const cards: CardType[] = [
  {
    title: "Cashback Credit Cards",
    description:
      "Earn instant cashback on every purchase with transparent, straightforward rewards that directly reduce your bill.",
    badge: "Most Popular",
    icon: "💰",
    benefits: [
      "Up to 5% cashback on all spends",
      "Direct statement Credit within 24 hours",
      "No minimum redemption threshold",
      "Lifetime validity of cashback",
    ],
    perfectFor: "Daily spenders seeking immediate value",
  },
  {
    title: "Rewards Credit Cards",
    description:
      "Maximize your spending power with flexible reward points that unlock endless redemption possibilities.",
    icon: "🎯",
    benefits: [
      "Up to 10X reward points",
      "Transfer to airline & hotel partners",
      "Gift vouchers from 200+ brands",
      "Bonus categories with accelerated earning",
    ],
    perfectFor: "Strategic spenders who love flexibility",
  },
  {
    title: "Travel Credit Cards",
    description:
      "Your gateway to premium travel experiences with exclusive lounge access and comprehensive travel protection.",
    icon: "✈️",
    benefits: [
      "Unlimited domestic & international lounge access",
      "Travel insurance up to ₹1 crore",
      "Priority Pass membership included",
      "Hotel & flight booking discounts up to 15%",
    ],
    perfectFor: "Frequent travelers and business professionals",
  },
  {
    title: "Fuel Credit Cards",
    description:
      "Drive more, spend less with specialized fuel cards offering maximum savings on petrol and diesel.",
    icon: "⛽",
    benefits: [
      "Up to 6.5% cashback on fuel purchases",
      "Fuel surcharge waiver on all transactions",
      "Monthly cashback limit up to ₹1,300",
      "Additional rewards on non-fuel spends",
    ],
    perfectFor: "Daily commuters and vehicle owners",
  },
  {
    title: "Shopping Credit Cards",
    description:
      "Unlock exclusive shopping privileges with brand partnerships and e-commerce platform benefits.",
    icon: "🛍️",
    benefits: [
      "Up to 10% cashback on e-commerce platforms",
      "Instant EMI on purchases above ₹2,500",
      "Exclusive brand partnerships & offers",
      "Special discounts during festive seasons",
    ],
    perfectFor: "Online shopping enthusiasts and millennials",
  },
  {
    title: "Premium Credit Cards",
    description:
      "Experience luxury lifestyle benefits with white-glove service and exclusive privileges reserved for elite members.",
    icon: "👑",
    benefits: [
      "24/7 concierge services worldwide",
      "Golf course access at premium clubs",
      "Fine dining privileges at 5-star hotels",
      "Priority customer service with dedicated RM",
    ],
    perfectFor: "High-net-worth individuals seeking luxury",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function CardCategories() {
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
            💳 Card Categories
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Choose Your Perfect Credit Card Type
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Discover Credit cards designed for your unique lifestyle and
            spending patterns.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              {/* Badge */}
              {card.badge && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-3 left-6 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white"
                >
                  {card.badge}
                </motion.span>
              )}

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10 }}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xl"
              >
                {card.icon}
              </motion.div>

              <h3 className="text-lg font-bold text-slate-900">
                {card.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {card.description}
              </p>

              {/* Benefits */}
              <div className="mt-4">
                <p className="mb-2 text-sm font-semibold text-slate-900">
                  Key Benefits:
                </p>
                <ul className="space-y-2">
                  {card.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <Check className="mt-0.5 text-green-600" size={14} />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Perfect For */}
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="text-slate-600">
                  <strong className="text-slate-900">Perfect for:</strong>{" "}
                  {card.perfectFor}
                </span>

                <motion.div whileHover={{ x: 6 }}>
                  <ArrowRight className="text-orange-500" size={16} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Compare All Credit Cards →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
