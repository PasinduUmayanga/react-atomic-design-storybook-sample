import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Input } from './Input'

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Email',
    name: 'email',
    placeholder: 'you@example.com',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    name: 'email',
    error: 'Please enter a valid email address',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Email',
    name: 'email',
    disabled: true,
    value: 'locked@example.com',
  },
}

// Learning point: play functions can drive real typing, not just clicks —
// useful for documenting and testing form-field behavior directly in Storybook.
export const TypingInteraction: Story = {
  args: {
    label: 'Email',
    name: 'email',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const field = canvas.getByLabelText('Email')

    await userEvent.type(field, 'hello@example.com')
    await expect(field).toHaveValue('hello@example.com')
  },
}
