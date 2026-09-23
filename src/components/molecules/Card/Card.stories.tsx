import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../../atoms/Button'
import { Primary as PrimaryButtonStory } from '../../atoms/Button/Button.stories'
import { Card } from './Card'

const meta = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Starter plan',
    description: 'Everything you need to get a small UI off the ground.',
  },
}

// Learning point: stories can import and reuse another component's story args
// directly (here, Button's "Primary" story) instead of re-declaring props —
// this keeps composed examples in sync with the atom they're built from.
// https://storybook.js.org/docs/writing-stories/build-pages-with-storybook
export const WithAction: Story = {
  args: {
    title: 'Team plan',
    description: 'Adds shared component libraries for the whole team.',
    action: <Button {...PrimaryButtonStory.args}>Choose Team</Button>,
  },
}
