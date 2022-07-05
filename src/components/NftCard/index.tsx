import { Grid, StyledComponentProps } from '@mui/material'
import * as S from './styles'

export interface INftCardProps extends StyledComponentProps {
  direction?: 'bottom' | 'top'
  children?: React.ReactNode
  ribbonColor?: string
  padding?: string
}

const NftCard = (props: INftCardProps) => {
  const {direction, children, ribbonColor, padding} = props;
  if (direction === 'bottom') return (
    <S.CurvedBottomWrapper {...props} ribbonColor={ribbonColor}>
    <Grid padding={padding}>
      {direction && children}
    </Grid>
  </S.CurvedBottomWrapper>
  )
  if (direction === 'top') return (
    <S.CurvedUpperWrapper {...props} ribbonColor={ribbonColor}>
    <Grid padding={padding}>
      {direction && children}
    </Grid>
  </S.CurvedUpperWrapper>
  )
  return (
    <S.CurvedUpperWrapper {...props} ribbonColor={ribbonColor}>
    <Grid padding={padding}>
      {direction && children}
    </Grid>
  </S.CurvedUpperWrapper>
  )
}

export default NftCard
