import * as React from 'react'

export interface MyTextProps {
  children?: React.ReactNode
}

export function MyText({ children }: MyTextProps) {
  return (
    <div>
      My text
      {children}
    </div>
  )
}
