import NftCard from 'components/NftCard'
import * as S from './styles'

interface INftImageProps {
  size?: 'small' | 'medium' | 'large'
  backgroundUrl: string
  children?: React.ReactNode
  direction?: 'top' | 'bottom'
  ribbonColor?: string
  padding?: string
}

const NftImage = (props: INftImageProps) => {
  const { children, backgroundUrl, direction, ribbonColor, padding } = props
  return (
    <S.Wrapper {...props} backgroundUrl={backgroundUrl}>
      <NftCard
        direction={direction}
        ribbonColor={ribbonColor}
        padding={padding}
      >{children}</NftCard>
    </S.Wrapper>
  )
}

export default NftImage
