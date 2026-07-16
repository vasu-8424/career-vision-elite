import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  Compass,
  FileCheck,
  FileText,
  GraduationCap,
  HandshakeIcon,
  Handshake,
  HeartPulse,
  Leaf,
  MapPin,
  Mail,
  Microscope,
  Minus,
  Phone,
  Plus,
  Quote,
  Route as RouteIcon,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";

import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { Counter, Eyebrow, Reveal } from "../components/site/primitives";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";

import heroImg from "../assets/hero.webp";
import aboutImg from "../assets/about.webp";
import progEngineering from "../assets/prog-engineering.webp";
import progMbbs from "../assets/prog-mbbs.webp";
import progPg from "../assets/prog-pg.webp";
import progBams from "../assets/prog-bams.webp";
import progBhms from "../assets/prog-bhms.webp";
import progBds from "../assets/prog-bds.webp";
import progBpt from "../assets/prog-bpt.webp";

const ToothIcon = ({ size, className }: any) => (
  <span 
    className={className}
    style={{ 
      fontSize: size || 24, 
      lineHeight: 1, 
      display: 'inline-flex', 
      alignItems: 'center', 
      justifyContent: 'center'
    }}
  >
    🦷
  </span>
);

function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", course: "General Inquiry" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inquiry sent successfully!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Expert Admission Guidance</DialogTitle>
          <DialogDescription>
            Fill out the form below and our senior counselors will get in touch with you.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">Name</label>
            <input required type="text" className="w-full px-3 py-2 border border-border rounded-[6px] focus:border-primary focus:outline-none bg-surface text-ink" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">Phone Number</label>
            <input required type="tel" className="w-full px-3 py-2 border border-border rounded-[6px] focus:border-primary focus:outline-none bg-surface text-ink" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 XXXXX XXXXX" />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">Preferred Program</label>
            <select className="w-full px-3 py-2 border border-border rounded-[6px] focus:border-primary focus:outline-none bg-surface text-ink" value={formData.course} onChange={e => setFormData({...formData, course: e.target.value})}>
              <option value="General Inquiry">General Inquiry</option>
              <option value="MBBS Admission">MBBS Admission</option>
              <option value="Engineering Admission">Engineering Admission</option>
              <option value="Medical PG Admission">Medical PG Admission</option>
              <option value="BAMS Admission">BAMS Admission</option>
              <option value="BHMS Admission">BHMS Admission</option>
              <option value="BDS Admission">BDS Admission</option>
              <option value="BPT Admission">BPT Admission</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-[6px] hover:bg-primary/90 transition-colors font-semibold mt-2">Submit Inquiry</button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main id="top" className="bg-background text-foreground">
      <EnquiryPopup />
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Programs />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}

