import { type HTMLAttributes } from "react"

type Category =
  | "transport"
  | "hotel"
  | "food"
  | "sightseeing"
  | "adventure"
  | "shopping"
  | "other"

interface ActivityCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  time?: string
  location?: string
  cost?: number
  category?: Category
  isDragging?: boolean
}

export function ActivityCard({
  title,
  time,
  location,
  cost,
  category = "other",
  isDragging = false,
  className = "",
  ...props
}: ActivityCardProps) {

  const categoryColors: Record<Category, string> = {
    transport: "#3B82F6",
    hotel: "#8B5CF6",
    food: "#E8542A",
    sightseeing: "#F5A623",
    adventure: "#1B9963",
    shopping: "#EC4899",
    other: "#64748B",
  }

  const dragStyle = isDragging
    ? "opacity-70 border-dashed"
    : "hover:shadow-lg"

  return (
    <div
      style={{ borderLeft: `4px solid ${categoryColors[category]}` }}
      className={`
        relative rounded-xl border border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-4 transition-all duration-200
        ${dragStyle}
        ${className}
      `}
      {...props}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          {time && (
            <p className="text-xs uppercase tracking-wide text-[var(--color-text-secondary)]">
              {time}
            </p>
          )}

          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            {title}
          </h3>

          {location && (
            <p className="text-sm text-[var(--color-text-secondary)]">
              📍 {location}
            </p>
          )}
        </div>

        {cost !== undefined && (
          <div className="text-sm font-medium text-[var(--color-text-primary)]">
            ₹ {cost}
          </div>
        )}
      </div>
    </div>
  )
}