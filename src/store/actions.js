/**
 * Created by huayu on 2018/3/31.
 */
import {
    RESULT_OK,
    reqJQuerySelectorData,
    reqJQueryOperationMethodData,
    reqAJAXResponseStateCodeData
} from '../api'

import {
    RECEIVE_JQUERYSELECTORDATA,
    RECEIVE_JQUERYOPERATIONMETHODDATA,
    RECEIVE_AJAXRESPONSESTATECODEDATA
} from './mutation-types'

export default {
    // 获取jQuery选择器数据
    async getJQuerySelectorData({commit}) {
        // 发送ajax请求, 获取seller数据
        reqJQuerySelectorData().then(response => {
            //获取返回的数据
            const result = response.data
            if(result.code===RESULT_OK) {
                // 提交mutaion请求
                const jQuerySelectorData = result.data
                console.log('jQuerySelectorData', jQuerySelectorData)
                commit(RECEIVE_JQUERYSELECTORDATA, {jQuerySelectorData})
            }
        })
    },
    //获取jQuery操作方法数据
    async getJQueryOperationMethodData({commit}) {
        // 发送ajax请求, 获取seller数据
        reqJQueryOperationMethodData().then(response => {
            //获取返回的数据
            const result = response.data
            if(result.code===RESULT_OK) {
                // 提交mutaion请求
                const jQueryOperationMethodData = result.data
                console.log('jQueryOperationMethodData', jQueryOperationMethodData);
                commit(RECEIVE_JQUERYOPERATIONMETHODDATA, {jQueryOperationMethodData})
            }
        })
    },

    async getAJAXResponseStateCodeData({commit}) {
        // 发送ajax请求, 获取seller数据
        reqAJAXResponseStateCodeData().then(response => {
            //获取返回的数据
            const result = response.data
            if(result.code===RESULT_OK) {
                // 提交mutaion请求
                const AJAXResponseStateCodeData = result.data
                console.log('AJAXResponseStateCodeData', AJAXResponseStateCodeData);
                commit(RECEIVE_AJAXRESPONSESTATECODEDATA, {AJAXResponseStateCodeData})
            }
        })
    },
}
