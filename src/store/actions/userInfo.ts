import {
    UPDATE
} from '@store/actionType/userInfo'

export const update = (info) => {
  return {
    type: UPDATE,
    info
  }
}
