import { styled } from "@mui/material/styles";

type WrapperType = {
  size?: 'small' | 'medium' | 'large',
  backgroundUrl: string
  direction?: 'bottom' | 'top'
}


export const Wrapper = styled('div')<WrapperType>(({theme, size, backgroundUrl, direction}) => ({
  maxWidth: (size ? addMaxWidth(size) : '200px'),
  width: size ? addMaxWidth(size) : '200px',
  maxHeight: size ? addMaxHeight(size) : '200px',
  height: size ? addMaxHeight(size) : '200px',
  background: `no-repeat center url(${backgroundUrl})`,
  backgroundSize: 'cover',
  borderRadius: '4px',
  display:'flex',
  objectFit: 'cover',
  alignItems: direction === 'bottom' ? 'end' : 'start',
  transition: 'all 0.3s ease-in-out',
  [theme.breakpoints.down('md')] : {
    maxWidth: '100%',
    width: '100%'
  }
}));

const addMaxWidth = (size:  'small' | 'medium' | 'large') => {
  if (size === 'small') return '200px'
  if (size === 'medium') return '300px'
  if (size === 'large') return '400px'
}

const addMaxHeight = (size: 'small' | 'medium' | 'large') => {
  if (size === 'small') return '200px'
  if (size === 'medium') return '350px'
  if (size === 'large') return '500px'
}
