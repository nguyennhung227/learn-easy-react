import { useState } from 'react'

export function FixDisappearingInput() {
  const [hide, setHide] = useState(false)
  const [text, setText] = useState('')

  function handleClickHide() {
    setHide(!hide)
  }

  function handleChange(e: React.FormEvent<EventTarget>) {
    let target = e.target as HTMLInputElement
    setText(target.value)
  }

  return (
    <div className="my-5">
      {!hide && <p>Hint: Your favorite city?</p>}

      <textarea value={text} onChange={handleChange} className="border border-black p-3 my-2" />
      <br />
      <button className="border border-black py-1" onClick={handleClickHide}>
        {hide ? 'Show hint' : 'Hide hint'}
      </button>
    </div>
  )
}
