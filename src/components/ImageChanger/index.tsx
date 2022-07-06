import { Box, Typography } from '@mui/material'
import {motion} from 'framer-motion'
import { useIsMobile } from 'hook/isMobile'

interface IImageChangerProps {
  url?: string
  imageHandler?: (e: any) => void
}

const ImageChanger = (props: IImageChangerProps) => {
  const { url, imageHandler } = props

  const isMobile = useIsMobile('sm')

  return (
    <Box
      position="relative"
      width={'fit-content'}
    ><label htmlFor='imageFile'>
        <motion.label
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }} whileHover={{ scale: 1.02 }}
          htmlFor='imageFile'
          style={{
            position: 'absolute',
            right: '0',
            fontSize: '12px',
            margin: '8px',
            backgroundColor: 'red',
            color: 'white',
            padding: '8px',
            border: '1px solid white',
            borderRadius: '4px'
          }}
        ><Typography color={'white'} fontSize='12px'>CHANGE IMAGE</Typography></motion.label></label>
      <Box component='img' style={{
        objectFit: 'cover',
        width: isMobile ? '100%' : '400px'
      }} src={url}  height={500} display={'flex'} flexDirection='column' justifyContent={'center'} alignItems={'center'}>
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
