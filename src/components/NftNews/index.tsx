import { Box, Typography } from '@mui/material'
import NftImage from 'components/NftImage'
import cover from '../../assets/images/WZRDS31.png'
import coverTwo from '../../assets/images/srpeter2.png'
import coverThree from '../../assets/images/bayc2.png'
import { useIsMobile } from 'hook/isMobile'

interface INftNewsProps {}

const NftNews = (props: INftNewsProps) => {
  const isMobile = useIsMobile('md')
  const isTablet = useIsMobile('lg')
    return (
    <Box>
      <Typography fontWeight={'bold'} fontSize={'24px'}>News NFTs</Typography>
      <Box display={'flex'} flexWrap={'wrap'} justifyContent={isTablet ? 'center' : 'unset'} flexDirection={isMobile ? 'column' : 'row'} gap={2}>
      <NftImage
        backgroundUrl={cover}
        direction="top"
        ribbonColor="#000000"
        size={isTablet ? "medium" : "large"}
        padding="8px"
        >
            <Typography fontWeight={'bold'} color={'white'}>WZRDS #3</Typography>
          <Typography fontSize={12} color={'white'}>BY WZRDS</Typography>
        </NftImage>
        <NftImage
        backgroundUrl={coverTwo}
        direction="top"
        ribbonColor="#000000"
        size={isTablet ? "medium" : "large"}
        padding="8px"
        >
                  <Typography fontWeight={'bold'} color={'white'}>#003</Typography>
          <Typography fontSize={12} color={'white'}>BY SRPETER</Typography>
        </NftImage>
        <NftImage
        backgroundUrl={coverThree}
        direction="top"
        ribbonColor="#000000"
        size={isTablet ? "medium" : "large"}
        padding="8px"
        >
          <Typography fontWeight={'bold'} color={'white'}>#0015</Typography>
          <Typography fontSize={12} color={'white'}>BY BAYC</Typography>
        </NftImage>

      </Box>
    </Box>
  )
}

export default NftNews
