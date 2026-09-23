import type { ReactNode } from 'react'
import { Header, type NavLink } from '../../organisms/Header'
import { Text } from '../../atoms/Text'

export interface PageTemplateProps {
  logoText: string
  navLinks: NavLink[]
  ctaLabel?: string
  onCtaClick?: () => void
  footerText: string
  children: ReactNode
}

export function PageTemplate({
  logoText,
  navLinks,
  ctaLabel,
  onCtaClick,
  footerText,
  children,
}: PageTemplateProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header logoText={logoText} navLinks={navLinks} ctaLabel={ctaLabel} onCtaClick={onCtaClick} />
      <main className="flex-1 px-6 py-10">{children}</main>
      <footer className="border-t border-gray-200 px-6 py-4">
        <Text variant="caption">{footerText}</Text>
      </footer>
    </div>
  )
}
