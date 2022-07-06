import { INftTraitsEntity } from 'types'
import { INftEntity } from 'types/nft'
import {
  IInitialStateNftEditPage,
  FIELD_ACTION,
  NEW_TRAIT,
  REMOVE_TRAIT,
  FETCH_NFT,
  EDIT_TRAIT_FIELD
} from './states'

interface userActions {
  type?:  | typeof FIELD_ACTION
  | typeof NEW_TRAIT
  | typeof REMOVE_TRAIT
  | typeof FETCH_NFT
  | typeof EDIT_TRAIT_FIELD
  traitId?: string
  value?: string
  field?: keyof INftEntity
  traitField?: keyof INftTraitsEntity
  nft?: INftEntity | null
  traits?: INftTraitsEntity[]
}

export const reducers = (
  state: IInitialStateNftEditPage,
  action: userActions
) => {
  switch (action.type) {
    case FETCH_NFT: {
      return {
        ...state,
        nft: action.nft as INftEntity
      }
    }
    case FIELD_ACTION: {
      const actionField = action.field
      if (actionField && state.nft)
     
      return {
        ...state,
       nft: {
        ...state.nft,
        [actionField]: action.value
       }
      }
      return {
        ...state
      }
    }
    case EDIT_TRAIT_FIELD: {
      if (state.nft && action.traits)
      return {
        ...state,
       nft: {
        ...state.nft,
        nftTraits: action.traits
       }
      }
      return {
        ...state
      }
    }
    case NEW_TRAIT: {
        if (state.nft?.nftTraits && action.traits) {
          return {
            ...state,
            nft: {
              ...state.nft,
              nftTraits: action.traits
            }
          }
        }
        return {
          ...state
        }  
    }
    case REMOVE_TRAIT: {
      if (state.nft?.nftTraits && action.traits) {
        return {
          ...state,
          nft: {
            ...state.nft,
            nftTraits: action.traits
          }
        }
      }
      return {
        ...state
      }
    }
    default:
      break
  }
  return state
}
