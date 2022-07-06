import { alpha, styled } from "@mui/material/styles";

type WrapperType = {
  size?: 'small' | 'medium' | 'large',
  backgroundUrl: string
  direction?: 'bottom' | 'top'
}

export const Wrapper = styled('div')<WrapperType>(({theme, backgroundUrl, direction}) => ({
  maxWidth: '290px',
  width: '290px',
  maxHeight: '370px',
  height: '370px',
  background: `no-repeat center url(${backgroundUrl})`,
  backgroundSize: 'cover',
  borderRadius: '4px',
  display:'flex',
  objectFit: 'cover',
  alignItems: 'end'
}));

type WrapperProps = {
  ribbonColor?: string | null
}

export const CurvedBottomWrapper = styled('div')<WrapperProps>(({theme, ribbonColor}) => ({
  width: '100%',
  borderRadius: '0 0 4px 4px',
  backgroundColor: ribbonColor ? alpha(ribbonColor, 0.5) : alpha(theme.palette.common.black, 0.5)
}));
