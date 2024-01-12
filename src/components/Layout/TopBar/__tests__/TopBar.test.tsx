import { render, screen } from '@/testUtils'

import { TopBar } from '../TopBar'

describe('TopBar', () => {
  test('SHOULD render correctly', () => {
    render(<TopBar />)

    expect(screen.getByRole('banner')).toBeInTheDocument() // <header>
    expect(screen.getByRole('img')).toBeInTheDocument() // react logo
    expect(screen.getByText('React Samples')).toBeInTheDocument()
  })
})
