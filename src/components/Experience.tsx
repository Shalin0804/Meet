import Reveal from './common/Reveal'
import SectionHeading from './common/SectionHeading'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="A path built on business development and design."
          description="From learning to design the web to driving business growth — every step compounds into the next."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent-violet/60 via-white/15 to-transparent sm:left-6" />

          <div className="flex flex-col gap-10">
            {experience.map((item, i) => (
              <Reveal key={item.role} delay={i * 0.12}>
                <div className="relative pl-14 sm:pl-20">
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-accent-violet/40 bg-ink-900 sm:left-2 sm:h-10 sm:w-10">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent-violet" />
                  </div>

                  <div className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/30 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-accent-violet">{item.org}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-white/60">
                        {item.period}
                      </span>
                    </div>

                    <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-white/60"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
