import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function EnterprisePartnershipHero() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            ✅ Trusted by 10,000+ Enterprise Partners
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Scale Your Business with <br />
            <span className="text-orange-500">Enterprise Partnership</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Join India&apos;s most trusted fintech platform. Our enterprise
            partners see <span className="font-semibold text-orange-500">40% revenue growth</span> in 6 months
            with comprehensive support, cutting-edge tools, and industry-leading
            commission structure.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-10">
            <div>
              <p className="text-xl font-bold text-orange-500">₹2,500Cr+</p>
              <p className="text-sm text-slate-600">Disbursed</p>
            </div>
            <div>
              <p className="text-xl font-bold text-orange-500">10,000+</p>
              <p className="text-sm text-slate-600">Partners</p>
            </div>
            <div>
              <p className="text-xl font-bold text-orange-500">50+</p>
              <p className="text-sm text-slate-600">Bank Partners</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600">
              Partnership Journey <ArrowRight size={18} />
            </button>

            <button className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">
              Commission Rates
            </button>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative rounded-3xl bg-white p-8 shadow-2xl">

            {/* Floating Growth Card */}
            <div className="absolute right-6 top-6 rounded-xl bg-white px-4 py-3 text-sm shadow-lg">
              <p className="text-slate-600">Average Partner Growth</p>
              <p className="text-xl font-bold text-green-600">+40%</p>
              <p className="text-xs text-slate-500">in 6 months</p>
            </div>

            {/* Main Illustration Placeholder */}
            <div className="flex h-72 items-center justify-center rounded-2xl bg-slate-50">
              <div className="text-center">
                <p className="font-semibold text-slate-700">
                  Enterprise Partnership
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Collaborate • Grow • Succeed
                </p>

                <div className="mt-6 flex items-center justify-center gap-10">
                  <div className="h-20 w-20 rounded-full bg-indigo-500" />
                  <div className="h-20 w-20 rounded-full bg-indigo-500" />
                </div>

                <div className="mt-6 h-10 w-32 rounded bg-indigo-100" />
              </div>
            </div>

            {/* Floating Earnings Card */}
            <div className="absolute -bottom-6 left-6 rounded-xl bg-white px-4 py-3 text-sm shadow-lg">
              <p className="text-slate-600">Monthly Earnings</p>
              <p className="text-lg font-bold text-orange-500">₹10L+</p>
              <p className="text-xs text-slate-500">top performers</p>
            </div>

            {/* Checks */}
            <div className="absolute left-6 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-green-100">
              <Check className="h-4 w-4 text-green-600" />
            </div>
            <div className="absolute right-6 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-green-100">
              <Check className="h-4 w-4 text-green-600" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
