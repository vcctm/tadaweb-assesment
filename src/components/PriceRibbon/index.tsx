import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { Box, Typography, useTheme } from '@mui/material'

interface IPriceRibbonProps {
  price?: string | number
}

const PriceRibbon = (props: IPriceRibbonProps) => {
  const { price } = props
  const theme = useTheme()
  if(!price) return <></>

  return (
    <Box display={'flex'} gap={1} sx={{
      backgroundColor: theme.palette.secondary.dark,
      alignContent: 'center',
      padding: '8px',
      width: 'fit-content',
      borderRadius: '8px'
    }}>
      <FontAwesomeIcon style={{color: 'white', fontSize: '20px'}} icon={faEthereum} />
      <Typography color={'white'}>{price}</Typography>
      <Typography color={'white'} fontWeight={'bold'}>ETH</Typography>
    </Box>
  )
}

export default PriceRibbon
