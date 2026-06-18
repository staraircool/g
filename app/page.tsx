"use client"

import { motion } from "framer-motion"
import {
  Factory, Search, FileText, BadgeCheck, Mail, Smartphone,
  Globe, Link2, Check, X, ArrowRight, Star, Menu,
} from "lucide-react"

// ---------- animation helpers ----------
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
// reuse this so JSX has no double-brace object literals
const viewportOnce = { once: true }

// ---------- small reusable section wrapper ----------
function Section({ id, children, className = "" }: any) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  )
}

export default function Home() {
  return (
    <main className="bg-white text-feijoa-950 antialiased">
      {/* ===== NAVBAR ===== */}
      <header className="sticky top-0 z-50 border-b border-feijoa-100 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <span className="text-xl font-extrabold tracking-tight">
            Go<span className="text-feijoa-500">Featured</span>
          </span>
          <div className="hidden items-center gap-8 text-sm font-medium text-feijoa-900 md:flex">
            <a href="#how" className="hover:text-feijoa-500">How it works</a>
            <a href="#features" className="hover:text-feijoa-500">Features</a>
            <a href="#pricing" className="hover:text-feijoa-500">Pricing</a>
            <a href="#examples" className="hover:text-feijoa-500">Examples</a>
          </div>
          <a href="#pricing" className="hidden rounded-full bg-feijoa-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-feijoa-500/30 transition hover:bg-feijoa-600 md:block">
            Get Featured Now
          </a>
          <Menu className="h-6 w-6 md:hidden" />
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <Section className="relative overflow-hidden text-center">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-feijoa-50 to-white" />
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-feijoa-200 bg-feijoa-50 px-4 py-1.5 text-sm font-medium text-feijoa-700">
            🇬🇧 Trusted B2B platform · Based in the UK
          </motion.span>
          <motion.h1 variants={fadeUp} className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Get Featured. <span className="text-feijoa-500">Get Found.</span> Get More Orders.
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg text-feijoa-900/70">
            We turn your factory into a beautiful, trusted online page. Buyers find you on Google,
            trust you in seconds, and send you orders. No website needed.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="flex items-center gap-2 rounded-full bg-feijoa-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-feijoa-500/30 transition hover:bg-feijoa-600">
              Get Featured Now <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#examples" className="rounded-full border border-feijoa-200 px-7 py-3.5 font-semibold text-feijoa-800 transition hover:bg-feijoa-50">
              See Live Examples
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-feijoa-700">
            <span>✅ Live in 48 hours</span>
            <span>✅ No tech skills needed</span>
            <span>✅ Built for Google</span>
          </motion.div>

          {/* hero image / mockup — replace src with your real page mockup */}
          <motion.div variants={fadeUp} className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-feijoa-100 shadow-2xl shadow-feijoa-900/10">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
              alt="GoFeatured supplier page preview"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </Section>

      {/* ===== TRUST BAR ===== */}
      <div className="border-y border-feijoa-100 bg-feijoa-50/50">
        <div className="mx-auto max-w-7xl px-5 py-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-feijoa-700">
            Trusted by factories and suppliers worldwide
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["FACTORY CO", "EXPORT PRO", "GLOBAL MFG", "PRIME SUPPLY", "NOVA TRADE"].map((n) => (
              <span key={n} className="text-lg font-bold tracking-tight text-feijoa-900">{n}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== PROBLEM ===== */}
      <Section>
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className="text-center">
          <motion.h2 variants={fadeUp} className="mx-auto max-w-3xl text-3xl font-extrabold md:text-4xl">
            Buyers can't find you. And when they do, they don't trust you.
          </motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { e: "😕", t: "Old, cheap website", d: "Your website looks old and cheap. Buyers leave in seconds." },
              { e: "🔍", t: "Invisible on Google", d: "Buyers search for suppliers — but your factory never shows up." },
              { e: "📄", t: "Messy messages", d: "You send long PDFs and messages. Buyers get confused and quit." },
            ].map((c, i) => (
              <motion.div key={c.t} custom={i} variants={fadeUp} className="rounded-2xl border border-feijoa-100 bg-white p-7 text-left shadow-sm">
                <div className="text-3xl">{c.e}</div>
                <h3 className="mt-4 text-lg font-bold">{c.t}</h3>
                <p className="mt-2 text-feijoa-900/70">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ===== FEATURES / WHAT YOU GET ===== */}
      <Section id="features" className="rounded-3xl bg-feijoa-50">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className="text-center">
          <motion.h2 variants={fadeUp} className="mx-auto max-w-3xl text-3xl font-extrabold md:text-4xl">
            One beautiful page that does all the selling for you.
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-feijoa-900/70">
            Your GoFeatured page works like a mini website. Share one link — buyers instantly
            understand who you are, what you make, and why to trust you.
          </motion.p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { I: Factory, t: "Company profile" },
              { I: Star, t: "Product gallery + prices" },
              { I: FileText, t: "Downloadable catalog" },
              { I: BadgeCheck, t: "Verified badges" },
              { I: Mail, t: "Direct inquiry form" },
              { I: Smartphone, t: "Perfect on mobile" },
              { I: Globe, t: "Built for Google" },
              { I: Link2, t: "One link to share" },
            ].map((f, i) => (
              <motion.div key={f.t} custom={i} variants={fadeUp} className="rounded-2xl bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <f.I className="h-8 w-8 text-feijoa-500" />
                <h3 className="mt-4 font-bold">{f.t}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ===== HOW IT WORKS ===== */}
      <Section id="how">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className="text-center">
          <motion.h2 variants={fadeUp} className="text-3xl font-extrabold md:text-4xl">Get featured in 3 easy steps</motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", t: "Send your info", d: "Fill one simple form. Logo, products, prices, photos." },
              { n: "2", t: "We build your page", d: "Our team designs your beautiful page in 48 hours." },
              { n: "3", t: "Get found & get orders", d: "Share your link. Show up on Google. Win buyers." },
            ].map((s, i) => (
              <motion.div key={s.n} custom={i} variants={fadeUp} className="relative rounded-2xl border border-feijoa-100 bg-white p-8 text-left shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-feijoa-500 text-xl font-bold text-white">{s.n}</div>
                <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-feijoa-900/70">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ===== WHY / WHY NOT ===== */}
      <Section className="rounded-3xl bg-feijoa-950 text-white">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container}>
          <motion.h2 variants={fadeUp} className="text-center text-3xl font-extrabold md:text-4xl">Why GoFeatured?</motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-bold text-feijoa-300">❌ The old way</h3>
              <ul className="mt-5 space-y-3">
                {["Cheap-looking website nobody trusts","Invisible on Google","Buyers ignore your messages","Expensive web developers","Weeks of waiting","You explain everything by hand"].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/70"><X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />{t}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl border border-feijoa-400/30 bg-feijoa-500/10 p-8">
              <h3 className="text-xl font-bold text-feijoa-300">✅ The GoFeatured way</h3>
              <ul className="mt-5 space-y-3">
                {["A premium page that wins trust in seconds","Built to rank on Google","Buyers send you inquiries","No developer needed","Live in 48 hours","One link explains everything"].map((t) => (
                  <li key={t} className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-feijoa-400" />{t}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* ===== EXAMPLES ===== */}
      <Section id="examples">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className="text-center">
          <motion.h2 variants={fadeUp} className="text-3xl font-extrabold md:text-4xl">See real featured pages</motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-feijoa-900/70">This is how your factory will look. Clean, premium, ready to win buyers.</motion.p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", t: "ABC Shoes Co.", c: "Footwear Manufacturer" },
              { img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80", t: "XYZ Sportswear", c: "Sportswear Manufacturer" },
              { img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80", t: "Prime Textiles", c: "Textile Supplier" },
            ].map((s, i) => (
              <motion.div key={s.t} custom={i} variants={fadeUp} className="overflow-hidden rounded-2xl border border-feijoa-100 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <img src={s.img} alt={s.t} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-feijoa-500" /><h3 className="font-bold">{s.t}</h3></div>
                  <p className="mt-1 text-sm text-feijoa-900/60">{s.c}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ===== PRICING ===== */}
      <Section id="pricing" className="rounded-3xl bg-feijoa-50">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className="text-center">
          <motion.h2 variants={fadeUp} className="text-3xl font-extrabold md:text-4xl">Simple pricing. Big results.</motion.h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { name: "Featured", price: "£19", popular: false, feats: ["Your own showcase page","Product gallery","PDF catalog","Inquiry form","SEO page","Mobile ready"] },
              { name: "Premium", price: "£39", popular: true, feats: ["Everything in Featured","Verified badge","Featured on homepage","Priority in search","Highlight border"] },
              { name: "Pro Export", price: "£79", popular: false, feats: ["Everything in Premium","Top homepage spot","Multiple catalogs","Lead analytics","Personal support"] },
            ].map((p, i) => (
              <motion.div key={p.name} custom={i} variants={fadeUp}
                className={`relative rounded-2xl border p-8 text-left shadow-sm ${p.popular ? "border-feijoa-500 bg-white ring-2 ring-feijoa-500" : "border-feijoa-100 bg-white"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-feijoa-500 px-4 py-1 text-xs font-bold text-white">MOST POPULAR</span>}
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="mt-3 text-4xl font-extrabold">{p.price}<span className="text-base font-medium text-feijoa-900/50">/mo</span></p>
                <ul className="mt-6 space-y-3">
                  {p.feats.map((f) => (<li key={f} className="flex items-start gap-2 text-feijoa-900/80"><Check className="mt-0.5 h-5 w-5 shrink-0 text-feijoa-500" />{f}</li>))}
                </ul>
                <a href="#" className={`mt-7 block rounded-full px-5 py-3 text-center font-semibold transition ${p.popular ? "bg-feijoa-500 text-white hover:bg-feijoa-600" : "border border-feijoa-200 text-feijoa-800 hover:bg-feijoa-50"}`}>Get Featured</a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ===== FAQ ===== */}
      <Section>
        <h2 className="text-center text-3xl font-extrabold md:text-4xl">Questions? Answered.</h2>
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {[
            { q: "Do I need a website?", a: "No. Your GoFeatured page IS your website." },
            { q: "How fast is it live?", a: "Within 48 hours after you send your info." },
            { q: "Will buyers find me on Google?", a: "Your page is built for SEO. Over time, it helps you get found." },
            { q: "Can I edit my page later?", a: "Yes. Send us changes anytime." },
            { q: "Where are you based?", a: "We are based in the United Kingdom 🇬🇧." },
          ].map((f) => (
            <details key={f.q} className="group rounded-2xl border border-feijoa-100 bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold">{f.q}</summary>
              <p className="mt-3 text-feijoa-900/70">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <Section>
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}
          className="rounded-3xl bg-gradient-to-br from-feijoa-500 to-feijoa-700 px-8 py-16 text-center text-white shadow-2xl shadow-feijoa-500/30">
          <h2 className="text-3xl font-extrabold md:text-4xl">Ready to get featured?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">Join the suppliers who look bigger, win trust faster, and get more orders.</p>
          <a href="#pricing" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-feijoa-700 transition hover:bg-feijoa-50">
            Get Featured Now <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </Section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-feijoa-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-4">
          <div>
            <span className="text-xl font-extrabold">Go<span className="text-feijoa-500">Featured</span></span>
            <p className="mt-3 text-sm text-feijoa-900/60">Get featured. Get found. Get more orders.</p>
          </div>
          <FooterCol title="Platform" links={["How it works","Features","Pricing","Examples"]} />
          <FooterCol title="Company" links={["About","Contact","Blog"]} />
          <FooterCol title="Legal" links={["Privacy","Terms"]} />
        </div>
        <div className="border-t border-feijoa-100 py-6 text-center text-sm text-feijoa-900/50">
          © 2026 GoFeatured. Based in the United Kingdom. All rights reserved.
        </div>
      </footer>
    </main>
  )
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-bold">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-feijoa-900/60">
        {links.map((l) => (<li key={l}><a href="#" className="hover:text-feijoa-500">{l}</a></li>))}
      </ul>
    </div>
  )
}
