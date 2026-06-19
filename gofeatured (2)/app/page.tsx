"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion"
import {
  Sparkles,
  ArrowRight,
  Globe,
  Search,
  ShieldCheck,
  FileText,
  Zap,
  Boxes,
  BadgeCheck,
  Check,
  X,
  Plus,
} from "lucide-react"

const ease = [0.22, 1, 0.36, 1]
const vp = { once: true, margin: "-80px" }
const spring = { stiffness: 200, damping: 18, mass: 0.5 }

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease },
  }),
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const wordUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease } },
}

function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 })
  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y])
  const style = { x: sx, y: sy }
  return <motion.div style={style} className="cursor-glow" aria-hidden />
}

function Magnetic({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, spring)
  const sy = useSpring(y, spring)
  function onMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.35)
    y.set((e.clientY - r.top - r.height / 2) * 0.35)
  }
  function onLeave() {
    x.set(0)
    y.set(0)
  }
  const style = { x: sx, y: sy }
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={style} className={className}>
      {children}
    </motion.div>
  )
}

function Tilt({ children, className }: { children: React.ReactNode; className?: string }) {
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, spring)
  const sry = useSpring(ry, spring)
  function onMove(e: React.MouseEvent) {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.set(px * 9)
    rx.set(-py * 9)
  }
  function onLeave() {
    rx.set(0)
    ry.set(0)
  }
  const style = { rotateX: srx, rotateY: sry, transformPerspective: 900 }
  return (
    <motion.div onMouseMove={onMove} onMouseLeave={onLeave} style={style} className={className}>
      {children}
    </motion.div>
  )
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={vp}
    >
      {children}
    </motion.div>
  )
}

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    })
    return () => controls.stop()
  }, [inView, to])
  const text = `${Math.round(val)}${suffix}`
  return <span ref={ref}>{text}</span>
}

const brands = [
  "Shoe Manufacturers",
  "Textile Mills",
  "Electronics OEM",
  "Packaging",
  "Auto Parts",
  "Furniture",
  "Cosmetics ODM",
  "Machinery",
  "Hardware",
  "Food & Beverage",
]

const stats = [
  { to: 48, suffix: "h", label: "From form to live page" },
  { to: 3, suffix: "x", label: "More trust at first glance" },
  { to: 100, suffix: "%", label: "Mobile-perfect, always" },
  { to: 1, suffix: " link", label: "Everything in one place" },
]

const features = [
  { icon: Globe, title: "Your own showcase page", desc: "A polished mini-site at gofeatured.com/your-category/your-brand — live in 48 hours.", span: "lg" },
  { icon: Search, title: "Built to be found", desc: "SEO-tuned pages so buyers discover you on Google, not just crowded marketplaces.", span: "sm" },
  { icon: ShieldCheck, title: "Verified & trusted", desc: "Certificates, audits and a verified badge that turn visitors into buyers.", span: "sm" },
  { icon: FileText, title: "Catalogs that convert", desc: "Drag in your PDFs and product photos — we turn them into a clean gallery.", span: "sm" },
  { icon: Zap, title: "Inquiries on autopilot", desc: "A smart form sends qualified leads straight to your inbox and WhatsApp.", span: "sm" },
  { icon: Boxes, title: "One link for everything", desc: "Profile, products, pricing, factory info and contact behind a single shareable link.", span: "lg" },
]

const steps = [
  { n: "01", title: "Fill one simple form", desc: "Tell us about your company, products and certifications. Basic English, 10 minutes." },
  { n: "02", title: "We build your page", desc: "Our system and design team craft a premium showcase page tuned for trust and search." },
  { n: "03", title: "Get found, get orders", desc: "Share your link, rank on Google, and let qualified buyers come to you." },
]

const withoutList = [
  "Buried under giant marketplaces",
  "A cheap site that kills trust",
  "Messy PDF catalogs over email",
  "Buyers can't find you on Google",
]
const withList = [
  "Your own premium showcase page",
  "A verified badge buyers believe",
  "One clean, shareable gallery",
  "SEO pages that rank and convert",
]

const examples = [
  { name: "Acme Footwear Co.", cat: "Shoe manufacturer · Guangzhou" },
  { name: "Nordic Textile Mill", cat: "Fabric supplier · Istanbul" },
  { name: "VoltEdge Electronics", cat: "OEM electronics · Shenzhen" },
]

