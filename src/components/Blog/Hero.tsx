import {
  ArrowRight,
  BookOpen,
  CheckCircle,
} from "lucide-react";

export default function FinancialInsights() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background glow blobs */}
      <div className="absolute left-20 top-24 h-48 w-48 rounded-full bg-purple-200 opacity-40 blur-3xl" />
      <div className="absolute right-24 bottom-24 h-48 w-48 rounded-full bg-purple-200 opacity-40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            ⭐ Featured Article
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Financial Insights & <br />
            <span className="relative inline-block text-orange-500">
              Expert Advice
              <span className="absolute left-0 top-full mt-1 h-[3px] w-full rounded-full bg-orange-200" />
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Discover actionable insights, expert strategies, and real-world
            solutions for your financial journey. From home loans to Credit
            optimization, we make complex financial topics simple.
          </p>

          {/* Featured Article Card */}
          <div className="mt-10 rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Author"
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="text-sm text-slate-500">
                <span className="font-medium text-orange-600">
                  Credit Score
                </span>
                <span className="mx-2">•</span>
                12 min read
                <span className="mx-2">•</span>
                8.3k views
              </div>
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              7 Ways to Improve Your Credit Score in 30 Days
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Your Credit score is the gateway to financial opportunities in
              India. With the right strategies, you can see meaningful
              improvements in your CIBIL score within 30 days, opening...
            </p>

            <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
              <span>Rajesh Mehta • 15 June 2023</span>
              <button className="flex items-center gap-1 font-semibold text-orange-500 hover:underline">
                Read More
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative rounded-3xl bg-white p-8 shadow-2xl">
            {/* Chart Header */}
            <p className="mb-4 text-center font-semibold text-slate-800">
              Business Growth After Loan
            </p>

            {/* Fake Chart */}
            <div className="relative h-48 w-full rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
              <svg
                viewBox="0 0 300 120"
                className="h-full w-full"
                fill="none"
              >
                <path
                  d="M10 90 L60 70 L110 55 L160 30 L210 15 L260 5"
                  stroke="#6366F1"
                  strokeWidth="3"
                  fill="none"
                />
                {[10, 60, 110, 160, 210, 260].map((x, i) => (
                  <circle
                    key={i}
                    cx={x}
                    cy={[90, 70, 55, 30, 15, 5][i]}
                    r="4"
                    fill="#6366F1"
                  />
                ))}
              </svg>
            </div>

            {/* Floating badges */}
            <div className="absolute -right-6 top-10 rounded-xl bg-white px-4 py-3 text-sm shadow-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={16} />
                <div>
                  <p className="font-semibold text-slate-800">
                    1+ Articles
                  </p>
                  <p className="text-xs text-slate-500">
                    Expert insights
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-6 bottom-10 rounded-xl bg-white px-4 py-3 text-sm shadow-lg">
              <div className="flex items-center gap-2">
                <BookOpen className="text-orange-500" size={16} />
                <div>
                  <p className="font-semibold text-slate-800">
                    50k+ Readers
                  </p>
                  <p className="text-xs text-slate-500">
                    Monthly visitors
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Icons */}
            <div className="mt-6 flex justify-center gap-6 text-slate-400">
              <div className="h-10 w-10 rounded-lg bg-slate-100" />
              <div className="h-10 w-10 rounded-lg bg-slate-100" />
              <div className="h-10 w-10 rounded-lg bg-slate-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
