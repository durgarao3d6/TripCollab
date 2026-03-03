import { useEffect } from "react"
import { CommentThread } from "./CommentThread"
import { CommentInput } from "./CommentInput"

export interface Comment {
  id: string
  author: {
    name: string
    avatar?: string
  }
  body: string
  timestamp: string
  parentId?: string
}

interface CommentPanelProps {
  isOpen: boolean
  onClose: () => void
  comments: Comment[]
  activityTitle: string
  onSend: (text: string, parentId?: string) => void
}

export function CommentPanel({
  isOpen,
  onClose,
  comments,
  activityTitle,
  onSend
}: CommentPanelProps) {

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="
          relative z-10 flex flex-col
          w-full sm:w-[360px]
          h-full
          bg-[var(--color-surface)]
          shadow-2xl
          animate-in slide-in-from-right duration-200
        "
      >

        {/* Header */}
        <div className="border-b border-[var(--color-border)] p-4">
          <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
            Comments
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Commenting on: {activityTitle}
          </p>
        </div>

        {/* Thread */}
        <div className="flex-1 overflow-y-auto p-4">
          <CommentThread
            comments={comments}
            onReply={onSend}
          />
        </div>

        {/* Input */}
        <div className="border-t border-[var(--color-border)] p-3">
          <CommentInput onSend={onSend} />
        </div>

      </div>
    </div>
  )
}
