import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

/* ---------- Logo ---------- */
export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const ink = variant === "dark" ? "#0F172A" : "#FFFFFF";
  const brand = "#0F4C81";
  return (
    <a href="#top" className="flex items-center gap-3 group" aria-label="Career Vision Educational Consultancy — home">
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="40" height="40" fill={brand} />
        {/* Graduation cap */}
        <path d="M6 16 L20 10 L34 16 L20 22 Z" fill="white" />
        <path d="M12 19 L12 26 C12 27.5 15.5 29 20 29 C24.5 29 28 27.5 28 26 L28 19" stroke="white" strokeWidth="1.5" fill="none" />
        {/* Rising arrow */}
        <path d="M32 16 L32 22 L30 22" stroke="white" strokeWidth="1.5" strokeLinecap="square" fill="none" />
        <path d="M32 22 L35 25" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display font-semibold text-[15px] tracking-tight" style={{ color: ink }}>
          Career Vision
        </span>
        <span className="text-[10px] tracking-[0.18em] uppercase mt-1" style={{ color: variant === "dark" ? "#64748B" : "rgba(255,255,255,0.6)" }}>
          Educational Consultancy
        </span>
      </div>
    </a>
  );
}

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "span" | "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/* ---------- Animated Counter ---------- */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2000, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

/* ---------- Section eyebrow ---------- */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="rule-line" />
      {children}
    </p>
  );
}
