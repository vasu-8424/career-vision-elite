import { o as __toESM } from "../_runtime.mjs";
import { t as hero_default } from "./hero-B1OZv87V.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as useScroll, i as useMotionValue, n as useSpring, r as useTransform, t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { A as Award, C as GraduationCap, D as Compass, E as Facebook, M as ArrowRight, O as CircleCheck, S as Handshake, T as FileCheck, _ as Mail, a as Stethoscope, b as Instagram, c as ShieldCheck, d as Plus, f as Phone, g as MapPin, h as Menu, i as UserCheck, j as ArrowUpRight, k as Building2, l as Route, m as Microscope, n as Wallet, o as Star, p as Minus, r as Users, s as Sparkles, t as X, u as Quote, v as Linkedin, w as FileText, x as HeartPulse, y as Leaf } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ulunb7DW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Logo({ variant = "dark" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#top",
		className: "flex items-center gap-3 group",
		"aria-label": "Career Vision Educational Consultancy — home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "36",
			height: "36",
			viewBox: "0 0 40 40",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "40",
					height: "40",
					fill: "#0F4C81"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M6 16 L20 10 L34 16 L20 22 Z",
					fill: "white"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 19 L12 26 C12 27.5 15.5 29 20 29 C24.5 29 28 27.5 28 26 L28 19",
					stroke: "white",
					strokeWidth: "1.5",
					fill: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M32 16 L32 22 L30 22",
					stroke: "white",
					strokeWidth: "1.5",
					strokeLinecap: "square",
					fill: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M32 22 L35 25",
					stroke: "white",
					strokeWidth: "1.5",
					strokeLinecap: "square"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display font-semibold text-[15px] tracking-tight",
				style: { color: variant === "dark" ? "#0F172A" : "#FFFFFF" },
				children: "Career Vision"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] tracking-[0.18em] uppercase mt-1",
				style: { color: variant === "dark" ? "#64748B" : "rgba(255,255,255,0.6)" },
				children: "Educational Consultancy"
			})]
		})]
	});
}
function Reveal({ children, delay = 0, y = 24, className, as = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "0px 0px -80px 0px"
	});
	const MotionTag = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionTag, {
		ref,
		initial: {
			opacity: 0,
			y
		},
		animate: inView ? {
			opacity: 1,
			y: 0
		} : {},
		transition: {
			duration: .7,
			delay,
			ease: [
				.2,
				.7,
				.2,
				1
			]
		},
		className,
		children
	});
}
function Counter({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "0px 0px -60px 0px"
	});
	const mv = useMotionValue(0);
	const rounded = useTransform(useSpring(mv, {
		duration: 2e3,
		bounce: 0
	}), (v) => Math.floor(v).toLocaleString());
	(0, import_react.useEffect)(() => {
		if (inView) mv.set(to);
	}, [
		inView,
		mv,
		to
	]);
	(0, import_react.useEffect)(() => {
		return rounded.on("change", (v) => {
			if (ref.current) ref.current.textContent = v + suffix;
		});
	}, [rounded, suffix]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: ["0", suffix]
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "eyebrow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-line" }), children]
	});
}
var nav = [
	{
		label: "Home",
		href: "#top"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Courses",
		href: "#programs"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Admission Process",
		href: "#process"
	},
	{
		label: "Testimonials",
		href: "#testimonials"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-border" : "bg-white/70 backdrop-blur-sm border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex items-center justify-between h-[72px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden xl:flex items-center gap-6",
					"aria-label": "Primary",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: "nav-link",
						children: n.label
					}, n.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden xl:flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+918639887319",
						className: "flex items-center gap-2 text-sm text-ink-soft hover:text-primary transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							size: 14,
							strokeWidth: 1.75
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums font-medium",
							children: "+91 86398 87319"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "btn-primary h-11 px-5 text-[14px]",
						children: "Book Consultation"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "xl:hidden inline-flex items-center justify-center w-10 h-10 border border-border",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((s) => !s),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "xl:hidden border-t border-border bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "container-x py-4 flex flex-col gap-1",
				"aria-label": "Mobile",
				children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "py-3 border-b border-border text-sm font-medium text-ink",
					children: n.label
				}, n.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "btn-primary mt-4",
					children: "Book Consultation"
				})]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-dark text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-20 grid grid-cols-1 lg:grid-cols-12 gap-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { variant: "light" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed max-w-md text-white/60",
							children: "Career Vision Educational Consultancy helps students secure admissions into India's most reputed Engineering, Medical, and Allied Health Science institutions through trusted, personalised counselling."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex items-center gap-3",
							children: [
								{
									Icon: Facebook,
									href: "https://facebook.com/careervisioneducation",
									label: "Facebook"
								},
								{
									Icon: Instagram,
									href: "https://instagram.com/careervisioneducation",
									label: "Instagram"
								},
								{
									Icon: Linkedin,
									href: "https://linkedin.com/company/careervisioneducation",
									label: "LinkedIn"
								}
							].map(({ Icon, href, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								"aria-label": label,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center justify-center w-10 h-10 border border-white/15 hover:border-white/50 hover:bg-white/5 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 16,
									strokeWidth: 1.5
								})
							}, label))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[11px] tracking-[0.2em] uppercase text-white/50 font-medium",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3 text-sm text-white/70",
						children: [
							{
								label: "Admissions",
								href: "#process"
							},
							{
								label: "Engineering",
								href: "#programs"
							},
							{
								label: "Medical",
								href: "#programs"
							},
							{
								label: "Services",
								href: "#services"
							},
							{
								label: "Contact",
								href: "#contact"
							}
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "hover:text-white transition-colors",
							children: l.label
						}) }, l.label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[11px] tracking-[0.2em] uppercase text-white/50 font-medium",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-4 text-sm text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									size: 14,
									className: "mt-1 text-white/50 shrink-0",
									strokeWidth: 1.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+918639887319",
									className: "hover:text-white transition-colors tabular-nums",
									children: "+91 86398 87319"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									size: 14,
									className: "mt-1 text-white/50 shrink-0",
									strokeWidth: 1.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:careervisioneduconsultancy@gmail.com",
									className: "hover:text-white transition-colors break-all",
									children: "careervisioneduconsultancy@gmail.com"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									size: 14,
									className: "mt-1 text-white/50 shrink-0",
									strokeWidth: 1.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Second Floor, 07/3, 18th C Main Rd, MTB Area, Marenahalli, Jayanagar 9th Block, Bengaluru, Karnataka 560041" })]
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Career Vision Educational Consultancy. All Rights Reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Bengaluru, India" })]
			})
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var about_default = "/assets/about-DwYjfyWb.webp";
var prog_engineering_default = "/assets/prog-engineering-CSzkyCPG.webp";
var prog_mbbs_default = "/assets/prog-mbbs-BdiLoQKU.webp";
var prog_pg_default = "/assets/prog-pg-DLC37LgG.webp";
var prog_bams_default = "/assets/prog-bams-ZzAaFnAP.webp";
var prog_bhms_default = "/assets/prog-bhms-DU4hpmin.webp";
var prog_bds_default = "/assets/prog-bds-BDbus3kA.webp";
var prog_bpt_default = "/assets/prog-bpt-Cjczn1D2.webp";
var ToothIcon = ({ size, strokeWidth, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	...props,
	style: {
		fontSize: size || 24,
		lineHeight: 1,
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		...props.style
	},
	children: "🦷"
});
function EnquiryPopup() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		phone: "",
		course: "General Inquiry"
	});
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			setOpen(true);
		}, 1500);
		return () => clearTimeout(timer);
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		toast.success("Inquiry sent successfully!");
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-[425px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Get Expert Admission Guidance" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Fill out the form below and our senior counselors will get in touch with you." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "mt-4 space-y-4 text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-semibold uppercase tracking-wider text-ink mb-2",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "text",
						className: "w-full px-3 py-2 border border-border rounded-[6px] focus:border-primary focus:outline-none bg-surface text-ink",
						value: formData.name,
						onChange: (e) => setFormData({
							...formData,
							name: e.target.value
						}),
						placeholder: "Your Name"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-semibold uppercase tracking-wider text-ink mb-2",
						children: "Phone Number"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "tel",
						className: "w-full px-3 py-2 border border-border rounded-[6px] focus:border-primary focus:outline-none bg-surface text-ink",
						value: formData.phone,
						onChange: (e) => setFormData({
							...formData,
							phone: e.target.value
						}),
						placeholder: "+91 XXXXX XXXXX"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-semibold uppercase tracking-wider text-ink mb-2",
						children: "Preferred Program"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "w-full px-3 py-2 border border-border rounded-[6px] focus:border-primary focus:outline-none bg-surface text-ink",
						value: formData.course,
						onChange: (e) => setFormData({
							...formData,
							course: e.target.value
						}),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "General Inquiry",
								children: "General Inquiry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "MBBS Admission",
								children: "MBBS Admission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Engineering Admission",
								children: "Engineering Admission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Medical PG Admission",
								children: "Medical PG Admission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "BAMS Admission",
								children: "BAMS Admission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "BHMS Admission",
								children: "BHMS Admission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "BDS Admission",
								children: "BDS Admission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "BPT Admission",
								children: "BPT Admission"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "w-full bg-primary text-white py-3 rounded-[6px] hover:bg-primary/90 transition-colors font-semibold mt-2",
						children: "Submit Inquiry"
					})
				]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "top",
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryPopup, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Programs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative pt-[72px] overflow-hidden bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-20%] right-[-10%] w-[65%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(15,76,129,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-10%] left-[-15%] w-[55%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(197,168,128,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x pt-16 lg:pt-24 pb-20 lg:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6 relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								ease: [
									.2,
									.7,
									.2,
									1
								]
							},
							className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border/80 shadow-[0_2px_8px_rgba(15,76,129,0.03)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-primary glow-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-soft",
								children: "Est. 2017 — Bengaluru"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								delay: .1,
								ease: [
									.2,
									.7,
									.2,
									1
								]
							},
							className: "mt-6 font-display font-semibold text-[48px] sm:text-[64px] lg:text-[76px] leading-[1.02] tracking-[-0.03em] text-ink",
							children: [
								"Your future begins",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"with the right ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-primary inline-block relative",
									children: "guidance."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								delay: .2,
								ease: [
									.2,
									.7,
									.2,
									1
								]
							},
							className: "mt-8 text-lg text-ink-soft leading-relaxed max-w-xl",
							children: "Helping students secure admissions into India's top Engineering and Medical colleges through trusted counselling and expert guidance — for over fifteen years."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								delay: .3,
								ease: [
									.2,
									.7,
									.2,
									1
								]
							},
							className: "mt-10 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "btn-primary bg-primary border-primary hover:bg-primary-hover hover:border-primary-hover text-white shadow-[0_10px_25px_rgba(15,76,129,0.18)] group",
								children: ["Book Free Counselling", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 16,
									strokeWidth: 2,
									className: "transition-transform group-hover:translate-x-0.5"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#programs",
								className: "btn-outline",
								children: "Explore Courses"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: .8,
								delay: .5
							},
							className: "mt-12 pt-8 border-t border-border grid grid-cols-3 gap-6 max-w-lg",
							children: [
								{
									k: "15+",
									v: "Years"
								},
								{
									k: "5000+",
									v: "Admissions"
								},
								{
									k: "100+",
									v: "Colleges"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-l border-border pl-4 first:border-0 first:pl-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl font-semibold text-ink tabular-nums",
									children: s.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] uppercase tracking-[0.14em] text-ink-soft mt-1.5",
									children: s.v
								})]
							}, s.v))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-6 relative px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .15,
							ease: [
								.2,
								.7,
								.2,
								1
							]
						},
						className: "relative border border-border p-2.5 bg-white rounded-[6px] shadow-[0_20px_50px_rgba(15,76,129,0.06)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/5] overflow-hidden bg-surface rounded-[4px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
									src: hero_default,
									alt: "Educational counsellor guiding students in a career discussion",
									width: 1600,
									height: 2e3,
									className: "absolute inset-0 w-full h-full object-cover",
									style: {
										y,
										scale
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-ink/30 via-transparent to-transparent" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									x: -20,
									y: 20
								},
								animate: {
									opacity: 1,
									x: 0,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .7
								},
								className: "absolute -left-6 bottom-10 glass-panel p-6 w-56 rounded-[6px] border border-white/50 shadow-[0_20px_40px_-15px_rgba(15,76,129,0.15)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
											size: 14,
											strokeWidth: 1.75
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] tracking-[0.18em] uppercase font-medium",
											children: "Success Rate"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-display text-3xl font-semibold text-ink",
										children: "98%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-ink-soft leading-relaxed",
										children: "Student satisfaction across counselling cohorts"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									x: 20,
									y: -20
								},
								animate: {
									opacity: 1,
									x: 0,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .85
								},
								className: "absolute -right-6 top-10 glass-panel p-6 w-52 rounded-[6px] border border-white/50 shadow-[0_20px_40px_-15px_rgba(15,76,129,0.15)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
											size: 14,
											strokeWidth: 1.75
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] tracking-[0.18em] uppercase font-medium",
											children: "Trusted since"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-display text-3xl font-semibold text-ink tabular-nums",
										children: "2010"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-ink-soft leading-relaxed",
										children: "Bengaluru's admissions specialists"
									})
								]
							})
						]
					})
				})]
			})
		]
	});
}
function TrustBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-8 flex flex-col md:flex-row items-center justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-ink-soft",
				children: "Guidance across every major entrance"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap items-center gap-x-10 gap-y-3",
				children: [
					"NEET UG",
					"JEE Main",
					"KCET",
					"COMEDK",
					"NEET PG",
					"AIAPGET"
				].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm font-medium text-ink/70 tracking-tight",
					children: n
				}, n))
			})]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "lg:col-span-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] overflow-hidden bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: about_default,
							alt: "Career Vision consultancy office in Bengaluru",
							width: 1400,
							height: 1750,
							loading: "lazy",
							className: "w-full h-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:block absolute -bottom-8 -right-8 bg-primary text-white p-8 w-64",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-5xl font-semibold tabular-nums",
							children: ["15", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl align-top",
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs uppercase tracking-[0.18em] text-white/70",
							children: [
								"Years guiding",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"India's students"
							]
						})]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6 lg:pl-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "About Career Vision" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]",
							children: [
								"A consultancy built on trust,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"transparency and results."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-base lg:text-lg leading-relaxed text-ink-soft",
							children: "Career Vision Educational Consultancy is a trusted education consultancy dedicated to helping students build successful careers by securing admissions into reputed Engineering, Medical, and Allied Health Science institutions across India."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base lg:text-lg leading-relaxed text-ink-soft",
							children: "Our mission is to simplify the admission process while providing honest guidance, personalised counselling, and complete support throughout every step."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid grid-cols-2 gap-6 max-w-md",
							children: [
								{
									icon: ShieldCheck,
									label: "Transparent process"
								},
								{
									icon: UserCheck,
									label: "Personalised counsel"
								},
								{
									icon: Building2,
									label: "100+ partner colleges"
								},
								{
									icon: Award,
									label: "Since 2010"
								}
							].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 18,
									strokeWidth: 1.5,
									className: "text-primary shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-ink",
									children: label
								})]
							}, label))
						})
					})
				]
			})]
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "py-24 lg:py-32 bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Services" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]",
							children: [
								"A complete admissions practice",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
								" under one roof."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg text-ink-soft max-w-2xl",
							children: "From career discovery to your first day on campus, we provide the expertise, network and diligence a life-defining decision deserves."
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border",
				children: [
					{
						icon: GraduationCap,
						title: "Engineering Admissions",
						desc: "B.E. / B.Tech placements across India's leading engineering institutes."
					},
					{
						icon: Stethoscope,
						title: "MBBS Admissions",
						desc: "Complete guidance for NEET UG counselling across government and private colleges."
					},
					{
						icon: HeartPulse,
						title: "Medical PG Admissions",
						desc: "MD / MS / Diploma placements through NEET PG state and all-India rounds."
					},
					{
						icon: Leaf,
						title: "BAMS Admissions",
						desc: "Ayurvedic medicine admissions across recognised universities."
					},
					{
						icon: Microscope,
						title: "BHMS Admissions",
						desc: "Homeopathy programmes with a structured, transparent process."
					},
					{
						icon: ToothIcon,
						title: "BDS Admissions",
						desc: "Dental surgery seats in reputed government and private colleges."
					},
					{
						icon: Handshake,
						title: "BPT Admissions",
						desc: "Physiotherapy programmes with allied health specialisation guidance."
					},
					{
						icon: Compass,
						title: "Career Counselling",
						desc: "One-to-one aptitude, stream and career-path discovery sessions."
					},
					{
						icon: Building2,
						title: "College Selection",
						desc: "Curated shortlists that fit your rank, budget and long-term goals."
					},
					{
						icon: FileCheck,
						title: "Admission Guidance",
						desc: "End-to-end handholding through every counselling and allotment round."
					},
					{
						icon: FileText,
						title: "Documentation Support",
						desc: "Verification, attestation and submission — handled without stress."
					},
					{
						icon: Route,
						title: "Seat Booking Assistance",
						desc: "On-ground assistance during reporting, seat locking and confirmation."
					}
				].map(({ icon: Icon, title, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group h-full bg-white p-8 transition-colors duration-300 hover:bg-white relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/30" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-11 h-11 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 20,
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-lg font-semibold text-ink tracking-tight",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-ink-soft leading-relaxed",
								children: desc
							})
						]
					})
				}, title))
			})]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col lg:flex-row lg:items-end justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Why Career Vision" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]",
							children: [
								"Eight reasons families",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" choose us — and stay."
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink-soft max-w-md",
						children: "Every recommendation we make is one we would make for our own children. That single principle shapes everything below."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
				children: [
					{
						icon: Award,
						title: "Expert Counsellors",
						desc: "A senior team with 15+ years of admissions and academic advisory experience."
					},
					{
						icon: UserCheck,
						title: "Personalised Guidance",
						desc: "Every plan is designed around your rank, aspirations and family context."
					},
					{
						icon: ShieldCheck,
						title: "Trusted Process",
						desc: "A transparent, documented workflow — no shortcuts, no surprises."
					},
					{
						icon: Building2,
						title: "Wide College Network",
						desc: "Direct relationships with 100+ engineering and medical institutions."
					},
					{
						icon: FileCheck,
						title: "Transparent Consultancy",
						desc: "Clear fee structures, honest cut-offs, and objective recommendations."
					},
					{
						icon: FileText,
						title: "Documentation Support",
						desc: "Every certificate, form and attestation handled by our operations team."
					},
					{
						icon: Wallet,
						title: "Affordable Consultation",
						desc: "Premium service without premium overheads — value families can trust."
					},
					{
						icon: Users,
						title: "Student-First Approach",
						desc: "Long-term outcomes over short-term commissions. Always."
					}
				].map(({ icon: Icon, title, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-elevated card-elevated-hover h-full p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 bg-surface flex items-center justify-center text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										size: 18,
										strokeWidth: 1.5
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xs text-ink-soft tabular-nums",
									children: ["0", i + 1]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-8 font-display text-base font-semibold text-ink",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-ink-soft leading-relaxed",
								children: desc
							})
						]
					})
				}, title))
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "process",
		className: "py-24 lg:py-32 bg-surface relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Admission Process" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]",
							children: [
								"Six deliberate steps, from",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" first call to first day."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base lg:text-lg leading-relaxed text-ink-soft max-w-xl",
							children: "We guide students through a structured, transparent timeline to make college admissions smooth and stress-free."
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: [
					{
						n: "01",
						title: "Free Consultation",
						desc: "A no-obligation session to understand your goals, scores and preferences."
					},
					{
						n: "02",
						title: "Career Assessment",
						desc: "Structured aptitude review and stream fit analysis with senior counsellors."
					},
					{
						n: "03",
						title: "College Selection",
						desc: "A shortlist calibrated to rank, budget, location and long-term outcomes."
					},
					{
						n: "04",
						title: "Application Assistance",
						desc: "Applications, entrance forms and choice-filling handled meticulously."
					},
					{
						n: "05",
						title: "Documentation",
						desc: "Verification, attestation and submission — audited before every deadline."
					},
					{
						n: "06",
						title: "Admission Confirmation",
						desc: "On-ground support during reporting, seat locking and campus onboarding."
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group bg-white border border-border p-8 rounded-[6px] relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(15,76,129,0.06)] h-full flex flex-col justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-bold text-[96px] text-primary/[0.03] absolute right-6 bottom-[-15px] select-none pointer-events-none transition-colors duration-300 group-hover:text-primary/[0.06]",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/5 text-primary text-xs font-semibold tracking-wider transition-colors duration-300 group-hover:bg-primary group-hover:text-white",
										children: s.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-8 font-display text-xl font-semibold text-ink tracking-tight transition-colors duration-300 group-hover:text-primary",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-ink-soft leading-relaxed pr-6",
										children: s.desc
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" })
						]
					})
				}, s.n))
			})]
		})]
	});
}
function Programs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "programs",
		className: "py-24 lg:py-32 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(197,168,128,0.04)_0%,transparent_70%)] pointer-events-none blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col lg:flex-row lg:items-end justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Featured Programs" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]",
							children: [
								"Programmes we guide",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" students into every year."
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "btn-primary bg-primary border-primary hover:bg-primary-hover hover:border-primary-hover text-white shadow-[0_10px_25px_rgba(15,76,129,0.15)] h-12 flex items-center justify-center",
						children: "Speak to an advisor"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: [
					{
						title: "Engineering",
						tag: "B.E. / B.Tech",
						desc: "Core, computing and emerging disciplines across India's top engineering colleges.",
						img: prog_engineering_default
					},
					{
						title: "MBBS",
						tag: "Bachelor of Medicine",
						desc: "Government and private medical seats through NEET UG counselling.",
						img: prog_mbbs_default
					},
					{
						title: "Medical PG",
						tag: "MD / MS",
						desc: "Post-graduate medical placements via NEET PG state and all-India quotas.",
						img: prog_pg_default
					},
					{
						title: "BAMS",
						tag: "Ayurveda",
						desc: "Bachelor of Ayurvedic Medicine and Surgery at recognised institutions.",
						img: prog_bams_default
					},
					{
						title: "BHMS",
						tag: "Homeopathy",
						desc: "Structured admissions for Bachelor of Homeopathic Medicine and Surgery.",
						img: prog_bhms_default
					},
					{
						title: "BDS",
						tag: "Dental Surgery",
						desc: "Bachelor of Dental Surgery seats in reputed dental colleges.",
						img: prog_bds_default
					},
					{
						title: "BPT",
						tag: "Physiotherapy",
						desc: "Allied health specialisation in Bachelor of Physiotherapy.",
						img: prog_bpt_default
					}
				].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group bg-white border border-border overflow-hidden rounded-[6px] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(15,76,129,0.07)] hover:border-primary/20 flex flex-col h-full relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "aspect-[4/3] overflow-hidden bg-surface relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.img,
									alt: `${p.title} — ${p.tag}`,
									width: 1200,
									height: 900,
									loading: "lazy",
									className: "w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.05]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-8 flex flex-col grow relative z-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] tracking-[0.2em] uppercase text-primary font-semibold",
										children: p.tag
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3.5 font-display text-2xl font-bold text-ink tracking-tight transition-colors duration-300 group-hover:text-primary",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-ink-soft leading-relaxed grow",
										children: p.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-primary group/link",
										children: ["Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
											size: 15,
											className: "transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" })
						]
					})
				}, p.title))
			})]
		})]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-dark text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-24 lg:py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow-light",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-line" }), "By the numbers"]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.1] max-w-3xl",
						children: "A track record measured in careers, not campaigns."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10",
					children: [
						{
							n: 5e3,
							suffix: "+",
							label: "Successful Admissions"
						},
						{
							n: 100,
							suffix: "+",
							label: "Partner Institutions"
						},
						{
							n: 15,
							suffix: "+",
							label: "Years of Experience"
						},
						{
							n: 98,
							suffix: "%",
							label: "Happy Students"
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-dark p-8 lg:p-10 h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-5xl lg:text-6xl font-semibold text-white tabular-nums tracking-tight",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: s.n,
									suffix: s.suffix
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-white/60 uppercase tracking-[0.14em]",
								children: s.label
							})]
						})
					}, s.label))
				})
			]
		})
	});
}
function Testimonials() {
	const items = [
		{
			quote: "Career Vision's expert guidance made my dream a reality.",
			name: "Balla Sri Charan",
			role: "MBBS, VINAYAKA MISSION MEDICAL COLLEGE"
		},
		{
			quote: "They provided step-by-step assistance throughout the entire admission process.",
			name: "Devareddy Tayswitha Reddy",
			role: "MBBS, CMR MEDICAL COLLEGE HYDERABAD"
		},
		{
			quote: "I highly recommend Career Vision for anyone seeking medical admissions.",
			name: "Yannam Sai Hemanth Reddy",
			role: "MBBS, CHALMADA ANANDH RAO MEDICAL COLLEGE"
		},
		{
			quote: "Their transparency and dedication secured my admission seamlessly.",
			name: "Polamarasetti Tanvi",
			role: "BAMS, HILLSIDES AYURVEDIC MEDICAL COLLEGE"
		},
		{
			quote: "From documentation to seat locking, every step was handled with genuine care.",
			name: "Siva Krishan",
			role: "PG ORTHO, MNR MEDICAL COLLEGE"
		}
	];
	const [idx, setIdx] = (0, import_react.useState)(0);
	const active = items[idx];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "testimonials",
		className: "py-24 lg:py-32 bg-surface relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(15,76,129,0.03)_0%,transparent_70%)] pointer-events-none blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Student Testimonials" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]",
							children: [
								"Words from families who",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" walked this road with us."
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "lg:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								ease: [
									.2,
									.7,
									.2,
									1
								]
							},
							className: "relative bg-white border border-border p-10 lg:p-14 shadow-[0_20px_50px_rgba(15,76,129,0.04)] rounded-[6px] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
									size: 80,
									strokeWidth: .75,
									className: "text-gold/10 absolute top-6 right-6 pointer-events-none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1 text-primary relative z-10",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										size: 15,
										className: "fill-primary",
										strokeWidth: 0
									}, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-8 font-display text-2xl lg:text-3xl leading-[1.4] tracking-tight text-ink relative z-10 font-medium",
									children: [
										"“",
										active.quote,
										"”"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 pt-8 border-t border-border flex items-center justify-between relative z-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display font-semibold text-ink text-base",
										children: active.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-ink-soft mt-1",
										children: active.role
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-sm text-ink-soft/60 tabular-nums",
										children: [
											String(idx + 1).padStart(2, "0"),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-ink-soft/20",
												children: "/"
											}),
											" ",
											String(items.length).padStart(2, "0")
										]
									})]
								})
							]
						}, idx)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "lg:col-span-4",
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex lg:flex-col gap-3",
							children: items.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setIdx(i),
								className: `text-left border p-5 flex-1 lg:flex-none transition-all duration-300 cursor-pointer ${i === idx ? "bg-primary border-primary text-white shadow-[0_10px_20px_rgba(15,76,129,0.15)] rounded-[6px]" : "bg-white border-border text-ink hover:border-primary/30 hover:translate-x-1 rounded-[6px]"}`,
								"aria-pressed": i === idx,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: `text-[9px] tracking-[0.2em] uppercase font-semibold ${i === idx ? "text-white/60" : "text-ink-soft"}`,
										children: ["Student 0", i + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-display font-medium text-sm lg:text-base",
										children: t.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `text-xs mt-1 ${i === idx ? "text-white/70" : "text-ink-soft"}`,
										children: t.role
									})
								]
							}, t.name))
						})
					})]
				})]
			})
		]
	});
}
function FAQ() {
	const faqs = [
		{
			q: "How does the admission process work?",
			a: "We begin with a free consultation to understand your rank and preferences, followed by career assessment, a curated college shortlist, application support, documentation, and on-ground seat confirmation."
		},
		{
			q: "Can you help with MBBS admissions?",
			a: "Yes. We handle NEET UG counselling across state and all-India rounds for both government and private medical colleges, along with documentation and reporting support."
		},
		{
			q: "Do you provide personalised counselling?",
			a: "Every family we work with receives one-to-one sessions with senior counsellors. There are no scripted pitches — recommendations are tailored to your rank, budget, and long-term goals."
		},
		{
			q: "Do you assist with documentation?",
			a: "Yes. Our operations team manages verification, attestation, choice-filling and every deadline — audited before submission so nothing is missed."
		},
		{
			q: "Which colleges do you partner with?",
			a: "We work with 100+ engineering and medical institutions across Karnataka, Maharashtra, Tamil Nadu, and other major states — spanning government, deemed and private universities."
		}
	];
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "py-24 lg:py-32 relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(197,168,128,0.03)_0%,transparent_70%)] pointer-events-none blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "FAQ" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]",
								children: [
									"Questions we hear",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									" most often."
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-ink-soft",
								children: "Still curious? A free consultation is the fastest way to a clear answer."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "btn-primary bg-primary border-primary hover:bg-primary-hover hover:border-primary-hover text-white shadow-[0_10px_25px_rgba(15,76,129,0.15)] mt-8",
								children: "Ask us directly"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border",
						children: faqs.map((f, i) => {
							const isOpen = open === i;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .04,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-b border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setOpen(isOpen ? null : i),
										className: "w-full flex items-center justify-between gap-6 py-6 text-left group cursor-pointer",
										"aria-expanded": isOpen,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-lg lg:text-xl font-medium text-ink tracking-tight transition-colors duration-300 group-hover:text-primary",
											children: f.q
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-9 h-9 border border-border flex items-center justify-center text-ink shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 rounded-[4px]",
											children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
												size: 15,
												strokeWidth: 1.5
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
												size: 15,
												strokeWidth: 1.5
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: false,
										animate: {
											height: isOpen ? "auto" : 0,
											opacity: isOpen ? 1 : 0
										},
										transition: {
											duration: .35,
											ease: [
												.2,
												.7,
												.2,
												1
											]
										},
										className: "overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "pb-8 pr-16 text-ink-soft leading-relaxed text-sm lg:text-base",
											children: f.a
										})
									})]
								})
							}, f.q);
						})
					})
				})]
			})
		]
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-dark text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-24 lg:py-32 text-center max-w-4xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow-light justify-center inline-flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-line" }), "Ready when you are"]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.05]",
						children: [
							"Ready to build",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							" your career?"
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-lg text-white/60 max-w-xl mx-auto",
						children: "Book your free counselling session today. No obligations — just an honest conversation about your future."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "btn-primary bg-white !text-ink border-white hover:!bg-white/90 hover:!border-white/90",
							style: {
								backgroundColor: "white",
								color: "#0F172A",
								borderColor: "white"
							},
							children: ["Schedule Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+918639887319",
							className: "btn-ghost-light",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }), " +91 86398 87319"]
						})]
					})
				})
			]
		})
	});
}
function Contact() {
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		phone: "",
		course: "General Inquiry",
		message: ""
	});
	const handleFormSubmit = (e) => {
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
		const whatsappUrl = `https://wa.me/918639887319?text=${encodeURIComponent(text)}`;
		window.open(whatsappUrl, "_blank", "noopener,noreferrer");
		setFormData({
			name: "",
			phone: "",
			course: "General Inquiry",
			message: ""
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Contact" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]",
						children: "Get in Touch with Career Vision."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6 space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-dark text-white p-8 lg:p-10 flex flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-semibold",
								children: "Visit Our Office"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-white/60",
								children: "Located in the educational hub of Jayanagar, Bengaluru."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
										icon: Phone,
										label: "Phone",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+918639887319",
											className: "hover:underline tabular-nums",
											children: "+91 86398 87319"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
										icon: Mail,
										label: "Email",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:careervisioneduconsultancy@gmail.com",
											className: "hover:underline break-all",
											children: "careervisioneduconsultancy@gmail.com"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
										icon: MapPin,
										label: "Address",
										children: "Second Floor, 07/3, 18th C Main Rd, MTB Area, Marenahalli, Jayanagar 9th Block, Bengaluru, Karnataka 560041"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactRow, {
										icon: CircleCheck,
										label: "Business Hours",
										children: [
											"Monday – Saturday · 9:00 AM – 8:00 PM",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-white/50",
												children: "Sunday · Holiday"
											})
										]
									})
								]
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/10] border border-border overflow-hidden bg-surface",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Career Vision Educational Consultancy — Jayanagar, Bengaluru",
								src: "https://www.google.com/maps?q=18th+C+Main+Rd,+Marenahalli,+Jayanagar+9th+Block,+Bengaluru,+Karnataka+560041&output=embed",
								width: "100%",
								height: "100%",
								loading: "lazy",
								referrerPolicy: "no-referrer-when-downgrade",
								className: "w-full h-full block filter grayscale-[35%] contrast-[0.95]",
								style: {
									border: 0,
									minHeight: 300
								}
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "lg:col-span-6",
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-white border border-border p-8 lg:p-10 h-full flex flex-col justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-semibold text-ink",
								children: "Send an Inquiry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-ink-soft",
								children: "Fill in your details below to directly connect with our senior admission advisors on WhatsApp."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleFormSubmit,
								className: "mt-8 space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "form-name",
										className: "block text-xs font-semibold uppercase tracking-wider text-ink",
										children: "Full Name *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										id: "form-name",
										required: true,
										value: formData.name,
										onChange: (e) => setFormData({
											...formData,
											name: e.target.value
										}),
										placeholder: "John Doe",
										className: "mt-2 block w-full px-4 py-3 border border-border rounded-[6px] focus:outline-none focus:border-primary text-sm text-ink bg-surface placeholder:text-ink-soft/40 transition-colors"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 md:grid-cols-2 gap-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "form-phone",
											className: "block text-xs font-semibold uppercase tracking-wider text-ink",
											children: "Phone Number *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "tel",
											id: "form-phone",
											required: true,
											value: formData.phone,
											onChange: (e) => setFormData({
												...formData,
												phone: e.target.value
											}),
											placeholder: "e.g. +91 98765 43210",
											className: "mt-2 block w-full px-4 py-3 border border-border rounded-[6px] focus:outline-none focus:border-primary text-sm text-ink bg-surface placeholder:text-ink-soft/40 transition-colors"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "form-course",
											className: "block text-xs font-semibold uppercase tracking-wider text-ink",
											children: "Preferred Program *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											id: "form-course",
											required: true,
											value: formData.course,
											onChange: (e) => setFormData({
												...formData,
												course: e.target.value
											}),
											className: "mt-2 block w-full px-4 py-3 border border-border rounded-[6px] focus:outline-none focus:border-primary text-sm text-ink bg-surface transition-colors cursor-pointer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "General Inquiry",
													children: "General Inquiry"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "MBBS Admission",
													children: "MBBS Admission"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Engineering Admission",
													children: "Engineering Admission"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Medical PG Admission",
													children: "Medical PG Admission"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "BAMS Admission",
													children: "BAMS Admission"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "BHMS Admission",
													children: "BHMS Admission"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "BDS Admission",
													children: "BDS Admission"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "BPT Admission",
													children: "BPT Admission"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Career Counselling",
													children: "Career Counselling"
												})
											]
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "form-message",
										className: "block text-xs font-semibold uppercase tracking-wider text-ink",
										children: "Inquiry Details"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "form-message",
										rows: 4,
										value: formData.message,
										onChange: (e) => setFormData({
											...formData,
											message: e.target.value
										}),
										placeholder: "Share your entrance exam rank, score, budget constraints, or specific queries...",
										className: "mt-2 block w-full px-4 py-3 border border-border rounded-[6px] focus:outline-none focus:border-primary text-sm text-ink bg-surface placeholder:text-ink-soft/40 transition-colors resize-none"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										className: "btn-primary w-full group mt-2",
										children: ["Submit & Chat on WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											size: 16,
											className: "transition-transform group-hover:translate-x-0.5"
										})]
									})
								]
							})
						] })
					})
				})]
			})]
		})
	});
}
function ContactRow({ icon: Icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-9 h-9 border border-white/15 flex items-center justify-center text-white/80 shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 15,
				strokeWidth: 1.5
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] tracking-[0.2em] uppercase text-white/50",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1.5 text-sm text-white/90 leading-relaxed",
				children
			})]
		})]
	});
}
//#endregion
export { Index as component };
