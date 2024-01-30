export interface FieldProps {
  key: string
  label: string
}

export function Field({ key, label }: FieldProps) {
  return (
    <div className="my-3">
      <label>{label}: </label>
      <input key={key} placeholder={label} className="border p-2" />
    </div>
  )
}
