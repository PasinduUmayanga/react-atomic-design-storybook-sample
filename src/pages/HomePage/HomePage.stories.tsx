import type { Meta, StoryObj } from '@storybook/react-vite'
import { HomePage } from './HomePage'

// Learning point: a "page" story renders the real, fully composed screen —
// the same component `App.tsx` mounts — so Storybook doubles as a living
// preview of the actual app, not just its building blocks.
const meta = {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
