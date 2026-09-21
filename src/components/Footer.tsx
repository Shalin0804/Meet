import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <div>
          <p className="font-display text-lg font-bold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-white/50">{profile.role}</p>
        </div>

        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/35">
          Business Development • Sales • Client Relationships • Web Design
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, '')}`}
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            {profile.phone}
          </a>
        </div>

        <p className="text-xs text-white/30">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