const plans = [
  { name: "Featured", price: "£19", period: "/mo", tagline: "Get online and look legit.", popular: false, features: ["1 showcase page", "Up to 12 products", "Inquiry form", "Mobile-friendly"] },
  { name: "Premium", price: "£39", period: "/mo", tagline: "For serious sellers.", popular: true, features: ["Everything in Featured", "Unlimited products", "Verified badge", "SEO optimization", "PDF catalogs"] },
  { name: "Pro Export", price: "£79", period: "/mo", tagline: "Scale your exports.", popular: false, features: ["Everything in Premium", "Priority ranking", "Lead routing to WhatsApp", "Analytics dashboard", "Dedicated support"] },
]

const faqs = [
  { q: "Do I need to build anything myself?", a: "No. You fill one simple form and we build your entire showcase page for you within 48 hours." },
  { q: "Will buyers actually find me?", a: "Yes. Every page is SEO-optimized for your category so you show up on the Google searches buyers already make." },
  { q: "Can I use my own domain?", a: "On Premium and Pro Export you can connect a custom domain. Every plan includes your gofeatured.com link." },
  { q: "What if my English isn't perfect?", a: "That's the point. You write basic notes and our AI polishes everything into clean, professional copy." },
  { q: "Can I cancel anytime?", a: "Absolutely. Plans are month-to-month with no long contracts." },
]

