/**
 * Created by huayu on 2018/3/31.
 */
import {RECEIVE_SELLER} from './mutation-types'

export default {

  [RECEIVE_SELLER] (state, {seller}) {
    state.seller = seller
  }
}
