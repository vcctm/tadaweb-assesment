import { Story, Meta } from '@storybook/react'
import TextField from '.'

export default {
  title: 'TextField',
  component: TextField
} as Meta

export const Default: Story = () => (
  <TextField
    type='number'
    variant='filled'
    label={
      <span>
        <b>NFT</b> Name
      </span>
    }
  />
)
