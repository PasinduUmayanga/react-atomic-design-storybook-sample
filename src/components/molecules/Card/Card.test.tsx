import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from '../../atoms/Button'
import { Card } from './Card'

describe('Card', () => {
  it('renders the title and description', () => {
    render(<Card title="Starter plan" description="Everything you need to get going." />)

    expect(screen.getByRole('heading', { name: 'Starter plan' })).toBeInTheDocument()
    expect(screen.getByText('Everything you need to get going.')).toBeInTheDocument()
  })

  it('renders an optional action, such as a Button', () => {
    render(
      <Card
        title="Starter plan"
        description="Everything you need to get going."
        action={<Button>Choose plan</Button>}
      />,
    )

    expect(screen.getByRole('button', { name: 'Choose plan' })).toBeInTheDocument()
  })

  it('omits the action wrapper when no action is provided', () => {
    const { container } = render(
      <Card title="Starter plan" description="Everything you need to get going." />,
    )

    expect(container.querySelector('.mt-1')).not.toBeInTheDocument()
  })
})
