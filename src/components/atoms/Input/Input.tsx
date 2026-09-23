import type { InputHTMLAttributes } from 'react'
import { useId } from 'react'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'id'> {
  label?: string
  error?: string
}

export function Input({ label, error, ...rest }: InputProps) {
  const generatedId = useId()
  const inputId = rest.name ?? generatedId

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={[
          'rounded-md border px-3 py-2 text-base text-gray-900 shadow-sm',
          'focus:outline-none focus:ring-2 focus:ring-offset-1',
          error
            ? 'border-red-400 focus:ring-red-400'
            : 'border-gray-300 focus:ring-indigo-500',
        ].join(' ')}
        {...rest}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-sm text-red-600">
          {error}
        </span>
      )}
    </div>
  )
}
