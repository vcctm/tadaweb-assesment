import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material";

type WrapperProps = {
  ribbonColor?: string | null
}

export const CurvedUpperWrapper = styled('div')<WrapperProps>(({theme, ribbonColor}) => ({
  width: '100%',
  borderRadius: '4px 4px 0 0',
  backgroundColor: ribbonColor ? alpha(ribbonColor, 0.5) : 'transparent'
}));

export const CurvedBottomWrapper = styled('div')<WrapperProps>(({theme, ribbonColor}) => ({
  width: '100%',
  borderRadius: '0 0 4px 4px',
  backgroundColor: ribbonColor ? alpha(ribbonColor, 0.5) : alpha(theme.palette.common.black, 0.5)
}));
