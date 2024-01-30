export interface SearchBarProps {
  query: string
  onChange: (e: React.FormEvent<EventTarget>) => void
}

export function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <div>
      <label>Search: </label>
      <input className="border px-3 py-1" value={query} onChange={onChange} />
    </div>
  )
}
