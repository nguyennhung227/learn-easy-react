import { ContactItemProps } from './ResetDetailForm'

export interface ContactListProps {
  contacts: ContactItemProps[]
  selectedId: number
  onSelect: (id: number) => void
}

export function ContactList({ contacts, selectedId, onSelect }: ContactListProps) {
  return (
    <section>
      <ul className="flex mx-auto justify-center w-1/2">
        {contacts.map((contact) => (
          <li key={contact.id} className="mx-2">
            <button
              className="border border-black py-2 rounded-none focus:outline-none hover:outline-none hover:border-black"
              onClick={() => {
                onSelect(contact.id)
              }}
            >
              {contact.id == selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
