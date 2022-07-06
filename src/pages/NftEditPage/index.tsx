/* eslint-disable react-hooks/exhaustive-deps */
import NftCreatorEditor from 'components/NftCreatorEditor'
import { useContext, useEffect,  } from 'react'
import { useParams } from 'react-router-dom'
import { NftEditPageContext, NftEditPageProvider } from 'store/CreateEditStates'
import { INftEntity } from 'types/nft'


const NftEditPageRender = ({nftId} : {nftId: string | undefined}) => {
  const actualNft = JSON.parse(localStorage['yourNfts']).find((nft: INftEntity) => nft.nftId === nftId)
  const {fetchNft} = useContext(NftEditPageContext)
  useEffect(() => {
    fetchNft && fetchNft(actualNft ? actualNft : null)
  }, [])

  return (
    <NftCreatorEditor  editing />
  )
}

const NftEditPage = () => {
  const { nftId } = useParams()
  

  if (!nftId) {
    return <></>
  }

  return (
    <NftEditPageProvider nft={null}>
      <NftEditPageRender nftId={nftId}/>
    </NftEditPageProvider>
  )
}

export default NftEditPage
