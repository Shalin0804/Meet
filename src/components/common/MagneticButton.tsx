import { motion, useReducedMotion } from 'framer-motion'
import { useRef, useState, type ReactNode } from 'react'

type MagneticButtonProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  className?: string
  target?: string
  rel?: string
  'aria-label'?: string
}

export default function MagneticButton({
  children,
  variant = 'primary',
  className = '',
  href,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const shouldReduceMotion = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (shouldReduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * 0.25, y: y * 0.25 })
  }

  const handleMouseLeave = () => setPos({ x: 0, y: 0 })

  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap'

  const styles =
    variant === 'primary'
      ? 'bg-white text-ink-950 hover:bg-white/90'
      : 'glass text-white hover:border-white/25'

  return (
    <motion.a
      ref={ref}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${base} ${styles} ${className}`}
      href={href}
      {...rest}
    >
      {children}
    </motion.a>
  )
}
