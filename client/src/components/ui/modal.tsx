import { useEffect } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <div
        className="
          relative z-10 w-full max-w-lg rounded-2xl
          bg-[var(--color-surface)]
          p-6 shadow-2xl
          animate-in fade-in zoom-in duration-200
        "
      >
        {title && (
          <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
            {title}
          </h2>
        )}

        {children}
      </div>
    </div>
  )
}