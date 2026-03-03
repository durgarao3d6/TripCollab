import { useState } from "react"

interface Props {
  onSend: (text: string) => void
}

export function CommentInput({ onSend }: Props) {

  const [value, setValue] = useState("")

  function handleSubmit() {
    if (!value.trim()) return
    onSend(value)
    setValue("")
  }

  return (
    <div className="flex items-center gap-2">

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write a comment..."
        className="
          flex-1 rounded-full border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          px-4 py-2 text-sm
          focus:outline-none
          focus:ring-2 focus:ring-[var(--color-primary)]/20
        "
      />

      <button
        onClick={handleSubmit}
        className="
          rounded-full px-4 py-2 text-sm font-medium
          bg-[var(--color-primary)]
          text-white
          hover:bg-[var(--color-primary-hover)]
        "
      >
        Send
      </button>

    </div>
  )
}
