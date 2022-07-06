import { Grid, IconButton, Snackbar, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { INftEntity } from 'types/nft'
import * as S from './styles'
import { Delete } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import { GlobalContext } from 'store/globalState'
import {motion} from 'framer-motion'

import unanmedAvatar from 'assets/images/unnamed.png'



interface IMyNftProps {
  nft: INftEntity
  removeNftFromState?: (nft: INftEntity) => void
}



const MyNft = (props: IMyNftProps) => {
  const { nft, removeNftFromState } = props
  const theme = useTheme()
  const { removeNft } = useContext(GlobalContext)

  const [open, setOpen] = useState(false)

  const hadleBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setOpen(true)
    removeNftFromState && removeNftFromState(nft)
    removeNft && removeNft(nft)
  }

  return (
    <div>
     <Snackbar
        open={open}
        autoHideDuration={3000}
        message={"Deleted " + nft?.nftId} 
      />
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }} whileHover={{ scale: 1.02 }}>
    <Link
      style={{
        color: 'unset',
        textDecoration: 'unset',
        display: 'flex',
        zIndex: 1,
        inset: 0,
      }}
      to={`/nft/${nft.nftId}`}>
        
      <S.Wrapper
        style={{
          position: 'relative'
        }}
        backgroundUrl={nft.nftImageUrl || unanmedAvatar}>
        <IconButton
          style={{
            position: 'absolute',
            margin: '8px',
            top: '0',
            right: '0',
            zIndex: '1000',
            border: '2px solid white',
            backgroundColor: theme.palette.primary.main
          }}
          onClick={(e) => hadleBtn(e)}
          >
          <Delete sx={{
            color: 'white'
          }} />
        </IconButton>
        <S.CurvedBottomWrapper
          {...props}
          ribbonColor={theme.palette.primary.main}>
          <Grid padding={1}>
            <Typography color={'white'} fontWeight={'bold'}>
            {nft.nftName || 'Empty name'}
            </Typography>
            <Typography color={'white'} fontWeight={'medium'}>
              {nft.nftCollection ? <>BY {nft.nftCollection}</> : 'Empty Collection'}
            </Typography>
          </Grid>
        </S.CurvedBottomWrapper>
      </S.Wrapper>
    </Link>
    </motion.div>
    </div>
  )
}

export default MyNft
