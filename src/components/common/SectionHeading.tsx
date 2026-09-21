import Reveal from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex flex-col ${alignment} max-w-2xl`}>
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-violet">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">{description}</p>
      )}
    </Reveal>
  )
}
