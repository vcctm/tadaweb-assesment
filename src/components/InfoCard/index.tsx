import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

interface IInfoCardProps {
  quantity: string | number
  infoType: string
}

const InfoCard = (props: IInfoCardProps) => {
  const { quantity, infoType } = props
  return (
    <Box width={'fit-content'} textAlign={'center'}>
      <Grid container justifyContent={'center'} alignItems={'center'}>
      <Typography fontSize={20}>+</Typography>
      <Typography fontWeight={'bold'} fontSize={40}>{quantity}</Typography>
      <Typography>K</Typography>
      </Grid>
      <Typography fontWeight={'light'} fontSize={16}>{infoType}</Typography>
    </Box>
  )
}

export default InfoCard
