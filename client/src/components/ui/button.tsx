import { forwardRef, type ButtonHTMLAttributes } from "react"

type Variant = "primary" | "destructive" | "secondary" | "ghost" | "ai"
type Size = "sm" | "md" | "lg" | "xl"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className = "",
      ...props
    },
    ref
  ) => {

    const base =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-150 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"

    let variantClasses = ""

    switch (variant) {
      case "primary":
        variantClasses =
          "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] focus-visible:ring-[var(--color-primary)]"
        break

      case "destructive":
        variantClasses =
          "bg-[var(--color-accent)] text-white hover:opacity-90 focus-visible:ring-[var(--color-accent)]"
        break

      case "secondary":
        variantClasses =
          "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:bg-[var(--color-border)]/10"
        break

      case "ghost":
        variantClasses =
          "bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-border)]/20"
        break

      case "ai":
        variantClasses =
          "bg-purple-600 text-white hover:opacity-90 focus-visible:ring-purple-600"
        break
    }

    let sizeClasses = ""

    switch (size) {
      case "sm":
        sizeClasses = "h-8 px-3 text-sm"
        break
      case "md":
        sizeClasses = "h-10 px-4 text-sm"
        break
      case "lg":
        sizeClasses = "h-12 px-6 text-base"
        break
      case "xl":
        sizeClasses = "h-14 px-8 text-lg"
        break
    }

    return (
      <button
        ref={ref}
        className={`${base} ${variantClasses} ${sizeClasses} ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"