import { Search } from '@mui/icons-material'
import { FormControl } from '@mui/material'
import * as S from './styles'

interface ISearchBarProps {}

const SearchBar = (props: ISearchBarProps) => {
    return (
    <FormControl fullWidth variant={'filled'}>
      <S.Label>
        Search
      </S.Label>
      <S.Input  disableUnderline endAdornment={<Search/>} inputProps={{
        label: 'Search'
      }}/>
    </FormControl>
  )
}

export default SearchBar
