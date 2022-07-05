import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import Button from 'components/Button'
import InfoCard from 'components/InfoCard'
import { Link } from 'react-router-dom'
import InfoImage from '../../assets/images/InfoImage.png'

interface IInfoSectionProps {}

const InfoSection = (props: IInfoSectionProps) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid container>
      <Grid
        item
        zeroMinWidth
        flexDirection={'column'}
        display={'flex'}
        xs={12}
        md={6}
        alignItems={matches ? 'center' : 'start'}
        justifyContent={matches ? 'center' : 'start'}
        textAlign={matches ? 'center' : 'start'}
        container>
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
        <Grid
          marginTop={4}
          display={'flex'}
          justifyContent={matches ? 'center' : 'start'}
          gap={6}>
          <InfoCard quantity={2} infoType={'Artists'} />
          <InfoCard quantity={7} infoType={'Sells'} />
          <InfoCard quantity={12} infoType={'NFTs'} />
        </Grid>
      </Grid>
      <Grid
        item
        display={'grid'}
        alignContent={'center'}
        xs={12}
        md={6}
        justifyContent={matches ? 'center' : 'end'}
        container>
        <Box
          component='img'
          sx={{
            height: 436,
            width: 396,
            maxHeight: { xs: 218, md: 436 },
            maxWidth: { xs: 198, md: 396 }
          }}
          alt='The house from the offer.'
          src={InfoImage}
        />
      </Grid>
    </Grid>
  )
}

export default InfoSection
