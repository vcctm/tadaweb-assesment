import { Typography } from '@mui/material'
import { Story, Meta } from '@storybook/react'
import NftImage from '.'
import YEAHTIGERS4 from '../../assets/images/YEAHTIGERS4.png'

export default {
  title: 'NftImage',
  component: NftImage
} as Meta

export const Default: Story = () => (
  <NftImage padding={'8px'} ribbonColor='#FF3737' size={'medium'} direction='top' backgroundUrl={YEAHTIGERS4}>
    <Typography fontSize={14} color={'white'} fontWeight={'bold'}>WZRDS</Typography>
    <Typography fontSize={12} color={'white'} fontWeight={'light'}>BY WZRDS_XYS</Typography>
  </NftImage>
)
