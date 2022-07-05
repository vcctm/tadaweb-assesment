import { Box } from '@mui/material'
import Button from 'components/Button'
import Logo from 'components/Logo'
import SearchBar from 'components/SearchBar'
import { Link } from 'react-router-dom'

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <Box
      mb={4}
      gap={2}
      display={'flex'}
      width={'100%'}
      justifyContent={'space-between'}
      alignItems={'center'}>
      <Logo />
      <SearchBar />
      <Link
      style={{
        color: 'unset',
        textDecoration: 'unset'
      }}
      to='/your-nfts'>
      <Button
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
