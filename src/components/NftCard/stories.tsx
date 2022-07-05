import { Typography } from '@mui/material'
import { Story, Meta } from '@storybook/react'
import NftCard from '.'

export default {
  title: 'NftCard',
  component: NftCard
} as Meta

export const Default: Story = () => (
  <NftCard ribbonColor={'#FF3737'} padding={'8px'} direction={'top'}>
    <Typography fontWeight={'bold'}>WZRDS</Typography>
    <Typography fontWeight={'medium'}>BY WZRDS_XYS</Typography>
  </NftCard>
)
