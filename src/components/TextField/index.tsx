import { FilledTextFieldProps, FormControl } from '@mui/material'
import * as S from './styles'

const TextField = (props: FilledTextFieldProps) => {
    const { label, multiline} = props;
    return (
      <FormControl fullWidth variant={'filled'}>
      <S.Label>
        {label}
      </S.Label>
      <S.Input disableUnderline multiline={multiline} inputProps={{
        label: {label}
      }}/>
    </FormControl>
  )
}

export default TextField
