import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Button } from './Button'

// Learning point: the default export ("meta") describes the component itself —
// which component it renders, how it should be laid out in the Canvas, and the
// default args/controls every story below inherits.
// https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'] tells Storybook to auto-generate a Docs page for this
  // component from its stories, args, and TypeScript prop types.
  // https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // argTypes configure the Controls panel — e.g. rendering `variant` as a
  // dropdown instead of a free-text field. https://storybook.js.org/docs/api/arg-types
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  // fn() wraps onClick so every call shows up in the Actions panel, without
  // us writing any logging code ourselves.
  // https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Save changes',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Cancel',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete account',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small button',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large button',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Unavailable',
  },
}

// Learning point: `play` functions simulate real user interaction after the
// story renders, and assertions show up step-by-step in the Interactions
// panel — this is Storybook's interaction/component testing feature.
// https://storybook.js.org/docs/writing-tests/interaction-testing
export const ClickInteraction: Story = {
  args: {
    children: 'Click me',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Click me' })

    await expect(button).toBeEnabled()
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalledTimes(1)
  },
}
