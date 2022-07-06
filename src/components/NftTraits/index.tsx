import { Box } from "@mui/material"
import NftTrait from "components/NftTrait"
import { INftTraitsEntity } from "types"

interface INftTraitsProps {
  traits?: INftTraitsEntity[] | null
}

const NftTraits = (props: INftTraitsProps) => {
  const { traits } = props
    return (
    <Box display={'flex'} gap={2} flexWrap={'wrap'}>
      {traits?.map(trait => <NftTrait key={trait.id} id={trait.id} name={trait.name} category={trait.category} rate={trait.rate}/>)}
          </Box>
  )
}

export default NftTraits
