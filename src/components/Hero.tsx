import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'
import MagneticButton from './common/MagneticButton'

const dashboardCards = [
  { label: 'Lead Generation', icon: '↗' },
  { label: 'Client Relationships', icon: '◆' },
  { label: 'Business Development', icon: '＋' },
  { label: 'Sales Strategy', icon: '≡' },
]

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20 sm:pt-36"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="bg-grid-glow pointer-events-none absolute inset-0" />

      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent-violet/20 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="animate-float-slower pointer-events-none absolute -right-24 top-64 h-80 w-80 rounded-full bg-accent-blue/20 blur-[110px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-violet opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-violet" />
            </span>
            {profile.role}
          </motion.div>

          <h1 className="font-display max-w-2xl text-[2.6rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]">
            {['Turning Conversations Into', 'Business Opportunities.'].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: shouldReduceMotion ? 0 : '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`block ${i === 1 ? 'text-gradient' : ''}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Hi, I'm <span className="text-white">Meet Vaishnani</span> — a Business Development
            Executive focused on building relationships, generating opportunities, and helping
            businesses turn conversations into meaningful partnerships.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact" variant="primary">
              Let's Work Together
              <span aria-hidden="true">→</span>
            </MagneticButton>
            <MagneticButton href="#experience" variant="secondary">
              View My Experience
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass-strong animate-float-slow relative rounded-3xl p-6 shadow-[0_30px_80px_-30px_rgba(109,91,255,0.5)]">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Focus Areas
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <div className="flex flex-col gap-3">
              {dashboardCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                  className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5 transition-transform duration-300 hover:-translate-y-0.5 hover:border-accent-violet/30"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/30 to-accent-blue/20 text-base text-white">
                    {card.icon}
                  </span>
                  <span className="text-sm font-medium text-white/85">{card.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="glass animate-float-slower absolute -bottom-8 -left-8 hidden rounded-2xl px-5 py-4 shadow-xl sm:block"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">Currently at</p>
            <p className="mt-1 text-sm font-semibold text-white">{profile.company}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