const avatars = ["AF", "NT", "VE", "KM", "GZ"]

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -70])
  const cardStyle = { y: cardY }
  const badge1Style = { top: "6%", left: "-7%" }
  const badge2Style = { bottom: "10%", right: "-6%" }
  const [open, setOpen] = useState(0)

  return (
    <main className="relative">
      <Cursor />
      <div className="bg-layer" aria-hidden>
        <div className="aurora">
          <span className="blob blob-1" />
          <span className="blob blob-2" />
          <span className="blob blob-3" />
        </div>
        <div className="grid-fade" />
        <div className="grain" />
      </div>

      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
        <nav className="glass flex items-center gap-6 rounded-full px-4 py-2.5 w-full max-w-3xl">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg pr-2">
            <span className="inline-grid place-items-center w-7 h-7 rounded-lg bg-gradient-to-br from-iris-400 to-blossom-400 text-ink">★</span>
            GoFeatured
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-cream/70 ml-auto">
            <a href="#features" className="hover:text-cream transition">Features</a>
            <a href="#how" className="hover:text-cream transition">How it works</a>
            <a href="#pricing" className="hover:text-cream transition">Pricing</a>
            <a href="#faq" className="hover:text-cream transition">FAQ</a>
          </div>
          <Magnetic className="ml-auto md:ml-0">
            <a href="#pricing" className="btn-primary btn-shine text-sm">Get featured <ArrowRight size={16} /></a>
          </Magnetic>
        </nav>
      </header>

      <section id="top" ref={heroRef} className="relative px-4 pt-36 pb-16 md:pt-44">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-cream/80">
              <Sparkles size={14} className="text-blossom-300" /> The trust layer for B2B suppliers
            </motion.div>
            <motion.h1 variants={stagger} initial="hidden" animate="show" className="mt-6 font-display font-extrabold leading-[0.95] tracking-tight text-5xl md:text-7xl">
              <motion.span variants={wordUp} className="block">Make your factory</motion.span>
              <motion.span variants={wordUp} className="block">look like a</motion.span>
              <motion.span variants={wordUp} className="block gradient-text">$10M brand.</motion.span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={3} initial="hidden" animate="show" className="mt-6 max-w-md text-lg text-cream/65">
              GoFeatured gives your company its own stunning, SEO-ready showcase page — so buyers find you, trust you, and send more orders. No website skills needed.
            </motion.p>
            <motion.div variants={fadeUp} custom={4} initial="hidden" animate="show" className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a href="#pricing" className="btn-primary btn-shine">Get featured now <ArrowRight size={18} /></a>
              </Magnetic>
              <a href="#examples" className="btn-ghost">See live examples</a>
            </motion.div>
            <motion.div variants={fadeUp} custom={5} initial="hidden" animate="show" className="mt-8 flex items-center gap-3 text-sm text-cream/55">
              <div className="flex -space-x-2">
                {avatars.map((a) => (
                  <span key={a} className="inline-grid place-items-center w-8 h-8 rounded-full text-[10px] font-semibold text-ink bg-gradient-to-br from-iris-300 to-blossom-300 ring-2 ring-ink">{a}</span>
                ))}
              </div>
              Trusted by 5 founding suppliers — and counting.
            </motion.div>
          </div>

          <motion.div style={cardStyle} className="relative mx-auto w-full max-w-[430px]">
            <div className="hero-card glass-strong float">
              <div className="hc-top">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="hc-url">gofeatured.com/shoes/acme-footwear</span>
              </div>
              <div className="hc-body">
                <div className="hc-banner mesh" />
                <div className="hc-head">
                  <div className="hc-logo mesh" />
                  <div>
                    <div className="hc-name">Acme Footwear Co.</div>
                    <div className="hc-badge"><BadgeCheck size={14} /> Verified supplier</div>
                  </div>
                </div>
                <div className="hc-stats">
                  <div><b>12</b><i>yrs export</i></div>
                  <div><b>500k</b><i>pairs / mo</i></div>
                  <div><b>ISO</b><i>certified</i></div>
                </div>
                <div className="hc-grid">
                  <span className="mesh" />
                  <span className="mesh" />
                  <span className="mesh" />
                  <span className="mesh" />
                  <span className="mesh" />
                  <span className="mesh" />
                </div>
              </div>
            </div>
            <div className="float-badge glass-strong text-mint-400" style={badge1Style}><BadgeCheck size={14} /> Verified</div>
            <div className="float-badge glass-strong text-blossom-300" style={badge2Style}><Sparkles size={14} /> +38% inquiries</div>
          </motion.div>
        </div>
        <div className="mt-14 flex justify-center"><div className="scroll-ind"><span /></div></div>
      </section>

      <section className="py-8">
        <div className="marquee mx-auto max-w-6xl px-4">
          <div className="marquee-track">
            {[...brands, ...brands].map((b, i) => (
              <span key={i} className="chip">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i} className="card glow-ring rounded-3xl p-6 text-center">
              <div className="font-display text-4xl md:text-5xl font-extrabold gradient-text"><CountUp to={s.to} suffix={s.suffix} /></div>
              <div className="mt-2 text-sm text-cream/60">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="features" className="px-4 py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">Everything you need</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">A premium presence, <span className="gradient-text">without the agency price.</span></h2>
        </Reveal>
        <div className="mx-auto max-w-6xl mt-12 grid md:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon
            const span = f.span === "lg" ? "md:col-span-2" : ""
            return (
              <Reveal key={f.title} delay={i} className={span}>
                <Tilt className="card glow-ring rounded-3xl p-6 h-full">
                  <div className="icon-wrap"><Icon size={20} /></div>
                  <h3 className="font-display text-xl font-semibold mt-4">{f.title}</h3>
                  <p className="mt-2 text-cream/60 text-sm leading-relaxed">{f.desc}</p>
                </Tilt>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section id="how" className="px-4 py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">Dead simple</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Featured in 3 steps</h2>
        </Reveal>
        <div className="mx-auto max-w-5xl mt-14 relative grid md:grid-cols-3 gap-6">
          <div className="step-line" aria-hidden />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i} className="relative">
              <div className="card glow-ring rounded-3xl p-7 h-full">
                <div className="step-n gradient-text font-display">{s.n}</div>
                <h3 className="font-display text-xl font-semibold mt-3">{s.title}</h3>
                <p className="mt-2 text-cream/60 text-sm">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-6">
          <Reveal className="card rounded-3xl p-8 border border-blossom-400/20">
            <h3 className="font-display text-2xl font-bold flex items-center gap-2"><X className="text-blossom-400" size={22} /> Without GoFeatured</h3>
            <ul className="mt-5 space-y-3">
              {withoutList.map((w) => (
                <li key={w} className="flex items-center gap-3 text-cream/60"><X size={16} className="text-blossom-400 flex-none" /> {w}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={1} className="card glow-ring rounded-3xl p-8">
            <h3 className="font-display text-2xl font-bold flex items-center gap-2"><Check className="text-mint-400" size={22} /> With GoFeatured</h3>
            <ul className="mt-5 space-y-3">
              {withList.map((w) => (
                <li key={w} className="flex items-center gap-3 text-cream/85"><Check size={16} className="text-mint-400 flex-none" /> {w}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="examples" className="px-4 py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">Live examples</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">See what your page could look like</h2>
        </Reveal>
        <div className="mx-auto max-w-6xl mt-12 grid md:grid-cols-3 gap-5">
          {examples.map((e, i) => (
            <Reveal key={e.name} delay={i}>
              <Tilt className="card glow-ring rounded-3xl overflow-hidden h-full">
                <div className="ex-banner mesh" />
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="ex-logo mesh" />
                    <div>
                      <div className="font-semibold">{e.name}</div>
                      <div className="text-xs text-mint-400 flex items-center gap-1"><BadgeCheck size={12} /> Verified</div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-cream/55">{e.cat}</p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <span className="mesh ex-thumb" />
                    <span className="mesh ex-thumb" />
                    <span className="mesh ex-thumb" />
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="pricing" className="px-4 py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">Simple pricing</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Pay less than one lost order.</h2>
          <p className="mt-4 text-cream/60">No setup fees. Cancel anytime. Founding-supplier pricing.</p>
        </Reveal>
        <div className="mx-auto max-w-5xl mt-12 grid md:grid-cols-3 gap-5 items-stretch">
          {plans.map((p, i) => {
            const wrap = p.popular ? "md:-mt-4" : ""
            const box = p.popular ? "card glow-ring pop rounded-3xl p-7 h-full relative" : "card rounded-3xl p-7 h-full relative"
            const cta = p.popular ? "btn-primary btn-shine w-full justify-center mt-7" : "btn-ghost w-full justify-center mt-7"
            return (
              <Reveal key={p.name} delay={i} className={wrap}>
                <div className={box}>
                  {p.popular ? <span className="pop-badge">Most popular</span> : null}
                  <div className="text-sm text-cream/60">{p.name}</div>
                  <div className="mt-2 font-display text-4xl font-extrabold">{p.price}<span className="text-base text-cream/50 font-normal">{p.period}</span></div>
                  <div className="mt-1 text-sm text-cream/55">{p.tagline}</div>
                  <ul className="mt-5 space-y-2.5">
                    {p.features.map((ft) => (
                      <li key={ft} className="flex items-center gap-2 text-sm text-cream/75"><Check size={16} className="text-mint-400 flex-none" /> {ft}</li>
                    ))}
                  </ul>
                  <a href="#top" className={cta}>Choose {p.name}</a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section id="faq" className="px-4 py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">Good to know</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Questions, answered</h2>
        </Reveal>
        <div className="mx-auto max-w-3xl mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            const plusCls = isOpen ? "faq-plus open" : "faq-plus"
            const ansCls = isOpen ? "faq-a open px-5" : "faq-a px-5"
            return (
              <Reveal key={f.q} delay={i}>
                <div className="card rounded-2xl overflow-hidden">
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                    <span className="font-medium">{f.q}</span>
                    <span className={plusCls}><Plus size={18} /></span>
                  </button>
                  <div className={ansCls}>
                    <div><p className="pb-5 text-sm text-cream/60">{f.a}</p></div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="px-4 py-20">
        <Reveal className="mx-auto max-w-4xl text-center card glow-ring rounded-5xl p-12 relative overflow-hidden">
          <div className="cta-glow" aria-hidden />
          <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-tight">Get featured. <span className="gradient-text">Get found.</span><br />Get more orders.</h2>
          <p className="mt-4 text-cream/65 max-w-xl mx-auto">Join the founding suppliers turning a single link into more trust and more sales.</p>
          <div className="mt-8 flex justify-center">
            <Magnetic>
              <a href="#pricing" className="btn-primary btn-shine text-base">Claim your showcase page <ArrowRight size={18} /></a>
            </Magnetic>
          </div>
        </Reveal>
      </section>

      <footer className="px-4 pt-10 pb-6 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm text-cream/55">
            <div className="flex items-center gap-2 font-display font-bold text-cream"><span className="inline-grid place-items-center w-6 h-6 rounded-md bg-gradient-to-br from-iris-400 to-blossom-400 text-ink text-xs">★</span> GoFeatured</div>
            <div className="flex gap-6"><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></div>
            <div>Based in the United Kingdom · © 2026 GoFeatured</div>
          </div>
          <div className="footer-word font-display gradient-text">GoFeatured</div>
        </div>
      </footer>
    </main>
  )
}
