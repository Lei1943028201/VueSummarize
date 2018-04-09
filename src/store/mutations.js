/**
 * Created by huayu on 2018/3/31.
 */
import {
  RECEIVE_SELLER,
  RECEIVE_HEADERMENU
} from './mutation-types'

export default {

  [RECEIVE_SELLER] (state, {seller}) {
    state.seller = seller
  },
  [RECEIVE_HEADERMENU] (state, {headerMenu}) {
    state.headerMenu = headerMenu
  }
}
