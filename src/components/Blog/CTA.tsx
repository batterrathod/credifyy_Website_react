import {
  Mail,
  Zap,
  BookOpen,
  CheckCircle,
  Lock,
  Users,
  Star,
  Clock,
  IndianRupee,
} from "lucide-react";

export default function FinancialNewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 py-28 text-white">
      {/* Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-medium backdrop-blur">
          <Mail size={16} />
          Join 15,000+ Financial Success Stories
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-4xl font-extrabold leading-tight sm:text-5xl">
          Master Your{" "}
          <span className="relative inline-block text-yellow-200">
            Financial Future
            <span className="absolute left-0 top-full mt-3 h-1 w-full rounded-full bg-yellow-200/70" />
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
          Get exclusive market insights, expert analysis, and actionable
          strategies delivered to your inbox. Join thousands of Indians who've
          already transformed their financial journey with our weekly digest.
        </p>

        {/* Feature Icons */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <Feature
            icon={<Zap />}
            title="Weekly Insights"
            subtitle="Fresh market analysis"
          />
          <Feature
            icon={<BookOpen />}
            title="Expert Advice"
            subtitle="From industry professionals"
          />
          <Feature
            icon={<CheckCircle />}
            title="Proven Results"
            subtitle="15K+ success stories"
          />
        </div>

        {/* Email Input */}
        <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="h-14 w-full rounded-xl px-5 text-slate-800 outline-none placeholder:text-slate-400"
          />
          <button className="flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-8 font-semibold text-orange-600 transition hover:bg-orange-50">
            Get Free Insights →
          </button>
        </div>

        {/* Privacy */}
        <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-white/80">
          <span className="flex items-center gap-2">
            <Lock size={14} /> 100% Secure & Private
          </span>
          <span>No Spam, Unsubscribe Anytime</span>
          <span>Free Forever</span>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-12 sm:grid-cols-4">
          <Stat icon={<Users />} value="15K+" label="Active Subscribers" />
          <Stat icon={<Star />} value="4.9★" label="Reader Rating" />
          <Stat icon={<Clock />} value="Weekly" label="Expert Content" />
          <Stat icon={<IndianRupee />} value="₹0" label="Always Free" />
        </div>

        {/* Trust */}
        <p className="mt-16 text-sm text-white/70">
          Trusted by financial professionals at
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm font-medium text-white/80">
          <span>SBI</span>
          <span>HDFC</span>
          <span>ICICI</span>
          <span>Axis</span>
          <span>Kotak</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helper Components ---------- */

function Feature({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
        {icon}
      </div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-white/80">{subtitle}</p>
    </div>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
        {icon}
      </div>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-sm text-white/80">{label}</p>
    </div>
  );
}
