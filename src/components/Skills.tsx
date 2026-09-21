import Reveal from './common/Reveal'
import SectionHeading from './common/SectionHeading'
import { skillCategories } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-blue/10 blur-[130px]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="An ecosystem built for growth conversations."
          description="Four capability groups that work together — from finding opportunities to closing them and keeping clients close."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.1}>
              <div className="group glass relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-violet/30 sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-accent-violet/20 to-accent-blue/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold text-white">
                      {category.title}
                    </h3>
                    <span className="font-display text-3xl font-bold text-white/10 transition-colors duration-300 group-hover:text-accent-violet/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/50">{category.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-white/75 transition-all duration-300 hover:border-accent-violet/40 hover:bg-accent-violet/10 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
