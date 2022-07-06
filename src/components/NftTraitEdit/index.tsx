import { AddCircle } from '@mui/icons-material'
import { alpha, Box, IconButton, Typography, useTheme } from '@mui/material'
import NftTrait from 'components/NftTrait'
import React from 'react'
import { INftTraitsEntity } from 'types'
import { v4 as uuidv4 } from 'uuid'
import * as S from './styles'
import { AnimatePresence, motion } from 'framer-motion'

interface INftEditTrait {
  traits?: INftTraitsEntity[] | []
  addNewTrait?: (traits: INftTraitsEntity[]) => void
  removeTrait?: ((traits: INftTraitsEntity[]) => void) | undefined
}

const NftTraitEdit = (props: INftEditTrait) => {
  const { traits, addNewTrait, removeTrait } = props
  const theme = useTheme()
    const handleNewTrait = (e: React.MouseEvent<HTMLElement>) => {
      const newTraitId = uuidv4()
      if(traits && addNewTrait) {
        addNewTrait([
          ...traits, {
            id: newTraitId,
            category: 'CATEGORY',
            name: 'NAME',
            rate: 0.2
          }
        ])
      }
    e.preventDefault()
  }

  const handleRemoveTrait = (
    e: React.MouseEvent<HTMLElement>,
    traitId: string
  ) => {
    if(traits && removeTrait) {
      const updatedTraits = traits.filter((trait) => trait.id !== traitId)
      removeTrait(updatedTraits)
    }
    e.preventDefault()
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
    <Typography mb={2}><b>NFT</b> Properties</Typography>
    <motion.div
      variants={variantA}
      initial='initial'
      animate='animate'
      exit='exit'>
      <S.Wrapper>
        <Box display={'flex'} gap={2} flexWrap={'wrap'}>
          <AnimatePresence>
            {traits?.map((trait: INftTraitsEntity) => {
              return (
                <NftTrait
                  key={trait.id}
                  id={trait.id}
                  name={trait.name}
                  category={trait.category}
                  rate={trait.rate}
                  traits={traits}
                  handleRemove={handleRemoveTrait}
                  isEditing
                />
              )
            })}
          </AnimatePresence>
          <motion.div transition={{ type: 'spring', stiffness: 100 }}>
            <Box
              height={102}
              width={180}
              display={'flex'}
              justifyContent='center'
              alignContent='center'
              sx={{
                backgroundColor: alpha(theme.palette.primary.main, 0.2),
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: '4px'
              }}
              >
              <IconButton
                style={{ height: 'fit-content', alignSelf: 'center' }}
                onClick={handleNewTrait}>
                <AddCircle fontSize='large' color='primary' />
              </IconButton>
            </Box>
          </motion.div>
        </Box>
      </S.Wrapper>
    </motion.div>
    </>
  )
}

export default NftTraitEdit
