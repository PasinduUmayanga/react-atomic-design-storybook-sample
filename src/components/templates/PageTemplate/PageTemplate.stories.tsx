import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from '../../atoms/Text'
import { PageTemplate } from './PageTemplate'

// Learning point: a "template" story fills the layout with placeholder
// content so you can review structure/spacing in isolation, separate from
// the real content a "page" story would use.
// https://www.storybook.js.org/docs/writing-stories/build-pages-with-storybook
const meta = {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    logoText: 'Atomic UI',
    navLinks: [
      { label: 'Docs', href: '/docs' },
      { label: 'Components', href: '/components' },
    ],
    ctaLabel: 'Get started',
    footerText: '© 2026 Atomic UI',
    children: <Text variant="body">Page content goes here.</Text>,
  },
}
