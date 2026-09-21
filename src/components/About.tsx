import Reveal from './common/Reveal'
import SectionHeading from './common/SectionHeading'
import { aboutHighlights, profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Business grows through people, not pitches."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal delay={0.1}>
            <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-violet/20 blur-[80px]"
              />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-violet to-accent-blue font-display text-2xl font-bold text-white">
                  MV
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">
                  {profile.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent-violet">{profile.role}</p>
                <p className="mt-1 text-sm text-white/50">{profile.company}</p>

                <div className="mt-8 h-px w-full bg-white/10" />

                <p className="mt-8 text-sm leading-relaxed text-white/65">
                  Responsible for identifying new business opportunities, managing client
                  relationships, and driving growth through strategic planning and effective
                  communication — while working closely with cross-functional teams to present
                  tailored IT solutions.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/60">
                    Web Design Background
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {aboutHighlights.map((item, i) => (
              <Reveal key={item.title} delay={0.15 + i * 0.08}>
                <div className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/30">
                  <span className="font-display text-3xl font-bold text-white/10 transition-colors duration-300 group-hover:text-accent-violet/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="mt-4 text-base font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
