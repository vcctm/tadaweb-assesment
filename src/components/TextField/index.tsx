import { FilledTextFieldProps, FormControl } from '@mui/material'
import * as S from './styles'

const TextField = (props: FilledTextFieldProps) => {
  const { label, multiline, value, onChange, type } = props
  return (
    <FormControl fullWidth variant={'filled'}>
      <S.Label>{label}</S.Label>
      <S.Input
        onChange={onChange}
        disableUnderline
        value={value}
        type={type}
        multiline={multiline}
        inputProps={{
          label: { label },
          value: value as string,
        }}
      />
    </FormControl>
  )
}

export default TextField
