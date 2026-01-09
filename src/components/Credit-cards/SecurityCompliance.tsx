import {
  ShieldCheck,
  Lock,
  BadgeCheck,
  Landmark,
} from "lucide-react";

type SecurityItem = {
  title: string;
  subtitle: string;
  icon: JSX.Element;
};

const securityItems: SecurityItem[] = [
  {
    title: "SOC 2 Certified",
    subtitle: "24/7 monitoring",
    icon: <ShieldCheck size={22} className="text-green-600" />,
  },
  {
    title: "256-bit SSL",
    subtitle: "Bank-level encryption",
    icon: <Lock size={22} className="text-green-600" />,
  },
  {
    title: "ISO 27001",
    subtitle: "Certified secure",
    icon: <BadgeCheck size={22} className="text-green-600" />,
  },
  {
    title: "Data Protected",
    subtitle: "Your data is secure",
    icon: <Landmark size={22} className="text-green-600" />,
  },
];

export default function SecurityCompliance() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-12 text-center md:grid-cols-4">
          {securityItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon Container */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
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
