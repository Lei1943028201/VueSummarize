/**
 * Created by huayu on 2018/3/31.
 */
import axios from 'axios'
let isDebugger = true
const localUrl = {
    jQuerySelectorData: "/api/jQuerySelectorData",
    jQueryOperationMethodData: "/api/jQueryOperationMethodData"
}
const serverUrl = {

}
const url = isDebugger? localUrl: serverUrl
export const RESULT_OK = 200
export function reqJQuerySelectorData() { // 返回是promise对象
    return axios.get(url.jQuerySelectorData)
}
export function reqJQueryOperationMethodData() { // 返回是promise对象
    return axios.get(url.jQueryOperationMethodData)
}