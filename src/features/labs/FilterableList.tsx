import { SearchBar } from '@/components/common/SearchBar'
import { List } from './List'
import { foods, filterItems } from '@/components/common'
import { useState } from 'react'

export function FilterableList() {
  const [query, setQuery] = useState('')
  const filterFoods = filterItems(foods, query)

  function handleChange(e: React.FormEvent<EventTarget>) {
    let target = e.target as HTMLInputElement
    setQuery(target.value)
  }
  return (
    <div>
      <SearchBar query={query} onChange={handleChange} />
      <br />
      <div className="p-5 border">
        <List items={filterFoods} />
      </div>
    </div>
  )
}
