import { Box } from "@mui/material";
import InfoSection from "components/InfoSection";
import LastCollections from "components/LastCollections";
import NftNews from "components/NftNews";

const HomePage = () => {
  
  return (
    <Box display={'flex'} flexDirection={'column'} gap={6}>
      <InfoSection/>
      <LastCollections/>
      <NftNews/>
    </Box>
  )
}

export default HomePage;