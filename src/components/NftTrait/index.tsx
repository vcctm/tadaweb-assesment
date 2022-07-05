import { Box, InputBase, Typography, useTheme } from '@mui/material'
import PercentIcon from '@mui/icons-material/Percent';
import DeleteIcon from '@mui/icons-material/Delete';
import { useReducer } from 'react'
import * as S from './styles'
import { motion } from "framer-motion"

interface INftTraitProps {
  propertyId: string
  category?: string
  property?: string
  trait?: number | string
  isEditing?: boolean
  handleRemove?: (e: React.MouseEvent<HTMLElement>, propertyId: string) => void
}

type userActions = {
  type: 'editing' | 'notEditing' | 'field'
  field: string
  value: string
}



const NftTrait = (props: INftTraitProps) => {

  function editingReducer(state: typeof initialState, action: userActions) {
    switch (action.type) {
      case 'field': {
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
  
  const { propertyId, category, property, trait, isEditing, handleRemove } = props
  const initialState = {
    category: category,
    property: property,
    trait: trait,
    isEditing: isEditing 
  }
  
  const [state, dispatch] = useReducer(editingReducer, initialState)
  const theme = useTheme()
  if (!category || !property || !trait) return <></>;
  else {
    if (state.isEditing || isEditing)
    return (
      <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} whileHover={{ scale: 1.1 }}>
        <S.Wrapper>
            <S.DeleteButton onClick={handleRemove ? (e) => handleRemove(e, propertyId) : undefined} style={{
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
              value={state.property?.toUpperCase()}
              defaultValue={state.property}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  field: 'property',
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
              value={state.trait}
              defaultValue={'trait'}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  field: 'trait',
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
            {property.toUpperCase()}
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
            {`${trait}% have this trait`.toUpperCase()}
          </Typography>
        </Box>
      </S.Wrapper>
    </motion.div>
  )
}

export default NftTrait
