import {
  ISLOGIN
} from './action-types'
export function reducer(state = 1, action) {
  switch (action.type) {
    case ISLOGIN:
      return action.data
    default:
      return state
  }
}