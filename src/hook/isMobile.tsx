import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export const useIsMobile = (breakpoint:  number | Breakpoint) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down(breakpoint));

  return matches
}