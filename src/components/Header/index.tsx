import { Grid } from '@mui/material'
import Button from 'components/Button'
import Logo from 'components/Logo'
import SearchBar from 'components/SearchBar'

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <Grid item width={'100%'} container justifyContent={'center'} alignItems={'center'} spacing={2}>
      <Grid display={'flex'} justifyContent={'start'} item xs={12} md={2}>
        {' '}
        <Logo />
      </Grid>
      <Grid item xs={12} md={8}>
        {' '}
        <SearchBar />
      </Grid>
      <Grid display={'flex'} justifyContent={'center'} item xs={12} md={2}>
        {' '}
        <Button fullWidth>LOGIN</Button>
      </Grid>
    </Grid>
  )
}

export default Header
