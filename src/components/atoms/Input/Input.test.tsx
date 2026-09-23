import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  it('associates the label with the input via htmlFor/id', () => {
    render(<Input label="Email" name="email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('lets the user type into the field', async () => {
    const user = userEvent.setup()
    render(<Input label="Email" name="email" />)

    const field = screen.getByLabelText('Email')
    await user.type(field, 'hello@example.com')

    expect(field).toHaveValue('hello@example.com')
  })

  it('marks the field as invalid and shows the error message', () => {
    render(<Input label="Email" name="email" error="Email is required" />)

    const field = screen.getByLabelText('Email')
    expect(field).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText('Email is required')).toBeInTheDocument()
  })
})
