import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import Button from 'components/Button'
import InfoCard from 'components/InfoCard'
import { Link } from 'react-router-dom'
import InfoImage from '../../assets/images/InfoImage.png'

interface IInfoSectionProps {}

const InfoSection = (props: IInfoSectionProps) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      display={'flex'}
      flexDirection={matches ? 'column' : 'row'}
      alignItems={matches ? 'center' : 'unset'}
      justifyContent={matches ? 'center' : 'space-between'}
      gap={2}
      mb={6}
    >
      <Box
        flexDirection={'column'}
        display={'flex'}
        alignItems={matches ? 'center' : 'start'}
        justifyContent={matches ? 'center' : 'start'}
        textAlign={matches ? 'center' : 'start'}
        >
        <Typography
          width={'100%'}
          display={'flex'}
          flexWrap={'wrap'}
          justifyContent={matches ? 'center' : 'start'}
          style={{ wordWrap: 'break-word' }}
          maxWidth={600}
          fontSize={48}>
          Create your own NFT and show the World!
        </Typography>
        <Typography
          marginBottom={4}
          width={'100%'}
          display={'flex'}
          flexWrap={'wrap'}
          gap={1}
          mb={2}
          justifyContent={matches ? 'center' : 'start'}
          style={{ wordWrap: 'break-word' }}
          fontSize={24}>
          The best <b>NFTs</b> on the world are here!
        </Typography>
        <Link
          style={{
            color: 'unset',
            textDecoration: 'unset'
          }}
          to='create-nft'>
          <Button
            style={{
              width: 'fit-content',
              fontSize: '12px',
              padding: '10px 46px'
            }}>
            CREATE NOW
          </Button>
        </Link>
        <Box
          marginTop={4}
          display={'flex'}
          width={'fit-content'}
          justifyContent={matches ? 'center' : 'start'}
          gap={6}>
          <InfoCard quantity={2} infoType={'Artists'} />
          <InfoCard quantity={7} infoType={'Sells'} />
          <InfoCard quantity={12} infoType={'NFTs'} />
        </Box>
      </Box>
      <Box
        alignContent={'center'}
        width={'fit-content'}
        justifyContent={matches ? 'center' : 'end'}
        >
        <Box
          component='img'
          sx={{
            borderRadius: '4px',
            height: 436,
            width: 396,
            objectFit: 'cover',
            maxHeight: { xs: 258, md: 436 },
            maxWidth: { xs: '100%', md: 396 }
          }}
          alt='The house from the offer.'
          src={InfoImage}
        />
      </Box>
    </Box>
  )
}

export default InfoSection
