import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { ActivityCard } from "../ui/activity-card"

interface Props {
  id: string
  activity: {
    id: string
    title: string
  }
}

export function SortableActivity({ id, activity }: Props) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ActivityCard
        title={activity.title}
        isDragging={isDragging}
      />
    </div>
  )
}
