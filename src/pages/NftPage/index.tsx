import NftComponent from "components/NftComponent";
import { useParams } from "react-router-dom";
import { INftEntity } from "types/nft";

const NftPage = () => {
  const {nftId} = useParams()
  const actualNft = JSON.parse(localStorage['yourNfts']).find((nft: INftEntity) => nft.nftId === nftId)

  
  return (
    <>
      <NftComponent nft={actualNft} />
    </>
  )
}

export default NftPage;