/* ================================ HERO ================================ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative pt-[72px] overflow-hidden bg-surface">
      {/* Background patterns and glowing accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[65%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(15,76,129,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-15%] w-[55%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(197,168,128,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="container-x pt-16 lg:pt-24 pb-20 lg:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Copy */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border/80 shadow-[0_2px_8px_rgba(15,76,129,0.03)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary glow-dot" />
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-soft">Est. 2017 — Bengaluru</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-6 font-display font-semibold text-[48px] sm:text-[64px] lg:text-[76px] leading-[1.02] tracking-[-0.03em] text-ink"
          >
            Your future begins<br />
            with the right <span className="text-gradient-primary inline-block relative">guidance.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl"
          >
            Helping students secure admissions into India's top Engineering and
            Medical colleges through trusted counselling and expert guidance —
            for over fifteen years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-primary bg-primary border-primary hover:bg-primary-hover hover:border-primary-hover text-white shadow-[0_10px_25px_rgba(15,76,129,0.18)] group">
              Book Free Counselling
              <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#programs" className="btn-outline">Explore Courses</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { k: "15+", v: "Years" },
              { k: "5000+", v: "Admissions" },
              { k: "100+", v: "Colleges" },
            ].map((s) => (
              <div key={s.v} className="border-l border-border pl-4 first:border-0 first:pl-0">
                <p className="font-display text-2xl font-semibold text-ink tabular-nums">{s.k}</p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-ink-soft mt-1.5">{s.v}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image w/ floating cards */}
        <div className="lg:col-span-6 relative px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative border border-border p-2.5 bg-white rounded-[6px] shadow-[0_20px_50px_rgba(15,76,129,0.06)]"
          >
            {/* Corner styling accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/20" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/20" />

            <div className="relative aspect-[4/5] overflow-hidden bg-surface rounded-[4px]">
              <motion.img
                src={heroImg}
                alt="Educational counsellor guiding students in a career discussion"
                width={1600}
                height={2000}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ y, scale }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -left-6 bottom-10 glass-panel p-6 w-56 rounded-[6px] border border-white/50 shadow-[0_20px_40px_-15px_rgba(15,76,129,0.15)]"
            >
              <div className="flex items-center gap-2 text-primary">
                <Sparkles size={14} strokeWidth={1.75} />
                <span className="text-[10px] tracking-[0.18em] uppercase font-medium">Success Rate</span>
              </div>
              <p className="mt-3 font-display text-3xl font-semibold text-ink">98%</p>
              <p className="mt-1 text-xs text-ink-soft leading-relaxed">Student satisfaction across counselling cohorts</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="absolute -right-6 top-10 glass-panel p-6 w-52 rounded-[6px] border border-white/50 shadow-[0_20px_40px_-15px_rgba(15,76,129,0.15)]"
            >
              <div className="flex items-center gap-2 text-primary">
                <ShieldCheck size={14} strokeWidth={1.75} />
                <span className="text-[10px] tracking-[0.18em] uppercase font-medium">Trusted since</span>
              </div>
              <p className="mt-3 font-display text-3xl font-semibold text-ink tabular-nums">2010</p>
              <p className="mt-1 text-xs text-ink-soft leading-relaxed">Bengaluru's admissions specialists</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================================ TRUST BAR ================================ */
function TrustBar() {
  const items = ["NEET UG", "JEE Main", "KCET", "COMEDK", "NEET PG", "AIAPGET"];
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-x py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
          Guidance across every major entrance
        </p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {items.map((n) => (
            <span key={n} className="font-display text-sm font-medium text-ink/70 tracking-tight">
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================ ABOUT ================================ */
function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-6">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-surface">
              <img
                src={aboutImg}
                alt="Career Vision consultancy office in Bengaluru"
                width={1400}
                height={1750}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 -right-8 bg-primary text-white p-8 w-64">
              <p className="font-display text-5xl font-semibold tabular-nums">15<span className="text-xl align-top">+</span></p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/70">Years guiding<br />India's students</p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:pl-4">
          <Reveal><Eyebrow>About Career Vision</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">
              A consultancy built on trust,<br />
              transparency and results.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-base lg:text-lg leading-relaxed text-ink-soft">
              Career Vision Educational Consultancy is a trusted education
              consultancy dedicated to helping students build successful careers
              by securing admissions into reputed Engineering, Medical, and
              Allied Health Science institutions across India.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-ink-soft">
              Our mission is to simplify the admission process while providing
              honest guidance, personalised counselling, and complete support
              throughout every step.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              {[
                { icon: ShieldCheck, label: "Transparent process" },
                { icon: UserCheck, label: "Personalised counsel" },
                { icon: Building2, label: "100+ partner colleges" },
                { icon: Award, label: "Since 2010" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={18} strokeWidth={1.5} className="text-primary shrink-0" />
                  <span className="text-sm text-ink">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================ SERVICES ================================ */
function Services() {
  const services = [
    { icon: GraduationCap, title: "Engineering Admissions", desc: "B.E. / B.Tech placements across India's leading engineering institutes." },
    { icon: Stethoscope, title: "MBBS Admissions", desc: "Complete guidance for NEET UG counselling across government and private colleges." },
    { icon: HeartPulse, title: "Medical PG Admissions", desc: "MD / MS / Diploma placements through NEET PG state and all-India rounds." },
    { icon: Leaf, title: "BAMS Admissions", desc: "Ayurvedic medicine admissions across recognised universities." },
    { icon: Microscope, title: "BHMS Admissions", desc: "Homeopathy programmes with a structured, transparent process." },
    { icon: ToothIcon, title: "BDS Admissions", desc: "Dental surgery seats in reputed government and private colleges." },
    { icon: Handshake, title: "BPT Admissions", desc: "Physiotherapy programmes with allied health specialisation guidance." },
    { icon: Compass, title: "Career Counselling", desc: "One-to-one aptitude, stream and career-path discovery sessions." },
    { icon: Building2, title: "College Selection", desc: "Curated shortlists that fit your rank, budget and long-term goals." },
    { icon: FileCheck, title: "Admission Guidance", desc: "End-to-end handholding through every counselling and allotment round." },
    { icon: FileText, title: "Documentation Support", desc: "Verification, attestation and submission — handled without stress." },
    { icon: RouteIcon, title: "Seat Booking Assistance", desc: "On-ground assistance during reporting, seat locking and confirmation." },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-surface">
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal><Eyebrow>Services</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">
              A complete admissions practice<br className="hidden md:block" /> under one roof.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-ink-soft max-w-2xl">
              From career discovery to your first day on campus, we provide the
              expertise, network and diligence a life-defining decision deserves.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.04}>
              <div className="group h-full bg-white p-8 transition-colors duration-300 hover:bg-white relative">
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/30" />
                <div className="w-11 h-11 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink tracking-tight">{title}</h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================ WHY US ================================ */
function WhyUs() {
  const reasons = [
    { icon: Award, title: "Expert Counsellors", desc: "A senior team with 15+ years of admissions and academic advisory experience." },
    { icon: UserCheck, title: "Personalised Guidance", desc: "Every plan is designed around your rank, aspirations and family context." },
    { icon: ShieldCheck, title: "Trusted Process", desc: "A transparent, documented workflow — no shortcuts, no surprises." },
    { icon: Building2, title: "Wide College Network", desc: "Direct relationships with 100+ engineering and medical institutions." },
    { icon: FileCheck, title: "Transparent Consultancy", desc: "Clear fee structures, honest cut-offs, and objective recommendations." },
    { icon: FileText, title: "Documentation Support", desc: "Every certificate, form and attestation handled by our operations team." },
    { icon: Wallet, title: "Affordable Consultation", desc: "Premium service without premium overheads — value families can trust." },
    { icon: Users, title: "Student-First Approach", desc: "Long-term outcomes over short-term commissions. Always." },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Reveal><Eyebrow>Why Career Vision</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">
                Eight reasons families<br /> choose us — and stay.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-ink-soft max-w-md">
              Every recommendation we make is one we would make for our own
              children. That single principle shapes everything below.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="card-elevated card-elevated-hover h-full p-7">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 bg-surface flex items-center justify-center text-primary">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-xs text-ink-soft tabular-nums">0{i + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-base font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================ PROCESS TIMELINE ================================ */
function Process() {
  const steps = [
    { n: "01", title: "Free Consultation", desc: "A no-obligation session to understand your goals, scores and preferences." },
    { n: "02", title: "Career Assessment", desc: "Structured aptitude review and stream fit analysis with senior counsellors." },
    { n: "03", title: "College Selection", desc: "A shortlist calibrated to rank, budget, location and long-term outcomes." },
    { n: "04", title: "Application Assistance", desc: "Applications, entrance forms and choice-filling handled meticulously." },
    { n: "05", title: "Documentation", desc: "Verification, attestation and submission — audited before every deadline." },
    { n: "06", title: "Admission Confirmation", desc: "On-ground support during reporting, seat locking and campus onboarding." },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      {/* Decorative background grid pattern for process */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          <Reveal><Eyebrow>Admission Process</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">
              Six deliberate steps, from<br /> first call to first day.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-ink-soft max-w-xl">
              We guide students through a structured, transparent timeline to make college admissions smooth and stress-free.
            </p>
          </Reveal>
        </div>

        {/* Premium Cards Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="group bg-white border border-border p-8 rounded-[6px] relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(15,76,129,0.06)] h-full flex flex-col justify-between">
                
                {/* Large Background Serif Number */}
                <span className="font-display font-bold text-[96px] text-primary/[0.03] absolute right-6 bottom-[-15px] select-none pointer-events-none transition-colors duration-300 group-hover:text-primary/[0.06]">
                  {s.n}
                </span>

                <div className="relative z-10">
                  {/* Step Badge */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/5 text-primary text-xs font-semibold tracking-wider transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {s.n}
                  </div>

                  <h3 className="mt-8 font-display text-xl font-semibold text-ink tracking-tight transition-colors duration-300 group-hover:text-primary">
                    {s.title}
                  </h3>
                  
                  <p className="mt-4 text-sm text-ink-soft leading-relaxed pr-6">
                    {s.desc}
                  </p>
                </div>

                {/* Bottom decorative color slide */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================ PROGRAMS ================================ */
function Programs() {
  const programs = [
    { title: "Engineering", tag: "B.E. / B.Tech", desc: "Core, computing and emerging disciplines across India's top engineering colleges.", img: progEngineering },
    { title: "MBBS", tag: "Bachelor of Medicine", desc: "Government and private medical seats through NEET UG counselling.", img: progMbbs },
    { title: "Medical PG", tag: "MD / MS", desc: "Post-graduate medical placements via NEET PG state and all-India quotas.", img: progPg },
    { title: "BAMS", tag: "Ayurveda", desc: "Bachelor of Ayurvedic Medicine and Surgery at recognised institutions.", img: progBams },
    { title: "BHMS", tag: "Homeopathy", desc: "Structured admissions for Bachelor of Homeopathic Medicine and Surgery.", img: progBhms },
    { title: "BDS", tag: "Dental Surgery", desc: "Bachelor of Dental Surgery seats in reputed dental colleges.", img: progBds },
    { title: "BPT", tag: "Physiotherapy", desc: "Allied health specialisation in Bachelor of Physiotherapy.", img: progBpt },
  ];

  return (
    <section id="programs" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(197,168,128,0.04)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      
      <div className="container-x relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Reveal><Eyebrow>Featured Programs</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">
                Programmes we guide<br /> students into every year.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a href="#contact" className="btn-primary bg-primary border-primary hover:bg-primary-hover hover:border-primary-hover text-white shadow-[0_10px_25px_rgba(15,76,129,0.15)] h-12 flex items-center justify-center">
              Speak to an advisor
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="group bg-white border border-border overflow-hidden rounded-[6px] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(15,76,129,0.07)] hover:border-primary/20 flex flex-col h-full relative">
                <div className="aspect-[4/3] overflow-hidden bg-surface relative">
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.tag}`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 flex flex-col grow relative z-10">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-primary font-semibold">{p.tag}</p>
                  <h3 className="mt-3.5 font-display text-2xl font-bold text-ink tracking-tight transition-colors duration-300 group-hover:text-primary">{p.title}</h3>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed grow">{p.desc}</p>
                  <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-primary group/link">
                    Learn more
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>

                {/* Bottom luxury slide line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================ STATS ================================ */
function Stats() {
  const stats = [
    { n: 5000, suffix: "+", label: "Successful Admissions" },
    { n: 100, suffix: "+", label: "Partner Institutions" },
    { n: 15, suffix: "+", label: "Years of Experience" },
    { n: 98, suffix: "%", label: "Happy Students" },
  ];
  return (
    <section className="bg-dark text-white">
      <div className="container-x py-24 lg:py-32">
        <Reveal>
          <p className="eyebrow-light"><span className="rule-line" />By the numbers</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.1] max-w-3xl">
            A track record measured in careers, not campaigns.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="bg-dark p-8 lg:p-10 h-full">
                <p className="font-display text-5xl lg:text-6xl font-semibold text-white tabular-nums tracking-tight">
                  <Counter to={s.n} suffix={s.suffix} />
                </p>
                <p className="mt-4 text-sm text-white/60 uppercase tracking-[0.14em]">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================ TESTIMONIALS ================================ */
function Testimonials() {
  const items = [
    {
      quote: "Career Vision's expert guidance made my dream a reality.",
      name: "Balla Sri Charan",
      role: "MBBS, VINAYAKA MISSION MEDICAL COLLEGE",
    },
    {
      quote: "They provided step-by-step assistance throughout the entire admission process.",
      name: "Devareddy Tayswitha Reddy",
      role: "MBBS, CMR MEDICAL COLLEGE HYDERABAD",
    },
    {
      quote: "I highly recommend Career Vision for anyone seeking medical admissions.",
      name: "Yannam Sai Hemanth Reddy",
      role: "MBBS, CHALMADA ANANDH RAO MEDICAL COLLEGE",
    },
    {
      quote: "Their transparency and dedication secured my admission seamlessly.",
      name: "Polamarasetti Tanvi",
      role: "BAMS, HILLSIDES AYURVEDIC MEDICAL COLLEGE",
    },
    {
      quote: "From documentation to seat locking, every step was handled with genuine care.",
      name: "Siva Krishan",
      role: "PG ORTHO, MNR MEDICAL COLLEGE",
    },
  ];
  const [idx, setIdx] = useState(0);
  const active = items[idx];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(15,76,129,0.03)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          <Reveal><Eyebrow>Student Testimonials</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">
              Words from families who<br /> walked this road with us.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <Reveal className="lg:col-span-8">
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative bg-white border border-border p-10 lg:p-14 shadow-[0_20px_50px_rgba(15,76,129,0.04)] rounded-[6px] overflow-hidden"
            >
              <Quote size={80} strokeWidth={0.75} className="text-gold/10 absolute top-6 right-6 pointer-events-none" />
              
              <div className="flex items-center gap-1 text-primary relative z-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-primary" strokeWidth={0} />
                ))}
              </div>
              
              <p className="mt-8 font-display text-2xl lg:text-3xl leading-[1.4] tracking-tight text-ink relative z-10 font-medium">
                “{active.quote}”
              </p>
              
              <div className="mt-10 pt-8 border-t border-border flex items-center justify-between relative z-10">
                <div>
                  <p className="font-display font-semibold text-ink text-base">{active.name}</p>
                  <p className="text-sm text-ink-soft mt-1">{active.role}</p>
                </div>
                <p className="font-display text-sm text-ink-soft/60 tabular-nums">
                  {String(idx + 1).padStart(2, "0")} <span className="text-ink-soft/20">/</span> {String(items.length).padStart(2, "0")}
                </p>
              </div>
            </motion.blockquote>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={0.1}>
            <div className="flex lg:flex-col gap-3">
              {items.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIdx(i)}
                  className={`text-left border p-5 flex-1 lg:flex-none transition-all duration-300 cursor-pointer ${
                    i === idx
                      ? "bg-primary border-primary text-white shadow-[0_10px_20px_rgba(15,76,129,0.15)] rounded-[6px]"
                      : "bg-white border-border text-ink hover:border-primary/30 hover:translate-x-1 rounded-[6px]"
                  }`}
                  aria-pressed={i === idx}
                >
                  <p className={`text-[9px] tracking-[0.2em] uppercase font-semibold ${i === idx ? "text-white/60" : "text-ink-soft"}`}>
                    Student 0{i + 1}
                  </p>
                  <p className="mt-2 font-display font-medium text-sm lg:text-base">{t.name}</p>
                  <p className={`text-xs mt-1 ${i === idx ? "text-white/70" : "text-ink-soft"}`}>{t.role}</p>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================ FAQ ================================ */
function FAQ() {
  const faqs = [
    { q: "How does the admission process work?", a: "We begin with a free consultation to understand your rank and preferences, followed by career assessment, a curated college shortlist, application support, documentation, and on-ground seat confirmation." },
    { q: "Can you help with MBBS admissions?", a: "Yes. We handle NEET UG counselling across state and all-India rounds for both government and private medical colleges, along with documentation and reporting support." },
    { q: "Do you provide personalised counselling?", a: "Every family we work with receives one-to-one sessions with senior counsellors. There are no scripted pitches — recommendations are tailored to your rank, budget, and long-term goals." },
    { q: "Do you assist with documentation?", a: "Yes. Our operations team manages verification, attestation, choice-filling and every deadline — audited before submission so nothing is missed." },
    { q: "Which colleges do you partner with?", a: "We work with 100+ engineering and medical institutions across Karnataka, Maharashtra, Tamil Nadu, and other major states — spanning government, deemed and private universities." },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(197,168,128,0.03)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        <div className="lg:col-span-4">
          <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">
              Questions we hear<br /> most often.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-ink-soft">
              Still curious? A free consultation is the fastest way to a clear answer.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="#contact" className="btn-primary bg-primary border-primary hover:bg-primary-hover hover:border-primary-hover text-white shadow-[0_10px_25px_rgba(15,76,129,0.15)] mt-8">
              Ask us directly
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.04}>
                  <div className="border-b border-border">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 py-6 text-left group cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-lg lg:text-xl font-medium text-ink tracking-tight transition-colors duration-300 group-hover:text-primary">
                        {f.q}
                      </span>
                      <span className="w-9 h-9 border border-border flex items-center justify-center text-ink shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 rounded-[4px]">
                        {isOpen ? <Minus size={15} strokeWidth={1.5} /> : <Plus size={15} strokeWidth={1.5} />}
                      </span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pr-16 text-ink-soft leading-relaxed text-sm lg:text-base">{f.a}</p>
                    </motion.div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================ CTA ================================ */
function CTA() {
  return (
    <section className="bg-dark text-white">
      <div className="container-x py-24 lg:py-32 text-center max-w-4xl mx-auto">
        <Reveal>
          <p className="eyebrow-light justify-center inline-flex"><span className="rule-line" />Ready when you are</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Ready to build<br /> your career?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-lg text-white/60 max-w-xl mx-auto">
            Book your free counselling session today. No obligations — just an
            honest conversation about your future.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary bg-white !text-ink border-white hover:!bg-white/90 hover:!border-white/90" style={{ backgroundColor: "white", color: "#0F172A", borderColor: "white" }}>
              Schedule Consultation
              <ArrowRight size={16} />
            </a>
            <a href="tel:+918639887319" className="btn-ghost-light">
              <Phone size={14} /> +91 86398 87319
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================ CONTACT ================================ */
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "General Inquiry",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("Opening WhatsApp to send your details...");

    const text = `Hello Career Vision, I would like to make an inquiry. Here are my details:
- Name: ${formData.name.trim()}
- Phone: ${formData.phone.trim()}
- Preferred Course: ${formData.course}
${formData.message.trim() ? `- Message: ${formData.message.trim()}` : ""}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/918639887319?text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Clear form fields
    setFormData({
      name: "",
      phone: "",
      course: "General Inquiry",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal><Eyebrow>Contact</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">
              Get in Touch with Career Vision.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Info & Map */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal>
              <div className="bg-dark text-white p-8 lg:p-10 flex flex-col">
                <h3 className="font-display text-2xl font-semibold">Visit Our Office</h3>
                <p className="mt-3 text-sm text-white/60">
                  Located in the educational hub of Jayanagar, Bengaluru.
                </p>

                <div className="mt-8 space-y-6">
                  <ContactRow icon={Phone} label="Phone">
                    <a href="tel:+918639887319" className="hover:underline tabular-nums">+91 86398 87319</a>
                  </ContactRow>
                  <ContactRow icon={Mail} label="Email">
                    <a href="mailto:careervisioneduconsultancy@gmail.com" className="hover:underline break-all">
                      careervisioneduconsultancy@gmail.com
                    </a>
                  </ContactRow>
                  <ContactRow icon={MapPin} label="Address">
                    Second Floor, 07/3, 18th C Main Rd, MTB Area, Marenahalli, Jayanagar 9th Block, Bengaluru, Karnataka 560041
                  </ContactRow>
                  <ContactRow icon={CheckCircle2} label="Business Hours">
                    Monday – Saturday · 9:00 AM – 8:00 PM<br />
                    <span className="text-white/50">Sunday · Holiday</span>
                  </ContactRow>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="aspect-[16/10] border border-border overflow-hidden bg-surface">
                <iframe
                  title="Career Vision Educational Consultancy — Jayanagar, Bengaluru"
                  src="https://www.google.com/maps?q=18th+C+Main+Rd,+Marenahalli,+Jayanagar+9th+Block,+Bengaluru,+Karnataka+560041&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full block filter grayscale-[35%] contrast-[0.95]"
                  style={{ border: 0, minHeight: 300 }}
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Sleek WhatsApp Inquiry Form */}
          <Reveal className="lg:col-span-6" delay={0.1}>
            <div className="bg-white border border-border p-8 lg:p-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">Send an Inquiry</h3>
                <p className="mt-3 text-sm text-ink-soft">
                  Fill in your details below to directly connect with our senior admission advisors on WhatsApp.
                </p>

                <form onSubmit={handleFormSubmit} className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-semibold uppercase tracking-wider text-ink">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="mt-2 block w-full px-4 py-3 border border-border rounded-[6px] focus:outline-none focus:border-primary text-sm text-ink bg-surface placeholder:text-ink-soft/40 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="form-phone" className="block text-xs font-semibold uppercase tracking-wider text-ink">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="form-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="mt-2 block w-full px-4 py-3 border border-border rounded-[6px] focus:outline-none focus:border-primary text-sm text-ink bg-surface placeholder:text-ink-soft/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-course" className="block text-xs font-semibold uppercase tracking-wider text-ink">
                        Preferred Program *
                      </label>
                      <select
                        id="form-course"
                        required
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="mt-2 block w-full px-4 py-3 border border-border rounded-[6px] focus:outline-none focus:border-primary text-sm text-ink bg-surface transition-colors cursor-pointer"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="MBBS Admission">MBBS Admission</option>
                        <option value="Engineering Admission">Engineering Admission</option>
                        <option value="Medical PG Admission">Medical PG Admission</option>
                        <option value="BAMS Admission">BAMS Admission</option>
                        <option value="BHMS Admission">BHMS Admission</option>
                        <option value="BDS Admission">BDS Admission</option>
                        <option value="BPT Admission">BPT Admission</option>
                        <option value="Career Counselling">Career Counselling</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-message" className="block text-xs font-semibold uppercase tracking-wider text-ink">
                      Inquiry Details
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your entrance exam rank, score, budget constraints, or specific queries..."
                      className="mt-2 block w-full px-4 py-3 border border-border rounded-[6px] focus:outline-none focus:border-primary text-sm text-ink bg-surface placeholder:text-ink-soft/40 transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full group mt-2">
                    Submit & Chat on WhatsApp
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/80 shrink-0">
        <Icon size={15} strokeWidth={1.5} />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/50">{label}</p>
        <div className="mt-1.5 text-sm text-white/90 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
