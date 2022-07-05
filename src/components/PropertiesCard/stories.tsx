import { Story, Meta } from '@storybook/react'
import PropertiesCard from '.'

export default {
  title: 'PropertiesCard',
  component: PropertiesCard
} as Meta

export const Default: Story = (args) => (
  <PropertiesCard
    {...args}
    propertyId='property1'
    category='category'
    property='property'
    trait={1}
  />
)
