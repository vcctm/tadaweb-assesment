import { Box, Typography } from '@mui/material'
import Button from 'components/Button'
import NftImage from 'components/NftImage'
import NftTraits from 'components/NftTraits'
import PriceRibbon from 'components/PriceRibbon'
import { useIsMobile } from 'hook/isMobile'
import { Link } from 'react-router-dom'
import { INftEntity } from 'types/nft'

import unanmedAvatar from 'assets/images/unnamed.png'
import { INftTraitsEntity } from 'types'
import DateRibbon from 'components/DateRibbon'


interface INftComponentProps {
  nft?: INftEntity
}

const NftComponent = (props: INftComponentProps) => {
  const { nft } = props

  const isMobile = useIsMobile('md')

  return (
    <Box
      gap={5}
      display={'-webkit-box'}
      flexWrap={'wrap'}
      flexDirection={'column'}>
      <Box display={'flex'} width={'100%'} gap={2} flexDirection={isMobile ? 'column': 'row'} flexWrap={'wrap'}>
        <Box width={isMobile ? '100%': 'fit-content'}>
          {' '}
          <NftImage
            backgroundUrl={nft?.nftImageUrl || unanmedAvatar}
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
            <Typography marginBottom={1} fontSize={14}>
              ID: <b style={{ color: 'blue' }}>{nft?.nftId}</b>
            </Typography>
            <Typography mt={4} fontWeight={'bold'} fontSize={16} color={'black'}>
              {nft?.nftDateSale ? 'Sale ends:' : 'Empty date' }
            </Typography>
            <DateRibbon date={nft?.nftDateSale}/>
          </Box>
          <Box>
            <Typography fontWeight={'bold'} marginBottom={1} fontSize={16}>
              Price
            </Typography>
            {nft?.nftPrice ? <PriceRibbon price={nft?.nftPrice} /> : <Typography>No price</Typography>}
          </Box>
          <Box>
            <Typography fontSize={24} fontWeight={'bold'}>
              Description
            </Typography>
            <Typography
              width={'100%'}
              display={'flex'}
              flexWrap={'wrap'}
              style={{ wordWrap: 'break-word' }}
              maxWidth={700}
              fontSize={16}>
              {nft?.nftDescription || 'Empty Description'}
            </Typography>
          </Box>
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
        {(nft?.nftTraits as INftTraitsEntity[]).length > 0 ? <NftTraits traits={nft?.nftTraits || null} /> :
        <Typography fontSize={14} fontWeight={'regular'} marginBottom={2}>
          No properties
        </Typography>}
      </Box>
    </Box>
  )
}

export default NftComponent
