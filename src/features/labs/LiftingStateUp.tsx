import { Input } from '@/components/common'
import { useState } from 'react'

export function LiftingStateUp() {
  const [text, setText] = useState('')

  function handleChange(e: React.FormEvent<EventTarget>) {
    let target = e.target as HTMLInputElement
    setText(target.value)
  }

  return (
    <div>
      <Input label="Firt name" text={text} onChange={handleChange}></Input>
      <br />
      <Input label="Last name" text={text} onChange={handleChange}></Input>
    </div>
  )
}
