import Reveal from './common/Reveal'
import SectionHeading from './common/SectionHeading'
import { process } from '../data/profile'

export default function HowIWork() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How I Work"
          title="A simple process, applied consistently."
          align="center"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute inset-x-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          {process.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12}>
              <div className="group relative flex flex-col items-start">
                <div className="glass relative flex h-14 w-14 items-center justify-center rounded-2xl">
                  <span className="font-display text-lg font-bold text-gradient">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{step.text}</p>

                {i < process.length - 1 && (
                  <div className="mt-6 hidden h-px w-full bg-gradient-to-r from-white/10 to-transparent lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
