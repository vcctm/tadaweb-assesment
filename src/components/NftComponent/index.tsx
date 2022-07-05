import { Box, Typography } from '@mui/material'
import Button from 'components/Button'
import NftImage from 'components/NftImage'
import NftProperties from 'components/NftProperties'
import NftCover from '../../assets/images/YEAHTIGERS4.png'

interface INftComponentProps {}

const NftComponent = (props: INftComponentProps) => {
  return (
    <Box gap={5} display={'-webkit-box'} flexWrap={'wrap'} flexDirection={'column'}>
      <Box width={'fit-content'}>
        {' '}
        <NftImage
          backgroundUrl={NftCover}
          size='large'
          padding='8px'></NftImage>
      </Box>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} width={'fit-content'}>
        <Box marginBottom={2}>
          <Typography fontSize={24} color={'blue'}>
            Yeah Tigers
          </Typography>
          <Typography lineHeight={'64px'} fontSize={40} fontWeight={'bold'}>
            YEAHTIGERS #2
          </Typography>
        </Box>
        <Typography marginBottom={1} fontSize={24}>
          Owned by <b style={{ color: 'blue' }}>RandomName</b>
        </Typography>
        <Typography fontSize={24} fontWeight={'bold'}>
          Descritpion
        </Typography>
        <Typography           
          width={'100%'}
          display={'flex'}
          flexWrap={'wrap'}
          style={{ wordWrap: 'break-word' }}
          maxWidth={700} fontSize={24}>
          Yeah, Tigers is a brand. A beautiful brand built on the love of
          tigers, with a collection of 10,000 unique Yeah Tigers. By the
          community, for Solana lovers.
        </Typography>
        <Button>EDIT</Button>
      </Box>
      <Box>
      <Typography fontSize={24} fontWeight={'bold'} marginBottom={2}>
          Properties
        </Typography>
      <NftProperties/>
      </Box>
    </Box>
  )
}

export default NftComponent
