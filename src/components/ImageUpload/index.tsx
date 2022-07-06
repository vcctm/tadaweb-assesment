import { Typography, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import ImageChanger from "components/ImageChanger";
import { INftEntity } from "types/nft";
import { useIsMobile } from "hook/isMobile";

interface IImageUploadProps {
  url?: string
  handleFieldUpdate?: (field: keyof INftEntity, value: string) => void
}

const ImageUpload = (props: IImageUploadProps) => {
  const {url, handleFieldUpdate} = props;
  const theme = useTheme()

  const isMobile = useIsMobile('sm')

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
      handleFieldUpdate && handleFieldUpdate('nftImageUrl', base64 as string)
      console.debug('file stored', base64)
    })
  }

  if(url) return (
    <ImageChanger imageHandler={imageUpload} url={url}/>
  )

  return (
    <form style={{
      width: isMobile ? '100%' : 'unset',
    }}>
    <label htmlFor="imageFile">
      <Box style={{backgroundColor: theme.palette.grey[200], borderRadius: '4px', width: isMobile ? '100%' : '400px'}} height={500} display={'flex'} flexDirection='column' justifyContent={'center'} alignItems={'center'}>
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
        display: 'none',
        width: isMobile ? '100%' : 'unset'
      }}
        accept="image/jpeg,image/gif,image/png"
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
