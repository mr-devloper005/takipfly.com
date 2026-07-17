import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#fff8f0', '--slot4-page-text': '#030a1c', '--slot4-panel-bg': '#fffefa',
  '--slot4-surface-bg': '#fffefa', '--slot4-muted-text': '#6b6970', '--slot4-soft-muted-text': '#98939a',
  '--slot4-accent': '#dd4536', '--slot4-accent-fill': '#dd4536', '--slot4-accent-soft': '#f8ddd6',
  '--slot4-on-accent': '#ffffff', '--slot4-dark-bg': '#00003f', '--slot4-dark-text': '#fffefa',
  '--slot4-media-bg': '#e8e1da', '--slot4-cream': '#fff8f0', '--slot4-warm': '#fff1e5', '--slot4-lavender': '#e9e7ff', '--slot4-gray': '#f1ede8',
  '--slot4-body-gradient': 'none', '--editable-page-bg': '#fff8f0', '--editable-page-text': '#030a1c',
  '--editable-container': '1360px', '--editable-border': '#ded8d0', '--editable-nav-bg': '#00003f', '--editable-nav-text': '#fffefa',
  '--editable-nav-active': '#dd4536', '--editable-nav-active-text': '#fffefa', '--editable-cta-bg': '#dd4536', '--editable-cta-text': '#fffefa',
  '--editable-search-bg': '#fffefa', '--editable-footer-bg': '#00003f', '--editable-footer-text': '#fffefa',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]', pageText: 'text-[var(--slot4-page-text)]', panelBg: 'bg-[var(--slot4-panel-bg)]', panelText: 'text-[var(--slot4-page-text)]', surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  mutedText: 'text-[var(--slot4-muted-text)]', softMutedText: 'text-[var(--slot4-soft-muted-text)]', accentText: 'text-[var(--slot4-accent)]', accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]', accentSoftText: 'text-[var(--slot4-accent)]', onAccentText: 'text-[var(--slot4-on-accent)]', darkBg: 'bg-[var(--slot4-dark-bg)]', darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]', creamBg: 'bg-[var(--slot4-cream)]', warmBg: 'bg-[var(--slot4-warm)]', lavenderBg: 'bg-[var(--slot4-lavender)]', grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-[var(--editable-border)]', darkBorder: 'border-white/15', shadow: 'shadow-none', shadowStrong: 'shadow-none', overlay: 'bg-[linear-gradient(180deg,transparent_30%,rgba(3,10,28,.86))]',
} as const

export const editableDesignContract = {
  shell: { page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`, section: 'mx-auto w-full max-w-[var(--editable-container)] px-5 sm:px-8 lg:px-[30px]', sectionY: 'py-15 sm:py-20 lg:py-[120px]' },
  layout: { safeGrid: 'grid gap-5 md:grid-cols-2 xl:grid-cols-3', featureGrid: 'grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center', rail: 'flex snap-x gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden', minRailCard: 'w-[220px] shrink-0 snap-start sm:w-[260px]' },
  type: { eyebrow: 'text-[11px] font-semibold uppercase tracking-[.18em] text-[var(--slot4-accent)]', heroTitle: 'editable-display text-4xl font-bold leading-[1.05] tracking-[-.055em] sm:text-6xl lg:text-[80px]', sectionTitle: 'editable-display text-3xl font-bold leading-[1.1] tracking-[-.05em] sm:text-4xl lg:text-[48px]', body: 'text-base leading-[1.7]', emphasis: 'font-medium italic' },
  surface: { card: `border ${editablePalette.border} ${editablePalette.surfaceBg}`, soft: `border ${editablePalette.border} ${editablePalette.panelBg}`, dark: `${editablePalette.darkBg} ${editablePalette.darkText}` },
  button: { primary: 'inline-flex items-center justify-center gap-2 bg-[var(--slot4-accent-fill)] px-5 py-3 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-85', secondary: 'inline-flex items-center justify-center gap-2 border border-current px-5 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-[var(--slot4-page-text)] hover:text-[var(--slot4-surface-bg)]', accent: 'inline-flex items-center justify-center gap-2 bg-[var(--slot4-accent-fill)] px-5 py-3 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-85', ghost: 'inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:text-[var(--slot4-accent)]' },
  badge: { pill: 'border border-[var(--editable-border)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[.12em]', accentPill: 'bg-[var(--slot4-accent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[.12em] text-white' },
  media: { frame: `relative overflow-hidden ${editablePalette.mediaBg}`, frameFull: `relative overflow-hidden ${editablePalette.mediaBg}`, ratio: 'aspect-[16/10]' },
  motion: { lift: 'transition duration-500 hover:opacity-80', fade: 'transition duration-300 hover:opacity-75', zoom: 'transition duration-700 group-hover:scale-[1.03]' },
} as const

export const aiLayoutRules = ['Use the PressPoint-derived warm-paper / navy / coral system from editableRootStyle.', 'Use editorial grids, sharp rules and restrained image zoom instead of floating SaaS surfaces.', 'Keep dynamic fetching and postHref intact.'] as const
