import { Box, Typography } from '@mui/material'
import MyNft from 'components/MyNft'
import { useState } from 'react'
import { INftEntity } from 'types/nft'

interface IMyNftsProps {
  nfts?: INftEntity[]
}

const MyNfts = (props: IMyNftsProps) => {
  const { nfts } = props
  const [myNfts, setMyNfts] = useState(nfts)

  if (!nfts || nfts.length <= 0) {
    return <div>No NFTS created.</div>
  }

  return (
    <>
      <Typography lineHeight={'64px'} fontSize={40} fontWeight={'normal'}>
        Your
        <span style={{ fontWeight: 'bold' }}> NFTS:</span>
      </Typography>
      <Box display={'flex'} gap={2} flexWrap='wrap'>
        {myNfts?.map((nft) => (
          <MyNft nft={nft} removeNftFromState={(myNft) => setMyNfts(myNfts?.filter(nft => nft.nftId !== myNft.nftId))} />
        ))}
      </Box>
    </>
  )
}

export default MyNfts
