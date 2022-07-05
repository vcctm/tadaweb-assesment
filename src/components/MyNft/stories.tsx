import { Story, Meta } from "@storybook/react";
import MyNft from '.'
import { MOCK_NFTS } from "mocks/nfts";

export default {
  title: 'MyNft',
  component: MyNft
} as Meta

export const Default: Story = () => <MyNft nft={MOCK_NFTS.nfts[0]} />
