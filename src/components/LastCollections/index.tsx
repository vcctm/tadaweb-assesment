import { Grid, Typography } from "@mui/material"
import NftImage from "components/NftImage"
import cover from '../../assets/images/WZRDS31.png'

interface ILastCollectionsProps {}

const LastCollections = (props: ILastCollectionsProps) => {
    return (
    <Grid container>
      <Grid item md={6} xs={12} display={'flex'} gap={4}>
        <NftImage
        backgroundUrl={cover}
        direction="bottom"
        ribbonColor="#df1a1a"
        size="small"
        padding="8px"
        >
          <Typography fontWeight={'bold'} color={'white'}>WZRDS #3</Typography>
          <Typography fontSize={12} color={'white'}>BY WZRDS</Typography>
        </NftImage>
        <NftImage
        backgroundUrl={cover}
        direction="bottom"
        ribbonColor="#df1a1a"
        size="small"
        padding="8px"
        >
          <Typography fontWeight={'bold'} color={'white'}>WZRDS #3</Typography>
          <Typography fontSize={12} color={'white'}>BY WZRDS</Typography>
        </NftImage>
        <NftImage
        backgroundUrl={cover}
        direction="bottom"
        ribbonColor="#df1a1a"
        size="small"
        padding="8px"
        >
          <Typography fontWeight={'bold'} color={'white'}>WZRDS #3</Typography>
          <Typography fontSize={12} color={'white'}>BY WZRDS</Typography>
        </NftImage>
      </Grid>
      <Grid item md={6} xs={12}>
      <Typography>Below</Typography>
      </Grid>
    </Grid>
  )
}

export default LastCollections
