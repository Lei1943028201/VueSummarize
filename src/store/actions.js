/**
 * Created by huayu on 2018/3/31.
 */
import {
    RESULT_OK,
    reqJQuerySelectorData
} from '../api'

import {
    RECEIVE_JQUERYSELECTORDATA
} from './mutation-types'

export default {

    async getJQuerySelectorData({commit}) {
        // 发送ajax请求, 获取seller数据
        reqJQuerySelectorData().then(response => {
            //获取返回的数据
            const result = response.data
            if(result.code===RESULT_OK) {
                // 提交mutaion请求
                const jQuerySelectorData = result.data
                commit(RECEIVE_JQUERYSELECTORDATA, {jQuerySelectorData})
            }
        })
    },
}
