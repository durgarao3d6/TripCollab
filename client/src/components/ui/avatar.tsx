interface AvatarProps {
  src?: string
  name: string
  size?: "sm" | "md" | "lg"
}

export function Avatar({ src, name, size = "md" }: AvatarProps) {

  const sizeMap = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-lg",
  }

  return (
    <div
      className={`
        flex items-center justify-center
        rounded-full bg-[var(--color-border)]/30
        text-[var(--color-text-primary)]
        font-medium
        overflow-hidden
        ${sizeMap[size]}
      `}
    >
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        name.charAt(0).toUpperCase()
      )}
    </div>
  )
}