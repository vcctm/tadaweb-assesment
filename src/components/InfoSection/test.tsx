import { render, screen } from '@testing-library/react'

import InfoSection from '.'

describe('<InfoSection />', () => {
  it('should render the heading', () => {
    const { container } = render(<InfoSection />)

    expect(screen.getByRole('heading', { name: /InfoSection/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
