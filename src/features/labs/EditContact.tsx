import { Input } from '@/components/common'
import { useState } from 'react'
import { ContactItemProps } from './ResetDetailForm'

export interface EditContactProps {
  initialData: ContactItemProps
  onSave: (updatedData: ContactItemProps) => void
}

export function EditContact({ initialData, onSave }: EditContactProps) {
  const [name, setName] = useState(initialData.name)
  const [email, setEmail] = useState(initialData.email)

  function handleChangeName(e: React.FormEvent<EventTarget>) {
    let target = e.target as HTMLInputElement
    setName(target.value)
  }

  function handleChangeEmail(e: React.FormEvent<EventTarget>) {
    let target = e.target as HTMLInputElement
    setEmail(target.value)
  }

  return (
    <div>
      <Input key="name" label="Name" text={name} onChange={handleChangeName} />
      <Input key="email" label="Email" text={email} onChange={handleChangeEmail} />
      <button
        className="border border-black py-2 rounded-none focus:outline-none hover:outline-none hover:border-black"
        onClick={() => {
          const updatedData = {
            id: initialData.id,
            name: name,
            email: email,
          }
          onSave(updatedData)
        }}
      >
        Save
      </button>
      <button
        className="border border-black py-2 rounded-none focus:outline-none hover:outline-none hover:border-black"
        onClick={() => {
          setName(initialData.name)
          setEmail(initialData.email)
        }}
      >
        Reset
      </button>
    </div>
  )
}
