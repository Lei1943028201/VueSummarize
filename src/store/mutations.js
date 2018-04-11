/**
 * Created by huayu on 2018/3/31.
 */
import {
    RECEIVE_JQUERYSELECTORDATA
} from './mutation-types'

export default {

    [RECEIVE_JQUERYSELECTORDATA] (state, {jQuerySelectorData}) {
        console.log(jQuerySelectorData);

        state.jQuerySelectorData = jQuerySelectorData
    }
}
