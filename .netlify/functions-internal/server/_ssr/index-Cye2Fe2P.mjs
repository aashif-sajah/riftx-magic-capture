import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as ArrowRight, C as Check, d as Sparkles, a as ChevronDown, X, b as Lock, L as LoaderCircle, c as ShieldCheck, S as Shield } from "../_libs/lucide-react.mjs";
const DOMAIN = "kaero.ae";
const PRICE = 1299;
const MARKET_VALUE = 5800;
function DomainLanding() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { onBuy: () => setOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { onBuy: () => setOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhySection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IncludedSection, { onBuy: () => setOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OtherDomains, { onBuy: () => setOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(PurchaseFlow, { onClose: () => setOpen(false) })
  ] });
}
function Nav({ onBuy }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 bg-background border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-semibold tracking-tight text-xl", children: [
      "Domain",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Cart" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#why", className: "hover:text-foreground transition", children: "Why this domain" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-foreground transition", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", className: "hover:text-foreground transition", children: "FAQ" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: onBuy,
        className: "text-sm font-medium px-4 py-2 rounded-sm border border-gold text-gold hover:bg-gold hover:text-black transition",
        children: "Acquire Domain"
      }
    )
  ] }) });
}
function Hero({ onBuy }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-lines opacity-40 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-20 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-12 text-xs font-mono text-muted-foreground uppercase tracking-widest", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Premium Listing · DomainCart LLC" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-gold mb-6", children: "[ AVAILABLE — ONE OWNER ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold leading-[0.95] tracking-tighter", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-5xl md:text-7xl lg:text-[8rem] text-foreground", children: "KAERO" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-5xl md:text-7xl lg:text-[8rem] text-gold -mt-2", children: ".AE" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed", children: "Own a premium .AE domain and dominate the UAE market. Short, sharp, unforgettable." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-baseline gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xl text-muted-foreground line-through", children: [
              "$",
              MARKET_VALUE.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-4xl md:text-5xl", children: [
              "Yours for ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gold", children: [
                "$",
                PRICE.toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: onBuy,
                className: "group bg-gradient-gold text-primary-foreground font-medium px-8 py-4 rounded-sm flex items-center gap-3 shadow-gold animate-pulse-gold",
                children: [
                  "Make It Yours",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: "One-time payment · Instant escrow" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-3 max-w-xl", children: [
            "SSL Certificate Included",
            "Transfer within 12 hours",
            "Direct transfer to your email",
            "Secure checkout"
          ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-gold shrink-0" }),
            " ",
            t
          ] }, t)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square max-w-md mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full border border-dashed border-gold/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-8 rounded-full border border-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-16 rounded-full border border-border/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-navy-mid border border-border rounded-sm p-6 w-[78%] shadow-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "Domain Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-gold animate-pulse" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl md:text-3xl font-bold mb-1", children: [
              "kaero",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: ".ae" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-5", children: "Registered · UAE TLD · Clean WHOIS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 text-center font-mono", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "LENGTH", value: "5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "TLD", value: ".AE" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "SCORE", value: "A+" })
            ] })
          ] }) })
        ] }) })
      ] })
    ] })
  ] });
}
function Metric({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/40 border border-border rounded-sm py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gold font-semibold", children: value })
  ] });
}
function WhySection() {
  const items = [
    { n: "01", t: "Premium .AE Extension", d: "UAE's official TLD — trusted by regulators, banks, and Emirati customers." },
    { n: "02", t: "Short & Memorable", d: "Just 5 letters. Brandable, typeable, unforgettable in any market." },
    { n: "03", t: "High Resale Value", d: "Independently appraised at $5,800. You own the asset, not just a lease." },
    { n: "04", t: "Instant Authority", d: "Skip years of trust-building. Launch on a domain that already commands respect." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why", className: "border-t border-border py-24 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "/ 01 — Why kaero.ae" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-bold leading-tight", children: [
        "A domain is the only piece of real estate that ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "appreciates while you sleep." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-px bg-border", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-10 group hover:bg-navy-mid transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: i.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 border border-border group-hover:border-gold transition rounded-sm grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-gold" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mb-3", children: i.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: i.d })
    ] }, i.n)) })
  ] }) });
}
function IncludedSection({ onBuy }) {
  const rows = [
    { k: "SSL Certificate", v: "Included free with purchase" },
    { k: "Ownership Transfer", v: "Direct to your email within 12 hours" },
    { k: "Auth / EPP Code", v: "Provided immediately after payment" },
    { k: "Post-sale Support", v: "Dedicated transfer specialist from DomainCart LLC" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border py-24 bg-navy-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "/ 02 — Included" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Everything you need to launch." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 max-w-md", children: "One transparent price. No hidden registrar fees. No upsells. You receive full registrant rights the moment payment clears." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: onBuy,
          className: "bg-gold text-primary-foreground font-medium px-6 py-3 rounded-sm flex items-center gap-3",
          children: [
            "Start the transfer ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: rows.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-12 items-center py-6 border-b border-border group hover:px-3 transition-all",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "col-span-1 font-mono text-xs text-muted-foreground", children: [
            "0",
            idx + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-4 font-display text-lg", children: r.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-6 text-muted-foreground", children: r.v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "col-span-1 w-5 h-5 text-gold justify-self-end" })
        ]
      },
      r.k
    )) }) })
  ] }) });
}
function ServicesSection() {
  const services = [
    { t: "Domain Registration", d: "New TLDs, ccTLDs, and premium handles." },
    { t: "Domain Appraisal", d: "Independent valuation from $49." },
    { t: "Domain Brokerage", d: "We negotiate, you collect." },
    { t: "Website Hosting", d: "Edge-deployed, 99.99% uptime." },
    { t: "Business Email Setup", d: "Branded mailboxes in minutes." },
    { t: "Portfolio Management", d: "Renewals, transfers, parking — handled." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "border-t border-border py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-16 flex-wrap gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "/ 03 — Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold max-w-xl", children: "More from DomainCart LLC." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: "06 / SERVICES" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border", children: services.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-8 hover:bg-navy-mid transition group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
          "0",
          idx + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 text-muted-foreground group-hover:text-gold group-hover:-rotate-45 transition" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: s.d })
    ] }, s.t)) })
  ] }) });
}
const OTHER_DOMAINS = [
  { name: "zafir.ae", price: 2450, tag: "Hot" },
  { name: "noora.ae", price: 3100 },
  { name: "rayan.ae", price: 1899 },
  { name: "tamra.ae", price: 1499 },
  { name: "qasr.ae", price: 4200, tag: "Premium" },
  { name: "hawa.ae", price: 1750 },
  { name: "lumen.ae", price: 2999 },
  { name: "mirai.ae", price: 2275 },
  { name: "saba.ae", price: 3850 },
  { name: "vela.ae", price: 1650 },
  { name: "orix.ae", price: 1299 },
  { name: "nexa.ae", price: 4750, tag: "Premium" },
  { name: "kavi.ae", price: 1099 },
  { name: "duna.ae", price: 2199 },
  { name: "amber.ae", price: 5600, tag: "Top tier" },
  { name: "siraj.ae", price: 2890 },
  { name: "olea.ae", price: 1950 },
  { name: "yara.ae", price: 3400 },
  { name: "korra.ae", price: 1599 },
  { name: "halia.ae", price: 2725 }
];
function OtherDomains({ onBuy }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "other-domains", className: "border-t border-border py-24 bg-navy-mid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12 flex-wrap gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "/ 04 — Other .AE Domains" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold max-w-xl", children: "Browse the rest of our UAE inventory." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: "20 / LISTED" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border", children: OTHER_DOMAINS.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: onBuy,
        className: "bg-background p-6 text-left hover:bg-navy-deep transition group flex flex-col gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: String(i + 1).padStart(2, "0") }),
            d.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-gold border border-gold px-2 py-0.5", children: d.tag })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-bold tracking-tight", children: [
            d.name.split(".")[0],
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: ".ae" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mt-auto pt-2 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-lg text-foreground", children: [
              "$",
              d.price.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition" })
          ] })
        ]
      },
      d.name
    )) })
  ] }) });
}
function Testimonials() {
  const items = [
    {
      q: "Closed the deal in under a day. Transfer was clean, paperwork was clear, my new .AE was live before the weekend.",
      n: "Khalid Al-Mansoori",
      r: "Founder, Mansoori Capital · Dubai"
    },
    {
      q: "I was nervous about wiring this kind of money for a domain. DomainCart's escrow flow made it feel like buying a house — professional all the way.",
      n: "Aisha Rahman",
      r: "CMO, Noor Retail Group · Abu Dhabi"
    },
    {
      q: "We rebranded onto a premium .AE from DomainCart and our organic CTR in the UAE jumped 31% in the first month. Worth every dirham.",
      n: "Omar Haddad",
      r: "Growth Lead, Levant Ventures · Sharjah"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border py-24 bg-navy-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "/ 04 — Word of mouth" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-16 max-w-2xl", children: "Quiet endorsements from loud operators." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: items.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "border-l-2 border-gold pl-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-lg leading-relaxed mb-6 text-foreground", children: [
        "“",
        t.q,
        "”"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold", children: t.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: t.r })
      ] })
    ] }, t.n)) })
  ] }) });
}
function FAQ() {
  const faqs = [
    { q: "How does the transfer work?", a: "After payment clears, our team initiates the registrar-to-registrar transfer. You receive the Auth/EPP code by email, accept the transfer in your preferred registrar, and ownership is complete — usually within 12 hours." },
    { q: "Is SSL really included?", a: "Yes. A standard SSL certificate is bundled free for the first year. We provision it on your behalf or hand it to your hosting provider." },
    { q: "What if I need help after purchase?", a: "Every buyer is assigned a transfer specialist for 14 days post-sale. We handle DNS configuration, email routing, and any registrar quirks." },
    { q: "Can I use this domain internationally?", a: "Absolutely. While .AE is the UAE's TLD, the domain resolves globally and is excellent for businesses targeting MENA from anywhere in the world." },
    { q: "How do I know the domain is worth $5,800?", a: "Valuation is based on length, TLD demand, comparable .AE sales, brandability, and SEO history. We can provide a third-party appraisal upon request." },
    { q: "Is payment secure?", a: "All transactions are processed over PCI-DSS compliant rails. We never see or store your card details, and your purchase is protected by our 14-day satisfaction guarantee." }
  ];
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "border-t border-border py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "/ 05 — Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold", children: "Answers, in plain English." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setOpen(open === i ? null : i),
          className: "w-full flex items-center justify-between py-6 text-left group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg md:text-xl group-hover:text-gold transition", children: f.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChevronDown,
              {
                className: `w-5 h-5 text-gold transition-transform ${open === i ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      open === i && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pb-6 text-muted-foreground max-w-2xl leading-relaxed", children: f.a })
    ] }, f.q)) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border bg-navy-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 lg:px-12 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-semibold text-xl", children: [
          "Domain",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Cart" }),
          " LLC"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-sm", children: "A premium domain brokerage curating high-value digital real estate for ambitious operators." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm text-gold mt-6", children: "(480) 624-2500" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4", children: "Navigate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: ["Home", "Services", "Contact"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold transition", children: l }) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4", children: "Legal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold transition", children: "Privacy Policy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold transition", children: "Terms of Service" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 pt-8 border-t border-border flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2024 DomainCart LLC. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "kaero.ae · listed at $",
        PRICE.toLocaleString()
      ] })
    ] })
  ] }) });
}
const COUNTRIES = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Bahrain",
  "Kuwait",
  "Oman",
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "India",
  "Singapore",
  "Canada",
  "Australia",
  "Other"
];
const DNS_PROVIDERS = ["Cloudflare", "GoDaddy", "Namecheap", "Google Domains", "Other"];
const TTL_VALUES = ["300", "600", "1800", "3600", "7200"];
function PurchaseFlow({ onClose }) {
  const [step, setStep] = reactExports.useState(1);
  const [showErrors, setShowErrors] = reactExports.useState(false);
  const [processing, setProcessing] = reactExports.useState(false);
  const [s1, setS1] = reactExports.useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    country: ""
  });
  const [s2, setS2] = reactExports.useState({
    registrar: "",
    dns: "",
    ns1: "",
    ns2: "",
    ttl: "",
    privacy: true,
    eppCode: "",
    destEmail: ""
  });
  const [s3, setS3] = reactExports.useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: ""
  });
  reactExports.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  const s1Valid = reactExports.useMemo(
    () => s1.fullName.trim() && /\S+@\S+\.\S+/.test(s1.email) && s1.phone.trim() && s1.country.trim(),
    [s1]
  );
  const s2Valid = reactExports.useMemo(
    () => s2.registrar.trim() && s2.dns && s2.ns1.trim() && s2.ns2.trim() && s2.ttl && s2.destEmail.trim().toLowerCase() === s1.email.trim().toLowerCase(),
    [s2, s1.email]
  );
  const s3Valid = reactExports.useMemo(
    () => s3.cardNumber.replace(/\s/g, "").length >= 13 && /^\d{2}\/\d{2}$/.test(s3.expiry) && s3.cvv.length >= 3 && s3.cardName.trim(),
    [s3]
  );
  const next = () => {
    if (step === 1) {
      if (!s1Valid) {
        setShowErrors(true);
        return;
      }
      setShowErrors(false);
      setStep(2);
    } else if (step === 2) {
      if (!s2Valid) {
        setShowErrors(true);
        return;
      }
      setShowErrors(false);
      setStep(3);
    }
  };
  const submitPayment = () => {
    if (!s3Valid) {
      setShowErrors(true);
      return;
    }
    setProcessing(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-navy-deep/80 backdrop-blur-sm grid place-items-center p-4 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border max-w-2xl w-full my-8 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-8 py-5 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] uppercase tracking-widest text-gold", children: [
          "Acquisition · ",
          DOMAIN
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-semibold mt-1", children: [
          "Step ",
          step,
          " of 3"
        ] })
      ] }),
      !processing && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-1 bg-muted", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-1 ${n <= step ? "bg-gold" : ""} transition-all` }, n)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: processing ? /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessingView, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step1, { data: s1, setData: setS1, showErrors }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step2, { data: s2, setData: setS2, showErrors, step1Email: s1.email }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step3, { data: s3, setData: setS3, showErrors }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between gap-4", children: [
        step > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setStep(step - 1);
              setShowErrors(false);
            },
            className: "text-sm text-muted-foreground hover:text-foreground",
            children: "← Back"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
        step < 3 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: next,
            disabled: step === 1 ? !s1Valid : !s2Valid,
            className: "bg-gold text-primary-foreground font-medium px-6 py-3 rounded-sm flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed transition",
            children: [
              step === 1 ? "Continue to Domain Settings" : "Proceed to Payment",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: submitPayment,
            disabled: !s3Valid,
            className: "bg-gold text-primary-foreground font-medium px-6 py-3 rounded-sm flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4" }),
              " Complete Purchase · $",
              PRICE.toLocaleString()
            ]
          }
        )
      ] })
    ] }) })
  ] }) });
}
function ProcessingView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-16 flex flex-col items-center text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-12 h-12 text-gold animate-spin-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-display text-xl", children: "Processing your secure payment..." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground max-w-sm", children: "Please don't close this window. We're verifying your details with our payment provider." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3 h-3 text-gold" }),
      " 256-bit SSL · PCI-DSS Compliant"
    ] })
  ] });
}
function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  error,
  hint
}) {
  const invalid = !!error;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: " *" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        value,
        onChange: (e) => onChange(e.target.value),
        placeholder,
        className: `mt-2 w-full bg-input border ${invalid ? "border-destructive" : "border-border focus:border-gold"} rounded-sm px-3 py-2.5 text-sm outline-none transition`
      }
    ),
    hint && !invalid && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[11px] text-muted-foreground mt-1", children: hint }),
    invalid && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[11px] text-destructive mt-1", children: error })
  ] });
}
function Select({
  label,
  value,
  onChange,
  options,
  required,
  error
}) {
  const invalid = !!error;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: " *" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        value,
        onChange: (e) => onChange(e.target.value),
        className: `mt-2 w-full bg-input border ${invalid ? "border-destructive" : "border-border focus:border-gold"} rounded-sm px-3 py-2.5 text-sm outline-none transition`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select..." }),
          options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, children: o }, o))
        ]
      }
    ),
    invalid && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[11px] text-destructive mt-1", children: error })
  ] });
}
function Step1({ data, setData, showErrors }) {
  const err = (cond, msg) => showErrors && cond ? msg : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-2", children: "Your Details" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "We need this to register the domain in your name." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", required: true, value: data.fullName, onChange: (v) => setData({ ...data, fullName: v }), error: err(!data.fullName.trim(), "Required") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email Address", type: "email", required: true, value: data.email, onChange: (v) => setData({ ...data, email: v }), error: err(!/\S+@\S+\.\S+/.test(data.email), "Valid email required") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone Number", required: true, value: data.phone, onChange: (v) => setData({ ...data, phone: v }), error: err(!data.phone.trim(), "Required") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company Name (optional)", value: data.company, onChange: (v) => setData({ ...data, company: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Country", required: true, value: data.country, onChange: (v) => setData({ ...data, country: v }), options: COUNTRIES, error: err(!data.country, "Required") }) })
    ] })
  ] });
}
function Step2({ data, setData, showErrors, step1Email }) {
  const err = (cond, msg) => showErrors && cond ? msg : "";
  const emailMismatch = data.destEmail.trim() && data.destEmail.trim().toLowerCase() !== step1Email.trim().toLowerCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-2", children: "Configure Your Domain Transfer" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-6", children: [
      "Tell us where ",
      DOMAIN,
      " should land."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Current Registrar Name", required: true, value: data.registrar, onChange: (v) => setData({ ...data, registrar: v }), placeholder: "e.g. GoDaddy", error: err(!data.registrar.trim(), "Required") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Desired DNS Provider", required: true, value: data.dns, onChange: (v) => setData({ ...data, dns: v }), options: DNS_PROVIDERS, error: err(!data.dns, "Required") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Primary Nameserver (NS1)", required: true, value: data.ns1, onChange: (v) => setData({ ...data, ns1: v }), placeholder: "ns1.example.com", error: err(!data.ns1.trim(), "Required") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Secondary Nameserver (NS2)", required: true, value: data.ns2, onChange: (v) => setData({ ...data, ns2: v }), placeholder: "ns2.example.com", error: err(!data.ns2.trim(), "Required") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "TTL Value", required: true, value: data.ttl, onChange: (v) => setData({ ...data, ttl: v }), options: TTL_VALUES, error: err(!data.ttl, "Required") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "WHOIS Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setData({ ...data, privacy: !data.privacy }),
            className: `mt-2 w-full flex items-center justify-between bg-input border border-border rounded-sm px-3 py-2.5 text-sm`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: data.privacy ? "Enabled — hide WHOIS details" : "Disabled — public WHOIS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative w-10 h-5 rounded-full transition ${data.privacy ? "bg-gold" : "bg-border"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute top-0.5 w-4 h-4 rounded-full bg-background transition ${data.privacy ? "left-5" : "left-0.5"}` }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Authorization / EPP Code", value: data.eppCode, onChange: (v) => setData({ ...data, eppCode: v }), hint: "Leave blank if unknown — we'll handle it." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field,
        {
          label: "Transfer Destination Email",
          required: true,
          type: "email",
          value: data.destEmail,
          onChange: (v) => setData({ ...data, destEmail: v }),
          placeholder: step1Email || "Must match your account email",
          error: err(!data.destEmail.trim(), "Required") || (emailMismatch ? "Must match the email from Step 1" : "")
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-start gap-3 bg-navy-mid border border-border rounded-sm p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-gold mt-0.5 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "These settings ensure a smooth transfer. Our team will verify everything within 12 hours and reach out before any changes go live." })
    ] })
  ] });
}
function Step3({ data, setData, showErrors }) {
  const err = (cond, msg) => showErrors && cond ? msg : "";
  const formatCard = (v) => v.replace(/\D/g, "").slice(0, 19).replace(/(.{4})/g, "$1 ").trim();
  const formatExpiry = (v) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-2", children: "Secure Payment" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Final step. Your card is charged once." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-navy-mid border border-border rounded-sm p-5 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-lg", children: DOMAIN }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-lg text-gold", children: [
          "$",
          PRICE.toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-sm text-muted-foreground", children: ["SSL Certificate", "12-hour ownership transfer", "Full registrant rights", "Post-sale support"].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-gold" }),
        " ",
        i
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border mt-4 pt-3 flex justify-between font-display", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gold", children: [
          "$",
          PRICE.toLocaleString(),
          " USD"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field,
        {
          label: "Card Number",
          required: true,
          value: data.cardNumber,
          onChange: (v) => setData({ ...data, cardNumber: formatCard(v) }),
          placeholder: "4242 4242 4242 4242",
          error: err(data.cardNumber.replace(/\s/g, "").length < 13, "Enter a valid card number")
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field,
        {
          label: "Expiry (MM/YY)",
          required: true,
          value: data.expiry,
          onChange: (v) => setData({ ...data, expiry: formatExpiry(v) }),
          placeholder: "12/28",
          error: err(!/^\d{2}\/\d{2}$/.test(data.expiry), "MM/YY")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field,
        {
          label: "CVV",
          required: true,
          value: data.cvv,
          onChange: (v) => setData({ ...data, cvv: v.replace(/\D/g, "").slice(0, 4) }),
          placeholder: "123",
          error: err(data.cvv.length < 3, "3–4 digits")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cardholder Name", required: true, value: data.cardName, onChange: (v) => setData({ ...data, cardName: v }), placeholder: "As shown on card", error: err(!data.cardName.trim(), "Required") }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2 text-[11px] font-mono text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3 text-gold" }),
      " Encrypted end-to-end · We never store your card"
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DomainLanding, {});
}
export {
  Index as component
};
