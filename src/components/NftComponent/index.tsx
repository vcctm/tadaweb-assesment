import { Box, Typography } from '@mui/material'
import Button from 'components/Button'
import NftImage from 'components/NftImage'
import NftTraits from 'components/NftTraits'
import { Link } from 'react-router-dom'
import { INftEntity } from 'types/nft'

interface INftComponentProps {
  nft?: INftEntity
}

const NftComponent = (props: INftComponentProps) => {
  const { nft } = props

  return (
    <Box
      gap={5}
      display={'-webkit-box'}
      flexWrap={'wrap'}
      flexDirection={'column'}>
        <Box display={'flex'} width={'100%'} gap={2} flexWrap={'wrap'}>
      <Box width={'fit-content'}>
        {' '}
        <NftImage
          backgroundUrl={nft?.nftImageUrl || ''}
          size='large'
          padding='8px'></NftImage>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        width={'fit-content'}>
        <Box marginBottom={2}>
          <Typography fontSize={24} color={'blue'}>
            {nft?.nftCollection || 'Emtpy Collection'}
          </Typography>
          <Typography lineHeight={'64px'} fontSize={40} fontWeight={'bold'}>
            {nft?.nftName || 'Empty Name'}
          </Typography>
        </Box>
        <Typography marginBottom={1} fontSize={24}>
          Owned by <b style={{ color: 'blue' }}>RandomName</b>
        </Typography>
        <Typography fontSize={24} fontWeight={'bold'}>
          Description
        </Typography>
        <Typography
          width={'100%'}
          display={'flex'}
          flexWrap={'wrap'}
          style={{ wordWrap: 'break-word' }}
          maxWidth={700}
          fontSize={24}>
          {nft?.nftDescription || 'Empty Description'}
        </Typography>
        <Link
          style={{
            color: 'unset',
            textDecoration: 'unset'
          }}
          to={`/edit-nft/${nft?.nftId}`}>
          <Button>EDIT</Button>
        </Link>
      </Box>
      </Box>
      <Box>
        <Typography fontSize={24} fontWeight={'bold'} marginBottom={2}>
          Properties
        </Typography>
        <NftTraits traits={nft?.nftTraits || null} />
      </Box>
    </Box>
  )
}

export default NftComponent
