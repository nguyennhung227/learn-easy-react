export interface FieldProps {
  label: string
}

export function Field({ label }: FieldProps) {
  return (
    <div className="my-3">
      <label>{label}: </label>
      <input placeholder={label} className="border p-2" />
    </div>
  )
}
