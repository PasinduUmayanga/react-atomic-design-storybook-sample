import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from './Text'

const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['heading-lg', 'heading-md', 'body', 'caption'],
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const HeadingLarge: Story = {
  args: {
    variant: 'heading-lg',
    children: 'Heading large (renders as <h1>)',
  },
}

export const HeadingMedium: Story = {
  args: {
    variant: 'heading-md',
    children: 'Heading medium (renders as <h2>)',
  },
}

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text (renders as <p>)',
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text (renders as <span>)',
  },
}

// Learning point: the same story can be re-rendered with a prop override to
// show how a polymorphic component behaves — here `as` swaps the rendered tag
// without changing the variant's visual styling.
export const OverriddenElement: Story = {
  args: {
    variant: 'heading-lg',
    as: 'div',
    children: 'Styled like heading-lg but rendered as a <div>',
  },
}
