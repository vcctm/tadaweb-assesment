import { Typography, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { useState } from "react";
import ImageChanger from "components/ImageChanger";

interface IImageUploadProps {
  url?: string
}

const ImageUpload = (props: IImageUploadProps) => {
  const {url} = props;
  const [imgUrl, setImgUrl] = useState(url);
  const theme = useTheme()

  const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
      reader.readAsDataURL(file)
    })
  }
  const imageUpload = (e: any) => {
    const file = e.target.files[0]
    getBase64(file).then((base64) => {
      localStorage['fileBase64'] = base64
      setImgUrl(base64 as string)
      console.debug('file stored', base64)
    })
  }

  if(imgUrl) return (
    <ImageChanger imageHandler={imageUpload} url={imgUrl}/>
  )

  return (
    <form>
    <label htmlFor="imageFile">
      <Box style={{backgroundColor: theme.palette.grey[200], borderRadius: '4px'}} width={400} height={500} display={'flex'} flexDirection='column' justifyContent={'center'} alignItems={'center'}>
        <AddPhotoAlternateIcon color={'disabled'} fontSize="large"/>
        <Typography
          color={theme.palette.grey[500]}
          fontSize={24}
          fontWeight={'bold'}
        >UPLOAD YOUR NFT IMAGE</Typography>
      </Box>
    </label>
      <input
      style={{
        background: 'grey',
        borderRadius: '4px',
        display: 'none'
      }}
        type='file'
        id='imageFile'
        name='imageFile'
        onChange={imageUpload}
      />
      <div>
      </div>
    </form>
  )
}

export default ImageUpload
