import { forwardRef, type InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, className = "", ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          id={id}
          ref={ref}
          placeholder=" "
          className={`
            peer w-full rounded-lg border
            bg-[var(--color-surface)]
            border-[var(--color-border)]
            px-3 pt-6 pb-2 text-sm
            text-[var(--color-text-primary)]
            focus:outline-none
            focus:ring-2
            focus:ring-[var(--color-primary)]/20
            focus:border-[var(--color-primary)]
            ${error ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : ""}
            ${className}
          `}
          {...props}
        />

        <label
          htmlFor={id}
          className="
            absolute left-3 top-3 text-sm
            text-[var(--color-text-secondary)]
            transition-all
            peer-placeholder-shown:top-3.5
            peer-placeholder-shown:text-base
            peer-focus:top-2
            peer-focus:text-xs
            peer-focus:text-[var(--color-primary)]
          "
        >
          {label}
        </label>

        {error && (
          <p className="mt-1 text-xs text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"