import { Box, Typography } from '@mui/material'
import MyNft from 'components/MyNft'
import { INftEntity } from 'types/nft'

interface IMyNftsProps {
  nfts?: INftEntity[]
}

const MyNfts = (props: IMyNftsProps) => {
  const { nfts } = props

  if (!nfts) {
    return <div>No NFTS created.</div>
  }
  return (
    <>
          <Typography lineHeight={'64px'} fontSize={40} fontWeight={'normal'}>
          Your
          <span style={{ fontWeight: 'bold' }}> NFTS:</span>
        </Typography>
    <Box display={'flex'} gap={2} flexWrap='wrap'>
      {nfts.map((nft) => (
        <MyNft nft={nft} />
      ))}
    </Box>
    </>
  )
}

export default MyNfts
