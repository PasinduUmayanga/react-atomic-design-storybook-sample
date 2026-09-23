import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('renders the header, hero copy, and every plan card', () => {
    render(<HomePage />)

    expect(screen.getByText('Atomic UI')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Atomic Design, built one component at a time' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Starter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Team' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Enterprise' })).toBeInTheDocument()
  })

  it('renders a "Choose <plan>" button for every plan', () => {
    render(<HomePage />)

    expect(screen.getByRole('button', { name: 'Choose Starter' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Choose Team' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Choose Enterprise' })).toBeInTheDocument()
  })
})
