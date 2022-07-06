import { Box, Typography } from '@mui/material'
import NftImage from 'components/NftImage'
import { useIsMobile } from 'hook/isMobile'
import BAYCCover from '../../assets/images/collections/BAYC.png'
import CryptoPunksCover from '../../assets/images/collections/cryptopunks.png'
import GHNFTCover from '../../assets/images/collections/GodHatesNFTees.jpeg'

interface ILastCollectionsProps {}

const LastCollections = (props: ILastCollectionsProps) => {
  const isMobile = useIsMobile(1200)

  return (
    <Box display={'flex'} flexWrap={'wrap'} justifyContent={isMobile ? 'center' : 'space-between'} >
      <Box mb={4} display={'flex'}  flexWrap={'wrap'} gap={8}>
        <NftImage
          backgroundUrl={BAYCCover}
          direction='bottom'
          ribbonColor='#2c0202'
          size='small'
          padding='8px'>
          <Typography fontWeight={'bold'} color={'white'}>
            BAYC
          </Typography>
          <Typography fontSize={12} color={'white'}>
            BY BAYC
          </Typography>
        </NftImage>
        <NftImage
          backgroundUrl={CryptoPunksCover}
          direction='bottom'
          ribbonColor='#0b3e8b'
          size='small'
          padding='8px'>
          <Typography fontWeight={'bold'} color={'white'}>
            CryptoPunks
          </Typography>
          <Typography fontSize={12} color={'white'}>
            BY CryptoPunks
          </Typography>
        </NftImage>
        <NftImage
          backgroundUrl={GHNFTCover}
          direction='bottom'
          ribbonColor='#df1a1a'
          size='small'
          padding='8px'>
          <Typography fontWeight={'bold'} color={'white'}>
            GHNFtees
          </Typography>
          <Typography fontSize={12} color={'white'}>
            BY GHNFtees
          </Typography>
        </NftImage>
      </Box>
      <Box
        display={'flex'}
        width={isMobile ? '100%' : 'fit-content'}
        margin={4}
        justifyContent={'center'}
        alignItems={'center'}>
        <Typography fontWeight='bold'    maxWidth={300}      style={{ wordWrap: 'break-word' }}
 textAlign='center' fontSize='28px'>
          Check out our last NFT collections!
        </Typography>
      </Box>
    </Box>
  )
}

export default LastCollections
