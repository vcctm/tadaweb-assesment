import { Story, Meta } from '@storybook/react'
import NftTrait from '.'

export default {
  title: 'NftTrait',
  component: NftTrait
} as Meta

export const Default: Story = (args) => (
  <NftTrait
    {...args}
    propertyId='property1'
    category='category'
    property='property'
    trait={1}
  />
)
