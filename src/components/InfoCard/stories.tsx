import { Story, Meta } from "@storybook/react";
import InfoCard from '.'

export default {
  title: 'InfoCard',
  component: InfoCard
} as Meta

export const Default: Story = () => <InfoCard infoType={'Artists'} quantity={10}/>
