import * as React from 'react'

export interface WidgetProps {
  title: string
  children: React.ReactNode
}

export function Widget({ title, children }: WidgetProps) {
  return (
    <div className="widgetContainer">
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="widgetContent">{children}</div>
    </div>
  )
}
