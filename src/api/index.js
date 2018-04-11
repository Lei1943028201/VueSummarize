/**
 * Created by huayu on 2018/3/31.
 */
import axios from 'axios'


export const RESULT_OK = 200

export function reqJQuerySelectorData() { // 返回是promise对象
    return axios.get('/api/jQuerySelectorData')
}
