import { Button } from '../../atoms/Button'
import { Text } from '../../atoms/Text'

export interface NavLink {
  label: string
  href: string
}

export interface HeaderProps {
  logoText: string
  navLinks: NavLink[]
  ctaLabel?: string
  onCtaClick?: () => void
}

export function Header({ logoText, navLinks, ctaLabel, onCtaClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
      <Text variant="heading-md" as="span">
        {logoText}
      </Text>
      <nav className="flex items-center gap-6">
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-gray-600 hover:text-gray-900">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {ctaLabel && (
          <Button size="sm" onClick={onCtaClick}>
            {ctaLabel}
          </Button>
        )}
      </nav>
    </header>
  )
}
