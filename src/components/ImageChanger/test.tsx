import { render, screen } from '@testing-library/react'

import ImageChanger from '.'

describe('<ImageChanger />', () => {
  it('should render the heading', () => {
    const { container } = render(<ImageChanger />)

    expect(screen.getByRole('heading', { name: /ImageChanger/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
