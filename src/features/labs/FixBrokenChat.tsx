import { useRef, useState } from 'react'

export function FixBrokenChat() {
  const [isSending, setIsSending] = useState(false)
  const [text, setText] = useState('')
  const timeoutRef: any = useRef(null)

  function handleSend() {
    setText('')
    setIsSending(true)
    timeoutRef.current = setTimeout(() => {
      alert('Sent message')
      setIsSending(false)
    }, 3000)
  }

  function handleUndo() {
    setIsSending(false)
    clearInterval(timeoutRef.current)
  }

  function handleChange(e: React.FormEvent<EventTarget>) {
    let target = e.target as HTMLInputElement
    setText(target.value)
  }

  return (
    <div>
      <input
        className="border border-black p-3 mx-3"
        value={text}
        disabled={isSending}
        onChange={handleChange}
      />
      <button disabled={isSending} className="mx-2 border-black" onClick={handleSend}>
        Send
      </button>
      {isSending && (
        <button className="mx-2 border-black" onClick={handleUndo}>
          Undo
        </button>
      )}
    </div>
  )
}
