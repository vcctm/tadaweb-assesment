/* eslint-disable import/no-anonymous-default-export */
import { INftEntity } from "types/nft"
import {initialState} from './globalState'

interface userActions {
  type: 'ADD_NFT' | 'EDIT_NFT' | 'REMOVE_NFT' | 'DELETE_ALL_NFT'
  payload: INftEntity
}

export const appReducer =  (state: typeof initialState, action: userActions) => {
  switch(action.type) {
      case 'ADD_NFT':
          return {
              yourNfts: [action.payload, ...state.yourNfts]
          }
      case 'REMOVE_NFT':
          return {
              yourNfts: state.yourNfts.filter(item => item.nftId !== action.payload.nftId)
          }
      default:
          return state;
  }
}
