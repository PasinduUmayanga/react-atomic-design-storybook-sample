import { Button } from '../../components/atoms/Button'
import { Text } from '../../components/atoms/Text'
import { Card } from '../../components/molecules/Card'
import { PageTemplate } from '../../components/templates/PageTemplate'

const NAV_LINKS = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/components' },
]

const PLANS = [
  {
    title: 'Starter',
    description: 'Atoms and molecules to get a small UI off the ground.',
  },
  {
    title: 'Team',
    description: 'Organisms and templates for shared, reusable page layouts.',
  },
  {
    title: 'Enterprise',
    description: 'A full page library documented and tested in Storybook.',
  },
]

export function HomePage() {
  return (
    <PageTemplate
      logoText="Atomic UI"
      navLinks={NAV_LINKS}
      ctaLabel="Get started"
      footerText="© 2026 Atomic UI — built with React, Tailwind CSS, and Storybook."
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <Text variant="heading-lg">Atomic Design, built one component at a time</Text>
        <Text variant="body">
          This page is a <code>template</code> filled with real content — composed entirely
          from the atoms, molecules, and organisms documented in Storybook.
        </Text>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.title}
              title={plan.title}
              description={plan.description}
              action={<Button size="sm">Choose {plan.title}</Button>}
            />
          ))}
        </div>
      </div>
    </PageTemplate>
  )
}
