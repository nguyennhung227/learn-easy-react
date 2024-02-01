import { ContactList } from './ContactList'
import { useState } from 'react'
import { EditContact } from './EditContact'

export interface ContactItemProps {
  id: number
  name: string
  email: string
}

const initialContacts: ContactItemProps[] = [
  { id: 1, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 2, name: 'Alice', email: 'alice@mail.com' },
  { id: 3, name: 'Bob', email: 'bob@mail.com' },
]

export function ResetDetailForm() {
  const [contacts, setContacts] = useState(initialContacts)
  const [selectedId, setSelectedId] = useState(1)

  const selectedContact = contacts.find((c) => c.id === selectedId) ?? {
    id: 1,
    name: 'Taylor',
    email: 'taylor@mail.com',
  }
  console.log(selectedContact)

  function handleSelectContact(id: number) {
    setSelectedId(id)
  }

  function handleSaveContact(updatedData: ContactItemProps) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData
      } else {
        return c
      }
    })
    setContacts(nextContacts)
    console.log(nextContacts)
  }

  return (
    <div>
      <ContactList contacts={contacts} selectedId={selectedId} onSelect={handleSelectContact} />
      <hr />
      <EditContact key={selectedId} initialData={selectedContact} onSave={handleSaveContact} />
    </div>
  )
}
