import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material'
import Button from 'components/Button'
import MyNft from 'components/MyNft'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from 'store/globalState'
import { INftEntity } from 'types/nft'
import { AnimatePresence, motion } from 'framer-motion'
import { useIsMobile } from 'hook/isMobile'

interface IMyNftsProps {
  localNfts?: INftEntity[]
}

interface IAlertDialogProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  myNfts: INftEntity[]
}

const AlertDialog = ({ open, setOpen, myNfts }: IAlertDialogProps) => {
  const { deleteAll } = useContext(GlobalContext)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteAllModal = () => {
    deleteAll && deleteAll(myNfts as unknown as INftEntity[][0])
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>
          {"Are you sure you wan't dele all yours nfts ?"}
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button sx={{
              width: 'fit-content',
              fontSize: '12px',
              padding: '10px 8px'
          }} onClick={handleClose}>CANCEL</Button>
          <Button sx={{
              width: 'fit-content',
              fontSize: '12px',
              padding: '10px 8px'
          }} onClick={deleteAllModal} autoFocus>
            DELETE ALL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const MyNfts = (props: IMyNftsProps) => {
  const { localNfts } = props
  const { yourNfts } = useContext(GlobalContext)
  const [myNfts, setMyNfts] = useState(localNfts)
  const [openModal, setOpenModal] = useState(false)

  const isMobile = useIsMobile('sm')

  if (
    !localNfts ||
    localNfts.length <= 0 ||
    !yourNfts ||
    yourNfts.length <= 0
  ) {
    return (
      <div>
        {' '}
        <Typography mb={2} fontWeight={'bold'} fontSize={'18px'}>
          No nfts created.
        </Typography>{' '}
        <Link
          style={{
            color: 'unset',
            textDecoration: 'unset'
          }}
          to='../create-nft'>
          <Button
            style={{
              width: 'fit-content',
              fontSize: '12px',
              padding: '10px 46px'
            }}>
            CREATE NOW
          </Button>
        </Link>
      </div>
    )
  }

  const variantA = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    },
    exit: {}
  }

  return (
    <>
      <motion.div
        variants={variantA}
        initial='initial'
        animate='animate'
        exit='exit'>
        <AlertDialog
          open={openModal}
          setOpen={setOpenModal}
          myNfts={yourNfts}
        />
        <Box mb={2} display={'flex'} flexDirection={isMobile? 'column' : 'row'} justifyContent={isMobile? 'center' : 'space-between'} alignItems={isMobile? 'center' : 'space-between'} >
          <Typography lineHeight={'64px'} fontSize={40} fontWeight={'normal'}>
            Your
            <span style={{ fontWeight: 'bold' }}> NFTS:</span>
          </Typography>
          <Button
            onClick={() => setOpenModal(true)}
            style={{
              fontSize: '12px',
              height: 'fit-content',
              width: isMobile ? '100%': 'fit-content'
            }}>
            DELETE ALL
          </Button>
        </Box>
        <Box display={'flex'} gap={2} flexWrap='wrap'>
          <AnimatePresence>
            {myNfts?.map((nft) => (
              <MyNft
                nft={nft}
                key={nft.nftId}
                removeNftFromState={(myNft) =>
                  setMyNfts(myNfts?.filter((nft) => nft.nftId !== myNft.nftId))
                }
              />
            ))}
          </AnimatePresence>
        </Box>
      </motion.div>
    </>
  )
}

export default MyNfts
