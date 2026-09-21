import Reveal from './common/Reveal'
import SectionHeading from './common/SectionHeading'
import { education } from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Education & Training" title="The foundation behind the work." />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent md:block" />

          <div className="flex flex-col gap-6 md:gap-4">
            {education.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div
                    className={`relative flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center md:gap-10`}
                  >
                    <div
                      className={`hidden md:block ${isLeft ? 'order-1' : 'order-2'}`}
                    >
                      {isLeft && <EduCard item={item} align="right" />}
                    </div>
                    <div
                      className={`hidden md:block ${isLeft ? 'order-2' : 'order-1'}`}
                    >
                      {!isLeft && <EduCard item={item} align="left" />}
                    </div>

                    <div className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink-900 bg-accent-violet md:block" />

                    <div className="md:hidden">
                      <EduCard item={item} align="left" />
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function EduCard({
  item,
  align,
}: {
  item: (typeof education)[number]
  align: 'left' | 'right'
}) {
  return (
    <div
      className={`glass max-w-md rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/30 ${
        align === 'right' ? 'ml-auto text-right' : 'mr-auto text-left'
      }`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-violet">
        {item.period}
      </span>
      <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
      <p className="mt-1 text-sm text-white/50">{item.org}</p>
      {item.detail && <p className="mt-3 text-sm text-white/60">{item.detail}</p>}
    </div>
  )
}
