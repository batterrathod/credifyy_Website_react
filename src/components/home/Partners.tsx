import { motion } from "framer-motion";

const logos = [
  {
    name: "HDFC Bank",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/HDFC_Bank_Logo.svg",
  },
  {
    name: "ICICI Bank",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg",
  },
  {
    name: "SBI",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg",
  },
  {
    name: "Axis Bank",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg",
  },
  {
    name: "Kotak Bank",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Kotak_Mahindra_Bank_logo.svg",
  },
  {
    name: "YES Bank",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/25/Yes_Bank_logo.svg",
  },
];

export default function Partners() {
  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-indigo-50 text-orange-500 px-4 py-2 rounded-full text-sm font-medium">
            🏦 Our Partners
          </span>
        </div>

        {/* Heading */}
        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by India&apos;s Leading Banks
        </motion.h2>

        {/* Logo Slider */}
        <div className="relative">
          <div className="flex gap-16 animate-marquee hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[160px]"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-12 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </section>
  );
}
