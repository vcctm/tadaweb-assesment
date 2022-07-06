import { Story, Meta } from "@storybook/react";
import DateRibbon from '.'

export default {
  title: 'DateRibbon',
  component: DateRibbon
} as Meta

const today = new Date()

export const Default: Story = () => <DateRibbon date={today} />
