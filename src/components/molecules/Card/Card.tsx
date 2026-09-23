import type { ReactNode } from 'react'
import { Text } from '../../atoms/Text'

export interface CardProps {
  title: string
  description: string
  action?: ReactNode
}

export function Card({ title, description, action }: CardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-200 p-5 shadow-sm">
      <Text variant="heading-md">{title}</Text>
      <Text variant="body">{description}</Text>
      {action && <div className="mt-1">{action}</div>}
    </div>
  )
}
