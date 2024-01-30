import * as React from 'react'

export interface InputProps {
  label: string
  text: string
  onChange: (e: React.FormEvent<EventTarget>) => void
}

export function Input({ label, text, onChange }: InputProps) {
  return (
    <div className="my-3">
      <label>{label}: </label>
      <input placeholder={label} className="border p-2" value={text} onChange={onChange} />
    </div>
  )
}
