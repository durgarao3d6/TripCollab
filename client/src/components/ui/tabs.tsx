import { useState } from "react"

interface Tab {
  label: string
  value: string
}

interface TabsProps {
  tabs: Tab[]
  defaultValue?: string
  onChange?: (value: string) => void
}

export function Tabs({ tabs, defaultValue, onChange }: TabsProps) {

  const [active, setActive] = useState(defaultValue ?? tabs[0].value)

  function handleClick(value: string) {
    setActive(value)
    onChange?.(value)
  }

  return (
    <div className="border-b border-[var(--color-border)]">
      <div className="flex gap-6 overflow-x-auto">
        {tabs.map(tab => {
          const isActive = active === tab.value

          return (
            <button
              key={tab.value}
              onClick={() => handleClick(tab.value)}
              className={`
                relative pb-3 text-sm font-medium transition-colors
                ${isActive
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }
              `}
            >
              {tab.label}

              {isActive && (
                <span
                  className="
                    absolute bottom-0 left-0 h-[3px] w-full
                    bg-[var(--color-accent)]
                  "
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}