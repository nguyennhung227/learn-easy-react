export interface ButtonProps {
  label: string
  onClick: () => void
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <div className="my-3">
      <button className="border p-2" onClick={onClick}>
        {label}
      </button>
    </div>
  )
}
