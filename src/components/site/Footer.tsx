import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./primitives";

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-x py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Logo variant="light" />
          <p className="mt-6 text-sm leading-relaxed max-w-md text-white/60">
            Career Vision Educational Consultancy helps students secure admissions
            into India's most reputed Engineering, Medical, and Allied Health
            Science institutions through trusted, personalised counselling.
          </p>
          <div className="mt-8 flex items-center gap-3">
            {[
              { Icon: Facebook, href: "https://facebook.com/careervisioneducation", label: "Facebook" },
              { Icon: Instagram, href: "https://instagram.com/careervisioneducation", label: "Instagram" },
              { Icon: Linkedin, href: "https://linkedin.com/company/careervisioneducation", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 border border-white/15 hover:border-white/50 hover:bg-white/5 transition-colors"
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/50 font-medium">Quick Links</h4>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            {[
              { label: "Admissions", href: "#process" },
              { label: "Engineering", href: "#programs" },
              { label: "Medical", href: "#programs" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/50 font-medium">Contact</h4>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <Phone size={14} className="mt-1 text-white/50 shrink-0" strokeWidth={1.5} />
              <a href="tel:+918639887319" className="hover:text-white transition-colors tabular-nums">
                +91 86398 87319
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={14} className="mt-1 text-white/50 shrink-0" strokeWidth={1.5} />
              <a href="mailto:careervisioneduconsultancy@gmail.com" className="hover:text-white transition-colors break-all">
                careervisioneduconsultancy@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-1 text-white/50 shrink-0" strokeWidth={1.5} />
              <span>
                Second Floor, 07/3, 18th C Main Rd, MTB Area, Marenahalli, Jayanagar 9th Block, Bengaluru, Karnataka 560041
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-8 flex flex-col items-center justify-center gap-4 text-xs text-white/40 text-center">
          <div className="flex flex-col items-center gap-2">
            <img src="/logo.png" alt="Staffarc Logo" className="h-6 w-auto opacity-75 hover:opacity-100 transition-opacity" />
            <p className="font-medium tracking-wide">Made with Staffarc</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full border-t border-white/5 pt-4 gap-3">
            <p>© 2026 Career Vision Educational Consultancy. All Rights Reserved.</p>
            <p>Bengaluru, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
