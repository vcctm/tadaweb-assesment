import { Grid, Typography } from '@mui/material'
import NftImage from 'components/NftImage'
import cover from '../../assets/images/WZRDS31.png'

interface INftNewsProps {}

const NftNews = (props: INftNewsProps) => {
    return (
    <Grid container>
      <Typography>News NFTs</Typography>
      <Grid container item justifyContent={'space-between'}>
      <NftImage
        backgroundUrl={cover}
        direction="top"
        ribbonColor="#000000"
        size="large"
        padding="8px"
        >
          <Typography fontWeight={'bold'} color={'white'}>WZRDS #3</Typography>
          <Typography fontSize={12} color={'white'}>BY WZRDS</Typography>
        </NftImage>
        <NftImage
        backgroundUrl={cover}
        direction="top"
        ribbonColor="#000000"
        size="large"
        padding="8px"
        >
          <Typography fontWeight={'bold'} color={'white'}>WZRDS #3</Typography>
          <Typography fontSize={12} color={'white'}>BY WZRDS</Typography>
        </NftImage>
        <NftImage
        backgroundUrl={cover}
        direction="top"
        ribbonColor="#000000"
        size="large"
        padding="8px"
        >
          <Typography fontWeight={'bold'} color={'white'}>WZRDS #3</Typography>
          <Typography fontSize={12} color={'white'}>BY WZRDS</Typography>
        </NftImage>

      </Grid>
    </Grid>
  )
}

export default NftNews
