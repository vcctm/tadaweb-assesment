import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Button)(({theme}) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  fontSize: '14px',
  padding: '10.5px 77.5px',
  ':hover': {
    backgroundColor: theme.palette.grey[800],
  }
}));
