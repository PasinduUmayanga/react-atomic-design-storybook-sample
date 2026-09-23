import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FormField } from './FormField'

describe('FormField', () => {
  it('shows helper text when there is no error', () => {
    render(<FormField label="Username" name="username" helperText="Pick something unique" />)
    expect(screen.getByText('Pick something unique')).toBeInTheDocument()
  })

  it('shows the error instead of the helper text when both are provided', () => {
    render(
      <FormField
        label="Username"
        name="username"
        helperText="Pick something unique"
        error="Username is taken"
      />,
    )

    expect(screen.getByText('Username is taken')).toBeInTheDocument()
    expect(screen.queryByText('Pick something unique')).not.toBeInTheDocument()
  })

  it('still exposes an accessible, labeled input', () => {
    render(<FormField label="Username" name="username" />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
  })
})
