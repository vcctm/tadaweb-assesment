import NftCard from 'components/NftCard'
import * as S from './styles'
import {motion} from 'framer-motion'
import { useIsMobile } from 'hook/isMobile'


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
 const isMobile = useIsMobile('md')

  return (
    <motion.div style={{
      width: isMobile ? '100%' : 'fit-content'
    }}initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} whileHover={{ scale: 1.02 }}>
      <S.Wrapper {...props} backgroundUrl={backgroundUrl}>
        <NftCard
          direction={direction}
          ribbonColor={ribbonColor}
          padding={padding}
        >{children}</NftCard>
      </S.Wrapper>
    </motion.div>
  )
}

export default NftImage
