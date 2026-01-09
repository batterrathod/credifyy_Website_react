import { Check, ArrowRight } from "lucide-react";

type Step = {
  step: string;
  title: string;
  description: string;
  cta: string;
  ctaColor: string;
};

const steps: Step[] = [
  {
    step: "1",
    title: "Quick Registration & KYC",
    description:
      "Sign up in 2 minutes with basic details. Complete KYC verification for investments above ₹50,000.",
    cta: "2–3 minutes →",
    ctaColor: "text-orange-500",
  },
  {
    step: "2",
    title: "Buy Gold Online",
    description:
      "Purchase 24K pure gold starting from ₹10 at live market rates. Choose one-time or SIP investments.",
    cta: "Starting ₹10 →",
    ctaColor: "text-orange-500",
  },
  {
    step: "check",
    title: "Secure Storage & Track",
    description:
      "Your gold is instantly stored in bank-grade vaults. Track value, sell instantly, or convert to physical gold.",
    cta: "Instant storage →",
    ctaColor: "text-green-600",
  },
];

export default function DigitalGoldSteps() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            ⚡ Simple Process
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Your Digital Gold Journey in 3 Easy Steps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            From registration to investment, experience the simplest way to own
            pure gold
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              {/* Step Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-lg font-bold text-orange-500">
                {item.step === "check" ? (
                  <Check className="text-green-600" />
                ) : (
                  item.step
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {item.description}
              </p>

              <button
                className={`mt-4 text-sm font-semibold ${item.ctaColor} hover:underline`}
              >
                {item.cta}
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-white transition hover:bg-yellow-600">
            Start Gold Investment Now
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
