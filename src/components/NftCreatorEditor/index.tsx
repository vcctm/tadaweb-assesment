import { Box, Typography } from '@mui/material'
import Button from 'components/Button'
import ImageUpload from 'components/ImageUpload'
import NftPropertiesEdit from 'components/NftPropertiesEdit'
import TextField from 'components/TextField'

interface INftCreatorEditorProps {
  editing: boolean
}

const NftCreatorEditor = (props: INftCreatorEditorProps) => {
  const { editing } = props
  return (
    <>
      {' '}
      {editing ? (
        <Typography lineHeight={'64px'} fontSize={40} fontWeight={'normal'}>
          Editing NFT:{' '}
          <span style={{ color: 'blue', fontWeight: 'bold' }}>
            YEAHTIGERS #2
          </span>
        </Typography>
      ) : (
        <Typography lineHeight={'64px'} fontSize={40} fontWeight={'normal'}>
          Create your own
          <span style={{ fontWeight: 'bold' }}> NFT:</span>
        </Typography>
      )}
      <Box display='flex' gap={4}>
        <Box
          width={'fit-content'}
          display='flex'
          flexDirection='column'
          alignItems='end'
          gap={2}>
          {' '}
          <ImageUpload />
          <Button
            sx={{
              right: 0
            }}>
            SAVE
          </Button>
        </Box>
        <Box maxWidth={800}>
          <Box
            marginBottom={4}
            display={'flex'}
            gap={2}
            flexWrap='wrap'
            flexDirection='row'>
            <Box width={'48%'}>
              <TextField fullWidth label='NFT Name' variant='filled' />
            </Box>
            <Box width={'48%'}>
              <TextField fullWidth label='NFT Price' variant='filled' />
            </Box>
            <Box width={'48%'}>
              <TextField fullWidth label='NFT Collection' variant='filled' />
            </Box>
            <Box width={'48%'}>
              <TextField fullWidth label='NFT Date Sale' variant='filled' />
            </Box>
            <Box width={'98%'}>
              <TextField
                multiline
                fullWidth
                label='NFT Description'
                variant='filled'
              />
            </Box>
          </Box>
          <NftPropertiesEdit />
        </Box>
      </Box>
    </>
  )
}

export default NftCreatorEditor
