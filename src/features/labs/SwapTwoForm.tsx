import { Checkbox, Input } from '@/components/common'
import { useState } from 'react'

export function SwapTwoForm() {
  const [textFirstName, setTextFirstName] = useState('')
  const [textLastName, setTextLastName] = useState('')
  const [reverse, setReverse] = useState(false)

  function handleChangeInput(e: React.FormEvent<EventTarget>) {
    let target = e.target as HTMLInputElement
    if (target.getAttribute('placeholder') == 'First name') setTextFirstName(target.value)
    else setTextLastName(target.value)
  }

  function handleChangeCheckbox(e: React.FormEvent<EventTarget>) {
    let target = e.target as HTMLInputElement
    setReverse(target.checked)
  }

  return (
    <div className="flex flex-col text-left w-1/2 m-auto">
      {!reverse ? (
        <>
          <Input
            key="firstName"
            text={textFirstName}
            label="First name"
            onChange={handleChangeInput}
          />
          <Input
            key="lastName"
            text={textLastName}
            label="Last name"
            onChange={handleChangeInput}
          />
        </>
      ) : (
        <>
          <Input
            key="lastName"
            text={textLastName}
            label="Last name"
            onChange={handleChangeInput}
          />
          <Input
            key="firstName"
            text={textFirstName}
            label="First name"
            onChange={handleChangeInput}
          />
        </>
      )}

      <Checkbox label="Reverse order" status={reverse} onChange={handleChangeCheckbox} />
    </div>
  )
}
