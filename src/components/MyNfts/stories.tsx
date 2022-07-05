import { Story, Meta } from "@storybook/react";
import {MOCK_NFTS} from '../../mocks/nfts'
import MyNfts from '.'

export default {
  title: 'MyNfts',
  component: MyNfts
} as Meta

export const Default: Story = () => <MyNfts nfts={MOCK_NFTS.nfts}/>
