type NuggetVariant = 'peach' | 'sky' | 'lavender' | 'mint'

const fills: Record<NuggetVariant, { body: string; shadow: string }> = {
  peach: { body: '#FF8A65', shadow: '#E86B45' },
  sky: { body: '#7DD3FC', shadow: '#38BDF8' },
  lavender: { body: '#C4B5FD', shadow: '#A78BFA' },
  mint: { body: '#6EE7B7', shadow: '#34D399' },
}

type Props = {
  variant?: NuggetVariant
  size?: number
  className?: string
  blink?: boolean
  wave?: boolean
}

export function NuggetBot({
  variant = 'peach',
  size = 120,
  className = '',
  blink = true,
  wave = false,
}: Props) {
  const { body, shadow } = fills[variant]

  return (
    <svg
      width={size}
      height={size * 1.05}
      viewBox="0 0 120 126"
      fill="none"
      className={className}
      aria-hidden
    >
      <ellipse cx="60" cy="108" rx="28" ry="6" fill="#1A1625" opacity="0.08" />
      <g className={wave ? 'animate-wiggle origin-[60px_70px]' : undefined}>
        <ellipse cx="60" cy="72" rx="42" ry="38" fill={shadow} />
        <ellipse cx="60" cy="68" rx="42" ry="38" fill={body} />
        <ellipse cx="60" cy="52" rx="36" ry="28" fill={body} opacity="0.35" />
        <rect x="38" y="28" width="44" height="8" rx="4" fill={shadow} opacity="0.5" />
        <circle cx="48" cy="32" r="3" fill="#FAF7F2" opacity="0.6" />
        <circle cx="72" cy="32" r="3" fill="#FAF7F2" opacity="0.6" />
        <g className={blink ? 'animate-blink origin-[48px_62px]' : undefined}>
          <ellipse cx="48" cy="62" rx="7" ry="8" fill="#1A1625" />
          <circle cx="50" cy="60" r="2.5" fill="#FAF7F2" />
        </g>
        <g className={blink ? 'animate-blink origin-[72px_62px]' : undefined}>
          <ellipse cx="72" cy="62" rx="7" ry="8" fill="#1A1625" />
          <circle cx="74" cy="60" r="2.5" fill="#FAF7F2" />
        </g>
        <path
          d="M52 78 Q60 84 68 78"
          stroke="#1A1625"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <ellipse
          cx="28"
          cy="72"
          rx="10"
          ry="14"
          fill={body}
          transform="rotate(-15 28 72)"
        />
        <ellipse
          cx="92"
          cy="68"
          rx="10"
          ry="14"
          fill={body}
          transform={wave ? 'rotate(25 92 68)' : 'rotate(15 92 68)'}
        />
        <ellipse cx="60" cy="98" rx="8" ry="4" fill={shadow} opacity="0.4" />
      </g>
    </svg>
  )
}
