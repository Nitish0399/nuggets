import { NuggetBot } from './components/NuggetBot'

const features = [
  {
    title: 'Reads the room',
    description:
      'Soft light, gentle motion, and little reactions that make your space feel alive — never loud, never needy.',
    color: 'bg-peach-soft border-peach/30',
    emoji: '✨',
  },
  {
    title: 'Desk-sized delight',
    description:
      'Fits beside your keyboard, on a shelf, or next to the couch. A companion that stays out of the way until you want it.',
    color: 'bg-sky-soft border-sky/40',
    emoji: '🏠',
  },
  {
    title: 'Personality you pick',
    description:
      'Choose a Nugget whose vibe matches yours — calm, curious, cheeky, or cozy. They grow familiar over time.',
    color: 'bg-lavender-soft border-lavender/40',
    emoji: '💛',
  },
]

const crew = [
  { name: 'Ember', vibe: 'Warm & encouraging', variant: 'peach' as const },
  { name: 'Breeze', vibe: 'Calm & curious', variant: 'sky' as const },
  { name: 'Mochi', vibe: 'Soft & sleepy', variant: 'lavender' as const },
  { name: 'Sprout', vibe: 'Playful & peppy', variant: 'mint' as const },
]

const steps = [
  { n: '01', title: 'Unbox your Nugget', text: 'Peel the sticker, feel the weight — they’re smaller than you’d expect, in the best way.' },
  { n: '02', title: 'Say hello', text: 'A tap on the head, a wave, or just setting them down — they’ll find their footing on your desk.' },
  { n: '03', title: 'Live together', text: 'Reminders, ambient moods, tiny celebrations. Companionship without another screen to stare at.' },
]

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-sm text-cream">N</span>
          Nuggets
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-muted md:flex">
          <a href="#features" className="transition hover:text-ink">
            Features
          </a>
          <a href="#crew" className="transition hover:text-ink">
            Meet the crew
          </a>
          <a href="#how" className="transition hover:text-ink">
            How it works
          </a>
        </nav>
        <a
          href="#reserve"
          className="rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-cream shadow-lg shadow-ink/15 transition hover:bg-ink/90 hover:shadow-xl"
        >
          Reserve yours
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-peach/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-lavender/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sky/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink-muted backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Desk & home companions
          </p>
          <h1 className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.35rem]">
            Little robots.
            <br />
            <span className="italic text-peach">Big heart.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            Nuggets are cute mini robots that sit with you through workdays, wind-downs, and everything in between — premium
            craftsmanship, playful soul.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#reserve"
              className="inline-flex items-center gap-2 rounded-full bg-peach px-6 py-3.5 text-sm font-bold text-ink shadow-lg shadow-peach/35 transition hover:scale-[1.02] hover:bg-peach/90"
            >
              Join the waitlist
              <span aria-hidden>→</span>
            </a>
            <a
              href="#crew"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-ink/25"
            >
              Meet the crew
            </a>
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            From <span className="font-semibold text-ink">$129</span> · Ships early 2026 · No subscription required
          </p>
        </div>

        <div className="relative mx-auto flex h-[min(420px,70vw)] w-full max-w-md items-end justify-center lg:max-w-none">
          <div className="grain absolute inset-4 rounded-[2rem] border border-ink/5 bg-gradient-to-b from-white/80 to-cream-dark/80 shadow-2xl shadow-ink/10" />
          <NuggetBot variant="peach" size={200} className="relative z-10 animate-float" wave blink />
          <NuggetBot
            variant="sky"
            size={100}
            className="absolute bottom-16 left-4 z-20 animate-float-delayed opacity-95"
            blink
          />
          <NuggetBot
            variant="mint"
            size={88}
            className="absolute bottom-20 right-2 z-20 animate-float-slow opacity-90"
            blink
          />
          <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 rounded-2xl border border-ink/10 bg-white/90 px-4 py-2 text-xs font-medium text-ink shadow-lg backdrop-blur-sm">
            👋 &nbsp;“Nice to meet you!”
          </div>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['Focus-friendly', 'USB-C charging', 'Offline-first', 'Recycled materials', 'Kid-safe modes', 'Open API']
  return (
    <div className="border-y border-ink/8 bg-ink py-3 text-cream">
      <div className="flex animate-[marquee_28s_linear_infinite] gap-12 whitespace-nowrap text-sm font-medium tracking-wide">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            {item}
            <span className="text-peach">◆</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl text-left">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Premium where it counts.
            <span className="block text-ink-muted">Playful where it matters.</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Soft-touch shells, thoughtful motion, and behaviors designed to feel like a friend — not a gadget yelling for
            attention.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className={`rounded-3xl border p-8 text-left transition hover:-translate-y-1 hover:shadow-lg ${f.color}`}
            >
              <span className="text-3xl">{f.emoji}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Crew() {
  return (
    <section id="crew" className="bg-cream-dark/60 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="text-left">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">Pick your Nugget</h2>
            <p className="mt-3 max-w-md text-ink-muted">Four finishes, four temperaments. All equally huggable.</p>
          </div>
          <p className="text-sm font-medium text-ink-muted">Swipe-worthy · Shelf-worthy · Actually useful</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {crew.map((c) => (
            <div
              key={c.name}
              className="group rounded-3xl border border-ink/8 bg-white p-6 text-center shadow-sm transition hover:border-peach/40 hover:shadow-xl"
            >
              <div className="flex justify-center transition group-hover:scale-105">
                <NuggetBot variant={c.variant} size={130} blink />
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">{c.name}</h3>
              <p className="text-sm text-ink-muted">{c.vibe}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-left font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          From box to buddy in minutes
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative text-left">
              <span className="font-display text-5xl font-bold text-peach/40">{s.n}</span>
              <h3 className="mt-2 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Specs() {
  const rows = [
    ['Size', '3.2" × 3.6" — palm-sized'],
    ['Battery', 'Up to 5 days · USB-C'],
    ['Connectivity', 'Wi‑Fi · optional BLE'],
    ['Materials', 'Soft-touch silicone · recycled ABS base'],
    ['Sensors', 'Ambient light · touch · motion'],
  ]
  return (
    <section className="px-5 pb-20 md:px-8 md:pb-28">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-ink/10 bg-ink text-cream">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center p-10 md:p-14 text-left">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Tiny specs, serious engineering</h2>
            <p className="mt-4 text-cream/70">
              Built by folks who love robots and hate clutter. Every Nugget is calibrated, tested, and a little bit
              opinionated — like a good roommate.
            </p>
            <ul className="mt-8 space-y-3">
              {rows.map(([k, v]) => (
                <li key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 text-sm md:text-base">
                  <span className="text-cream/50">{k}</span>
                  <span className="text-right font-medium">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex min-h-[280px] items-center justify-center bg-gradient-to-br from-peach/20 via-lavender/20 to-sky/20 p-10">
            <NuggetBot variant="lavender" size={180} className="animate-float" wave blink />
          </div>
        </div>
      </div>
    </section>
  )
}

function Reserve() {
  return (
    <section id="reserve" className="px-5 pb-16 md:px-8">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-ink/10 bg-gradient-to-br from-peach-soft via-white to-sky-soft p-10 text-center shadow-xl md:p-14">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">Be first in line</h2>
        <p className="mx-auto mt-4 max-w-md text-ink-muted">
          Drop your email for early access, launch pricing, and the occasional doodle from the Nuggets team.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            className="min-w-0 flex-1 rounded-full border border-ink/15 bg-white px-5 py-3.5 text-sm text-ink outline-none ring-peach/50 placeholder:text-ink-muted/60 focus:ring-2"
          />
          <button
            type="submit"
            className="rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-cream transition hover:bg-ink/90"
          >
            Join waitlist
          </button>
        </form>
        <p className="mt-4 text-xs text-ink-muted">No spam. Unsubscribe anytime. We’re robots, not monsters.</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ink/8 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-display text-lg font-semibold text-ink">Nuggets</p>
        <p className="text-sm text-ink-muted">© {new Date().getFullYear()} Spitilogic. Made with care and small motors.</p>
        <div className="flex gap-6 text-sm font-medium text-ink-muted">
          <a href="#" className="hover:text-ink">
            Privacy
          </a>
          <a href="#" className="hover:text-ink">
            Support
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="grain min-h-svh">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Crew />
        <HowItWorks />
        <Specs />
        <Reserve />
      </main>
      <Footer />
    </div>
  )
}
