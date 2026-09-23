import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PageTemplate } from './PageTemplate'

describe('PageTemplate', () => {
  it('renders the header, the children, and the footer', () => {
    render(
      <PageTemplate
        logoText="Atomic UI"
        navLinks={[{ label: 'Docs', href: '/docs' }]}
        footerText="© 2026 Atomic UI"
      >
        <p>Main content</p>
      </PageTemplate>,
    )

    expect(screen.getByText('Atomic UI')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Docs' })).toBeInTheDocument()
    expect(screen.getByText('Main content')).toBeInTheDocument()
    expect(screen.getByText('© 2026 Atomic UI')).toBeInTheDocument()
  })
})
