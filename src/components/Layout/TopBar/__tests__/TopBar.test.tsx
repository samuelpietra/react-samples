import { render, screen } from '@/testUtils'

import { TopBar } from '../TopBar'

const setup = () => {
  render(<TopBar />)

  return {
    githubIcon: screen.getByRole('link', { name: 'FaGithub' })
  }
}

describe('TopBar', () => {
  test('SHOULD render correctly', () => {
    const { githubIcon } = setup()

    expect(screen.getByRole('banner')).toBeInTheDocument() // <header>
    expect(screen.getByLabelText('FaReact')).toBeInTheDocument()
    expect(screen.getByText('React Samples')).toBeInTheDocument()
    expect(githubIcon).toBeInTheDocument()
    expect(githubIcon).toHaveAttribute('href', 'https://github.com/samuelpietra/react-samples')
  })
})
