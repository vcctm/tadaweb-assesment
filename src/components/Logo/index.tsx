import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface ILogoProps {}

const Logo = (props: ILogoProps) => {
    return (
      <Link
      style={{
        color: 'unset',
        textDecoration: 'unset'
      }}
      to='/'>
        <Typography fontSize={32}><b>New</b>Token.</Typography>
      </Link>
  )
}

export default Logo
