import {
  ISLOGIN
} from './action-types'

export const islogin = (data) => {
  return {
    type: 'islogin',
    data: data
  }
}