import { ReactElement } from 'react'

import { RenderOptions, render as rtlRender } from '@testing-library/react'
import rtlUserEvent from '@testing-library/user-event'
import { vi } from 'vitest'

interface CustomRenderOptions extends RenderOptions {
  route?: string
}

const render = (element: ReactElement, { route = '/', ...options }: CustomRenderOptions = {}) => {
  window.history.pushState({}, 'Test page', route)

  return rtlRender(element, options)
}

const userEvent = rtlUserEvent.setup({ advanceTimers: vi.advanceTimersByTime })

export * from '@testing-library/react'
export * from 'vitest'
export { render, userEvent }
