/* eslint-disable import/no-anonymous-default-export */
import { INftEntity } from "types/nft"
import {initialState} from './globalState'

interface userActions {
  type?: 'ADD_NFT' | 'EDIT_NFT' | 'REMOVE_NFT' | 'DELETE_ALL_NFT' | 'FILTER_NFT'
  nft: INftEntity
}

export const appReducer =  (state: typeof initialState, action: userActions) => {
  const localNfts: INftEntity[] = localStorage['yourNfts'] ? JSON.parse(localStorage['yourNfts']) : []
  switch(action.type) {
      case 'ADD_NFT':
        localStorage['yourNfts'] = JSON.stringify([...localNfts, action.nft])
          return {
              yourNfts: [action.nft, ...state.yourNfts]
          }
      case 'REMOVE_NFT':
        localStorage['yourNfts'] = JSON.stringify(state.yourNfts.filter(item => item.nftId !== (action.nft as INftEntity).nftId))
          return {
              yourNfts: state.yourNfts.filter(item => item.nftId !== (action.nft as INftEntity).nftId)
          }
      case 'DELETE_ALL_NFT':
        localStorage['yourNfts'] = JSON.stringify([])
          return {
              yourNfts: []
          }
      case 'EDIT_NFT':
        const editedNfts = localNfts.map((nft) => {
          if(nft.nftId === (action.nft as INftEntity).nftId) {
            return {
              ...nft, ...action.nft as INftEntity
            }
          }
          return nft
        })
        localStorage['yourNfts'] = JSON.stringify(editedNfts)
          return {
              yourNfts: editedNfts
          }
      default:
          return state;
  }
}
