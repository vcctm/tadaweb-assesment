import { render, screen } from '@testing-library/react'

import NftPropertiesEdit from '.'

describe('<NftPropertiesEdit />', () => {
  it('should render the heading', () => {
    const { container } = render(<NftPropertiesEdit />)

    expect(screen.getByRole('heading', { name: /NftPropertiesEdit/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
