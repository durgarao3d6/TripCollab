type BadgeVariant =
  | "owner"
  | "editor"
  | "viewer"
  | "success"
  | "pending"
  | "ai"

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
}

export function Badge({ variant = "viewer", children }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wide"

  let styles = ""

  switch (variant) {
    case "owner":
      styles = "bg-[var(--color-accent)]/15 text-[var(--color-accent)]"
      break
    case "editor":
      styles = "bg-[var(--color-primary)]/15 text-[var(--color-primary)]"
      break
    case "viewer":
      styles = "bg-[var(--color-border)]/20 text-[var(--color-text-secondary)]"
      break
    case "success":
      styles = "bg-green-100 text-green-600"
      break
    case "pending":
      styles = "bg-yellow-100 text-yellow-600"
      break
    case "ai":
      styles = "bg-purple-100 text-purple-600"
      break
  }

  return <div className={`${base} ${styles}`}>{children}</div>
}