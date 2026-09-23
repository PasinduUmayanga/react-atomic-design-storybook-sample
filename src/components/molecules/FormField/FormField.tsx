import type { InputHTMLAttributes } from 'react'
import { Input } from '../../atoms/Input'
import { Text } from '../../atoms/Text'

export interface FormFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'id'> {
  label: string
  helperText?: string
  error?: string
}

export function FormField({ label, helperText, error, ...rest }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <Input label={label} error={error} {...rest} />
      {!error && helperText && (
        <Text variant="caption" as="span">
          {helperText}
        </Text>
      )}
    </div>
  )
}
