import {
  DndContext,
  closestCorners,
} from "@dnd-kit/core"
import type { DragEndEvent } from "@dnd-kit/core"

import { useState } from "react"
import { DayColumn } from "./DayColumn"

interface Activity {
  id: string
  title: string
}

interface Day {
  id: string
  title: string
  activities: Activity[]
}

interface Props {
  initialDays: Day[]
}

export function DragDropBoard({ initialDays }: Props) {

  const [days, setDays] = useState(initialDays)

  function findDayByActivityId(activityId: string) {
    return days.find(day =>
      day.activities.some(a => a.id === activityId)
    )
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (!over) return
    if (active.id === over.id) return

    const sourceDay = findDayByActivityId(active.id as string)
    const targetDay = findDayByActivityId(over.id as string)

    if (!sourceDay || !targetDay) return

    const sourceActivities = [...sourceDay.activities]
    const targetActivities = [...targetDay.activities]

    const activeIndex = sourceActivities.findIndex(a => a.id === active.id)
    const overIndex = targetActivities.findIndex(a => a.id === over.id)

    const [movedActivity] = sourceActivities.splice(activeIndex, 1)

    if (sourceDay.id === targetDay.id) {
      targetActivities.splice(overIndex, 0, movedActivity)
    } else {
      targetActivities.splice(overIndex, 0, movedActivity)
    }

    setDays(prev =>
      prev.map(day => {
        if (day.id === sourceDay.id)
          return { ...day, activities: sourceActivities }
        if (day.id === targetDay.id)
          return { ...day, activities: targetActivities }
        return day
      })
    )
  }

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {days.map(day => (
          <div key={day.id}>
            <h3 className="mb-4 text-lg font-semibold text-[var(--color-text-primary)]">
              {day.title}
            </h3>

            <DayColumn
              dayId={day.id}
              activities={day.activities}
            />
          </div>
        ))}

      </div>
    </DndContext>
  )
}
