import Reveal from './common/Reveal'
import SectionHeading from './common/SectionHeading'
import { achievements } from '../data/profile'

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Results built on consistency, not luck."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-violet/25 bg-accent-violet/10 text-accent-violet">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
