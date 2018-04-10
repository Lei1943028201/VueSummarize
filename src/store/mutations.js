/**
 * Created by huayu on 2018/3/31.
 */
import {
    RECEIVE_JQUERYSELECTORDATA,
    RECEIVE_HEADERMENU
} from './mutation-types'

export default {

    [RECEIVE_HEADERMENU] (state, {headerMenu}) {
        state.headerMenu = headerMenu
    },
    [RECEIVE_JQUERYSELECTORDATA] (state, {jQuerySelectorData}) {
        state.jQuerySelectorData = jQuerySelectorData
    }
}
