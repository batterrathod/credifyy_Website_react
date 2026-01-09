import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

type AnimatedCounterProps = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
};

export default function AnimatedCounter({
  value,
  duration = 1.5,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString("en-IN")
  );

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value]);

  return (
    <motion.span>
      {prefix}
      {rounded}
      {suffix}
    </motion.span>
  );
}
