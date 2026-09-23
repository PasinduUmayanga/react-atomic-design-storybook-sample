import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Header } from './Header'

const NAV_LINKS = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/components' },
]

describe('Header', () => {
  it('renders the logo text and every nav link', () => {
    render(<Header logoText="Atomic UI" navLinks={NAV_LINKS} />)

    expect(screen.getByText('Atomic UI')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs')
    expect(screen.getByRole('link', { name: 'Components' })).toHaveAttribute(
      'href',
      '/components',
    )
  })

  it('renders the CTA button and fires its click handler', async () => {
    const user = userEvent.setup()
    const onCtaClick = vi.fn()
    render(
      <Header logoText="Atomic UI" navLinks={NAV_LINKS} ctaLabel="Sign up" onCtaClick={onCtaClick} />,
    )

    await user.click(screen.getByRole('button', { name: 'Sign up' }))

    expect(onCtaClick).toHaveBeenCalledTimes(1)
  })

  it('omits the CTA button when no ctaLabel is given', () => {
    render(<Header logoText="Atomic UI" navLinks={NAV_LINKS} />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
