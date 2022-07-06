import { render, screen } from '@testing-library/react'

import PriceRibbon from '.'

describe('<PriceRibbon />', () => {
  it('should render the heading', () => {
    const { container } = render(<PriceRibbon />)

    expect(screen.getByRole('heading', { name: /PriceRibbon/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
