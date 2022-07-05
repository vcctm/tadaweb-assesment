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
}


export const initialState: IInitialStateProps = {
   yourNfts : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: IGlobalProviderProps) => {
   const [state, dispatch] = useReducer(appReducer, initialState);

   // Actions for changing state

   function addNft(nft: INftEntity) {
       dispatch({
           type: 'ADD_NFT',
           payload: nft
       });
   }

   function removeNft(nft: INftEntity) {
       dispatch({
           type: 'REMOVE_NFT',
           payload: nft
       });
   }

   return(
      <GlobalContext.Provider value = {{yourNfts : state.yourNfts, addNft, removeNft}}> 
        {children} 
   </GlobalContext.Provider>
   )
}