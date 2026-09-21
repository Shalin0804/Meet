import Reveal from './common/Reveal'
import MagneticButton from './common/MagneticButton'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 sm:py-24">
            <div
              aria-hidden="true"
              className="animate-pulse-soft pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-violet/25 to-accent-blue/15 blur-[100px]"
            />

            <div className="relative">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-violet">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
                Contact
              </span>

              <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Have an Opportunity in Mind?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                Let's start a conversation and explore how we can create meaningful business
                opportunities together.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton href={`mailto:${profile.email}`} variant="primary">
                  Email Me
                </MagneticButton>
                <MagneticButton href={`tel:${profile.phone.replace(/\s+/g, '')}`} variant="secondary">
                  Call Me
                </MagneticButton>
              </div>

              <div className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-center sm:gap-10">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {profile.email}
                </a>
                <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
