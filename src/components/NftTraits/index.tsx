import { Box } from "@mui/material"
import NftTrait from "components/NftTrait"

interface INftTraitsProps {}

const NftTraits = (props: INftTraitsProps) => {
    return (
    <Box display={'flex'} gap={2} flexWrap={'wrap'}>
      <NftTrait id="1234" property="Some" category="category" rate={0.2}/>
      <NftTrait id="1234" property="Some" category="category" rate={0.2}/>
      <NftTrait id="1234" property="Some" category="category" rate={0.2}/>
      <NftTrait id="1234" property="Some" category="category" rate={0.2}/>
      <NftTrait id="1234" property="Some" category="category" rate={0.2}/>
    </Box>
  )
}

export default NftTraits
