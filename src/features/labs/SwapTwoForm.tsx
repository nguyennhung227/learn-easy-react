import { Checkbox, Field } from '@/components/common'
import { useState } from 'react'

export function SwapTwoForm() {
  const [reverse, setReverse] = useState(false)

  function handleChangeCheckbox(e: React.FormEvent<EventTarget>) {
    let target = e.target as HTMLInputElement
    setReverse(target.checked)
  }

  return (
    <div className="flex flex-col text-left w-1/2 m-auto">
      {!reverse ? (
        <>
          <Field key="firstName" label="First name" />
          <Field key="lastName" label="Last name" />
        </>
      ) : (
        <>
          <Field key="lastName" label="Last name" />
          <Field key="firstName" label="First name" />
        </>
      )}

      <Checkbox label="Reverse order" status={reverse} onChange={handleChangeCheckbox} />
    </div>
  )
}
