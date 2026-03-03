import { Avatar } from "../ui/avatar"

interface Comment {
  id: string
  author: {
    name: string
    avatar?: string
  }
  body: string
  timestamp: string
  parentId?: string
}

interface Props {
  comments: Comment[]
  onReply: (text: string, parentId?: string) => void
}

export function CommentThread({ comments, onReply }: Props) {

  const rootComments = comments.filter(c => !c.parentId)
  const replies = (parentId: string) =>
    comments.filter(c => c.parentId === parentId)

  return (
    <div className="flex flex-col gap-6">

      {rootComments.map(comment => (
        <div key={comment.id}>

          {/* Comment Bubble */}
          <div className="flex gap-3">
            <Avatar name={comment.author.name} src={comment.author.avatar} />

            <div className="flex flex-col gap-1">
              <div className="
                bg-[var(--color-border)]/20
                rounded-xl rounded-bl-none
                px-3 py-2
                text-sm
              ">
                <p className="font-semibold text-[var(--color-text-primary)]">
                  {comment.author.name}
                </p>
                <p className="text-[var(--color-text-primary)]">
                  {comment.body}
                </p>
              </div>

              <div className="text-xs text-[var(--color-text-secondary)] flex items-center gap-2">
                {comment.timestamp}
                <button
                  onClick={() => onReply("", comment.id)}
                  className="text-[var(--color-primary)] hover:underline text-xs"
                >
                  Reply
                </button>
              </div>
            </div>
          </div>

          {/* Replies */}
          <div className="ml-10 mt-4 flex flex-col gap-4">
            {replies(comment.id).map(reply => (
              <div key={reply.id} className="flex gap-3">

                <Avatar name={reply.author.name} src={reply.author.avatar} />

                <div>
                  <div className="
                    bg-[var(--color-border)]/20
                    rounded-xl rounded-bl-none
                    px-3 py-2 text-sm
                  ">
                    <p className="font-semibold text-[var(--color-text-primary)]">
                      {reply.author.name}
                    </p>
                    <p>{reply.body}</p>
                  </div>

                  <div className="text-xs text-[var(--color-text-secondary)] flex items-center gap-2">
                    {reply.timestamp}
                    <button
                      onClick={() => onReply("", reply.id)}
                      className="text-[var(--color-primary)] hover:underline text-xs"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}

    </div>
  )
}
