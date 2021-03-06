/**
 * Created by huayu on 2018/3/31.
 */
import {
    RECEIVE_JQUERYSELECTORDATA,
    RECEIVE_JQUERYOPERATIONMETHODDATA,
    RECEIVE_AJAXRESPONSESTATECODEDATA
} from './mutation-types'

export default {

    [RECEIVE_JQUERYSELECTORDATA] (state, {jQuerySelectorData}) {

        state.jQuerySelectorData = jQuerySelectorData
    },

    [RECEIVE_JQUERYOPERATIONMETHODDATA] (state, {jQueryOperationMethodData}) {

        state.jQueryOperationMethodData = jQueryOperationMethodData
    },

    [RECEIVE_AJAXRESPONSESTATECODEDATA] (state, {AJAXResponseStateCodeData}) {

        state.AJAXResponseStateCodeData = AJAXResponseStateCodeData
    }
}
