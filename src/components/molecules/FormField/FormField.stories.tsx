import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { FormField } from './FormField'

// Learning point: molecules compose atoms (FormField = Text + Input). Storybook
// documents this level the same way it documents atoms — the composition is an
// implementation detail, not something consumers of FormField need to know.
const meta = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Username',
    name: 'username',
    helperText: 'Pick something unique — you can change it later.',
  },
}

export const WithError: Story = {
  args: {
    label: 'Username',
    name: 'username',
    helperText: 'Pick something unique — you can change it later.',
    error: 'That username is already taken',
  },
}

export const FillInteraction: Story = {
  args: {
    label: 'Username',
    name: 'username',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const field = canvas.getByLabelText('Username')

    await userEvent.type(field, 'storybook-fan')
    await expect(field).toHaveValue('storybook-fan')
  },
}
