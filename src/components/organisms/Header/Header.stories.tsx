import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Header } from './Header'

const NAV_LINKS = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/components' },
]

const meta = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    // Learning point: `layout: 'fullscreen'` removes the Canvas padding —
    // useful for organisms/templates/pages that already manage their own
    // spacing. https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    onCtaClick: fn(),
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    logoText: 'Atomic UI',
    navLinks: NAV_LINKS,
  },
}

export const WithCallToAction: Story = {
  args: {
    logoText: 'Atomic UI',
    navLinks: NAV_LINKS,
    ctaLabel: 'Sign up',
  },
}

export const CtaInteraction: Story = {
  args: {
    logoText: 'Atomic UI',
    navLinks: NAV_LINKS,
    ctaLabel: 'Sign up',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const cta = canvas.getByRole('button', { name: 'Sign up' })

    await userEvent.click(cta)
    await expect(args.onCtaClick).toHaveBeenCalledTimes(1)
  },
}
