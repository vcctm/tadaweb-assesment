import { ThemeOptions} from "@mui/material";
import {createTheme} from '@mui/material/styles';
import { colors } from "./colors";

const defaultThemeOptions: ThemeOptions = {
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            font-family: "Saira", sans-serif;
            `
        },
        MuiTypography: {
            defaultProps: {
                fontFamily: ['Saira', 'sans-serif'].join(','),
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
              inputRoot: {
                "&.MuiOutlinedInput-root .MuiAutocomplete-input": {
                  padding: "0px"
                }
              },
              input: {
                padding: "0px"
              }
            }
          }
    },
    typography: {
        allVariants: {
            fontFamily: ['Saira', 'sans-serif'].join(','),
            textTransform: 'none',
            fontSize: 16,
            color: colors.gunmetal[800],
          },
        fontFamily: ['Saira', 'sans-serif'].join(','),
    },
    palette: {
        primary: {
            main: colors.primary[500],
        },
        secondary: {
            main: colors.secondary[500],
        },
        success: {
            main: colors.green[500],
        },
        warning: {
            main: colors.yellow[500],
        },
        error: {
            main: colors.red[500],
        },
        info: {
            main: colors.blue[500],
        },
        action: {
            focus: colors.yellow[300],
        },
    }
}

export default createTheme(defaultThemeOptions);
