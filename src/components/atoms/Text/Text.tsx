import type { ElementType, ReactNode } from 'react'

export type TextVariant = 'heading-lg' | 'heading-md' | 'body' | 'caption'

export interface TextProps {
  children: ReactNode
  variant?: TextVariant
  as?: ElementType
}

const VARIANT_CLASSES: Record<TextVariant, string> = {
  'heading-lg': 'text-3xl font-bold text-gray-900',
  'heading-md': 'text-xl font-semibold text-gray-900',
  body: 'text-base text-gray-700',
  caption: 'text-sm text-gray-500',
}

const DEFAULT_ELEMENT: Record<TextVariant, ElementType> = {
  'heading-lg': 'h1',
  'heading-md': 'h2',
  body: 'p',
  caption: 'span',
}

export function Text({ children, variant = 'body', as }: TextProps) {
  const Component = as ?? DEFAULT_ELEMENT[variant]

  return <Component className={VARIANT_CLASSES[variant]}>{children}</Component>
}
