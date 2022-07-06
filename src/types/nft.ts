import { INftTraitsEntity } from 'types';
export interface INftEntity {
  nftId: string
  nftName: string
  nftPrice: string | number
  nftCollection: string
  nftDateSale: string
  nftImageUrl: string
  nftDescription: string
  nftTraits: INftTraitsEntity[]
}