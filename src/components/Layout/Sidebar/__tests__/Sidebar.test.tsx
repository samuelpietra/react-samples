/* eslint-disable testing-library/no-container */
import { MemoryRouter } from 'react-router-dom'

import { render, screen } from '@/testUtils'

import NAVIGATION_ITEMS from '../../navigation-items'
import { Sidebar } from '../Sidebar'

describe('Sidebar', () => {
  test('SHOULD render correctly', () => {
    render(<Sidebar items={NAVIGATION_ITEMS} />, { wrapper: MemoryRouter })

    expect(screen.getByRole('complementary')).toBeInTheDocument() // <aside>
    expect(screen.getByRole('list')).toBeInTheDocument() // <ul>
    expect(screen.getAllByRole('listitem')).toHaveLength(NAVIGATION_ITEMS.length) // <li>

    const labels = NAVIGATION_ITEMS.map((item) => screen.getByText(item.label))

    for (const label of labels) {
      expect(label).toBeInTheDocument()
    }
  })
})
