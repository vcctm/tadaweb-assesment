import { ButtonProps } from '@mui/material';
import * as S from './styles'

interface IButtonProps extends ButtonProps {
  children: React.ReactNode
}

const Button = (props: IButtonProps) => {
  const { children } = props;
  return (
    <S.Wrapper {...props}>
      {children}
    </S.Wrapper>
  )
}

export default Button
