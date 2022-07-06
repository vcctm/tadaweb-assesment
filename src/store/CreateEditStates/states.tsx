import React, { createContext, useReducer } from 'react'
import { INftTraitsEntity } from 'types'
import { INftEntity } from 'types/nft'
import { reducers } from './reducers'

interface INftEditPageProviderProps {
  children: React.ReactNode
  nft: INftEntity | null
}

export interface IInitialStateNftEditPage {
  nft: INftEntity | null
  fetchNft?: (nft: INftEntity | null) => void
  editNftField?: (field: keyof INftEntity, value: string) => void
  editTraitField?: (traits: INftTraitsEntity[]) => void
  addNewTrait?: (traits: INftTraitsEntity[]) => void
  removeTrait?: (traits: INftTraitsEntity[]) => void
}

export interface IUserActionsEditPage {
  type:
    | typeof FIELD_ACTION
    | typeof NEW_TRAIT
    | typeof REMOVE_TRAIT
    | typeof FETCH_NFT
  traitId?: string
  trait?: INftTraitsEntity
  value: string
  field: keyof INftEntity | keyof INftTraitsEntity
  nft: INftEntity | null
}

const initialState: IInitialStateNftEditPage = {
  nft: null
}

export const FIELD_ACTION = 'FIELD_ACTION'
export const NEW_TRAIT = 'NEW_TRAIT'
export const REMOVE_TRAIT = 'REMOVE_TRAIT'
export const FETCH_NFT = 'FETCH_NFT'
export const EDIT_TRAIT_FIELD = 'EDIT_TRAIT_FIELD'

export const NftEditPageContext = createContext(initialState)

export const NftEditPageProvider = ({
  children
}: INftEditPageProviderProps) => {
  const [state, dispatch] = useReducer(reducers, initialState)

  // Actions for changing state

  const fetchNft = (nft: INftEntity | null) => {
    dispatch({
      type: FETCH_NFT,
      nft: nft
    })
  }

  const editNftField = (field: keyof INftEntity, value: string) => {
    dispatch({
      type: FIELD_ACTION,
      field: field,
      value: value
    })
  }

  const editTraitField = (traits: INftTraitsEntity[]) => {
    dispatch({
      type: EDIT_TRAIT_FIELD,
      traits: traits,
    })
  }

  const addNewTrait = (traits: INftTraitsEntity[]) => {
    dispatch({
      type: NEW_TRAIT,
      traits: traits
    })
  }

  const removeTrait = (traits: INftTraitsEntity[]) => {
    dispatch({
      type: REMOVE_TRAIT,
      traits: traits,
    })
  }
  

  return (
    <NftEditPageContext.Provider value={{ nft: state.nft, fetchNft, editNftField, addNewTrait, removeTrait, editTraitField }}>
      {children}
    </NftEditPageContext.Provider>
  )
}
