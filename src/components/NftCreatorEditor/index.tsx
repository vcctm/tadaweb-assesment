/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Snackbar, Typography } from '@mui/material'
import Button from 'components/Button'
import ImageUpload from 'components/ImageUpload'
import NftPropertiesEdit from 'components/NftTraitEdit'
import TextField from 'components/TextField'
import { NftEditPageContext, IUserActionsEditPage } from 'store/CreateEditStates'
import { useContext, useEffect, useState } from 'react'
import { INftEntity } from 'types/nft'
import { GlobalContext } from 'store/globalState'
import { v4 as uuid } from 'uuid'

interface INftCreatorEditorProps {
  editing?: boolean
  dispatch?: React.Dispatch<IUserActionsEditPage>
}

const NftCreatorEditor = (props: INftCreatorEditorProps) => {
  const { editing } = props
  const {nft, editNftField, addNewTrait, removeTrait} = useContext(NftEditPageContext)
  const [nftId, setNftId] = useState<string | undefined>(nft?.nftId)
  const [openSnackBar , setOpenSnackBar] = useState<boolean>(false)

  useEffect(() => {
    setNftId(nft?.nftId)
  },[])
  const { addNft, editNft } = useContext(GlobalContext)

  const handleFieldUpdate = (
    field: keyof INftEntity,
    value: string,
  ) => {
    if (editNftField) {
      editNftField(field, value)
      if (!editing) editNftField('nftId', uuid())
    }
  }

  const handleCreateEdit = () => {
    !editing && handleFieldUpdate('nftId', uuid())
    if (addNft && editNft) {
      editing? editNft(nft as INftEntity): addNft(nft as INftEntity)
      setOpenSnackBar(true)
    }
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar(false);
  };

  return (
    <>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        message={editing? "Edited " + nft?.nftId : "Created NFT " + nft?.nftId}
        onClose={handleClose}
        
      />
      {' '}
      {editing ? (
        <Typography lineHeight={'64px'} fontSize={40} fontWeight={'normal'}>
          Editing NFT:{' '}
          <span style={{ color: 'blue', fontWeight: 'bold' }}>
            {nft?.nftName ?? ''}
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
          <ImageUpload handleFieldUpdate={handleFieldUpdate} url={nft?.nftImageUrl} />
          <Button
            disabled={nftId === nft?.nftId}
            onClick={() => handleCreateEdit()}
            sx={{
              right: 0
            }}>
            {editing ? "SAVE" : "CREATE"}
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
              <TextField
                fullWidth
                label='NFT Name'
                variant='filled'
                onChange={(e) =>
                  handleFieldUpdate('nftName', e.target.value)
                }
                value={nft?.nftName}
              />
            </Box>
            <Box width={'48%'}>
              <TextField
                fullWidth
                label='NFT Price'
                variant='filled'
                onChange={(e) =>
                  handleFieldUpdate('nftPrice', e.target.value)
                }
                value={nft?.nftPrice}
              />
            </Box>
            <Box width={'48%'}>
              <TextField
                fullWidth
                label='NFT Collection'
                variant='filled'
                onChange={(e) =>
                  handleFieldUpdate('nftCollection', e.target.value)
                }
                value={nft?.nftCollection}
              />
            </Box>
            <Box width={'48%'}>
              <TextField
                fullWidth
                label='NFT Date Sale'
                variant='filled'
                type={'date'}
                onChange={(e) =>
                  handleFieldUpdate('nftDateSale', e.target.value)
                }
                value={nft?.nftDateSale}
              />
            </Box>
            <Box width={'98%'}>
              <TextField
                multiline
                fullWidth
                label='NFT Description'
                variant='filled'
                onChange={(e) =>
                  handleFieldUpdate('nftDescription', e.target.value)
                }
                value={nft?.nftDescription}
              />
            </Box>
          </Box>
          <NftPropertiesEdit addNewTrait={addNewTrait} removeTrait={removeTrait} traits={nft?.nftTraits} />
        </Box>
      </Box>
    </>
  )
}

export default NftCreatorEditor
