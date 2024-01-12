import { render, screen } from '@/testUtils'
import SandboxPage from '../Sandbox'

describe('SandboxPage', () => {
  test('SHOULD render correctly', () => {
    render(<SandboxPage />)

    const [viteLogo, reactLogo] = screen.getAllByRole('img')

    expect(viteLogo).toBeInTheDocument()
    expect(reactLogo).toBeInTheDocument()
    expect(screen.getByText('Vite + React')).toBeInTheDocument()

    screen.debug()
  })
})
