import { ArrowRight, Phone, Check } from "lucide-react";

export default function DigitalGoldCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 py-24">
      {/* Soft overlay for depth */}
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold md:text-5xl">
          Ready to Start Your Digital Gold Journey?
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-3xl text-lg text-yellow-50">
          Join thousands of smart investors who have already started building
          their gold portfolio. Invest in 24K pure gold from just ₹10 and enjoy
          complete transparency, security, and liquidity.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <button className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-yellow-600 transition hover:bg-yellow-100">
            Start Gold Investment Now
            <ArrowRight size={18} />
          </button>

          <a
            href="tel:+917330755533"
            className="flex items-center gap-3 rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            <Phone size={18} />
            Call: +91 73307 55533
          </a>
        </div>

        {/* Feature checklist */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-yellow-50">
          <div className="flex items-center gap-2">
            <Check size={16} />
            Start with ₹10
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} />
            24K Pure Gold
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} />
            Zero Hidden Charges
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} />
            Instant Liquidity
          </div>
        </div>
      </div>
    </section>
  );
}
