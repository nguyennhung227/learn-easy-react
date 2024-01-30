import { FilterableListProps } from '@/components/common'

export interface ListProps {
  items: FilterableListProps[]
}

export function List({ items }: ListProps) {
  return (
    (items.length > 0 && (
      <table>
        <tbody>
          {items.map((item) => (
            <tr className="text-left" key={item.id}>
              <td className="p-5 border">{item.name}</td>
              <td className="p-5 border">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )) || <p>No data</p>
  )
}
