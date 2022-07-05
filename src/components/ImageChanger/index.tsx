import { Box } from '@mui/material'
import Button from 'components/Button'

interface IImageChangerProps {
  url?: string
  imageHandler?: (e: any) => void
}

const ImageChanger = (props: IImageChangerProps) => {
  const { url, imageHandler } = props

  return (
    <Box
      position="relative"
      width={'fit-content'}
    >
        <Button
          sx={{
            position: 'absolute',
            right: '0',
            padding: '8px 8px',
            fontSize: '12px',
            margin: '8px',
            border: '2px solid white'
          }}
        > <label htmlFor='imageFile'>CHANGE IMAGE</label></Button>
      <Box component='img' style={{
        objectFit: 'cover'
      }} src={url} width={400} height={500} display={'flex'} flexDirection='column' justifyContent={'center'} alignItems={'center'}>
      </Box>
      <input
        style={{
          display: 'none'
        }}
        type='file'
        id='imageFile'
        name='imageFile'
        onChange={imageHandler}></input>
    </Box>
  )
}

export default ImageChanger
