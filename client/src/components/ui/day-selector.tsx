import { useRef } from "react"

interface Day {
  id: string
  label: string   // Example: "Day 1 · Jan 5"
}

interface DaySelectorProps {
  days: Day[]
  activeDayId: string
  onChange: (dayId: string) => void
  onAddDay?: () => void
}

export function DaySelector({
  days,
  activeDayId,
  onChange,
  onAddDay
}: DaySelectorProps) {

  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative w-full">

      <div
        ref={containerRef}
        className="
          flex gap-3 overflow-x-auto pb-2
          scrollbar-none
        "
      >
        {days.map(day => {
          const isActive = day.id === activeDayId

          return (
            <button
              key={day.id}
              onClick={() => onChange(day.id)}
              className={`
                whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium
                transition-all duration-200
                ${isActive
                  ? "bg-[var(--color-primary)] text-white shadow-md"
                  : "bg-[var(--color-border)]/20 text-[var(--color-text-primary)] hover:bg-[var(--color-border)]/40"
                }
              `}
            >
              {day.label}
            </button>
          )
        })}

        {onAddDay && (
          <button
            onClick={onAddDay}
            className="
              whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium
              bg-transparent border border-dashed border-[var(--color-border)]
              text-[var(--color-text-secondary)]
              hover:bg-[var(--color-border)]/20
              transition-all
            "
          >
            + Add Day
          </button>
        )}
      </div>
    </div>
  )
}