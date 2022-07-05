import { AddCircle } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import PropertiesCard from 'components/PropertiesCard'
import React, { useReducer } from 'react'
import { IPropertyEntity } from 'types'
import { v4 as uuidv4 } from 'uuid'
import * as S from './styles'
import { AnimatePresence, motion } from 'framer-motion'

interface INftPropertiesEditProps {}

interface IUserActions {
  type: 'newProperty' | 'removeProperty'
  propertyId: string
}

interface IInitialStateProps {
  properties: IPropertyEntity[]
}

const NftPropertiesEdit = (props: INftPropertiesEditProps) => {
  const editingReducer = (state: typeof initialState, action: IUserActions) => {
    switch (action.type) {
      case 'newProperty': {
        return {
          ...state,
          properties: [
            ...state.properties,
            {
              propertyId: action.propertyId,
              propertyName: 'EDITNAME',
              propertyCategory: 'EDITCATEGORY',
              propertyTrait: '100'
            }
          ]
        }
      }
      case 'removeProperty': {
        const updatedProperties = state.properties.filter(
          (e: IPropertyEntity) => e.propertyId !== action.propertyId
        )
        return { ...state, properties: updatedProperties }
      }
      default:
        break
    }
    return state
  }

  const initialState: IInitialStateProps = {
    properties: []
  }

  const handleNewProperty = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch({
      type: 'newProperty',
      propertyId: uuidv4()
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
      propertyId: propertyId
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

  const [state, dispatch] = useReducer(editingReducer, initialState)

  return (
    <motion.div
      variants={variantA}
      initial='initial'
      animate='animate'
      exit='exit'>
      <S.Wrapper>
        <Box display={'flex'} gap={2} flexWrap={'wrap'}>
          <AnimatePresence>
            {state.properties.map((property) => {
              return (
                <PropertiesCard
                  key={property.propertyId}
                  propertyId={property.propertyId}
                  property={property.propertyName}
                  category={property.propertyCategory}
                  trait={property.propertyTrait}
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

export default NftPropertiesEdit
