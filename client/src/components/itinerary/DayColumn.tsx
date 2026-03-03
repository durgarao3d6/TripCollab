import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable"

import { SortableActivity } from "./SortableActivity"

interface DayColumnProps {
  dayId: string
  activities: { id: string; title: string }[]
}

export function DayColumn({ dayId, activities }: DayColumnProps) {

  return (
    <div className="flex flex-col gap-3">

      <SortableContext
        items={activities.map(a => a.id)}
        strategy={verticalListSortingStrategy}
      >
        {activities.map(activity => (
          <SortableActivity
            key={activity.id}
            id={activity.id}
            activity={activity}
          />
        ))}
      </SortableContext>

    </div>
  )
}
