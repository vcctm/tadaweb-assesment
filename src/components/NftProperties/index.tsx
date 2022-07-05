import { Box } from "@mui/material"
import PropertiesCard from "components/PropertiesCard"

interface INftPropertiesProps {}

const NftProperties = (props: INftPropertiesProps) => {
    return (
    <Box display={'flex'} gap={2} flexWrap={'wrap'}>
      <PropertiesCard propertyId="1234" property="Some" category="category" trait={0.2}/>
      <PropertiesCard propertyId="1234" property="Some" category="category" trait={0.2}/>
      <PropertiesCard propertyId="1234" property="Some" category="category" trait={0.2}/>
      <PropertiesCard propertyId="1234" property="Some" category="category" trait={0.2}/>
      <PropertiesCard propertyId="1234" property="Some" category="category" trait={0.2}/>
    </Box>
  )
}

export default NftProperties
