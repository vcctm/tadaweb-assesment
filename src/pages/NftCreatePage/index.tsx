/* eslint-disable react-hooks/exhaustive-deps */
import NftCreatorEditor from 'components/NftCreatorEditor'
import { useContext, useEffect } from 'react'
import {NftEditPageContext, NftEditPageProvider } from 'store/CreateEditStates'
import { INftEntity } from 'types/nft'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'

const NftCreatePageRender = () => {
  const {fetchNft} = useContext(NftEditPageContext)
  useEffect(() => {
    const initialNft: INftEntity = {
      nftId: uuidv4(),
      nftCollection: '',
      nftDateSale: dayjs().format("YYYY-MM-DD"),
      nftImageUrl: '',
      nftDescription: '',
      nftName: '',
      nftPrice: '',
      nftTraits: []
    }
    fetchNft && fetchNft(initialNft)
  }, [])

  return (
    <NftCreatorEditor />
  )
}

const NftEditPage = () => {
  return (
    <NftEditPageProvider nft={null}>
      <NftCreatePageRender/>
    </NftEditPageProvider>
  )
}

export default NftEditPage
