import React, { createContext, useReducer } from 'react';
import { INftEntity } from 'types/nft';
import { appReducer } from './AppReducer';

interface IGlobalProviderProps {
  children: React.ReactNode
}

interface IInitialStateProps {
  yourNfts: INftEntity[] | []
  addNft?: (nft: INftEntity) => void
  removeNft?: (nft: INftEntity) => void
  editNft?: (nft: INftEntity) => void
  deleteAll?: (nft: INftEntity) => void
}


export const initialState: IInitialStateProps = {
   yourNfts : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: IGlobalProviderProps) => {
   const [state, dispatch] = useReducer(appReducer, initialState);
   function addNft(nft: INftEntity) {
       dispatch({
           type: 'ADD_NFT',
           nft: nft as INftEntity
       });
   }
   function removeNft(nft: INftEntity) {
       dispatch({
           type: 'REMOVE_NFT',
           nft: nft as INftEntity
       });
   }
   function deleteAll(nft: INftEntity) {
    dispatch({
        type: 'DELETE_ALL_NFT',
        nft: nft
    });
}
   function editNft(nft: INftEntity) {
       dispatch({
           type: 'EDIT_NFT',
           nft: nft as INftEntity
       });
   }

   return(
      <GlobalContext.Provider value = {{yourNfts : state.yourNfts, addNft, removeNft, editNft, deleteAll}}> 
        {children} 
      </GlobalContext.Provider>
   )
}