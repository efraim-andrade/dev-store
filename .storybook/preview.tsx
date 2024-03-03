import React from 'react'
import '../src/styles/globals.css'

export const decorators = [
  (Story) => (
    <div className="relative">
      <Story />
    </div>
  )
]
