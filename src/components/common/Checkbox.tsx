import * as React from 'react'

export interface CheckboxProps {
  label: string
  status: boolean
  onChange: (e: React.FormEvent<EventTarget>) => void
}

export function Checkbox({ label, status, onChange }: CheckboxProps) {
  return (
    <div className="my-3">
      <label>
        <input className="mx-1" type="checkbox" checked={status} onChange={onChange} />
        {label}
      </label>
    </div>
  )
}
