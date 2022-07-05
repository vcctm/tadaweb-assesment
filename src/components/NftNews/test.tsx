import { render, screen } from '@testing-library/react'

import NftNews from '.'

describe('<NftNews />', () => {
  it('should render the heading', () => {
    const { container } = render(<NftNews />)

    expect(screen.getByRole('heading', { name: /NftNews/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
