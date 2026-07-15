import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./primitives";

const nav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#programs" },
  { label: "Services", href: "#services" },
  { label: "Admission Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border"
          : "bg-white/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-[72px]">
        <Logo />

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+918639887319" className="flex items-center gap-2 text-sm text-ink-soft hover:text-primary transition-colors">
            <Phone size={14} strokeWidth={1.75} />
            <span className="tabular-nums">+91 86398 87319</span>
          </a>
          <a href="#contact" className="btn-primary h-11 px-5 text-[14px]">
            Book Consultation
          </a>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-border"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-x py-4 flex flex-col gap-1" aria-label="Mobile">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-border text-sm font-medium text-ink"
              >
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-4">
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
