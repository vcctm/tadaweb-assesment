import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { Box, Typography, useTheme } from '@mui/material'

interface IDateRibbonProps {
  date?: Date | string
}

const DateRibbon = (props: IDateRibbonProps) => {
  const { date } = props
  const theme = useTheme()
  if(!date) return <></>

  return (
    <Box display={'flex'} gap={1} sx={{
      backgroundColor: theme.palette.grey[800],
      alignContent: 'center',
      padding: '16px',
      width: 'fit-content',
      borderRadius: '8px',
      alignItems: 'center'
    }}>
      <FontAwesomeIcon style={{color: 'white', fontSize: '20px'}} icon={faClock} />
      <Typography color={'white'}>{date?.toLocaleString()}</Typography>
    </Box>
  )
}

export default DateRibbon
