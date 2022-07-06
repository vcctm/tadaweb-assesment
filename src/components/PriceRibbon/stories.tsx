import { Story, Meta } from "@storybook/react";
import PriceRibbon from '.'

export default {
  title: 'PriceRibbon',
  component: PriceRibbon
} as Meta

export const Default: Story = () => <PriceRibbon price='0.003' />
