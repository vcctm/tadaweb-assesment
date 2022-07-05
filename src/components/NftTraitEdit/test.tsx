import { render, screen } from '@testing-library/react'

import NftTraitEdit from '.'

describe('<NftTraitEdit />', () => {
  it('should render the heading', () => {
    const { container } = render(<NftTraitEdit />)

    expect(screen.getByRole('heading', { name: /NftTraitEdit/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
