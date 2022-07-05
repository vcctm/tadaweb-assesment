import { IconButton } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const Wrapper = styled('div')(({theme}) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.2),
  width: '180px',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '4px',
  minWidth: 180,
  maxWidth: 180,
  position: 'relative'
}));

export const DeleteButton = styled(IconButton)(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  width: 'fit-content',
  color: theme.palette.common.white,
  position: 'absolute',
  fontSize: '10px',
  zIndex: 1,
  right: 4,
  top: 4,
}));
