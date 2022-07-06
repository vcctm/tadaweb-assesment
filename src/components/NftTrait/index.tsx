import { Box, InputBase, Typography, useTheme } from '@mui/material'
import PercentIcon from '@mui/icons-material/Percent';
import DeleteIcon from '@mui/icons-material/Delete';
import { useReducer } from 'react'
import * as S from './styles'
import { motion } from "framer-motion"
import { INftTraitsEntity } from 'types';

interface INftTraitProps {
  id: string
  category?: string
  name?: string
  rate?: number | string
  isEditing?: boolean
  traits?: INftTraitsEntity[]
  handleRemove?: (e: React.MouseEvent<HTMLElement>, id: string) => void
  editTraitField?: (traits: INftTraitsEntity[]) => void
}

type userActions = {
  type: 'editing' | 'notEditing' | 'field'
  field: string
  value: string
}



const NftTrait = (props: INftTraitProps) => {
  const { id, category, name, rate, isEditing, handleRemove, editTraitField, traits } = props

  function editingReducer(state: typeof initialState, action: userActions) {
    switch (action.type) {
      case 'field': {
        const thisTrait = traits ? traits.find((trait) => trait.id === id) : null
        if (thisTrait) thisTrait[action.field as keyof INftTraitsEntity] = action.value
        const updatedTraits = [...traits as INftTraitsEntity[], thisTrait]
        editTraitField && editTraitField(updatedTraits as INftTraitsEntity[])
        return {
          ...state,
          [action.field]: action.value
        }
      }
      case 'editing':
        return {
          ...state
        }
      default:
        break
    }
    return state
  }
  
  const initialState = {
    category: category,
    name: name,
    rate: rate,
    isEditing: isEditing 
  }
  
  const [state, dispatch] = useReducer(editingReducer, initialState)
  const theme = useTheme()
  if (!category || !name || !rate) return <></>;
  else {
    if (state.isEditing || isEditing)
    return (
      <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} whileHover={{ scale: 1.1 }}>
        <S.Wrapper>
            <S.DeleteButton onClick={handleRemove ? (e) => handleRemove(e, id) : undefined} style={{
              transform: "scale(0.8)"
            }}><DeleteIcon fontSize='small'/></S.DeleteButton>
          <Box textAlign={'center'} p={2}>
            <InputBase
              sx={{
                overflow: 'hidden',
                whiteSpace: 'pre',
                width: '100px',
                textOverflow: 'ellipsis',
                backgroundColor: 'transparent',
                borderColor: 'unset',
                fontSize: '12px',
                textAlign: 'center',
                color: theme.palette.primary.main,
                fontFamily: theme.typography.fontFamily
              }}
              inputProps={{ style: { textAlign: 'center', padding: '0' } }}
              value={state.category?.toUpperCase()}
              defaultValue={state.category}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  field: 'category',
                  value: e.currentTarget.value
                })
              }
            />
            <InputBase
              sx={{
                overflow: 'hidden',
                whiteSpace: 'pre',
                width: '100%',
                textOverflow: 'ellipsis',
                backgroundColor: 'transparent',
                borderColor: 'unset',
                fontSize: '20px',
                textAlign: 'center',
                color: theme.palette.common.black,
                fontFamily: theme.typography.fontFamily,
                fontWeight: 'bold'
              }}
              inputProps={{ style: { textAlign: 'center', padding: '0' } }}
              value={state.name?.toUpperCase()}
              defaultValue={state.name}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  field: 'name',
                  value: e.currentTarget.value
                })
              }
            />
            <InputBase
            type='tel'
              sx={{
                overflow: 'hidden',
                whiteSpace: 'pre',
                width: '100%',
                textOverflow: 'ellipsis',
                backgroundColor: 'transparent',
                borderColor: 'unset',
                fontSize: '12px',
                textAlign: 'center',
                color: theme.palette.grey[500],
                fontFamily: theme.typography.fontFamily,
                fontWeight: 'light'
              }}
              endAdornment={<PercentIcon fontSize={'small'}/>}
              inputProps={{ style: { textAlign: 'center', padding: '0', paddingLeft: '12px' } }}
              value={state.rate}
              defaultValue={'rate'}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  field: 'rate',
                  value: e.currentTarget.value
                })
              }
            />
          </Box>
        </S.Wrapper>
        </motion.div>
      )
    }
    return (
      <motion.div  initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} whileHover={{ scale: 1.1 }}>
      <S.Wrapper>
        <Box textAlign={'center'} p={2}>
          <Typography
            sx={{
              overflow: 'hidden',
              whiteSpace: 'pre',
              width: '100%',
              textOverflow: 'ellipsis'
            }}
            color={theme.palette.primary.main}
            fontSize={12}>
            {category.toUpperCase()}
          </Typography>
          <Typography
            sx={{
              overflow: 'hidden',
              whiteSpace: 'pre',
              width: '100%',
              textOverflow: 'ellipsis'
            }}
            fontWeight={'bold'}
            fontSize={20}>
            {name.toUpperCase()}
          </Typography>
          <Typography
            sx={{
              overflow: 'hidden',
              whiteSpace: 'pre',
              width: '100%',
              textOverflow: 'ellipsis'
            }}
            color={theme.palette.grey[500]}
            fontSize={11}>
            {`${rate}% have this trait`.toUpperCase()}
          </Typography>
        </Box>
      </S.Wrapper>
    </motion.div>
  )
}

export default NftTrait
