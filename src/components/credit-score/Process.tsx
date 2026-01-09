import {
  ShieldCheck,
  Lock,
  BadgeCheck,
  Landmark,
} from "lucide-react";

type Badge = {
  title: string;
  subtitle: string;
  icon: JSX.Element;
};

const badges: Badge[] = [
  {
    title: "SOC 2 Certified",
    subtitle: "24/7 monitoring",
    icon: <ShieldCheck className="text-green-600" size={22} />,
  },
  {
    title: "256-bit SSL",
    subtitle: "Bank-level encryption",
    icon: <Lock className="text-green-600" size={22} />,
  },
  {
    title: "ISO 27001",
    subtitle: "Certified secure",
    icon: <BadgeCheck className="text-green-600" size={22} />,
  },
  {
    title: "Data Protected",
    subtitle: "Your data is secure",
    icon: <Landmark className="text-green-600" size={22} />,
  },
];

export default function SecurityBadges() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          {badges.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                {item.icon}
              </div>

              {/* Text */}
              <h4 className="mt-4 text-sm font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="mt-1 text-sm text-slate-500">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
