import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Lock,
  Loader2,
  Shield,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const DOMAIN = "kaero.ae";
const PRICE = 1299;
const MARKET_VALUE = 5800;

export function DomainLanding() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav onBuy={() => setOpen(true)} />
      <Hero onBuy={() => setOpen(true)} />
      <WhySection />
      <IncludedSection onBuy={() => setOpen(true)} />
      <ServicesSection />
      <OtherDomains onBuy={() => setOpen(true)} />
      <Testimonials />
      <FAQ />
      <Footer />
      {open && <PurchaseFlow onClose={() => setOpen(false)} />}
    </div>
  );
}

/* ───────────────────────────── NAV ───────────────────────────── */
function Nav({ onBuy }: { onBuy: () => void }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-sm bg-gradient-gold grid place-items-center text-primary-foreground font-display font-bold">
            D
          </div>
          <span className="font-display font-semibold tracking-tight">
            Domain<span className="text-gold">Cart</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#why" className="hover:text-foreground transition">Why this domain</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <button
          onClick={onBuy}
          className="text-sm font-medium px-4 py-2 rounded-sm border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition"
        >
          Acquire Domain
        </button>
      </div>
    </header>
  );
}

/* ───────────────────────────── HERO ───────────────────────────── */
function Hero({ onBuy }: { onBuy: () => void }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-20 relative">
        {/* Top grid label */}
        <div className="flex items-center gap-4 mb-12 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <span className="h-px w-12 bg-border" />
          <span>Premium Listing · DomainCart LLC</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-6">
              [ AVAILABLE — ONE OWNER ]
            </p>
            <h1 className="font-display font-bold leading-[0.95] tracking-tighter">
              <span className="block text-5xl md:text-7xl lg:text-[8rem] text-foreground">
                KAERO
              </span>
              <span className="block text-5xl md:text-7xl lg:text-[8rem] text-gold -mt-2">
                .AE
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Own a premium .AE domain and dominate the UAE market. Short, sharp,
              unforgettable.
            </p>

            {/* Price */}
            <div className="mt-10 flex flex-wrap items-baseline gap-4">
              <span className="font-mono text-xl text-muted-foreground line-through">
                ${MARKET_VALUE.toLocaleString()}
              </span>
              <span className="font-display font-bold text-4xl md:text-5xl">
                Yours for <span className="text-gold">${PRICE.toLocaleString()}</span>
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <button
                onClick={onBuy}
                className="group bg-gradient-gold text-primary-foreground font-medium px-8 py-4 rounded-sm flex items-center gap-3 shadow-gold animate-pulse-gold"
              >
                Make It Yours
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <span className="font-mono text-xs text-muted-foreground">
                One-time payment · Instant escrow
              </span>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 max-w-xl">
              {[
                "SSL Certificate Included",
                "Transfer within 12 hours",
                "Direct transfer to your email",
                "Secure checkout",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-gold shrink-0" /> {t}
                </div>
              ))}
            </div>
          </div>

          {/* Visual panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-gold/40" />
              <div className="absolute inset-8 rounded-full border border-border" />
              <div className="absolute inset-16 rounded-full border border-border/50" />

              {/* Center card */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="bg-navy-mid border border-border rounded-sm p-6 w-[78%] shadow-gold">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Domain Status
                    </span>
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-bold mb-1">
                    kaero<span className="text-gold">.ae</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-5">
                    Registered · UAE TLD · Clean WHOIS
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center font-mono">
                    <Metric label="LENGTH" value="5" />
                    <Metric label="TLD" value=".AE" />
                    <Metric label="SCORE" value="A+" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background/40 border border-border rounded-sm py-2">
      <div className="text-[10px] text-muted-foreground">{label}</div>
      <div className="text-sm text-gold font-semibold">{value}</div>
    </div>
  );
}

