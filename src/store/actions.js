/**
 * Created by huayu on 2018/3/31.
 */
import {
    RESULT_OK,
    reqSeller,
    reqHeaderMenu
} from '../api'

import {
    RECEIVE_SELLER,
    RECEIVE_HEADERMENU
} from './mutation-types'

export default {

    async getHeaderMenu({commit}) {
        // 发送ajax请求, 获取seller数据
        reqHeaderMenu().then(response => {
            //获取返回的数据
            const result = response.data
            if(result.code===RESULT_OK) {
                const headerMenu = result.data
                console.log('headerMenu',headerMenu)
                // 提交mutaion请求
                commit(RECEIVE_HEADERMENU, {headerMenu})
            }
        })
    },
}
