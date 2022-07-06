import { Box } from '@mui/material'
import Button from 'components/Button'
import Logo from 'components/Logo'
import { useIsMobile } from 'hook/isMobile'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const isMobile = useIsMobile('md')
  const href = useLocation()

  return (
    <Box
      mb={4}
      gap={2}
      display={'flex'}
      width={'100%'}
      flexDirection={isMobile ? 'column' : 'unset'}
      justifyContent={'space-between'}
      flexWrap={'wrap'}
      alignItems={'center'}>
      <Logo />     
      <Link
      style={{
        color: 'unset',
        textDecoration: 'unset',
        width: isMobile ? '100%' : 'unset'

      }}
      to='/your-nfts'>
      <Button
      fullWidth={isMobile}
        sx={{
          fontSize: '12px'
        }}>
        NFTS
      </Button>
      </Link>
    </Box>
  )
}

export default Header
