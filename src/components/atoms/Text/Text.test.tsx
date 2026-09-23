import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Text } from './Text'

describe('Text', () => {
  it('renders heading-lg as an h1 by default', () => {
    render(<Text variant="heading-lg">Page title</Text>)
    expect(screen.getByRole('heading', { level: 1, name: 'Page title' })).toBeInTheDocument()
  })

  it('renders heading-md as an h2 by default', () => {
    render(<Text variant="heading-md">Section title</Text>)
    expect(screen.getByRole('heading', { level: 2, name: 'Section title' })).toBeInTheDocument()
  })

  it('renders body text as a paragraph by default', () => {
    render(<Text>Body copy</Text>)
    expect(screen.getByText('Body copy').tagName).toBe('P')
  })

  it('honors an explicit "as" override', () => {
    render(
      <Text variant="body" as="span">
        Inline copy
      </Text>,
    )
    expect(screen.getByText('Inline copy').tagName).toBe('SPAN')
  })
})
