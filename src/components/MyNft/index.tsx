import { Grid, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { INftEntity } from 'types/nft'
import * as S from './styles'
import { Delete } from '@mui/icons-material'
import React from 'react'

interface IMyNftProps {
  nft: INftEntity
}

const hadleBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.stopPropagation()
  // OR
  e.preventDefault()
}

const MyNft = (props: IMyNftProps) => {
  const { nft } = props
  const theme = useTheme()
  return (
    <Link
      style={{
        color: 'unset',
        textDecoration: 'unset',
        display: 'flex',
        zIndex: 1,
        inset: 0,
      }}
      to={`/nft-${nft.nftId}`}>
      <S.Wrapper
        style={{
          position: 'relative'
        }}
        backgroundUrl={nft.nftImageUrl}>
        <IconButton
          style={{
            position: 'absolute',
            margin: '8px',
            top: '0',
            right: '0',
            zIndex: '1000',
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
              WZRDS
            </Typography>
            <Typography color={'white'} fontWeight={'medium'}>
              BY WZRDS_XYS
            </Typography>
          </Grid>
        </S.CurvedBottomWrapper>
      </S.Wrapper>
    </Link>
  )
}

export default MyNft