/* ───────────────────────────── WHY ───────────────────────────── */
function WhySection() {
  const items = [
    { n: "01", t: "Premium .AE Extension", d: "UAE's official TLD — trusted by regulators, banks, and Emirati customers." },
    { n: "02", t: "Short & Memorable", d: "Just 5 letters. Brandable, typeable, unforgettable in any market." },
    { n: "03", t: "High Resale Value", d: "Independently appraised at $5,800. You own the asset, not just a lease." },
    { n: "04", t: "Instant Authority", d: "Skip years of trust-building. Launch on a domain that already commands respect." },
  ];
  return (
    <section id="why" className="border-t border-border py-24 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">/ 01 — Why kaero.ae</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              A domain is the only piece of real estate that <span className="text-gold">appreciates while you sleep.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {items.map((i) => (
            <div key={i.n} className="bg-background p-10 group hover:bg-navy-mid transition">
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-xs text-muted-foreground">{i.n}</span>
                <div className="w-10 h-10 border border-border group-hover:border-gold transition rounded-sm grid place-items-center">
                  <Sparkles className="w-4 h-4 text-gold" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{i.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── INCLUDED ─────────────────────────── */
function IncludedSection({ onBuy }: { onBuy: () => void }) {
  const rows = [
    { k: "SSL Certificate", v: "Included free with purchase" },
    { k: "Ownership Transfer", v: "Direct to your email within 12 hours" },
    { k: "Auth / EPP Code", v: "Provided immediately after payment" },
    { k: "Post-sale Support", v: "Dedicated transfer specialist from DomainCart LLC" },
  ];
  return (
    <section className="border-t border-border py-24 bg-navy-deep">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">/ 02 — Included</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything you need to launch.</h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            One transparent price. No hidden registrar fees. No upsells. You receive
            full registrant rights the moment payment clears.
          </p>
          <button
            onClick={onBuy}
            className="bg-gold text-primary-foreground font-medium px-6 py-3 rounded-sm flex items-center gap-3"
          >
            Start the transfer <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="lg:col-span-7">
          <div className="border-t border-border">
            {rows.map((r, idx) => (
              <div
                key={r.k}
                className="grid grid-cols-12 items-center py-6 border-b border-border group hover:px-3 transition-all"
              >
                <span className="col-span-1 font-mono text-xs text-muted-foreground">
                  0{idx + 1}
                </span>
                <span className="col-span-4 font-display text-lg">{r.k}</span>
                <span className="col-span-6 text-muted-foreground">{r.v}</span>
                <Check className="col-span-1 w-5 h-5 text-gold justify-self-end" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SERVICES ─────────────────────────── */
function ServicesSection() {
  const services = [
    { t: "Domain Registration", d: "New TLDs, ccTLDs, and premium handles." },
    { t: "Domain Appraisal", d: "Independent valuation from $49." },
    { t: "Domain Brokerage", d: "We negotiate, you collect." },
    { t: "Website Hosting", d: "Edge-deployed, 99.99% uptime." },
    { t: "Business Email Setup", d: "Branded mailboxes in minutes." },
    { t: "Portfolio Management", d: "Renewals, transfers, parking — handled." },
  ];
  return (
    <section id="services" className="border-t border-border py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">/ 03 — Services</p>
            <h2 className="text-4xl md:text-5xl font-bold max-w-xl">More from DomainCart LLC.</h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            06 / SERVICES
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, idx) => (
            <div key={s.t} className="bg-background p-8 hover:bg-navy-mid transition group">
              <div className="flex items-center justify-between mb-12">
                <span className="font-mono text-xs text-muted-foreground">
                  0{idx + 1}
                </span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold group-hover:-rotate-45 transition" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TESTIMONIALS ───────────────────────── */
function Testimonials() {

}

/* ─────────────────────── OTHER DOMAINS ─────────────────────── */
const OTHER_DOMAINS: { name: string; price: number; tag?: string }[] = [
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
  { name: "halia.ae", price: 2725 },
];

function OtherDomains({ onBuy }: { onBuy: () => void }) {
  return (
    <section id="other-domains" className="border-t border-border py-24 bg-navy-mid">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
              / 04 — Other .AE Domains
            </p>
            <h2 className="text-4xl md:text-5xl font-bold max-w-xl">
              Browse the rest of our UAE inventory.
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            20 / LISTED
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {OTHER_DOMAINS.map((d, i) => (
            <button
              key={d.name}
              onClick={onBuy}
              className="bg-background p-6 text-left hover:bg-navy-deep transition group flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {d.tag && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gold border border-gold px-2 py-0.5">
                    {d.tag}
                  </span>
                )}
              </div>
              <div className="font-display text-2xl font-bold tracking-tight">
                {d.name.split(".")[0]}
                <span className="text-gold">.ae</span>
              </div>
              <div className="flex items-end justify-between mt-auto pt-2 border-t border-border">
                <span className="font-mono text-lg text-foreground">
                  ${d.price.toLocaleString()}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* duplicate Testimonials stub continues below — restore real impl */
function _TestimonialsImpl() {
  const items = [
    {
      q: "Closed the deal in under a day. Transfer was clean, paperwork was clear, my new .AE was live before the weekend.",
      n: "Khalid Al-Mansoori",
      r: "Founder, Mansoori Capital · Dubai",
    },
    {
      q: "I was nervous about wiring this kind of money for a domain. DomainCart's escrow flow made it feel like buying a house — professional all the way.",
      n: "Aisha Rahman",
      r: "CMO, Noor Retail Group · Abu Dhabi",
    },
    {
      q: "We rebranded onto a premium .AE from DomainCart and our organic CTR in the UAE jumped 31% in the first month. Worth every dirham.",
      n: "Omar Haddad",
      r: "Growth Lead, Levant Ventures · Sharjah",
    },
  ];
  return (
    <section className="border-t border-border py-24 bg-navy-deep">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">/ 04 — Word of mouth</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-2xl">
          Quiet endorsements from loud operators.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t) => (
            <figure key={t.n} className="border-l-2 border-gold pl-6">
              <blockquote className="text-lg leading-relaxed mb-6 text-foreground">
                &ldquo;{t.q}&rdquo;
              </blockquote>
              <figcaption>
                <div className="font-display font-semibold">{t.n}</div>
                <div className="text-sm text-muted-foreground">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── FAQ ───────────────────────────── */
function FAQ() {
  const faqs = [
    { q: "How does the transfer work?", a: "After payment clears, our team initiates the registrar-to-registrar transfer. You receive the Auth/EPP code by email, accept the transfer in your preferred registrar, and ownership is complete — usually within 12 hours." },
    { q: "Is SSL really included?", a: "Yes. A standard SSL certificate is bundled free for the first year. We provision it on your behalf or hand it to your hosting provider." },
    { q: "What if I need help after purchase?", a: "Every buyer is assigned a transfer specialist for 14 days post-sale. We handle DNS configuration, email routing, and any registrar quirks." },
    { q: "Can I use this domain internationally?", a: "Absolutely. While .AE is the UAE's TLD, the domain resolves globally and is excellent for businesses targeting MENA from anywhere in the world." },
    { q: "How do I know the domain is worth $5,800?", a: "Valuation is based on length, TLD demand, comparable .AE sales, brandability, and SEO history. We can provide a third-party appraisal upon request." },
    { q: "Is payment secure?", a: "All transactions are processed over PCI-DSS compliant rails. We never see or store your card details, and your purchase is protected by our 14-day satisfaction guarantee." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">/ 05 — Questions</p>
          <h2 className="text-4xl md:text-5xl font-bold">Answers, in plain English.</h2>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-display text-lg md:text-xl group-hover:text-gold transition">
                  {f.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="pb-6 text-muted-foreground max-w-2xl leading-relaxed">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── FOOTER ───────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-gradient-gold grid place-items-center text-primary-foreground font-display font-bold">
                D
              </div>
              <span className="font-display font-semibold">
                Domain<span className="text-gold">Cart</span> LLC
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              A premium domain brokerage curating high-value digital real estate
              for ambitious operators.
            </p>
            <p className="font-mono text-sm text-gold mt-6">(480) 624-2500</p>
          </div>
          <div className="md:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Navigate
            </div>
            <ul className="space-y-2 text-sm">
              {["Home", "Services", "Contact"].map((l) => (
                <li key={l}><a href="#" className="hover:text-gold transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Legal
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
          <span>© 2024 DomainCart LLC. All rights reserved.</span>
          <span>kaero.ae · listed at ${PRICE.toLocaleString()}</span>
        </div>
      </div>
    </footer>
  );
}

/* ────────────────────── PURCHASE FLOW MODAL ────────────────────── */
const COUNTRIES = [
  "United Arab Emirates", "Saudi Arabia", "Qatar", "Bahrain", "Kuwait", "Oman",
  "United States", "United Kingdom", "Germany", "France", "India", "Singapore",
  "Canada", "Australia", "Other",
];
const DNS_PROVIDERS = ["Cloudflare", "GoDaddy", "Namecheap", "Google Domains", "Other"];
const TTL_VALUES = ["300", "600", "1800", "3600", "7200"];

function PurchaseFlow({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [showErrors, setShowErrors] = useState(false);
  const [processing, setProcessing] = useState(false);

  const [s1, setS1] = useState({
    fullName: "", email: "", phone: "", company: "", country: "",
  });
  const [s2, setS2] = useState({
    registrar: "", dns: "", ns1: "", ns2: "", ttl: "",
    privacy: true, eppCode: "", destEmail: "",
  });
  const [s3, setS3] = useState({
    cardNumber: "", expiry: "", cvv: "", cardName: "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const s1Valid = useMemo(() =>
    s1.fullName.trim() && /\S+@\S+\.\S+/.test(s1.email) && s1.phone.trim() && s1.country.trim(),
  [s1]);

  const s2Valid = useMemo(() =>
    s2.registrar.trim() && s2.dns && s2.ns1.trim() && s2.ns2.trim() && s2.ttl &&
    s2.destEmail.trim().toLowerCase() === s1.email.trim().toLowerCase(),
  [s2, s1.email]);

  const s3Valid = useMemo(() =>
    s3.cardNumber.replace(/\s/g, "").length >= 13 &&
    /^\d{2}\/\d{2}$/.test(s3.expiry) &&
    s3.cvv.length >= 3 &&
    s3.cardName.trim(),
  [s3]);

  const next = () => {
    if (step === 1) { if (!s1Valid) { setShowErrors(true); return; } setShowErrors(false); setStep(2); }
    else if (step === 2) { if (!s2Valid) { setShowErrors(true); return; } setShowErrors(false); setStep(3); }
  };

  const submitPayment = () => {
    if (!s3Valid) { setShowErrors(true); return; }
    setProcessing(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-navy-deep/80 backdrop-blur-sm grid place-items-center p-4 overflow-y-auto">
      <div className="bg-background border border-border max-w-2xl w-full my-8 relative">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-border">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gold">
              Acquisition · {DOMAIN}
            </p>
            <p className="font-display font-semibold mt-1">Step {step} of 3</p>
          </div>
          {!processing && (
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Progress */}
        <div className="flex h-1 bg-muted">
          {[1, 2, 3].map((n) => (
            <div key={n} className={`flex-1 ${n <= step ? "bg-gold" : ""} transition-all`} />
          ))}
        </div>

        <div className="p-8">
          {processing ? <ProcessingView /> : (
            <>
              {step === 1 && <Step1 data={s1} setData={setS1} showErrors={showErrors} />}
              {step === 2 && <Step2 data={s2} setData={setS2} showErrors={showErrors} step1Email={s1.email} />}
              {step === 3 && <Step3 data={s3} setData={setS3} showErrors={showErrors} />}

              <div className="mt-8 flex items-center justify-between gap-4">
                {step > 1 ? (
                  <button
                    onClick={() => { setStep(step - 1); setShowErrors(false); }}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    ← Back
                  </button>
                ) : <span />}

                {step < 3 ? (
                  <button
                    onClick={next}
                    disabled={step === 1 ? !s1Valid : !s2Valid}
                    className="bg-gold text-primary-foreground font-medium px-6 py-3 rounded-sm flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  >
                    {step === 1 ? "Continue to Domain Settings" : "Proceed to Payment"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={submitPayment}
                    disabled={!s3Valid}
                    className="bg-gold text-primary-foreground font-medium px-6 py-3 rounded-sm flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Lock className="w-4 h-4" /> Complete Purchase · ${PRICE.toLocaleString()}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ProcessingView() {
  return (
    <div className="py-16 flex flex-col items-center text-center">
      <Loader2 className="w-12 h-12 text-gold animate-spin-slow" />
      <p className="mt-6 font-display text-xl">Processing your secure payment...</p>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm">
        Please don&apos;t close this window. We&apos;re verifying your details with our payment provider.
      </p>
      <div className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
        <ShieldCheck className="w-3 h-3 text-gold" /> 256-bit SSL · PCI-DSS Compliant
      </div>
    </div>
  );
}

function Field({
  label, value, onChange, type = "text", placeholder, required, error, hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  hint?: string;
}) {
  const invalid = !!error;
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}{required && <span className="text-gold"> *</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`mt-2 w-full bg-input border ${invalid ? "border-destructive" : "border-border focus:border-gold"} rounded-sm px-3 py-2.5 text-sm outline-none transition`}
      />
      {hint && !invalid && <span className="block text-[11px] text-muted-foreground mt-1">{hint}</span>}
      {invalid && <span className="block text-[11px] text-destructive mt-1">{error}</span>}
    </label>
  );
}

function Select({
  label, value, onChange, options, required, error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
  error?: string;
}) {
  const invalid = !!error;
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}{required && <span className="text-gold"> *</span>}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 w-full bg-input border ${invalid ? "border-destructive" : "border-border focus:border-gold"} rounded-sm px-3 py-2.5 text-sm outline-none transition`}
      >
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {invalid && <span className="block text-[11px] text-destructive mt-1">{error}</span>}
    </label>
  );
}

function Step1({ data, setData, showErrors }: {
  data: any; setData: (d: any) => void; showErrors: boolean;
}) {
  const err = (cond: boolean, msg: string) => showErrors && cond ? msg : "";
  return (
    <div>
      <h3 className="font-display text-2xl font-bold mb-2">Your Details</h3>
      <p className="text-sm text-muted-foreground mb-6">We need this to register the domain in your name.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" required value={data.fullName} onChange={(v) => setData({ ...data, fullName: v })} error={err(!data.fullName.trim(), "Required")} />
        <Field label="Email Address" type="email" required value={data.email} onChange={(v) => setData({ ...data, email: v })} error={err(!/\S+@\S+\.\S+/.test(data.email), "Valid email required")} />
        <Field label="Phone Number" required value={data.phone} onChange={(v) => setData({ ...data, phone: v })} error={err(!data.phone.trim(), "Required")} />
        <Field label="Company Name (optional)" value={data.company} onChange={(v) => setData({ ...data, company: v })} />
        <div className="sm:col-span-2">
          <Select label="Country" required value={data.country} onChange={(v) => setData({ ...data, country: v })} options={COUNTRIES} error={err(!data.country, "Required")} />
        </div>
      </div>
    </div>
  );
}

function Step2({ data, setData, showErrors, step1Email }: {
  data: any; setData: (d: any) => void; showErrors: boolean; step1Email: string;
}) {
  const err = (cond: boolean, msg: string) => showErrors && cond ? msg : "";
  const emailMismatch = data.destEmail.trim() && data.destEmail.trim().toLowerCase() !== step1Email.trim().toLowerCase();
  return (
    <div>
      <h3 className="font-display text-2xl font-bold mb-2">Configure Your Domain Transfer</h3>
      <p className="text-sm text-muted-foreground mb-6">Tell us where {DOMAIN} should land.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Current Registrar Name" required value={data.registrar} onChange={(v) => setData({ ...data, registrar: v })} placeholder="e.g. GoDaddy" error={err(!data.registrar.trim(), "Required")} />
        <Select label="Desired DNS Provider" required value={data.dns} onChange={(v) => setData({ ...data, dns: v })} options={DNS_PROVIDERS} error={err(!data.dns, "Required")} />
        <Field label="Primary Nameserver (NS1)" required value={data.ns1} onChange={(v) => setData({ ...data, ns1: v })} placeholder="ns1.example.com" error={err(!data.ns1.trim(), "Required")} />
        <Field label="Secondary Nameserver (NS2)" required value={data.ns2} onChange={(v) => setData({ ...data, ns2: v })} placeholder="ns2.example.com" error={err(!data.ns2.trim(), "Required")} />
        <Select label="TTL Value" required value={data.ttl} onChange={(v) => setData({ ...data, ttl: v })} options={TTL_VALUES} error={err(!data.ttl, "Required")} />
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">WHOIS Privacy</span>
          <button
            type="button"
            onClick={() => setData({ ...data, privacy: !data.privacy })}
            className={`mt-2 w-full flex items-center justify-between bg-input border border-border rounded-sm px-3 py-2.5 text-sm`}
          >
            <span>{data.privacy ? "Enabled — hide WHOIS details" : "Disabled — public WHOIS"}</span>
            <span className={`relative w-10 h-5 rounded-full transition ${data.privacy ? "bg-gold" : "bg-border"}`}>
              <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-background transition ${data.privacy ? "left-5" : "left-0.5"}`} />
            </span>
          </button>
        </div>
        <div className="sm:col-span-2">
          <Field label="Authorization / EPP Code" value={data.eppCode} onChange={(v) => setData({ ...data, eppCode: v })} hint="Leave blank if unknown — we'll handle it." />
        </div>
        <div className="sm:col-span-2">
          <Field
            label="Transfer Destination Email"
            required
            type="email"
            value={data.destEmail}
            onChange={(v) => setData({ ...data, destEmail: v })}
            placeholder={step1Email || "Must match your account email"}
            error={
              err(!data.destEmail.trim(), "Required") ||
              (emailMismatch ? "Must match the email from Step 1" : "")
            }
          />
        </div>
      </div>
      <div className="mt-6 flex items-start gap-3 bg-navy-mid border border-border rounded-sm p-4">
        <Shield className="w-4 h-4 text-gold mt-0.5 shrink-0" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          These settings ensure a smooth transfer. Our team will verify everything within 12 hours and reach out before any changes go live.
        </p>
      </div>
    </div>
  );
}

function Step3({ data, setData, showErrors }: {
  data: any; setData: (d: any) => void; showErrors: boolean;
}) {
  const err = (cond: boolean, msg: string) => showErrors && cond ? msg : "";
  const formatCard = (v: string) =>
    v.replace(/\D/g, "").slice(0, 19).replace(/(.{4})/g, "$1 ").trim();
  const formatExpiry = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  };
  return (
    <div>
      <h3 className="font-display text-2xl font-bold mb-2">Secure Payment</h3>
      <p className="text-sm text-muted-foreground mb-6">Final step. Your card is charged once.</p>

      {/* Order summary */}
      <div className="bg-navy-mid border border-border rounded-sm p-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-display font-semibold text-lg">{DOMAIN}</span>
          <span className="font-mono text-lg text-gold">${PRICE.toLocaleString()}</span>
        </div>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {["SSL Certificate", "12-hour ownership transfer", "Full registrant rights", "Post-sale support"].map((i) => (
            <li key={i} className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" /> {i}</li>
          ))}
        </ul>
        <div className="border-t border-border mt-4 pt-3 flex justify-between font-display">
          <span>Total</span><span className="text-gold">${PRICE.toLocaleString()} USD</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <Field
            label="Card Number"
            required
            value={data.cardNumber}
            onChange={(v) => setData({ ...data, cardNumber: formatCard(v) })}
            placeholder="4242 4242 4242 4242"
            error={err(data.cardNumber.replace(/\s/g, "").length < 13, "Enter a valid card number")}
          />
        </div>
        <Field
          label="Expiry (MM/YY)"
          required
          value={data.expiry}
          onChange={(v) => setData({ ...data, expiry: formatExpiry(v) })}
          placeholder="12/28"
          error={err(!/^\d{2}\/\d{2}$/.test(data.expiry), "MM/YY")}
        />
        <Field
          label="CVV"
          required
          value={data.cvv}
          onChange={(v) => setData({ ...data, cvv: v.replace(/\D/g, "").slice(0, 4) })}
          placeholder="123"
          error={err(data.cvv.length < 3, "3–4 digits")}
        />
        <div className="sm:col-span-2">
          <Field label="Cardholder Name" required value={data.cardName} onChange={(v) => setData({ ...data, cardName: v })} placeholder="As shown on card" error={err(!data.cardName.trim(), "Required")} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
        <Lock className="w-3 h-3 text-gold" /> Encrypted end-to-end · We never store your card
      </div>
    </div>
  );
}