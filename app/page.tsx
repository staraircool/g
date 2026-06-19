"use client"

import { motion } from "framer-motion"
import {
  ArrowRight, ArrowUpRight, Check, X, FileText, BadgeCheck,
  Mail, Smartphone, Globe, Link2, Search, Sparkles, Star, Plus,
} from "lucide-react"

/* ---------------- motion config (no inline double-brace objects) ------------- */
const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

const revealScale = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
}

const vp = { once: true, margin: "-80px" }

function Reveal({ children, i = 0, className = "" }: { children: React.ReactNode; i?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={vp}
    >
      {children}
    </motion.div>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-feijoa-400">
      <span className="h-px w-6 bg-feijoa-400/60" />
      {children}
    </span>
  )
}

const NAV = ["How it works", "Features", "Pricing", "Examples"]
const NAV_IDS = ["#howitworks", "#features", "#pricing", "#examples"]
const LOGOS = ["NOVA TRADE", "EXPORT PRO", "GLOBAL MFG", "PRIME SUPPLY", "FACTORY CO", "ATLAS GOODS", "VERTEX MILLS"]

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#07140a] text-feijoa-50">
      {/* ambient glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-feijoa-600/20 blur-[140px] animate-glow" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full bg-feijoa-500/10 blur-[130px]" />
      </div>

      {/* NAV */}
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full glass px-5 py-3">
          <a href="#" className="font-display flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-feijoa-500 text-black">G</span>
            Go<span className="text-feijoa-400">Featured</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-feijoa-100/70 md:flex">
            {NAV.map((n, i) => (
              <a key={n} href={NAV_IDS[i]} className="transition hover:text-feijoa-50">{n}</a>
            ))}
          </div>
          <a href="#pricing" className="group flex items-center gap-1.5 rounded-full bg-feijoa-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-feijoa-400">
            Get Featured <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative px-4 pt-40 pb-24 md:pt-48">
        <div className="absolute inset-0 -z-10 grid-bg radial-fade" />
        <div className="mx-auto max-w-5xl text-center">
          <motion.div initial="hidden" animate="show" variants={reveal} custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-feijoa-100/80">
              <Sparkles className="h-3.5 w-3.5 text-feijoa-400" /> B2B supplier showcase · Based in the UK 🇬🇧
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={reveal}
            custom={1}
            className="font-display mx-auto mt-7 max-w-4xl text-5xl font-bold leading-[1.02] md:text-7xl"
          >
            Make your factory look <span className="text-gradient">world-class</span>.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={reveal}
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-lg text-feijoa-100/65"
          >
            GoFeatured turns suppliers into beautiful, trusted pages that win buyers in seconds.
            One link. More trust. More orders. No website needed.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            custom={3}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="#pricing" className="group flex items-center gap-2 rounded-full bg-feijoa-500 px-7 py-3.5 font-semibold text-black shadow-[0_0_40px_-8px_rgba(70,177,54,0.7)] transition hover:bg-feijoa-400">
              Get Featured Now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#examples" className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-feijoa-50 transition hover:bg-white/5">
              See Live Examples <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
          <motion.p initial="hidden" animate="show" variants={reveal} custom={4} className="mt-5 text-sm text-feijoa-100/45">
            Live in 48 hours · No tech skills · Built for Google
          </motion.p>
        </div>

        {/* hero mockup */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={revealScale}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-feijoa-500/20 blur-3xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-feijoa-400/80" />
              <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-feijoa-100/50">gofeatured.com/shoes-manufacturer/abc-company</span>
            </div>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80" alt="GoFeatured supplier page preview" className="h-[360px] w-full object-cover md:h-[460px]" />
          </div>
        </motion.div>

        {/* stats */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 glass md:grid-cols-4">
          {[["48h", "Average go-live"], ["3 steps", "To get featured"], ["100%", "Mobile ready"], ["1 link", "Explains it all"]].map(([n, l]) => (
            <div key={l} className="border-white/10 px-6 py-6 text-center [&:not(:last-child)]:border-r">
              <div className="font-display text-3xl font-bold text-feijoa-300">{n}</div>
              <div className="mt-1 text-sm text-feijoa-100/55">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/10 py-8">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-feijoa-100/40">Trusted by factories &amp; suppliers worldwide</p>
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <span key={i} className="font-display whitespace-nowrap text-xl font-semibold text-feijoa-100/35">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="font-display mt-5 text-4xl font-bold md:text-5xl">
            Buyers can&apos;t find you. And when they do, they don&apos;t trust you.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { icon: Search, t: "Invisible on Google", d: "Buyers search for suppliers every day — but your factory never shows up." },
            { icon: X, t: "Old, cheap website", d: "A dated site kills trust in seconds. Serious buyers quietly leave." },
            { icon: FileText, t: "Messy PDFs & chats", d: "Long messages and heavy files confuse buyers. Deals go cold." },
          ].map((c, i) => (
            <Reveal key={c.t} i={i}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-feijoa-500/40 hover:bg-white/[0.05]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-feijoa-500/10 text-feijoa-400">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold">{c.t}</h3>
                <p className="mt-2 text-feijoa-100/60">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURES (bento) */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="font-display mt-5 text-4xl font-bold md:text-5xl">One page that does all the selling.</h2>
          <p className="mt-4 text-feijoa-100/60">Your GoFeatured page works like a mini website. Share one link — buyers instantly understand who you are and why to trust you.</p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2" i={0}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-feijoa-500/15 to-transparent p-8">
              <Globe className="h-9 w-9 text-feijoa-400" />
              <h3 className="font-display mt-5 text-2xl font-semibold">Built for Google from day one</h3>
              <p className="mt-2 max-w-md text-feijoa-100/60">SEO-optimized category and supplier pages so buyers searching for manufacturers can actually find you.</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-black/30 px-3 py-2 text-sm text-feijoa-100/70">
                <Search className="h-4 w-4 text-feijoa-400" /> gofeatured.com/sportswear-manufacturer/xyz
              </div>
            </div>
          </Reveal>
          <Reveal i={1}><FeatureTile icon={BadgeCheck} t="Verified badges" d="Trust signals that make buyers say yes." /></Reveal>
          <Reveal i={2}><FeatureTile icon={Star} t="Product gallery" d="Showcase products with clean pricing." /></Reveal>
          <Reveal i={3}><FeatureTile icon={FileText} t="PDF catalogs" d="Buyers download your catalog instantly." /></Reveal>
          <Reveal i={4}><FeatureTile icon={Smartphone} t="Perfect on mobile" d="Looks premium on every screen." /></Reveal>
          <Reveal className="md:col-span-2" i={5}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:flex-row sm:items-center">
              <div>
                <Link2 className="h-9 w-9 text-feijoa-400" />
                <h3 className="font-display mt-5 text-2xl font-semibold">One link to share anywhere</h3>
                <p className="mt-2 max-w-sm text-feijoa-100/60">WhatsApp, email, Alibaba, business cards. One link explains everything.</p>
              </div>
              <Mail className="mt-6 hidden h-16 w-16 text-feijoa-500/30 sm:mt-0 sm:block" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="howitworks" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="font-display mt-5 text-4xl font-bold md:text-5xl">Get featured in 3 steps.</h2>
        </Reveal>
        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-feijoa-500/40 to-transparent md:block" />
          {[
            { n: "01", t: "Send your info", d: "Fill one simple form. Logo, products, prices, photos." },
            { n: "02", t: "We build your page", d: "Our team designs your beautiful page in 48 hours." },
            { n: "03", t: "Get found & get orders", d: "Share your link. Show up on Google. Win buyers." },
          ].map((s, i) => (
            <Reveal key={s.n} i={i}>
              <div className="relative rounded-2xl border border-white/10 bg-[#07140a] p-7">
                <div className="font-display grid h-14 w-14 place-items-center rounded-full border border-feijoa-500/40 bg-feijoa-500/10 text-lg font-bold text-feijoa-300">{s.n}</div>
                <h3 className="font-display mt-5 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-feijoa-100/60">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY / WHY NOT */}
      <section className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why GoFeatured</Eyebrow>
          <h2 className="font-display mt-5 text-4xl font-bold md:text-5xl">The difference is night and day.</h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal i={0}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="font-display text-xl font-semibold text-feijoa-100/70">Without GoFeatured</h3>
              <ul className="mt-6 space-y-4">
                {["Cheap-looking website nobody trusts", "Invisible on Google", "Buyers ignore your messages", "Expensive web developers", "Weeks of waiting", "You explain everything by hand"].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-feijoa-100/55"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-red-500/15 text-red-400"><X className="h-3.5 w-3.5" /></span>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal i={1}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-feijoa-500/30 bg-gradient-to-br from-feijoa-500/15 to-transparent p-8">
              <h3 className="font-display text-xl font-semibold text-feijoa-300">With GoFeatured</h3>
              <ul className="mt-6 space-y-4">
                {["A premium page that wins trust in seconds", "Built to rank on Google", "Buyers send you inquiries", "No developer needed", "Live in 48 hours", "One link explains everything"].map((t) => (
                  <li key={t} className="flex items-start gap-3"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-feijoa-500 text-black"><Check className="h-3.5 w-3.5" /></span>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXAMPLES */}
      <section id="examples" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        <Reveal className="max-w-xl">
          <Eyebrow>Live examples</Eyebrow>
          <h2 className="font-display mt-5 text-4xl font-bold md:text-5xl">See real featured pages.</h2>
          <p className="mt-4 text-feijoa-100/60">This is how your factory will look. Clean, premium, ready to win buyers.</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", t: "ABC Shoes Co.", c: "Footwear Manufacturer" },
            { img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80", t: "XYZ Sportswear", c: "Sportswear Manufacturer" },
            { img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80", t: "Prime Textiles", c: "Textile Supplier" },
          ].map((s, i) => (
            <Reveal key={s.t} i={i}>
              <a href="#" className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
                <div className="relative overflow-hidden">
                  <img src={s.img} alt={s.t} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-feijoa-300 backdrop-blur"><BadgeCheck className="h-3.5 w-3.5" /> Verified</span>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-display font-semibold">{s.t}</h3>
                    <p className="text-sm text-feijoa-100/55">{s.c}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-feijoa-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="font-display mt-5 text-4xl font-bold md:text-5xl">Simple pricing. Big results.</h2>
          <p className="mt-4 text-feijoa-100/60">No setup fees. Cancel anytime. Get featured today.</p>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} i={i}>
              <div className={p.popular ? POPULAR_CARD : PLAIN_CARD}>
                {p.popular ? <span className="absolute -top-3 left-8 rounded-full bg-feijoa-500 px-3 py-1 text-xs font-bold text-black">MOST POPULAR</span> : null}
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-display text-5xl font-bold">{p.price}</span>
                  <span className="mb-1.5 text-feijoa-100/50">/mo</span>
                </div>
                <ul className="mt-7 space-y-3 text-sm">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-feijoa-100/75"><Check className="mt-0.5 h-4 w-4 shrink-0 text-feijoa-400" />{f}</li>
                  ))}
                </ul>
                <a href="#" className={p.popular ? POPULAR_BTN : PLAIN_BTN}>Get Featured</a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-24 md:py-32">
        <Reveal className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-display mt-5 text-4xl font-bold md:text-5xl">Questions? Answered.</h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} i={i}>
              <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  {f.q}
                  <Plus className="h-5 w-5 text-feijoa-400 transition group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-feijoa-100/60">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12">
        <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-feijoa-500/30 bg-gradient-to-br from-feijoa-600/30 via-feijoa-500/10 to-transparent px-6 py-20 text-center">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-feijoa-500/30 blur-3xl" />
          <h2 className="font-display mx-auto max-w-2xl text-4xl font-bold md:text-6xl">Ready to get featured?</h2>
          <p className="mx-auto mt-5 max-w-xl text-feijoa-100/65">Join the suppliers who look bigger, win trust faster, and get more orders.</p>
          <a href="#pricing" className="mt-9 inline-flex items-center gap-2 rounded-full bg-feijoa-500 px-8 py-4 font-semibold text-black shadow-[0_0_50px_-10px_rgba(70,177,54,0.8)] transition hover:bg-feijoa-400">
            Get Featured Now <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-4 pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 pb-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <span className="font-display flex items-center gap-2 text-xl font-bold">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-feijoa-500 text-black">G</span>
                Go<span className="text-feijoa-400">Featured</span>
              </span>
              <p className="mt-4 max-w-xs text-sm text-feijoa-100/55">Get featured. Get found. Get more orders. A B2B supplier showcase platform based in the UK.</p>
            </div>
            <FooterCol title="Platform" links={["How it works", "Features", "Pricing", "Examples"]} />
            <FooterCol title="Company" links={["About", "Contact", "Blog"]} />
            <FooterCol title="Legal" links={["Privacy", "Terms"]} />
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-sm text-feijoa-100/40">© 2026 GoFeatured. Based in the United Kingdom. All rights reserved.</div>
        <div aria-hidden className="select-none overflow-hidden">
          <div className="font-display bg-gradient-to-b from-feijoa-500/20 to-transparent bg-clip-text text-center text-[22vw] font-bold leading-none text-transparent">GoFeatured</div>
        </div>
      </footer>
    </main>
  )
}

function FeatureTile({ icon: Icon, t, d }: { icon: any; t: string; d: string }) {
  return (
    <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-feijoa-500/40 hover:bg-white/[0.05]">
      <Icon className="h-8 w-8 text-feijoa-400" />
      <h3 className="font-display mt-5 text-lg font-semibold">{t}</h3>
      <p className="mt-2 text-sm text-feijoa-100/60">{d}</p>
    </div>
  )
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-feijoa-100/55">
        {links.map((l) => (<li key={l}><a href="#" className="transition hover:text-feijoa-300">{l}</a></li>))}
      </ul>
    </div>
  )
}

const PLAIN_CARD = "relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8"
const POPULAR_CARD = "relative flex h-full flex-col rounded-3xl border border-feijoa-500/50 bg-gradient-to-b from-feijoa-500/15 to-transparent p-8 shadow-[0_0_60px_-20px_rgba(70,177,54,0.6)]"
const PLAIN_BTN = "mt-8 block rounded-full border border-white/15 px-5 py-3 text-center font-semibold text-feijoa-50 transition hover:bg-white/5"
const POPULAR_BTN = "mt-8 block rounded-full bg-feijoa-500 px-5 py-3 text-center font-semibold text-black transition hover:bg-feijoa-400"

const plans = [
  { name: "Featured", price: "£19", popular: false, feats: ["Your own showcase page", "Product gallery", "PDF catalog", "Inquiry form", "SEO page", "Mobile ready"] },
  { name: "Premium", price: "£39", popular: true, feats: ["Everything in Featured", "Verified badge", "Featured on homepage", "Priority in search", "Highlight border"] },
  { name: "Pro Export", price: "£79", popular: false, feats: ["Everything in Premium", "Top homepage spot", "Multiple catalogs", "Lead analytics", "Personal support"] },
]

const faqs = [
  { q: "Do I need a website?", a: "No. Your GoFeatured page IS your website." },
  { q: "How fast is it live?", a: "Within 48 hours after you send your info." },
  { q: "Will buyers find me on Google?", a: "Your page is built for SEO. Over time, it helps you get found." },
  { q: "Can I edit my page later?", a: "Yes. Send us changes anytime." },
  { q: "Where are you based?", a: "We are based in the United Kingdom 🇬🇧." },
]
