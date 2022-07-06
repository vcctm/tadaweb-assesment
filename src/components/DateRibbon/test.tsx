import { render, screen } from '@testing-library/react'

import DateRibbon from '.'

describe('<DateRibbon />', () => {
  it('should render the heading', () => {
    const { container } = render(<DateRibbon />)

    expect(screen.getByRole('heading', { name: /DateRibbon/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
