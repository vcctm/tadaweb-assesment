import { formLabelClasses, inputLabelClasses, FilledInput, filledInputClasses, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Input = styled(FilledInput)(({theme}) => ({
  [`&.${filledInputClasses.root}`]: {
    borderColor: 'transparent',
    borderRadius: '4px',
    borderWidth: '2px',
  },
  [`& .${filledInputClasses.input}`]: {
    padding: '10.5px 16px',
    borderRadius: '4px',
  },
  [`& .${formLabelClasses.root}.${inputLabelClasses.root}`]: {
    '&.Mui-focused': {
      borderColor: 'transparent',
    },
    '&.MuiInputLabel-shrink': {
      color: theme.palette.grey[800],
    }
  },
  // "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
  //   padding: '10.5px 14px 10.5px'
  // }
}));

export const Label = styled(InputLabel)(({theme}) => ({
  [`&.${formLabelClasses.root}.${inputLabelClasses.root}`]: {
    transform: 'translate(14px, 8px) scale(1)',
    '&.Mui-focused': {
      borderColor: theme.palette.grey[800],
      transform: 'translate(16px, -2px) scale(0.5)',
    },
    '&.MuiInputLabel-shrink': {
      color: theme.palette.grey[800],
      transform: 'translate(16px, -2px) scale(0.5)',
    }
  }
}));
