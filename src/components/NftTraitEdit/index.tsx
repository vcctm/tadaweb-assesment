import { AddCircle } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import NftTrait from 'components/NftTrait'
import React, { useReducer } from 'react'
import { INftTraitsEntity } from 'types'
import { v4 as uuidv4 } from 'uuid'
import * as S from './styles'
import { AnimatePresence, motion } from 'framer-motion'

interface INftEditTrait {}

interface IUserActions {
  type: 'newProperty' | 'removeProperty'
  id: string
}

interface IInitialStateProps {
  traits: INftTraitsEntity[] | []
}

const NftTraitEdit = (props: INftEditTrait) => {
  const editingReducer = (state: typeof initialState, action: IUserActions) => {
    switch (action.type) {
      case 'newProperty': {
        return {
          ...state,
          traits: [
            ...state.traits,
            {
              id: action.id,
              name: 'EDITNAME',
              category: 'EDITCATEGORY',
              rate: '100'
            }
          ]
        }
      }
      case 'removeProperty': {
        const updatedtraits = state.traits.filter(
          (e: INftTraitsEntity) => e.id !== action.id
        )
        return { ...state, traits: updatedtraits }
      }
      default:
        break
    }
    return state
  }

  const initialState: IInitialStateProps = {
    traits: []
  }
  
  const [state, dispatch] = useReducer(editingReducer, initialState)
  const handleNewProperty = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch({
      type: 'newProperty',
      id: uuidv4()
    })
  }

  const handleRemoveProperty = (
    e: React.MouseEvent<HTMLElement>,
    propertyId: string
  ) => {
    e.preventDefault()
    //TODO: add modal to confirm
    dispatch({
      type: 'removeProperty',
      id: propertyId
    })
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
    <motion.div
      variants={variantA}
      initial='initial'
      animate='animate'
      exit='exit'>
      <S.Wrapper>
        <Box display={'flex'} gap={2} flexWrap={'wrap'}>
          <AnimatePresence>
            {state.traits.map((trait: INftTraitsEntity) => {
              return (
                <NftTrait
                  key={trait.id}
                  id={trait.id}
                  property={trait.name}
                  category={trait.category}
                  rate={trait.rate}
                  handleRemove={handleRemoveProperty}
                  isEditing
                />
              )
            })}
          </AnimatePresence>
          <motion.div transition={{ type: 'spring', stiffness: 100 }}>
            <Box
              height={100}
              width={180}
              display={'flex'}
              justifyContent='center'
              alignContent='center'>
              <IconButton
                style={{ height: 'fit-content', alignSelf: 'center' }}
                onClick={handleNewProperty}>
                <AddCircle fontSize='large' color='primary' />
              </IconButton>
            </Box>
          </motion.div>
        </Box>
      </S.Wrapper>
    </motion.div>
  )
}

export default NftTraitEdit
